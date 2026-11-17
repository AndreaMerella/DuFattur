// Checks an EU VAT number against the European Commission's VIES service.
// Deploy: Supabase Dashboard -> Edge Functions -> new function "vies-lookup", paste this file.

const VIES = "https://ec.europa.eu/taxation_customs/vies/rest-api/ms";

function cors(origin: string | null): Record<string, string> {
  return {
    "Access-Control-Allow-Origin": origin ?? "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Vary": "Origin",
  };
}

function json(body: unknown, status: number, origin: string | null): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...cors(origin), "Content-Type": "application/json" },
  });
}

// Member states in VIES, plus XI (Northern Ireland). VIES uses "EL" for Greece.
const VIES_CODES = new Set(["AT","BE","BG","CY","CZ","DE","DK","EE","EL","ES","FI","FR","HR","HU","IE","IT",
  "LT","LU","LV","MT","NL","PL","PT","RO","SE","SI","SK","XI"]);

// Numbers are sent without the country prefix or separators.
export function normalizeVat(raw: string): { cc: string; num: string } | null {
  const v = String(raw || "").toUpperCase().replace(/[\s.\-_/]/g, "");
  const m = v.match(/^([A-Z]{2})([0-9A-Z+*]{2,12})$/);
  if (!m) return null;
  const cc = m[1] === "GR" ? "EL" : m[1];
  if (!VIES_CODES.has(cc)) return null;
  return { cc, num: m[2] };
}

// VIES shows "---" when a member state does not share name or address (Germany, for example).
function clean(s: unknown): string {
  const t = String(s ?? "").trim();
  return t === "---" ? "" : t;
}

export async function handle(req: Request, fetchImpl: typeof fetch, supabaseUrl: string): Promise<Response> {
  const origin = req.headers.get("Origin");
  if (req.method === "OPTIONS") return new Response(null, { status: 204, headers: cors(origin) });
  if (req.method !== "POST") return json({ error: "method_not_allowed" }, 405, origin);

  // Only signed-in DuFattur users may use the lookup.
  const auth = req.headers.get("Authorization") ?? "";
  const apikey = req.headers.get("apikey") ?? "";
  const who = await fetchImpl(`${supabaseUrl}/auth/v1/user`, { headers: { Authorization: auth, apikey } });
  if (!who.ok) return json({ error: "unauthorized" }, 401, origin);

  let body: { vat?: string };
  try { body = await req.json(); } catch { return json({ error: "bad_request" }, 400, origin); }
  const vat = normalizeVat(body.vat ?? "");
  if (!vat) return json({ error: "bad_format" }, 400, origin);

  let res: Response;
  try {
    res = await fetchImpl(`${VIES}/${vat.cc}/vat/${encodeURIComponent(vat.num)}`, {
      headers: { Accept: "application/json" },
      signal: AbortSignal.timeout(12000),
    });
  } catch {
    return json({ error: "vies_unavailable" }, 502, origin);
  }
  if (!res.ok) return json({ error: "vies_unavailable" }, 502, origin);

  const d = await res.json().catch(() => null) as Record<string, unknown> | null;
  if (!d) return json({ error: "vies_unavailable" }, 502, origin);
  // A member-state outage is reported as a userError, not as "invalid".
  const userError = String(d.userError ?? "");
  if (userError && userError !== "VALID" && userError !== "INVALID") {
    return json({ error: "vies_unavailable", detail: userError }, 502, origin);
  }
  const valid = Boolean(d.isValid ?? d.valid);
  return json({
    valid,
    countryCode: vat.cc === "EL" ? "GR" : vat.cc,
    vatNumber: `${vat.cc}${vat.num}`,
    name: valid ? clean(d.name ?? d.traderName) : "",
    address: valid ? clean(d.address ?? d.traderAddress) : "",
    checkedAt: String(d.requestDate ?? new Date().toISOString()),
    reference: String(d.requestIdentifier ?? ""),
  }, 200, origin);
}

declare const Deno: { serve: (h: (r: Request) => Promise<Response>) => void; env: { get(k: string): string | undefined } } | undefined;
if (typeof Deno !== "undefined") {
  Deno.serve((req) => handle(req, fetch, Deno!.env.get("SUPABASE_URL") ?? ""));
}
