# Supabase Edge Functions

Server-side helpers for DuFattur. The web app runs without them; each feature
explains in the UI when its function has not been deployed yet.

## vies-lookup

Checks a client's EU VAT number with the European Commission's VIES service and
returns validity, company name, address and the VIES request reference (kept on
the invoice as evidence for reverse charge). Only signed-in users can call it.

Deploy from the Supabase dashboard (Edge Functions → deploy a new function, name
it `vies-lookup`, paste `vies-lookup/index.ts`) or with the CLI:

```sh
supabase functions deploy vies-lookup --project-ref <your-project-ref>
```

Keep JWT verification on. No secrets are needed.

Tests: `node --experimental-strip-types` against `handle()` with a mocked
`fetch` (VIES responses, outages, auth, format checks).
