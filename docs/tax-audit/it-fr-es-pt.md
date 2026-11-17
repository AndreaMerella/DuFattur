# DuFattur tax-data audit: IT, FR, ES, PT (as of 2026-11-17)

**How this was researched.** This session's network blocked direct page fetches from impots.gouv.fr, boe.es, portaldasfinancas.gov.pt and other domains. Every fact below therefore comes from web-search result extracts (official pages where the search index returned them, otherwise reputable professional sources). Each URL is the page the fact was read from. Where only secondary sources were available, or sources conflicted, the fact is marked **UNVERIFIED** or "(secondary source)". Before shipping changes, re-check the starred items (★) directly against the official text.

**EU-wide context (applies to all four countries)**
- SME scheme reform (Directive 2020/285), in force since 2025-01-01: a national exemption threshold may be at most €85,000. A cross-border SME exemption is available to businesses whose total EU turnover is ≤ €100,000. Source: https://sme-vat-rules.ec.europa.eu/index_en and https://sme-vat-rules.ec.europa.eu/system/files/2024-10/Guide_to_the_SME_scheme.pdf
- ViDA package, adopted on 2025-03-11. Structured e-invoicing and near-real-time digital reporting become mandatory for intra-EU B2B from 2030-07-01, replacing today's recapitulative statements. Since adoption, member states may mandate domestic e-invoicing without needing an EU derogation. Source: https://ec.europa.eu/newsroom/digital/items/877702/ and https://taxation-customs.ec.europa.eu/news/viva-la-vida-2024-11-28_en (the directive number 2025/516 is from memory, not from these extracts)

---

## Italy (IT)

### 1. VAT rates
- Rates are 22% standard, 10% reduced, 5% reduced and 4% "super-reduced", and they are confirmed for 2026. Source: https://temi.camera.it/leg19/temi/19_tl18_iva_imposte_indirette
- No rate change has been found in the 2027 budget bill.
- From 2027-01-01 the new **Testo Unico IVA (D.Lgs. 10/2026)** replaces DPR 633/72 article numbering. The rates move into new tables, and the sources say their values do not change. Legal references printed on invoices (art. 7-ter, art. 21 c.6-bis etc.) will get new numbers. ★ Source: https://www.finanzaefisco.com/testo-unico-iva-2027-dlgs-10-2026-struttura-tabelle-abrogazioni/?print=pdf , https://www.vatupdate.com/2026/04/07/new-vat-code-renumbered-tables-updated-tariffs-and-changes-to-reduced-rates-effective-2027/
- **App:** 22 and 10 are correct. The app is missing 4% and 5% (4% is relevant for some publishing and editorial services; 5% for some social and health services).

### 2. Seller identifiers
- **Partita IVA**: 11 digits, e.g. `12345678901`. In VIES form it is `IT12345678901`.
- **Codice fiscale**: 16 alphanumeric characters for individuals, e.g. `RSSMRA80A01H501U`.
- The XML e-invoice also requires the **Regime fiscale** code: `RF01` for the ordinary regime, `RF19` for forfettario.
- These are standard formats (from general knowledge; no page fetched). The app's labels "P.IVA" and "Codice Fiscale" are correct.

### 3. Small-business scheme: regime forfettario (L. 190/2014, art. 1, commi 54-89)
- **Revenue threshold:** €85,000 in the previous year. Exit is immediate (in the same year) if revenue exceeds €100,000 (rule since 2023, from general knowledge).
- **Employment-income limit:** €35,000, extended for 2026 by L. 199/2025 (Legge di Bilancio 2026), art. 1 c.27. It returns to €30,000 from 2027 unless changed. Source: https://www.fisco7.it/2026/01/legge-di-bilancio-forfettari-le-novita-del-2026/ , https://www.wolterskluwer.com/it-it/expert-insights/legge-di-bilancio-2026-forfettari
- **Tax rates:** 15% substitute tax, or 5% for the first 5 years of a new activity. Source: https://quickfisco.it/?p=35586
- **2027 bill (NOT enacted):** the budget bill approved by the Council of Ministers on 2026-10-28 would raise the forfettario income-tax threshold to €100,000 (immediate exit above €115,000) and cut the employment-income limit to €30,000. The **VAT franchise threshold stays at €85,000**, which would create a "double track". Parliament votes in December. Source: https://www.mysolution.it/fisco/informazioni/news/2026/11/03/regime-forfettario-2027-soglia-a-100.000-euro-e-doppio-binario-con-liva
- The forfettario articles are also being moved into the new Testo Unico imposte sui redditi (D.Lgs. 117/2026). **UNVERIFIED**, same source.
- **Invoice wording (conventional; the law requires a reference to the exemption basis):**
  - "Operazione effettuata ai sensi dell'art. 1, commi da 54 a 89, della Legge n. 190/2014 – operazione senza applicazione dell'IVA" (the exemption itself is comma 58).
  - For professionals, add: "Compenso non soggetto a ritenuta d'acconto ai sensi dell'art. 1, comma 67, della Legge n. 190/2014".
  - Source: https://flextax.it/la-dicitura-per-la-non-applicazione-delliva-e-della-ritenuta-dacconto/ , https://www.fattureincloud.it/guida-regime-forfettario/esempio-fattura/ (secondary sources)
- **Marca da bollo:** €2 is due on invoices over €77.47 that carry no VAT. This covers forfettario invoices and out-of-scope (art. 7-ter) invoices.
  - Conventional wording: "Imposta di bollo da 2 euro assolta in modo virtuale ai sensi del DM 17/06/2014".
  - On e-invoices the bollo is flagged in the XML field `BolloVirtuale` and paid quarterly via F24 (codici tributo 2521 etc.).
  - Source: https://www.pmi.it/professioni/regole-e-compensi/492391/fattura-regime-forfettario.html (secondary source)
- **Cross-border EU SME franchise:** D.Lgs. 180/2024 added Titolo V-ter (art. 70-terdecies ss.) to DPR 633/72, in force since 2025-01-01. Source: https://www.fiscoetasse.com/new-rassegna-stampa/1221-regime-transfrontaliero-di-franchigia-il-via-dal-1-gennaio.html
- **Other common invoice lines:**
  - "Rivalsa INPS 4%" for professionals in the Gestione Separata (art. 1 c.212 L. 662/1996).
  - Or the professional fund's 2-5% "contributo integrativo".
  - From general knowledge; not verified this session.
- **App:** forfettario is not supported. This is the most common regime for Italian freelancers, so it is a major gap.

### 4. Ritenuta d'acconto
- **Rate and basis:** 20% on fees for "lavoro autonomo" (professional services), under art. 25 DPR 600/73.
  - It applies only when the client is a **sostituto d'imposta**: a business, a professional in the ordinary regime, or an entity or public body.
  - It does **not** apply to private consumers, foreign clients, or clients who are themselves forfettari.
  - The tax base is the fee net of the INPS 4% rivalsa; the cassa contributo integrativo is also excluded.
  - Rate and basis are from general knowledge; consistent with https://miolegale.it/testi-unici/versamenti-riscossione/art-38/
- **Forfettari:** they are **not subject** to ritenuta (art. 1 c.67 L. 190/2014) and must print the exemption line given in section 3. Source: https://flextax.it/la-dicitura-per-la-non-applicazione-delliva-e-della-ritenuta-dacconto/
- **App wording:** "Compenso soggetto a ritenuta d'acconto del 20% ai sensi dell'art. 25 DPR 600/73." This is correct for 2026.
- **★ From 2027-01-01:** the Testo Unico versamenti e riscossione (D.Lgs. 33/2025) applies, with its start date moved to 2027 by D.L. 200/2025 (converted by L. 26/2026). Art. 25 DPR 600/73 becomes **art. 38 D.Lgs. 33/2025**. Proposed 2027 wording: "… ai sensi dell'art. 38 del D.Lgs. 24 marzo 2025, n. 33". Source: https://www.informazionefiscale.it/versamenti-riscossione-testo-unico-decreto-legislativo-33-2025 , https://miolegale.it/testi-unici/versamenti-riscossione/art-38/
- A new 0.5% (2028) and 1% (2029) withholding on business-income payments was legislated (LB 2026 commi 112-116). It concerns imprese, not professionals. **UNVERIFIED** detail. Source: https://leggeinchiaro.it/lb-2026-commi-112-116-ritenuta-servizi-imprese-cpb/

### 5. Cross-border B2B services (generic, art. 7-ter DPR 633/72)
- **Invoice wording:** "Inversione contabile" (art. 21 c.6-bis lett. a DPR 633/72). Optionally cite "art. 7-ter DPR 633/72" or "art. 196 Direttiva 2006/112/CE".
- The client's EU VAT number is required and should be checked on VIES.
- In the XML, use Natura `N2.1` and codice destinatario `XXXXXXX`.
- Source: https://www.fiscoetasse.com/approfondimenti/13778-prestazioni-di-servizi-rese-a-clienti-comunitari-ed-extra-ue-trattamento-ai-fini-iva.html , https://fiscomania.com/esterometro-forfettari/
- Forfettari: the same rules apply. The cross-border invoice must also go through SdI (the former "esterometro" data). Source: https://fiscomania.com/esterometro-forfettari/
- **Recapitulative statement:** the INTRA 1-quater list of services rendered is filed monthly, or quarterly below €50,000 per quarter. The threshold and frequency are **UNVERIFIED** this session (from general knowledge; sources conflict on whether forfettari must file).

### 6. E-invoicing
- **Domestic sellers:** e-invoicing via **SdI** has been mandatory for domestic B2B and B2C since 2019. Forfettari have been included since 2024-01-01 (art. 18 D.L. 36/2022).
- **A PDF is not a valid domestic invoice**, today or in 2027. The app's "PROFORMA" label for Italian sellers is the correct approach. Source: https://www.leggioggi.it/forfettari-obbligo-fattura-elettronica-per-tutti-dal-2024/
- **Invoices to foreign clients:** the Italian seller may give the client a PDF, but the data must still be sent to SdI (XML with `XXXXXXX`). The PROFORMA label is still sensible, because the legal document is the XML.
- **Foreign (e.g. Dutch) freelancer invoicing an Italian business:**
  - The PDF is valid. Non-established suppliers are outside SdI.
  - The Italian client self-assesses and sends an integrating document (TD17) via SdI.
  - From general knowledge, consistent with https://www.ecnews.it/fiscale/fisco-e-patrimonio/dichiarazioni/acquisti-di-servizi-dallestero-dal-file-xml-alla-dichiarazione-iva/

### 7. VAT returns (ordinary regime; forfettari file no periodic VAT returns)
- **Periodic settlement:** monthly by the 16th of the following month. Quarterly is optional below €500k (services) or €800k (other) turnover, with 1% interest added; quarterly payment is due on the 16th of the second month after the quarter. Source: https://tot.money/blog/liquidazione-iva-trimestrale-2026 (secondary source; thresholds **UNVERIFIED** against AdE)
- **LIPE** (periodic settlement communication): quarterly, by the end of the second month after the quarter. Source: https://www.informazionefiscale.it/scadenze-lipe-istruzioni-liquidazioni-iva
- **Annual return:** filed 1 Feb – 30 Apr; balance due 16 March (from general knowledge).

---

## France (FR)

### 1. VAT rates
- Rates are 20% standard, 10% intermediate, 5.5% reduced and 2.1% super-reduced (from general knowledge; no change found for 2027).
- **★ From 2027-01-01** the VAT articles of the CGI move into the **CIBS** (Code des impositions sur les biens et services, livre II), and article numbers change. The move was originally set for 2026-09-01 by Ordonnance 2025-1247 and postponed by **Ordonnance 2026-671 of 27 July 2026**. Source: https://www.fiscal-requirements.com/news/5918-france-postpones-vat-recodification-to-january-2027 , https://www.vatupdate.com/2026/10/02/france-delays-vat-recodification-into-cibs-until-2027-2/
- **App:** 20 is correct. 5.5 is correct but incomplete: the 10% rate (many services such as transport, restaurants and renovation) is missing.

### 2. Seller identifiers
- **SIREN** (9 digits, e.g. `123 456 789`) is required on invoices. **SIRET** (14 digits = SIREN + 5-digit NIC, e.g. `123 456 789 00012`) is commonly shown. Registration (RCS/RNE) may also need to be mentioned.
- **Numéro de TVA intracommunautaire**: `FR` + 2-character key + SIREN, e.g. `FR12123456789`. It is not required for franchisés that have none, but a franchisé supplying B2B services to EU clients must obtain one.
- The individual entrepreneur must print **"EI"** or **"Entrepreneur individuel"** next to the name (loi 2022-172).
- B2B invoices must carry late-payment penalties and the €40 indemnité forfaitaire (art. L441-9 C. com.).
- These points are from general knowledge; general rules: https://www.economie.gouv.fr/entreprises/gerer-son-entreprise-au-quotidien/gerer-sa-comptabilite-et-ses-demarches/mentions-obligatoires-dune-facture-tout-savoir
- **New mandatory invoice mentions** (e-invoicing reform), from 2026-09-01 for large companies and ETI and from **2027-09-01 for PME and micro-entreprises**:
  - the client's SIREN;
  - the delivery address if it differs;
  - the operation category (goods / services / both);
  - "Option pour le paiement de la taxe d'après les débits" where opted.
  - Source: https://www.economie.gouv.fr/tout-savoir-sur-la-facturation-electronique-pour-les-entreprises , https://www.impots.gouv.fr/facturation-electronique-donnees-de-facture

### 3. Franchise en base de TVA (art. 293 B CGI → art. L. 233-3 CIBS from 2027)
- **Thresholds for 2026 (unchanged).** The 2025 plan for a single €25,000 threshold was repealed. The 2026 budget bill's proposal of €37,500 for all (art. 25 PLF 2026) was deleted by the deputies.

  | Activity | Previous-year threshold | Current-year threshold (immediate exit above) |
  |---|---|---|
  | Goods, on-site catering, accommodation | €85,000 | €93,500 |
  | Other services | €37,500 | €41,250 |
  | Lawyers, authors, artists (specific activities) | €50,000 | €55,000 |
  | Lawyers, authors, artists (other activities) | €35,000 | €38,500 |

  Source: https://www.economie.gouv.fr/entreprises/gerer-sa-fiscalite-et-ses-impots/autres-impots-et-taxes/entreprises-pouvez-vous-beneficier-de-la-franchise-de-tva , https://entreprendre.service-public.gouv.fr/vosdroits/F21746 , https://bofip.impots.gouv.fr/bofip/849-PGP.html/identifiant=BOI-TVA-DECLA-40-10-10-20260701
- **Invoice wording:**
  - **Until 2026-12-31:** "TVA non applicable, art. 293 B du CGI". This is required by art. 293 E II CGI. The app's text is correct for now.
  - **From 2027-01-01:** "**TVA non applicable, article L. 233-3 du CIBS**". Source: https://www.impots.gouv.fr/professionnel/questions/en-tant-que-micro-entrepreneur-puis-je-etre-redevable-de-la-tva , https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000054524584 , https://legifiscal.fr/actualites-fiscales/4613-mention-facture-changement-article-exoneration-tva-autoentrepreneurs.html
  - Beware of the "L. 223-3" typo that circulates online. Source: https://synapx.fr/blog/mention-tva-franchise-cibs-facture/
  - A transitional tolerance lets the old wording be used until 2027-12-31 or 2028-06-30. Sources conflict, so this is **UNVERIFIED**.
- **Cross-border EU SME franchise:** a business established in another member state cites art. 293 B bis (equivalent CIBS article **UNVERIFIED**). Source: https://www.maxcompta.com/blogs/actualites/mention-tva-293-b-cgi-cibs-facture-franchise
- A franchisé that exceeds the current-year threshold must charge VAT from the day the threshold is exceeded. Source: BOFiP link above.

### 4. Income-tax withholding
- None. French micro-entrepreneurs have no client-side withholding on invoices. They may opt for "versement libératoire", which is paid by the entrepreneur and is not shown on invoices (from general knowledge).

### 5. Cross-border B2B services
- **Invoice wording:** "**Autoliquidation**" (art. 242 nonies A, I-13° ann. II CGI). Optionally cite art. 196 Directive 2006/112/CE or art. 283-2 CGI.
- Both the supplier's and the customer's VAT numbers are mandatory.
- Source: https://bofip.impots.gouv.fr/bofip/1531-PGP.html/identifiant=BOI-TVA-DECLA-30-20-20-30-20190925
- **Recapitulative:** the Déclaration Européenne de Services (DES), filed monthly with customs by the 10th working day of the following month (from general knowledge; **UNVERIFIED** this session). It also applies to franchisés supplying EU B2B services.

### 6. E-invoicing reform
- **Since 2026-09-01** all French VAT-registered businesses, micro-entreprises included, must be able to **receive** e-invoices via a "plateforme agréée". Large companies and ETI must also **issue** e-invoices and e-report. Source: https://entreprendre.service-public.gouv.fr/actualites/A18953 , https://www.economie.gouv.fr/actualites/facturation-electronique-entre-entreprises-coup-denvoi-de-la-reforme
- No penalties apply for implementation difficulties until the end of 2026. Source: https://www.economie.gouv.fr/actualites/facturation-electronique-les-entreprises-accompagnees-tout-au-long-du-deploiement
- **From 2027-09-01** PME and micro-entreprises (including franchise en base) must **issue** domestic B2B e-invoices through a plateforme agréée and **e-report** B2C and international transactions. Source: https://www.impots.gouv.fr/sites/default/files/media/1_metier/2_professionnel/EV/2_gestion/290_facturation_electronique/faq---fe_je-decouvre-la-facturation-electronique.pdf
- **Status of a PDF:**
  - **Domestic B2B, French micro-entrepreneur:** a valid invoice today and until 2027-08-31. From 2027-09-01 it is not valid; the invoice must be structured (Factur-X/UBL/CII) and sent through a PA.
  - **B2C:** a PDF stays valid, but transaction data must be e-reported from 2027-09-01.
- **Foreign (e.g. Dutch) seller invoicing a French client:** a PDF is valid, because non-established suppliers are outside the e-invoicing mandate. The French buyer handles e-reporting of the purchase. Source: https://www.impots.gouv.fr/international-professionnel/le-reporting-pour-les-entreprises-etrangeres-sans-etablissement-stable

### 7. VAT returns
- **Franchise en base:** no VAT return (except intra-EU purchases, if any).
- **Régime réel simplifié:** annual CA12 (due early May) plus two instalments (July and December).
- **Réel normal:** monthly CA3 (quarterly if VAT is ≤ €4,000 a year).
- These are from general knowledge. Simplified-regime thresholds changed on 2026-07-01 per BOFiP (**UNVERIFIED** values). Source: https://bofip.impots.gouv.fr/bofip/9368-PGP.html/identifiant=BOI-BAREME-000036-20260701 , https://entreprendre.service-public.gouv.fr/vosdroits/F23566

---

## Spain (ES)

### 1. VAT rates
- Rates are 21% general, 10% reduced and 4% super-reduced (arts. 90-91 LIVA). A temporary 10% rate on some energy products expired on 2026-06-30 (RDL 7/2026). No change is legislated for 2027. Source: https://sede.agenciatributaria.gob.es/Sede/todas-noticias/2026/marzo/23/medidas-materia-tributacion.html , https://www.conversoriaecnae.es/iva/tipos-de-iva
- **App:** 21 and 10 are correct. The app is missing 4%.

### 2. Seller identifiers
- **NIF**:
  - individuals: DNI number + check letter, e.g. `12345678Z`;
  - foreign residents: NIE, e.g. `X1234567L`;
  - entities: letter + 8 characters, e.g. `B12345678`.
- **"CIF" is obsolete** since 2008: RD 1065/2007 unified everything under NIF.
- For intra-EU operations, use **NIF-IVA** `ES` + NIF, e.g. `ES12345678Z`. The seller must be registered in the ROI (Registro de Operadores Intracomunitarios).
- From general knowledge.
- The invoice must show the issuer's and recipient's name, NIF and address (art. 6 RD 1619/2012, Reglamento de facturación).

### 3. Small-business scheme
- **There is no VAT exemption for small businesses in Spain.** Spain has **not transposed Directive 2020/285**.
  - The Commission referred Spain to the CJEU in March 2026.
  - A transposition amendment (to the DAC8 bill) was pending in parliament. **UNVERIFIED** whether it has been adopted.
  - Source: https://teamsystem.es/magazine/regimen-franquicia-iva/ , https://www.fieldfisher.com/es-es/locations/espana/actualidad/comision-europea-demanda-espana-iva-pymes
- The existing special regimes are recargo de equivalencia (retail) and módulos / régimen simplificado (limited activities). Neither applies to typical professionals.
- **App:** "none" is correct for now. This is worth watching: the franchise could arrive in 2027.

### 4. IRPF retención
- **Rates:** 15% general on professional income (art. 101.5 LIRPF, art. 95.1 RIRPF). **7%** applies in the year the activity starts and the next two, if the professional had no professional activity in the prior year; the professional must tell the client in writing. Source: https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/folleto-actividades-economicas/7-otras-obligaciones-fiscales-retenciones/7_1-cuadro-relacion-tipos-retencion-porcentaje.html , https://www.boe.es/buscar/doc.php?id=BOE-A-2015-7770
- **When it applies:** only when the payer is an obligated withholder: a business, professional or entity established in Spain (art. 76 RIRPF). It does **not** apply to private consumers or foreign clients, so in effect only to domestic B2B.
- **Invoice wording (conventional):**
  - a line "Retención IRPF (15%): –X €" deducted from the total after VAT;
  - or with 7%: "Retención IRPF 7% (inicio de actividad, art. 95.1 RIRPF)".
- **App:** IRPF is not supported. This is a **major gap**: almost every invoice from a Spanish autónomo profesional to a Spanish business carries a 15% or 7% retención.

### 5. Cross-border B2B services
- **Invoice wording:** "**Inversión del sujeto pasivo**" (art. 6.1.m RD 1619/2012). The place of supply is the customer's country (art. 69 LIVA).
- The customer's VAT number is required.
- From general knowledge (boe.es could not be fetched).
- **Recapitulative:** Modelo 349, quarterly (monthly if over €50k per quarter), by the 20th of the month after the period (30 January for Q4). **UNVERIFIED** detail.

### 6. E-invoicing and Verifactu
- **Today:** a PDF is a valid invoice for B2B and B2C (a simplified invoice is possible for B2C).
- **Verifactu** (RD 1007/2023, billing-software requirements), current legal dates under RDL 15/2025:
  - companies (IS): 2027-01-01;
  - **autónomos: 2027-07-01**.
  - From then, any invoicing software a Spanish seller uses must be a compliant SIF: hash chaining, QR code, "VERI*FACTU" legend where applicable. **DuFattur would itself have to comply**, or Spanish sellers would have to use the AEAT's free app.
- **Announced postponement to October 2028:** Hacienda announced it on 2026-10-05. A Royal Decree-law was reportedly approved by the Council of Ministers, but its publication in the BOE is **UNVERIFIED** as of today. Source: https://getrenn.com/es/blog/verifactu-aplazado , https://sovos.com/regulatory-updates/vat/spain-further-postponement-of-verifactu-deadlines-announced/
- Basque Country and Navarra have TicketBAI instead.
- **Mandatory B2B e-invoicing** (Ley 18/2022 "Crea y Crece"): RD 238/2026 was published 2026-03-31. Orden HAC/1028/2026 (public e-invoicing solution) was published 2026-10-05 and has been in force since 2026-10-06, which starts the clock:
  - businesses over €8M turnover: **2026-10-06 + 12 months = 2027-10-06**;
  - everyone else, **including autónomos: 2028-10-06**.
  - B2C and simplified invoices are excluded.
  - Source: https://www.boe.es/eli/es/rd/2026/03/25/238/con , https://cms.law/en/esp/publication/factura-electronica-b2b-arranca-la-cuenta-atras-y-veri-factu-se-aplaza-a-2028 , https://sede.agenciatributaria.gob.es/Sede/eu_es/iva/factura-electronica/calendario-implantacion.html
- **Consequence:** a PDF from a Spanish autónomo stays valid for B2B in 2027, subject to the Verifactu software requirement from July 2027 unless postponed.
- **Foreign (e.g. Dutch) seller invoicing a Spanish client:** a PDF is valid; both regimes apply only to sellers established in Spain. The client self-assesses.

### 7. VAT returns
- **Modelo 303:** quarterly, by 20 April, 20 July and 20 October, and 30 January for Q4.
- **Modelo 390:** annual summary, by 30 January.
- **Modelo 130** (quarterly income-tax instalment) is not required if at least 70% of income was subject to retención.
- From general knowledge; AEAT pages could not be fetched.

---

## Portugal (PT)

### 1. VAT rates (mainland)
- Rates are **23% standard, 13% intermediate and 6% reduced**. Madeira and Azores have lower rates: 22/12/5 and 16/9/4.
- OE2026 (Lei 73-A/2025) moved some items between rates (e.g. olive-oil production to 6%) but did not change the rates themselves.
- No rate change was found in the OE2027 proposal.
- Source: https://www.pwc.pt/pt/pwcinforfisco/orcamentoestado/impostos-indiretos.html , https://www.crowe.com/pt/insights/orcamento-do-estado-para-2026
- **App:** 23 and 6 are correct. The app is missing 13%.

### 2. Seller identifiers
- **NIF** (Número de Identificação Fiscal): 9 digits, e.g. `123456789`. The VAT ID is `PT123456789`.
- Every invoice must also carry the **ATCUD** (series validation code + sequence, e.g. `ATCUD:CSDF7T5H-1`) and the **QR code** (Portaria 195/2020). They must be issued from **AT-certified software or the Portal das Finanças**.
- From general knowledge (portaldasfinancas.gov.pt could not be fetched). For sole traders the issuing rules are in DL 28/2019, art. 4. Source: https://www.vendus.pt/blog/questoes-frequentes-53-civa/ (secondary source)

### 3. Regime especial de isenção (art. 53.º CIVA)
- **Threshold:** €15,000 turnover (up from €14,500 for 2024). DL 35/2025 aligned the regime with the EU SME directive: immediate exit once turnover passes €18,750 (125%), with a change declaration due within 15 working days. Source: https://occ.pt/sites/default/files/public/2025-04/EulaliaP_VE4abril2025.pdf , https://www.cgd.pt/Site/Saldo-Positivo/leis-e-impostos/Pages/isencao-iva-recibos-verdes.aspx
- **Invoice wording:** "**IVA – regime de isenção**", which is required by art. 57.º CIVA. The art. 53.º reference is commonly added, giving "IVA - regime de isenção [art. 53.º do CIVA]".
- In SAF-T and on the Portal the **exemption code is M10** (official table V4.0, 18-06-2026). Source: https://info.portaldasfinancas.gov.pt/pt/apoio_ao_contribuinte/Negocios/Faturacao/Regras_mecanismos_comunicacao/e_Fatura/e_Fatura_Comunicacao_elementos_docs_faturacao_2022_seguintes/Documents/Tabela_Codigos_Motivo_Isencao.pdf , https://occ.pt/en/node/2253723
- **App:** art. 53 is not supported. Most low-income PT freelancers use it.

### 4. IRS retenção na fonte (category B)
- **Rate:** **23%** for professional activities in the art. 151.º CIRS table (art. 101.º n.º1 b), reduced from 25% by OE2025, Lei 45-A/2024). It was kept in 2026. Source: https://occ.pt/sites/default/files/public/2025-02/VE_7fevAnaAlves.pdf , https://www.cgd.pt/Site/Saldo-Positivo/leis-e-impostos/Pages/novidades-IRS.aspx
- Other category B rates (e.g. 11.5% and 16.5% for other cases) are **UNVERIFIED**.
- **When it applies:** only when the payer is an entity with (or required to have) contabilidade organizada, i.e. businesses and professionals in organised accounting. It does not apply to private individuals or foreign clients. Source: https://www.deco.proteste.pt/dinheiro/impostos/dicas/retencao-fonte-recibos-verdes
- **Optional dispensa** (art. 101.º-B CIRS): applies if expected annual category B income is **< €15,000** (commissions excluded). Mandatory invoice wording: "**Sem retenção, nos termos do n.º 1 do artigo 101.º-B do Código do IRS**". Source: https://info.portaldasfinancas.gov.pt/pt/informacao_fiscal/informacoes_vinculativas/rendimento/cirs/Documents/PIV_26928.pdf
- **App:** IRS withholding is not supported. This is a major gap.

### 5. Cross-border B2B services
- **Invoice wording:** "**IVA – autoliquidação**" (place of supply per art. 6.º n.º6 a) CIVA; SAF-T code M40). **UNVERIFIED** code (from general knowledge).
- The customer's VAT number is required.
- **Recapitulative:** Declaração recapitulativa by the 20th of the month after the period (monthly or quarterly, matching the VAT return frequency). **UNVERIFIED**.
- Under DL 35/2025, art. 53 sellers that supply intra-EU B2B services must still register for VIES and file the recapitulativa. **UNVERIFIED**.

### 6. E-invoicing and certified software
- **PT-established sellers:**
  - Invoices must be issued via certified software or the Portal das Finanças, with ATCUD and QR code. Very low-turnover sellers have only limited alternatives, such as tipografia-printed books.
  - **A PDF generated by non-certified software such as DuFattur is therefore not a valid invoice in Portugal**, for B2B or B2C, today or in 2027.
  - In practice, freelancers issue a "fatura-recibo" on the Portal das Finanças.
- **Unsigned PDFs as "electronic invoices":** accepted until **2026-12-31** (Lei 73-A/2025). OE2027 proposes extending this to 2027-12-31; not yet enacted (**UNVERIFIED** final status). After that, a qualified e-signature or structured CIUS-PT is required. Source: https://lookuptax.com/tax-changes/portugal/oe2027-pdf-invoices-accepted-2027 , https://invoicexpress.com/blog/assinatura-digital-nas-faturas-adiada-para-2027/
- **Foreign (e.g. Dutch) seller not registered in PT, invoicing a PT business:** a PDF is valid; the certification rules apply to PT-established or registered taxpayers. The PT client self-assesses.

### 7. VAT returns
- **Art. 53 sellers:** no periodic VAT return.
- **Normal regime:** quarterly if previous-year turnover is < €650,000 (monthly otherwise). The return is due by the **20th of the second month after the quarter** and payment by the **25th** of that month (e.g. Q3 2026: return by 20 Nov, payment by 25 Nov). Source: https://www.comparaja.pt/mercado-trabalho/noticias/prazos-fiscais-novembro-2026-trabalhadores-independentes , https://www.vendus.pt/blog/qual-o-calendario-fiscal-dos-trabalhadores-independentes/

---

## Corrections to the app

**Italy**
1. **Reduced rates:** `reduced: 10` is correct but incomplete. Add 5% and 4%.
2. **Ritenuta legal reference:** "ai sensi dell'art. 25 DPR 600/73" is correct for invoices dated up to 2026-12-31. From 2027-01-01 switch to "ai sensi dell'art. 38 del D.Lgs. n. 33/2025" (★ verify the final text). Also apply the ritenuta only when the client is an Italian sostituto d'imposta. Never apply it when the seller is a forfettario, or to consumers or foreign clients.
3. **Regime forfettario:** currently unsupported. Add it:
   - €85k threshold, €100k immediate exit; 2027 may change, pending the budget law;
   - no VAT line;
   - wording "Operazione effettuata ai sensi dell'art. 1, commi da 54 a 89, della Legge n. 190/2014";
   - "Compenso non soggetto a ritenuta d'acconto ai sensi dell'art. 1, comma 67, L. 190/2014";
   - automatic €2 bollo line when the total exceeds €77.47;
   - optional "Rivalsa INPS 4%".
4. **Cross-border wording:** add "Inversione contabile – art. 7-ter DPR 633/72" for EU B2B services. Note the 2027 renumbering under the TU IVA (D.Lgs. 10/2026).
5. **PROFORMA label:** correct, keep it. It should also apply to Italian sellers' invoices to foreign clients, which must still be reported via SdI.

**France**

6. **Reduced rates:** `reduced: 5.5` is incomplete. Add 10% (intermediate) and 2.1%.
7. **Franchise mention:** "TVA non applicable, art. 293 B du CGI" is correct until 2026-12-31. From 2027-01-01 use "TVA non applicable, article L. 233-3 du CIBS". The date logic should follow the invoice date.
8. **Identifier labels:** "SIRET" is acceptable, but SIREN is the legally required identifier and is derivable from SIRET. Add an "EI" / "Entrepreneur individuel" suffix, and B2B late-penalty + €40 indemnity text.
9. **Cross-border wording:** add "Autoliquidation" with the customer's VAT number.
10. **E-invoicing deadline:** warn French sellers that domestic B2B PDF invoices stop being valid on 2027-09-01, when they must issue through a plateforme agréée. From 2027-09-01 (PME/micro) the new mentions also apply: client SIREN, operation category, delivery address, and the "débits" option.

**Spain**

11. **Reduced rates:** `reduced: 10` is incomplete. Add 4%.
12. **Identifier label:** "NIF/CIF" → "NIF" ("CIF" has been obsolete since 2008). Add "NIF-IVA (ESxxxxxxxxx)" for intra-EU.
13. **IRPF retención:** currently unsupported. Add 15% / 7% for domestic B2B clients only, deducted after VAT.
14. **Cross-border wording:** add "Inversión del sujeto pasivo".
15. **Verifactu warning:** add a warning for Spanish sellers that invoicing software must comply with Verifactu from 2027-07-01 for autónomos (possible postponement to October 2028, unconfirmed). Domestic B2B e-invoicing becomes mandatory on 2028-10-06 for autónomos.

**Portugal**

16. **Reduced rates:** `reduced: 6` is incomplete. Add 13% (intermediate). Rates are mainland only.
17. **Art. 53 exemption:** currently unsupported. Add it:
    - €15,000 threshold, exit above €18,750;
    - wording "IVA – regime de isenção (art. 53.º do CIVA)", code M10.
18. **IRS withholding:** currently unsupported. Add 23% for art. 151 professions when the client has organised accounting, plus the optional dispensa text "Sem retenção, nos termos do n.º 1 do artigo 101.º-B do Código do IRS".
19. **Cross-border wording:** add "IVA – autoliquidação".
20. **Critical:** for PT-established sellers, DuFattur's PDF is not a legally valid invoice, because it does not come from certified software and has no ATCUD or QR code. The app should label the PDF as non-fiscal (e.g. "Documento sem validade fiscal / proforma") and tell users to issue the legal fatura(-recibo) on the Portal das Finanças. Alternatively, the app would need AT certification.
