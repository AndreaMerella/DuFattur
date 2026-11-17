# DuFattur tax-data audit: IE, PL, SE, GB, CH, US, CA, AU

Audit date: 2026-11-17. Research only, no code changed.

**Method and limits:** This session could not fetch pages directly. WebFetch failed with DNS errors for revenue.ie, skatteverket.se, gov.uk and estv.admin.ch, because those hosts are not on the session's network allowlist. Every fact below comes from web-search results, restricted to official domains where possible. The URLs are the pages those results named. Where only secondary sources were found, the entry says so. "UNVERIFIED" means I found no reliable source and the text is my best understanding. Before shipping, someone should open each official URL and check it.

---

## IE: Ireland

### 1. Rates
- Standard 23%. Reduced rates are 13.5% and **9%**, plus 0% (zero rate) and 4.8% (livestock / farmer flat-rate addition). Source: https://www.revenue.ie/en/vat/vat-rates/search-vat-rates/current-vat-rates.aspx (official page not fetched). Secondary sources: https://taxsummaries.pwc.com/ireland/corporate/other-taxes and https://www.ibec.ie/sfa/news-insights-and-events/insights/2026/07/14/vat-rates-in-ireland-2026---what-changed-from-1-july
- Restaurant and catering services and hairdressing moved to 9% on 1 July 2026 (Budget 2026). Hotel accommodation stays at 13.5%. Source: https://www.ibec.ie/sfa/news-insights-and-events/insights/2026/07/14/vat-rates-in-ireland-2026---what-changed-from-1-july
- 2027: Budget 2027 (6 Oct 2026) made **no broad rate change**. It has targeted measures: livestock respiratory vaccines go from 23% to 9%, and the flat-rate farmer addition goes from 4.5% to 4.8% from 2027. These still have to be legislated in Finance Bill 2026. Sources: https://kpmg.com/ie/en/insights/tax/budget-2027/indirect-tax.html and https://www.forvismazars.com/ie/en/insights/news-opinions/indirect-tax-budget-2027
- Note: secondary sources disagree about whether the flat-rate addition was 4.5% or 4.8% before 2027. This is irrelevant to freelancers.
- **App impact:** "reduced 13.5" is incomplete. The 9% rate also exists and is used by hospitality, hairdressing and some others. Freelancers in professional services almost always charge 23%.

### 2. Seller identifiers on invoices
- A VAT invoice must show the supplier's **VAT registration number**, together with the date, a sequential number, both parties' names and addresses, the date of supply and the VAT broken down by rate. Source: https://www.revenue.ie/en/vat/vat-records-invoices-credit-notes/invoices/information-required-vat-invoice.aspx
- VAT number format is "IE" + 7 digits + 1 or 2 letters, for example IE1234567T or IE1234567AB. Source: https://www.revenue.ie/en/customs/documents/vies/guidance-notes-for-vies-large-filers.pdf. The app example IE1234567T is valid.
- "Tax Reference Number" (TRN): for a sole trader this is the same as their **PPSN**. Source: https://www.revenue.ie/en/starting-a-business/registering-for-tax/what-is-a-tax-registration-number.aspx. Invoices **do not require** it, and it is personal data, so the app should not put it on invoices by default. A professional-services provider gives its tax reference to "accountable persons" such as public bodies for PSWT, but on the PSWT form, not as an invoice field. Source: https://www.revenue.ie/en/self-assessment-and-self-employment/pswt/information-for-providers-of-professional-services.aspx

### 3. Small-business exemption
- **The app's claim "no small-business regime" is wrong.** A business does not have to register below these thresholds: **€42,500** for services and **€85,000** for goods, both effective 1 Jan 2025. Voluntary registration is allowed. Source: https://www.revenue.ie/en/vat/vat-registration/who-should-register-for-vat/persons-required-register-goods-services-abroad.aspx
- Since 2025 Ireland also runs the EU VAT SME Scheme, with a domestic layer and the cross-border "EX" scheme capped at €100,000 EU-wide turnover. Sources: https://www.revenue.ie/en/vat/vat-registration/eu-vat-sme-scheme/index.aspx and https://sme-vat-rules.ec.europa.eu/sme-scheme/cross-border-sme-scheme_en
- Invoice wording for a non-registered trader: UNVERIFIED. I found no prescribed wording. In practice the invoice shows no VAT and no VAT number.

### 4. Cross-border B2B services (intra-EU)
- Get the customer's VAT number and check it on VIES. Put the customer's VAT number on the invoice with the notation **"reverse charge applies"**, and show no VAT. Sources: https://www.revenue.ie/en/vat/vat-on-services/when-is-vat-charged-on-services/vat-obligations-of-Irish-traders-supplying-services-to-business-customers-abroad.aspx and https://www.revenue.ie/en/vat/vat-records-invoices-credit-notes/invoices/information-required-vat-invoice.aspx
- These supplies also have to be reported in the VIES return. Source: https://www.revenue.ie/en/tax-professionals/tdm/value-added-tax/vat-information-exchange-system-VIES/vies-traders-manual.pdf

### 5. E-invoicing
- Not mandatory today or in 2027, so PDF invoices remain valid. Revenue's VAT Modernisation roadmap:
  - **Nov 2028:** large corporates issue domestic B2B e-invoices, and all businesses must be able to receive them.
  - **Nov 2029:** the obligation extends to further cohorts, described as businesses that trade intra-EU.
  - **July 2030:** alignment with ViDA.
  - These dates are an announced plan, not yet enacted law.
  - Sources: https://www.revenue.ie/en/corporate/consultations-and-submissions/modernising-vat/einvoicing/introduction/vat-modernisation/index.aspx and https://www.bdo.ie/en-gb/insights/2025/e-invoicing-and-real-time-reporting-roadmap-released-feb26-update

### 6. Returns
- The VAT3 return is bi-monthly (Jan–Feb, Mar–Apr, and so on). It is due on the 19th of the following month, or the **23rd if filed and paid via ROS**. Revenue can authorise four-monthly returns (annual liability €3,001–€14,400), six-monthly returns (up to €3,000), or annual returns through direct debit. An annual Return of Trading Details (RTD) is also required. Sources: https://www.revenue.ie/en/vat/accounting-for-vat/how-to-account-for-value-added-tax/when-vat-becomes-payable.aspx and https://www.revenue.ie/en/tax-professionals/tdm/value-added-tax/part09-obligations-accountable-persons/return/VAT-RTD-S76.pdf

### 7. Recommendation
**Keep, with fixes.** Add the 9% rate and a "not VAT-registered" mode. Remove "Tax Reference" from invoices or make it optional. Add reverse-charge text and the customer VAT number for EU B2B.

---

## PL: Poland

### 1. Rates
- 23% standard; 8% and **5%** reduced; 0%. Source: https://taxsummaries.pwc.com/poland/corporate/other-taxes (secondary). Official confirmation should come from podatki.gov.pl.
- 23% and 8% have been extended with no end date. There is a reported plan to move some non-alcoholic beverages from a reduced rate to 23% from 1 Jan 2027, but its legislative status is UNVERIFIED. Source: https://www.vatupdate.com/2026/10/01/poland-plans-23-vat-on-certain-non-alcoholic-beverages/
- **App impact:** the 5% rate is missing. This matters little for freelance services, which are mostly 23%.

### 2. Identifiers
- **NIP** (10 digits, e.g. 123-456-78-90 / 1234567890) is mandatory for the seller in KSeF. For intra-EU invoices it is written with the PL prefix (PL1234567890). **REGON is optional ("element fakultatywny")**, not required. Sources: https://ksef.podatki.gov.pl/media/jknpcymf/broszura-informacyjna-dotyczaca-struktury-logicznej-fa-3-04032026.pdf and https://www.biznes.gov.pl/pl/portal/00399

### 3. Small-business exemption (zwolnienie podmiotowe, art. 113 ust. 1)
- **The app's claim "no small-business regime" is wrong.** The threshold is **240,000 PLN net from 1 Jan 2026** (200,000 PLN in 2025), pro rata in the first year of business. Art. 113 ust. 13 excludes some activities, for example legal and advisory services and certain goods. Sources: https://www.podatki.biz/artykuly/nowy-limit-zwolnienia-podmiotowego-z-vat-w-2026-r-mf-o-przepisach-przejsciowych_4_60302.htm and https://ksef.podatki.gov.pl/zakres-obowiazkowego-ksef/ (secondary and official)
- Invoice wording: the invoice must state the **legal basis for the exemption** (art. 106e ust. 1 pkt 19), for example "Zwolnienie podmiotowe z VAT na podstawie art. 113 ust. 1 ustawy o VAT". An exempt taxpayer only has to issue an invoice when the buyer asks for one. Source: https://ksef.podatki.gov.pl/media/cark5buy/podrecznik-ksef-20-czesc-ii-wystawianie-i-otrzymywanie-faktur-w-ksef-19022026.pdf. The exact phrase is common practice; only the reference to the provision is required.

### 4. Cross-border B2B services to the EU
- The invoice carries no rate and no VAT amount. It shows the annotation **"odwrotne obciążenie"**, the seller's number with the PL prefix, and the buyer's EU VAT number with its country code. Source: https://www.biznes.gov.pl/pl/portal/00399
- The supplies are reported in VAT-UE (the recapitulative statement). An exempt (art. 113) seller has to register as VAT-UE before providing such services. That registration requirement is UNVERIFIED: it is my understanding of art. 97 ust. 3 and needs to be checked.

### 5. E-invoicing (KSeF): this is the critical item
- The schedule:
  - **1 Feb 2026:** taxpayers with sales above 200m PLN must issue invoices in KSeF, and every business must receive invoices through KSeF.
  - **1 Apr 2026:** all other taxpayers, **both VAT-active and VAT-exempt**, must issue invoices in KSeF.
  - Until 31 Dec 2026 there is an exception for taxpayers whose invoiced sales are **≤ 10,000 PLN gross per month**. The obligation starts with the invoice that crosses the limit.
  - **1 Jan 2027:** the exception ends. There are no penalties for KSeF errors until the end of 2026.
  - Sources: https://ksef.podatki.gov.pl/etapy-wdrozenia-ksef/, https://ksef.podatki.gov.pl/ponizej-10-000-zl/, https://ksef.podatki.gov.pl/informacje-ogolne-ksef-20/zakres-obowiazkowego-ksef/ and https://www.gov.pl/web/finanse/krajowy-system-e-faktur--plan-wdrozenia
- Scope:
  - B2C invoices are outside mandatory KSeF.
  - Invoices to **foreign buyers** must still be issued in KSeF. The buyer receives the invoice in an agreed form, such as a PDF, carrying a **KSeF QR code**.
  - Source: https://ksef.podatki.gov.pl/pytania-i-odpowiedzi-ksef-20/
- **Effect on DuFattur:**
  - Since 1 Apr 2026 a DuFattur PDF is **not a valid VAT invoice** for most Polish B2B sellers.
  - The only exceptions until 31 Dec 2026 are sellers at or below 10k PLN a month and B2C invoices.
  - From 1 Jan 2027 the PDF is not valid for practically any Polish B2B invoice, including invoices to foreign clients, unless the app integrates with the KSeF API.

### 6. Returns
- JPK_V7M is monthly, due by the 25th of the following month. A "mały podatnik" may file JPK_V7K, which is quarterly for the declaration and monthly for the records part, due by the 25th. Exempt taxpayers do not file JPK_V7. Sources: https://www.biznes.gov.pl/pl/portal/00237 and https://podatki.gov.pl/podatki-firmowe/jednolity-plik-kontrolny/jpk_vat/pytania-i-odpowiedzi-jpk_vat

### 7. Recommendation
**Drop**, or mark the app as "for B2C/proforma only", until KSeF integration exists. If kept: add the 240k exemption mode and the art. 113 wording, make REGON optional, and add 5%.

---

## SE: Sweden

### 1. Rates
- 25% standard; 12% and **6%** reduced. Food and bottled water are temporarily at **6% from 1 Apr 2026 to 31 Dec 2027**; restaurant services stay at 12%. Sources: https://kpmg.com/us/en/taxnewsflash/news/2026/04/sweden-temporary-reduced-vat-rate-food-bottled-water.html and https://vatcalc.com/sweden/sweden-halves-food-vat-to-6-till-dec-2027 (secondary). The official page, Skatteverket "Momssatser", was not reached.
- 2027: the temporary 6% food rate is legislated to run until 31 Dec 2027. No other change found.
- **App impact:** the 6% rate is missing. It is used by books, culture, passenger transport and, temporarily, food.

### 2. Identifiers
- The **momsregistreringsnummer** (VAT number) must be on the invoice. Its format is SE + 12 digits ending in "01". For a sole trader (enskild firma) the 10 digits are the owner's personnummer. Sources: https://www.skatteverket.se/skatter/mervardesskattmoms/momsregistreringsnummer.4.18e1b10334ebe8bc80002649.html and https://www.skatteverket.se/foretag/moms/kopavarorochtjanster/inkopfranandraeulander/kopatjansterfranandraeulander.4.361dc8c15312eff6fd1d011.html. The app example SE123456789001 is valid.
- "Org. nummer": a sole trader has no separate organisation number; the personnummer is used. That is my understanding and is UNVERIFIED.
- **"Godkänd för F-skatt"**: Skatteverket tells sole traders to write this on every invoice, so the client does not withhold tax. **The app is missing it.** Source: https://www.skatteverket.se/foretag/drivaforetag/startaochregistrera/fochfaskatt.4.58d555751259e4d661680006355.html and https://www.skatteverket.se/foretag/drivaforetag/saljatjanster.4.71004e4c133e23bf6db800098322.html

### 3. Small-business exemption (momsbefrielse / "undantagen från skatteplikt")
- From 1 Jan 2025 the limit is annual turnover of at most **120,000 SEK** net in Sweden, in the current year and the two previous years. EU-wide turnover must also be at most €100,000. Source: https://skatteverket.se/momsbefrielse
- On the invoice, no VAT is charged and the invoice states that the sale is exempt. Skatteverket accepts the wording **"Undantagen från skatteplikt"** or text with the same meaning; no reference to the law is required. Sources: https://skatteverket.se/foretag/moms/momsregistrering/momsbefrielseforforsaljningpahogst80000kr.4.3152d9ac158968eb8fd1efe.html and https://www.faronline.se/dokument/skatteverket/stallningstaganden2/2021/skvstallningst2021012901/ (Skatteverket ställningstagande, 2021). "Momsbefriad" is informal usage, not the statutory wording.

### 4. Cross-border B2B services to the EU
- Under the main rule no Swedish VAT is charged. The buyer accounts for the VAT, and the supply is reported in box 39 and in the periodisk sammanställning (EC Sales List), which needs both VAT numbers. Source: https://www.skatteverket.se/foretag/moms/saljavarorochtjanster/forsaljningtillandraeulander/saljatjanstertillandraeulander.4.76a43be412206334b89800010696.html
- Invoice: include both VAT numbers and the text **"Omvänd betalningsskyldighet"** (or "Reverse charge"). Skatteverket states this explicitly for goods; for services it is my understanding from Art. 226 of the VAT Directive and ML ch. 17. Source for the reverse-charge concept: https://www.skatteverket.se/foretag/moms/sarskildamomsregler/omvandbetalningsskyldighet.4.47eb30f51122b1aaad28000258292.html

### 5. E-invoicing
- No B2B mandate today or in 2027, so PDF invoices are valid. B2G e-invoicing via Peppol has applied since 2019. The B2G item is UNVERIFIED in this session and comes from my prior knowledge. ViDA intra-EU digital reporting is due in July 2030.

### 6. Returns
- Turnover up to 1 MSEK: annual return (monthly or quarterly can be chosen). Up to 40 MSEK: quarterly. Source: https://www.skatteverket.se/foretag/moms/deklareramoms/narskajagdeklareramoms.4.6d02084411db6e252fe80008988.html
- The annual deadline for a sole trader is linked to the income tax return. Secondary sources disagree, citing 12 May or February. UNVERIFIED.

### 7. Recommendation
**Keep, with fixes.** Add 6%, the "Godkänd för F-skatt" line, an exempt mode with "Undantagen från skatteplikt" and no Moms-nr, and reverse-charge text.

---

## GB: United Kingdom

### 1. Rates
- 20% standard, 5% reduced, 0% zero rate. No change announced for 2027. Source: https://www.gov.uk/guidance/how-to-fill-in-and-submit-your-vat-return-vat-notice-70012 (20% confirmed). For 5% and 0% see https://www.gov.uk/guidance/rates-of-vat-on-different-goods-and-services (not fetched; long-standing).

### 2. Identifiers
- A VAT invoice requires the **VAT registration number**, in the format GB + 9 digits (GB123456789), or XI for Northern Ireland goods. Source: https://www.gov.uk/hmrc-internal-manuals/vat-trader-records/vatrec5010
- A non-VAT invoice requires a unique invoice number, the sole trader's name and any trading name, an address for legal documents, the customer's details, and the dates and amounts. Source: https://www.gov.uk/invoicing-and-taking-payment-from-customers/invoices-what-they-must-include
- **The UTR is not required and is not normally shown on invoices.** It is used under the Construction Industry Scheme (CIS) and by some clients on request. It is a 10-digit number. Sources: https://www.gov.uk/invoicing-and-taking-payment-from-customers/invoices-what-they-must-include and https://www.gov.uk/what-you-must-do-as-a-cis-contractor/verify-subcontractors
- "No IBAN field": UK payments use sort code and account number, so this is reasonable. An optional IBAN/BIC field would still help EU clients. That is a design opinion, not a tax rule.

### 3. Registration threshold
- **£90,000** taxable turnover over a rolling 12 months, since 1 Apr 2024. The deregistration threshold is £88,000. Unregistered traders must not charge VAT or show a VAT number. Sources: https://www.gov.uk/register-for-vat and https://www.gov.uk/government/publications/vat-increasing-the-registration-and-deregistration-thresholds
- No special invoice wording is required when not registered.

### 4. Services to EU businesses
- Under the general B2B rule the place of supply is the customer's country, so the supply is **outside the scope of UK VAT**. The EU customer accounts for VAT under its own reverse charge. UK law prescribes no wording; "Reverse charge" or "Outside the scope of UK VAT" plus the customer's VAT number is good practice. Sources: https://www.gov.uk/guidance/vat-place-of-supply-of-services-notice-741a and https://www.gov.uk/guidance/vat-reverse-charge-technical-guide

### 5. E-invoicing
- PDFs are valid today and in 2027. The government has committed to **mandatory e-invoicing for all VAT invoices from April 2029** via Peppol. Phasing details are pending. Sources: https://www.gov.uk/government/publications (HMRC Transformation Roadmap progress update 2026), with secondary sources https://www.avalara.com/blog/en/europe/2026/04/uk-mandatory-e-invoicing-2029.html and https://meridianglobalservices.com/uk-confirms-mandatory-b2b-e-invoicing-from-april-2029

### 6. Returns
- Quarterly via Making Tax Digital software. The return and payment are due **1 calendar month + 7 days** after the period ends. The Annual Accounting Scheme is optional. Source: https://www.gov.uk/guidance/how-to-fill-in-and-submit-your-vat-return-vat-notice-70012

### 7. Recommendation
**Keep, with fixes.** Remove UTR from the invoice or make it optional. Add a "not VAT registered" mode, a 0% option, and optional "outside the scope / reverse charge" text for EU and non-UK clients.

---

## CH: Switzerland

### 1. Rates
- 8.1% standard, 2.6% reduced and **3.8% special rate for accommodation**, all since 1 Jan 2024. Source: https://www.estv.admin.ch/en/vat-rates-switzerland (not fetched; confirmed via https://www.admin.ch/de/ahv-zusatzfinanzierung)
- 2027: **no change.** A proposed increase to **8.5% standard and 4.0% accommodation, with 2.6% unchanged, from 1 Jan 2028 at the earliest** goes to a popular vote on **29 Nov 2026**. A second temporary increase for defence is also proposed (Federal Council, Aug 2026). If both pass, BDO reports the rates would be 9.0% / 2.6% / 4.3%. Sources: https://www.admin.ch/de/ahv-zusatzfinanzierung, https://www.bsv.admin.ch/de/abstimmung-13-ahv-rente and https://www.bdo.ch/de-ch/publikationen/befristete-mwst-erhoehung-was-unternehmen-jetzt-wissen-muessen

### 2. Identifiers
- The VAT number is the UID **with the suffix "MWST"** (or "TVA" / "IVA"; "VAT" is not allowed), e.g. **CHE-123.456.789 MWST**. Since 2014 the suffix is mandatory on invoices. Source: https://www.estv.admin.ch/de/unternehmens-identifikationsnummer-uid
- **The app's example lacks the "MWST" suffix.**

### 3. Small-business threshold
- **CHF 100,000** of **worldwide** taxable turnover. Below it the business is exempt, and voluntary registration is possible. Source: https://www.estv.admin.ch/dam/estv/de/dokumente/estv/steuersystem/dossier-steuerinformationen/d/d-grundsaetze-der-mehrwertsteuer.pdf.download.pdf/d-grundsaetze-der-mehrwertsteuer.pdf
- A non-registered business must not show VAT. No wording is prescribed (UNVERIFIED that none exists).

### 4. Services to EU businesses
- Under the recipient-location principle (Art. 8 MWSTG) no Swiss VAT is charged. The EU customer reverse charges. Swiss law prescribes no wording; stating why there is no VAT is recommended. Source: https://fedlex.data.admin.ch/filestore/fedlex.data.admin.ch/eli/cc/2009/615/20250331/de/pdf-a/fedlex-data-admin-ch-eli-cc-2009-615-20250331-de-pdf-a-1.pdf (Art. 8). Commentary: https://www.ibani.com/en/guides/cross-border-b2b-invoicing-switzerland-eu.md

### 5. E-invoicing
- No B2B mandate. PDFs are valid in 2026 and 2027. The QR-bill is the standard payment slip, which is a payments matter, not a tax one. Source for the e-invoicing point (secondary): https://lookuptax.com/docs/country/switzerland

### 6. Returns
- Quarterly under the effective method; semi-annual under the net tax rate (Saldosteuersatz) method, which is common for freelancers. Returns are due **within 60 days** after the period ends. An annual reporting option with instalments has existed since 1 Jan 2025 (my understanding of the 2025 MWSTG revision; UNVERIFIED in detail). Sources: https://fedlex.data.admin.ch/filestore/fedlex.data.admin.ch/eli/cc/2009/615/20250331/de/pdf-a/fedlex-data-admin-ch-eli-cc-2009-615-20250331-de-pdf-a-1.pdf (Art. 35, 37, 71)

### 7. Recommendation
**Keep, with fixes.** Add the MWST suffix, the 3.8% rate and a "not VAT-registered" mode. Watch the 29 Nov 2026 vote for 2028 rates.

---

## US: United States

### 1. Rates
- There is **no federal sales tax or VAT.** Sales tax is set by the states and localities. Most states do not tax most professional services, but some tax broadly: Hawaii (GET), New Mexico (GRT) and South Dakota, among others. Sources: https://www.taxjar.com/sales-tax/when-should-a-business-charge-sales-tax-on-services and https://www.avalara.com/us/en/learn/whitepapers/charging-sales-tax-on-services.html (secondary)
- A typical freelancer invoice shows no tax line, or a state or local rate where one applies. "Rate 0" is a fine default.

### 2. Identifiers
- No identifier is legally required on an invoice. Clients collect the freelancer's TIN on **Form W-9**, not from the invoice. A sole proprietor may give an **SSN or an EIN**. Source: https://www.irs.gov/forms-pubs/about-form-w-9 (current form: https://www.irs.gov/pub/irs-pdf/fw9.pdf)
- An EIN field is acceptable but should be **optional**. An SSN must never be shown.

### 3. Small-business exemption
- Not applicable federally. State economic-nexus thresholds (often $100,000) apply to remote sellers.

### 4. Cross-border
- Export of services: no US tax. The EU customer self-accounts under its reverse charge. The invoice should show the EU customer's VAT number and "Reverse charge" (best practice; UNVERIFIED as an obligation on a non-EU supplier).

### 5. E-invoicing
- No federal mandate. PDFs are fine.

### 6. Returns
- Not applicable federally. State sales-tax filing frequency varies by state.

### 7. Recommendation
**Keep, with fixes.** Default to no tax, allow an optional custom tax line and label, and make EIN optional. Do not try to build state sales-tax logic.

---

## CA: Canada

### 1. Rates
- GST is **5%** in AB, BC, MB, QC, SK, NT, NU and YT. **HST** is **13% in ON**, **14% in NS** (from 1 Apr 2025) and **15% in NB, NL and PE**. Separate provincial taxes apply in some provinces: QST 9.975% in Quebec (administered by Revenu Québec), and PST in BC, MB and SK, which mostly applies to goods and some services. Sources: https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-which-rate/calculator.html and https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/notice342/nova-scotia-hst-rate-decrease-questions-answers-general-transitional-rules-personal-property-services.html
- The rate is set by the **place of supply**, which usually follows the customer's province for services. Source: https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-place-supply.html
- No enacted 2027 change found.
- **The app's flat "rate 5" is wrong for customers in HST provinces.**

### 2. Identifiers
- The GST/HST registration number is the 9-digit **Business Number + "RT" + 4 digits**, e.g. **123456789 RT0001**. It must appear on invoices of $100 or more (it is needed for the customer's input tax credit). Sources: https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/gst-hst-account/register-account.html and https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/calculate-prepare-report/input-tax-credit.html
- The label should be "GST/HST registration number" (BN RT), not a bare "Business Number".

### 3. Small supplier
- **$30,000** of taxable supplies in a single calendar quarter or over the last four consecutive quarters. A small supplier need not register, and an unregistered one cannot charge GST/HST. Source: https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/gst-hst-account/register-account.html
- No wording is prescribed.

### 4. Services to EU businesses
- Exports of most services to non-residents are **zero-rated**. The EU customer reverse charges. UNVERIFIED in this session: CRA source not retrieved; my understanding comes from ETA Schedule VI Part V.

### 5. E-invoicing
- No mandate. PDFs are valid.

### 6. Returns
- With taxable sales under $1.5M a business can file annually. An individual with business income and a 31 Dec year-end must **pay by 30 April and file by 15 June** (30 Apr / 15 Jun 2027 for the 2026 year). Quarterly or monthly filing is optional. Sources: https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/file-gst-hst-return/reporting-requirements-deadlines.html and https://www.canada.ca/en/services/taxes/resources-for-small-and-medium-businesses/2026-tax-deadlines-canadian-businesses-self-employed-individuals.html

### 7. Recommendation
**Keep, with fixes.** At minimum, ask for the customer's province and choose 5% / 13% / 14% / 15%. Rename the ID field "GST/HST no. (BN RT)". Add an unregistered mode and a 0% zero-rated export option. Leave QST and PST out, with a disclaimer. Otherwise drop Canada.

---

## AU: Australia

### 1. Rates
- A single GST rate of **10%**; GST-free supplies are 0%. No reduced rate and no announced 2027 change. Source: https://www.ato.gov.au/businesses-and-organisations/international-tax-for-business/gst-for-non-resident-businesses/how-australian-gst-works

### 2. Identifiers
- The **ABN** has 11 digits, e.g. 12 345 678 901. A tax invoice must carry the words **"Tax invoice"**, the seller's identity and ABN, the date, a description, the GST amount or "Total price includes GST", and, for invoices of A$1,000 or more, the buyer's identity or ABN. Source: https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/tax-invoices
- A seller who is not registered for GST issues an ordinary "Invoice" with no GST. Payers may withhold 47% if the supplier quotes no ABN. Source: https://www.ato.gov.au/forms-and-instructions/statement-by-supplier-not-quoting-an-abn

### 3. Registration threshold
- **$75,000** GST turnover ($150,000 for non-profits). Ride-sourcing must register at any turnover. Sources: https://business.gov.au/registrations/register-for-taxes/register-for-goods-and-services-tax-gst and https://www.ato.gov.au/businesses-and-organisations/income-deductions-and-concessions/sharing-economy-and-tax/providing-services/how-gst-applies-when-providing-services

### 4. Services to EU businesses
- Exports of services to non-residents outside Australia are generally **GST-free**. Source: https://www.ato.gov.au/businesses-and-organisations/international-tax-for-business/australians-doing-business-overseas/exports-and-gst

### 5. E-invoicing
- No mandate. Peppol is voluntary, and PDFs are valid. (Secondary knowledge only; no official source pulled.)

### 6. Returns
- Quarterly BAS is due on the **28th of the month after each quarter** (28 Oct, 28 Feb, 28 Apr, 28 Jul). Businesses registered voluntarily below $75k can elect annual GST reporting. Sources: https://www.ato.gov.au/businesses-and-organisations/preparing-lodging-and-paying/business-activity-statements-bas/due-dates-for-lodging-and-paying-your-bas and https://www.ato.gov.au/businesses-and-organisations/gst-excise-and-indirect-taxes/gst/lodging-your-bas-or-annual-gst-return/options-for-reporting-and-paying-gst/annual-gst-reporting

### 7. Recommendation
**Keep, with fixes.** Title the invoice "Tax invoice" when GST-registered and "Invoice" otherwise. Add a GST-free (0%) option for exports and require buyer details at A$1,000 or more. Australia is simple and realistic.

---

## Corrections to the app

| Country | Field | Currently in app | Correct value |
|---|---|---|---|
| IE | Reduced rates | 13.5 | 13.5 **and 9** (also 0; 4.8 livestock) |
| IE | Small-business regime | none | Registration thresholds of €42,500 (services) and €85,000 (goods); add a "not VAT-registered" mode with no VAT and no VAT number |
| IE | ID "Tax Reference" | shown as invoice ID | Not required on invoices (for a sole trader it is the PPSN). Make it optional or remove it |
| IE / PL / SE | EU B2B | (no logic noted) | Customer VAT number plus "Reverse charge" (IE: "reverse charge applies"; PL: "odwrotne obciążenie"; SE: "Omvänd betalningsskyldighet"), with no VAT amount |
| PL | Reduced rates | 8 | 8 **and 5** (also 0) |
| PL | Small-business regime | none | **Zwolnienie podmiotowe, art. 113 ust. 1, 240,000 PLN (from 2026)**. Invoice wording: "Zwolnienie z VAT na podstawie art. 113 ust. 1 ustawy o VAT" |
| PL | REGON | presented as a standard ID | Optional; only NIP is required (PL prefix for EU) |
| PL | Invoice validity | PDF | **Not a valid B2B invoice since 1 Apr 2026** (≤10k PLN/month exception until 31 Dec 2026). From 1 Jan 2027 a KSeF invoice is required in practically all B2B cases, including foreign buyers (PDF with QR code) |
| SE | Reduced rates | 12 | 12 **and 6** (food temporarily 6% from 1 Apr 2026 to 31 Dec 2027) |
| SE | Missing line | none | "Godkänd för F-skatt" |
| SE | Small-business regime | none | Exemption up to 120,000 SEK; invoice text "Undantagen från skatteplikt"; no Moms-nr, no VAT |
| SE | Org. nummer | org number | For a sole trader, the personnummer serves as the identifier (UNVERIFIED wording) |
| GB | ID "UTR Number" | shown as invoice ID | Not required on invoices; make it optional (only for CIS or on request) |
| GB | Unregistered mode | none | Below £90,000 → no VAT and no VAT number |
| GB | Rates | 20 / 5 | 20 / 5 **/ 0**; add "outside the scope of UK VAT" for EU and non-UK B2B |
| CH | UID example | CHE-123.456.789 | **CHE-123.456.789 MWST** (suffix mandatory) |
| CH | Rates | 8.1 / 2.6 | 8.1 / 2.6 **/ 3.8** (accommodation). Possible 8.5 / 2.6 / 4.0 from 2028 if the 29 Nov 2026 vote passes |
| CH | Threshold | (CHF 100,000) | Correct: CHF 100,000 worldwide turnover |
| US | ID "EIN" | EIN | Make it optional (SSN or EIN go on the W-9, not the invoice) |
| CA | Rate | 5 | 5 GST, or **13 (ON), 14 (NS), 15 (NB, NL, PE)** HST by place of supply; QST and PST separate |
| CA | ID label | Business Number | "GST/HST registration no." in the format 123456789 RT0001 |
| AU | Invoice title | (n/a) | "Tax invoice" when GST-registered; buyer ABN or identity at A$1,000 or more; 0% GST-free for exports |

### Recommendations

| Country | Recommendation |
|---|---|
| IE | Keep, with fixes |
| PL | **Drop**, or B2C/proforma only, until KSeF integration |
| SE | Keep, with fixes |
| GB | Keep, with fixes |
| CH | Keep, with fixes |
| US | Keep, with fixes (no-tax default, optional EIN) |
| CA | Keep only with a province selector; otherwise drop |
| AU | Keep, with fixes |
