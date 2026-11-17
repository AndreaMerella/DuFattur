# DuFattur tax-data audit: NL, BE, DE, AT

Audit date: 2026-11-17. Research only; no app code was changed.

**Method and limits.** In this session the network blocked direct page fetches from every tax-authority host (belastingdienst.nl, financien.belgium.be, gesetze-im-internet.de, bmf.gv.at, usp.gv.at, ec.europa.eu and others). The findings below come from web-search excerpts of those official pages, with the URLs cited. Where only secondary sources (accounting software vendors, chambers of commerce) could be found, the fact is marked *(secondary)*. Anything that could not be verified is marked **UNVERIFIED**. Before shipping legal wording, re-check each official page in a browser.

---

## Netherlands (NL)

### 1. VAT rates
- Standard **21%**; reduced **9%**; also 0%. Confirmed.
- Since **1 Jan 2026**, hotel and holiday accommodation (logies) moved from 9% to 21%. The planned rise to 21% for culture, media and sport was cancelled, so those stay at 9%. Source: https://www.sra.nl/nieuws/259001/2026/11/belastingplannen-2027-wat-zijn-de-voorstellen-voor-de-btw-en-de-overdrachtsbelasting ; https://www.taxlive.nl/nl/documenten/nieuws/prinsjesdag-2026-wijzigingen-in-de-btw-en-accijnzen/
- **2027:** no change to the 21% or 9% rates has been enacted. Belastingplan 2027 (bill of 15-09-2026, not yet passed) moves balloon flights from 9% to 21% from **1 Jan 2028**. The proposed rise for ornamental horticulture (sierteelt) was taken out of the bill. Source: https://www.njb.nl/wetgeving/wetsvoorstellen/belastingplan-2027/ ; https://www.rijksoverheid.nl/themas/belastingen-uitkeringen-en-toeslagen/belastingplan/plannen-kabinet-voor-hogere-btw-op-sierteelt-en-ballonvaart

### 2. Seller identifiers
- **KVK-nummer** (8 digits, e.g. `12345678`). It is required on the invoice if the business is registered in the Handelsregister. The official spelling is "KVK-nummer", in capitals; "KvK" is the older styling. Source: https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/administratie_bijhouden/facturen_maken/factuureisen/factuureisen ; https://ondernemersplein.overheid.nl/wetten-en-regels/facturen-maken-en-versturen/
- **Btw-identificatienummer (btw-id)**, format `NL` + 9 digits + `B` + 2 digits (e.g. `NL123456789B01`). Use of the btw-id on invoices has been mandatory since 1 Jan 2020. The **omzetbelastingnummer** must NOT be put on invoices: for a sole trader it contains the BSN and is only for dealings with the Belastingdienst. Source: https://www.belastingdienst.nl/wps/wcm/connect/nl/btw/content/gebruik-vanaf-1-januari-2020-uw-nieuwe-btw-identificatienummer ; https://www.kvk.nl/starten/alles-wat-je-moet-weten-over-het-btw-nummer/
- A trader in the KOR does not need to show the btw-id. The KVK-nummer is still required. Source: https://www.kvk.nl/starten/alles-wat-je-moet-weten-over-het-btw-nummer/

### 3. Small-business scheme: Kleineondernemersregeling (KOR)
- Official name: **kleineondernemersregeling (KOR)**. Legal basis: art. 25 Wet op de omzetbelasting 1968.
- Threshold: turnover of at most **€20,000** per calendar year, in both the year of registration and the previous year. If the limit is exceeded during the year, the exemption ends **immediately**, from the supply that crosses the limit. This is the 2025 EU SME-reform behaviour. Participation is opt-in: you register with the Belastingdienst. Source: https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/hoe_werkt_de_btw/kleineondernemersregeling/kleineondernemersregeling ; https://www.belastingdienst.nl/wps/wcm/connect/nl/btw/content/kor-voorwaarden
- The EU cross-border SME scheme (EU-KOR, EU-wide turnover ≤ €100,000) has also applied since 1 Jan 2025. **UNVERIFIED** from an NL page; this is my understanding of Directive (EU) 2020/285.
- Invoices: a KOR trader is not obliged to issue invoices. If they do, they **show no VAT** and **state that they use the kleineondernemersregeling**. Source: https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/administratie_bijhouden/facturen_maken/factuureisen/aangepaste_regels_facturen/u_maakt_gebruik_van_de_kleineondernemersregeling
- Wording: no exact text is prescribed. KVK suggests **"Factuur vrijgesteld van OB o.g.v. artikel 25 Wet OB"**. A clear alternative is "Vrijgesteld van btw op grond van de kleineondernemersregeling (art. 25 Wet OB)". Source: https://www.kvk.nl/geldzaken/kleineondernemersregeling-gebruiken/
- Minimum participation period: sources conflict on whether the old 3-year minimum still applies, or whether you can now deregister at any time. **UNVERIFIED**.

### 4. Cross-border B2B services (reverse charge)
- Invoice: charge no VAT and state **"btw verlegd"** (English: "VAT reverse-charged" / "Reverse charge"). Show the **customer's VAT identification number** and the supplier's btw-id. Source: https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/btw_berekenen_aan_uw_klanten/waarover_btw_berekenen/verleggingsregeling/hoe_werkt_btw_verleggen ; https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/administratie_bijhouden/facturen_maken/factuureisen/aangepaste_regels_facturen/u_maakt_gebruik_van_de_verleggingsregeling
- Recapitulative statement: **Opgaaf intracommunautaire prestaties (opgaaf ICP)**, filed for every period in which you supplied services to EU business customers. Its total must match box 3b of the btw-aangifte. It can be filed quarterly when intra-EU *goods* supplies are ≤ €50,000 per quarter; for services, quarterly is fine. No opgaaf is due for a quarter with no intra-EU supplies. Source: https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/internationaal/btw_voor_buitenlandse_ondernemers/btw_aangifte_doen_en_betalen/aangifte_doen/opgaaf_icp/opgaaf_intracommunautaire_prestaties ; https://download.belastingdienst.nl/belastingdienst/docs/toelichting-digitale-opgaaf-intracomm-pres-ob1291t41fd.pdf
- Whether a KOR participant must still file the opgaaf ICP for reverse-charged EU services: **UNVERIFIED**.

### 5. Mandatory invoice contents (domestic, normal VAT)
Full name and address of the supplier and the customer; KVK-nummer; btw-id; unique sequential invoice number; invoice date; date of supply or service (if different from the invoice date); description and quantity; unit price excluding VAT; VAT rate and amount per rate; total amounts. Source: https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/administratie_bijhouden/facturen_maken/factuureisen/factuureisen ; https://ondernemersplein.overheid.nl/wetten-en-regels/facturen-maken-en-versturen/

### 6. E-invoicing
- **Today and in 2027:** there is no B2B or B2C e-invoicing mandate. A PDF is a valid invoice. B2G invoicing to central government already uses e-invoicing.
- The cabinet decision of 11 Sep 2026 plans mandatory **B2B e-invoicing plus digital reporting from 1 Jul 2030**: for intra-EU transactions (ViDA) and, as expected, also for domestic ones, with domestic reporting expected 1 Jul 2031. KOR businesses would be exempt. The bill is expected before summer 2027. Source: https://www.rijksoverheid.nl/actueel/nieuws/2026/09/11/kabinet-kiest-voor-invoering-e-facturatie-en-rapportage-voor-bedrijven ; https://ondernemersplein.overheid.nl/wetswijzigingen/e-factuur-verplicht-bij-transactie-tussen-ondernemers/

### 7. VAT return frequency and deadline
- Quarterly is the norm for small businesses. The return and the payment are due by the **last day of the month after the quarter** (Q1 30 Apr, Q2 31 Jul, Q3 31 Oct, Q4 31 Jan). The app is correct.
- A **nil return is required**: you file even if nothing is owed. KOR participants file no btw-aangifte. Source: https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/btw_aangifte_doen_en_betalen/btw-aangifte-waar-moet-u-aan-denken/btw-aangifte-waar-moet-u-aan-denken ; https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/internationaal/btw_voor_buitenlandse_ondernemers/btw_aangifte_doen_en_betalen/aangifte_doen/btw_aangifte_doen
- Income-tax return: the Belastingdienst says file **"vóór 1 mei"** (before 1 May) or by the date in the aangiftebrief. An extension to 1 Sep is available if you request it before 1 May. The app's "1 May" should be phrased as "before 1 May (deadline 30 April)". Source: https://www.belastingdienst.nl/wps/wcm/connect/nl/belastingaangifte/content/wanneer-moet-ik-aangifte-doen

### 8. Income-tax withholding on invoices
None for a Dutch zzp'er. **UNVERIFIED** against a specific official page; based on general knowledge, no NL provision requires withholding on freelancer invoices.

---

## Belgium (BE)

### 1. VAT rates
- Standard **21%**; reduced **6%** and **12%**; also 0%. **The app is missing the 12% rate.**
- From **1 Mar 2026** (royal decree published 23 Feb 2026): hotels, campsites and B&Bs went from 6% to 12%, and plant-protection products from 12% to 21%. The planned rise for take-away meals, sport and culture was dropped, so those stay at 6%; sources conflict slightly, see the links. A cut from 21% to 12% for non-alcoholic drinks in horeca is **UNVERIFIED**. Sources *(secondary)*: https://www.securex.be/nl/lex4you/zelfstandige/nieuws/hervorming-btw-tarieven-vanaf-1-maart-2026 ; https://www.vrt.be/vrtnws/nl/2026/02/25/stijging-btw-hotels-campings-b-b-s-6-procent-12-procent/ ; https://brusselstimes.com/belgium/1995122/xxx-xxx-xxx-what-changes-in-belgium-on-1-march/
- **2027:** no enacted rate change found. **UNVERIFIED**.

### 2. Seller identifiers
- **Ondernemingsnummer** (KBO/BCE number), 10 digits, format `0123.456.789`. It must appear on invoices (Wetboek van economisch recht art. III.25). Companies must also show "RPR/RPM + court". Source *(secondary)*: https://www.unizo.be/ondernemersgids/financieel/factuur/correct-factureren
- **Btw-identificatienummer** = `BE` + the ondernemingsnummer, e.g. `BE0123456789`. The app's formats are correct.
- Art. III.25 WER may also require at least one bank account number of the enterprise on invoices. **UNVERIFIED**.

### 3. Small-business scheme
- Official name: **vrijstellingsregeling voor kleine ondernemingen** (franchise regime). Legal basis: art. 56bis–56undecies Btw-Wetboek and KB nr. 19. Threshold: **€25,000** annual turnover excluding VAT. Source: https://finance.belgium.be/en/node/220 ; https://efactuur.belgium.be/nl/article/voor-wie-wordt-e-facturatie-verplicht
- A 2026 government SME plan proposes raising it gradually to €30,000. This is not enacted. Source: https://simonet.belgium.be/sites/default/files/2026-01/2026-01-05-KMO-PLAN.pdf
- New from 2026: exempt small businesses must report their total turnover yearly through the **klantenlisting**. For 2025 this was due 31 Mar 2026, extended to 30 Apr 2026. Source *(secondary)*: https://www.practicali.be/blog/kleine-ondernemingsregeling-nieuwe-omzetmelding-via-de-klantenlisting-uiterlijk-op-31-maart-2026
- Invoice statement: **required**, and no VAT may be shown. The most widely cited wording is **"Bijzondere vrijstellingsregeling kleine ondernemingen"**; French: "Régime particulier de franchise des petites entreprises". Older guidance uses "Kleine onderneming onderworpen aan de vrijstellingsregeling van belasting. Btw niet toepasselijk." The exact statutory text is **UNVERIFIED** against KB nr. 1 / KB nr. 19. Sources *(secondary)*: https://www.securex.be/nl/starten-als-zelfstandige/belasting-en-btw/btw-vrijstelling ; https://www.partena-professional.be/nl/node/70

### 4. Cross-border B2B services (reverse charge)
- Invoice: no Belgian VAT. Common mention: **"Verlegging van heffing"** (French "Autoliquidation", English "Reverse charge"), often with "art. 21, § 2 W.BTW / art. 196 Richtlijn 2006/112/EG". The customer's VAT number is required; check it in VIES. Exact official wording **UNVERIFIED** *(secondary)*: https://billy.tech/nl/gids/fiscaliteit/btw/btw-handelingen/intracommunautaire-dienst/ ; https://www.accountable.eu/nl-be/blog/btw-verleggen-hoe/
- Recapitulative statement: **intracommunautaire opgave (IC-listing)** through Intervat, at the same frequency as the VAT return. Report the services in box 44 of the return. Source: https://finance.belgium.be/en/node/215

### 5. Mandatory invoice contents (domestic)
Name, address and ondernemingsnummer/btw-nummer of the supplier; name, address and VAT number of the customer (if a VAT payer); date; sequential number; date of supply or service; description; taxable amount and VAT per rate; total. Under the 2026 e-invoicing rules, B2B invoices must be structured. Source *(secondary)*: https://www.unizo.be/ondernemersgids/financieel/factuur/correct-factureren ; https://www.wolterskluwer.com/nl-be/expert-insights/12-dingen-die-verplicht-op-facturen-moeten-staan

### 6. E-invoicing (the app's most important gap)
- Since **1 Jan 2026**, **structured e-invoicing (Peppol BIS) is mandatory for domestic B2B** between Belgian VAT payers. **A PDF is no longer a valid B2B invoice in Belgium.** The general tolerance period covered Q1 2026 only and has ended. Source: https://einvoice.belgium.be/en/article/structured-electronic-invoices-between-companies-are-compulsory-2026 ; https://einvoice.belgium.be/en/news/period-tolerance-during-first-three-months-2026 ; https://efactuur.belgium.be/nl/news/einde-van-de-algemene-tolerantieperiode-voor-e-facturering
- **Small businesses under the vrijstellingsregeling are NOT excluded.** Only businesses doing only art. 44-exempt activities, bankrupt VAT payers and the flat-rate regime (until 2028) are excluded. Source: https://efactuur.belgium.be/nl/article/voor-wie-wordt-e-facturatie-verplicht ; https://einvoice.belgium.be/en/FAQ/general-questions-b2b
- **B2C:** a PDF or paper invoice is still allowed. **Cross-border B2B** (to a non-Belgian customer): no Belgian mandate, so a PDF is allowed until the ViDA cross-border rules from July 2030.
- Real-time e-reporting from **1 Jan 2028** is planned. **UNVERIFIED** in this session.

### 7. VAT return frequency and deadline
- Quarterly if turnover ≤ €2,500,000 (request with form e604). Since the late-2025 reform, quarterly returns are due on the **25th of the month after the quarter** (2026: Q1 27 Apr because of a weekend, Q2 25 Jul, Q3 25 Oct, Q4 25 Jan 2027). Monthly returns are due on the 20th. The summer extension was abolished, and Q2 2026 had a one-off leniency until 10 Aug. Sources *(secondary)*: https://www.accountable.eu/en-be/help-center/how-to-submit-your-vat-declaration-in-one-click/ ; https://help.accountable.eu/en/articles/10342764-vat-modernisation-what-changes-on-1-may-2026 . Eligibility: https://finance.belgium.be/en/node/210
- **Nil return required** for normal-regime VAT payers *(secondary)*: https://www.xerius.be/nl-be/zelfstandig-worden/je-voorbereiding/btw-aangifte . Exempt small businesses file **no** periodic return, only the annual klantenlisting.

### 8. Income-tax withholding on invoices
None for Belgian freelancers' invoices. **UNVERIFIED** against an official page.

---

## Germany (DE)

### 1. VAT rates
- Standard **19%**; reduced **7%**. Confirmed.
- From **1 Jan 2026** (Steueränderungsgesetz 2025, Bundesrat approval 19 Dec 2025), restaurant and catering services (food, not drinks) are permanently at 7%. This does not affect typical freelancers. Source: https://www.bundesregierung.de/breg-de/aktuelles/steueraenderungsgesetz-bundesrat-2383684 ; https://www.bundestag.de/dokumente/textarchiv/2025/kw49-de-steueraenderungsgesetz-1128142
- **2027:** no further enacted change found.
- Tax name: the legal term is **Umsatzsteuer (USt.)**. "MwSt." is colloquial and widely used on invoices; it is acceptable, but "USt." is more correct.

### 2. Seller identifiers (§ 14 Abs. 4 Nr. 2 UStG)
- **Steuernummer** (format varies by state, e.g. `12/345/67890`) **or** **Umsatzsteuer-Identifikationsnummer (USt-IdNr.)**, format `DE` + 9 digits (e.g. `DE123456789`). One of the two is required. The USt-IdNr. is recommended, and it is required for intra-EU B2B. Source: https://www.gesetze-im-internet.de/ustg_1980/__14.html
- There is no commercial-register number for a sole trader unless they are registered as e.K.

### 3. Small-business scheme: Kleinunternehmerregelung (§ 19 UStG), reformed 1 Jan 2025
- Since 2025, § 19 is a **tax exemption** (Steuerbefreiung), no longer a non-collection ("wird nicht erhoben").
- Thresholds: previous year ≤ **€25,000** (was €22,000) **and** current year ≤ **€100,000** (was a €50,000 *forecast*). This is now a hard cap: the supply that exceeds €100,000 is already taxable. In the founding year the limit is €25,000, applied the same way. Turnover is net. Source: https://www.gesetze-im-internet.de/ustg_1980/__19.html ; https://www.bundesfinanzministerium.de/Content/DE/Downloads/BMF_Schreiben/Steuerarten/Umsatzsteuer/Umsatzsteuer-Anwendungserlass/2025-03-18-sonderregelung-kleinunternehmer.pdf?__blob=publicationFile&v=1
- EU cross-border scheme: § 19a UStG (EU turnover ≤ €100,000), since 2025.
- Invoice: **§ 34a UStDV** (new 2025) allows a simplified invoice. It must contain a **"Hinweis auf die Steuerbefreiung für Kleinunternehmer"** and must not show VAT. No fixed wording is prescribed. Per the BMF letter of 18 Mar 2025, a colloquial phrase such as "steuerfreier Kleinunternehmer" is enough if unambiguous. Source: https://www.gesetze-im-internet.de/ustdv_1980/__34a.html ; BMF letter above.
- The app's text "Gemäß §19 UStG wird keine Umsatzsteuer berechnet." is still acceptable, because it references § 19, but it reflects the pre-2025 concept. Recommended: **"Steuerfreie Leistung gemäß § 19 UStG (Kleinunternehmerregelung)."** or "Umsatzsteuerfrei aufgrund der Kleinunternehmerregelung gemäß § 19 UStG."
- A Kleinunternehmer does **not** file a Zusammenfassende Meldung (§ 18a Abs. 4 UStG). Source: https://www.gesetze-im-internet.de/ustg_1980/__18a.html

### 4. Cross-border B2B services (reverse charge)
- Invoice: no German VAT. Required mention: **"Steuerschuldnerschaft des Leistungsempfängers"** (§ 14a Abs. 1 and 5 UStG); English: "Reverse charge". Both the supplier's and the customer's **USt-IdNr.** must be shown. Source: https://www.gesetze-im-internet.de/ustg_1980/__14a.html ; https://www.ihk.de/hannover/hauptnavigation/recht/steuerrecht/umsatzsteuer/abrechnung-von-dienstleistungen-ins-ausland-5224418
- Recapitulative statement: **Zusammenfassende Meldung (ZM)** to the BZSt. For services it is **quarterly by the 25th day after the quarter** (§ 18a Abs. 2), or monthly if already a monthly filer because of goods. Annual filing is possible in narrow cases. Source: https://www.bzst.de/DE/Unternehmen/Umsatzsteuer/ZusammenfassendeMeldung/Fristen/fristen.html

### 5. Mandatory invoice contents (§ 14 Abs. 4 UStG)
Full name and address of the supplier **and the recipient**; Steuernummer or USt-IdNr.; invoice date; unique sequential number; quantity and description; **date (or period) of the supply or service** (Leistungszeitpunkt), even if it equals the invoice date; net amount per rate; tax rate and tax amount, or the exemption note; any agreed reductions. Invoices up to €250 (Kleinbetragsrechnung, § 33 UStDV) need less. Source: https://www.gesetze-im-internet.de/ustg_1980/__14.html

### 6. E-invoicing (domestic B2B)
- Since **1 Jan 2025**, every domestic business must be able to **receive** e-invoices (XRechnung / ZUGFeRD ≥ 2.0.1 / EN 16931). A plain PDF is a "sonstige Rechnung", not an e-invoice.
- Issuing: until **31 Dec 2026**, a PDF is allowed with the recipient's consent, and paper is allowed. In **2027**, a PDF is allowed only if the issuer's prior-year (2026) total turnover is ≤ **€800,000**; EDI is also still allowed. From **1 Jan 2028**, e-invoices are mandatory for all domestic B2B. Source: https://www.bundesfinanzministerium.de/Content/DE/FAQ/e-rechnung.html ; https://www.bundesfinanzministerium.de/Content/DE/Downloads/BMF_Schreiben/Steuerarten/Umsatzsteuer/Umsatzsteuer-Anwendungserlass/2025-10-15-einfuehrung-obligatorische-e-rechnung.pdf?__blob=publicationFile&v=3
- **Exceptions that last:** Kleinunternehmer (§ 34a UStDV) and invoices ≤ €250 may still be sent as a PDF or on paper. Source: same BMF FAQ.
- **B2C:** a PDF is fine.
- **Consequence for DuFattur:** a typical freelancer (< €800k) may send PDFs for domestic B2B through 2027 but needs XRechnung/ZUGFeRD from 2028. Even today, a PDF needs the recipient's consent.

### 7. VAT return frequency and deadline
- **Umsatzsteuer-Voranmeldung**: quarterly if prior-year tax ≤ **€9,000** (raised from €7,500 from 2025), monthly above that. The tax office may waive it if ≤ €2,000. It is due on the **10th day after the period**; a Dauerfristverlängerung adds one month. For founders, the mandatory monthly filing is suspended for 2021–2026. An annual return is always required. Source: https://www.gesetze-im-internet.de/ustg_1980/__18.html ; https://usth.bundesfinanzministerium.de/usth/2024/A-Umsatzsteuergesetz/V-Besteuerung/Paragraf-18/inhalt.html
- A nil Voranmeldung is required when you are obliged to file. Kleinunternehmer file none, and from 2025 they file no annual return either, only a turnover declaration if requested. **UNVERIFIED** detail.

### 8. Income-tax withholding on invoices
None for freelancers. Bauabzugsteuer (§ 48 EStG) applies only to construction services and is withheld by the customer. **UNVERIFIED** against an official page.

---

## Austria (AT)

### 1. VAT rates
- Standard **20%**; reduced **10%** and **13%**; and since **1 Jul 2026** a new **4.9%** rate for listed basic foods (adopted by the Nationalrat on 21 May 2026; permanent). **The app is missing 13% and 4.9%.** Source: https://www.usp.gv.at/aktuelles/newsliste/neuer_ustsatz.html ; https://www.parlament.gv.at/aktuelles/pk/jahr_2026/pk0448
- From **1 Jan 2026**, menstrual hygiene products and contraceptives are exempt with input-tax deduction (§ 6 Abs. 1 Z 5b UStG; Budgetbegleitgesetz 2025). Source: https://findok.bmf.gv.at/findok/iwg/84/84008/84008.1.pdf
- **2027:** no enacted change found.
- Tax name "USt" / "Umsatzsteuer" is correct.

### 2. Seller identifiers
- **UID-Nummer** (Umsatzsteuer-Identifikationsnummer), format `ATU` + 8 digits (e.g. `ATU12345678`). Required on invoices over €400 from a VAT-registered business. Source: https://www.usp.gv.at/themen/steuern-finanzen/umsatzsteuer-ueberblick/rechnung.html
- The **Steuernummer** is *not* an invoice element in Austria (unlike Germany). It is used with the tax office only. The app should not prompt for it as the AT invoice ID. Kleinunternehmer often have no UID and show none. Source: https://www.wko.at/steuern/kleinunternehmerregelung-umsatzsteuer
- If the customer is an Austrian business and the gross amount is over **€10,000**, the customer's UID must be shown. Source: https://www.usp.gv.at/themen/steuern-finanzen/umsatzsteuer-ueberblick/rechnung.html

### 3. Small-business scheme: Kleinunternehmerregelung / Kleinunternehmerbefreiung (§ 6 Abs. 1 Z 27 UStG)
- Since 1 Jan 2025: **€55,000 gross** (a Bruttogrenze, previously €35,000 net), not exceeded in the current or the previous year. Tolerance: exceeding by up to 10% (≤ €60,500) keeps the exemption until year-end; above that, the exemption ends immediately. Source: https://www.usp.gv.at/themen/steuern-finanzen/umsatzsteuer-ueberblick/weitere-informationen-zur-umsatzsteuer/weitere-steuertatbestaende-und-befreiungen/kleinunternehmen.html ; https://www.usp.gv.at/aktuelles/newsliste/kleinunternehmerregelung-ab-2025.html
- Invoice: no VAT may be shown; if it is, it is owed. A note on the exemption is expected. Recommended wording (WKO): **"Umsatzsteuerfrei aufgrund der Kleinunternehmerregelung"** (optionally adding "gem. § 6 Abs. 1 Z 27 UStG"). Source: https://www.wko.at/steuern/kleinunternehmerregelung-umsatzsteuer . Whether this is strictly mandatory under § 11 UStG, and whether Kleinunternehmer may always use the simplified ≤ €400 invoice format regardless of amount: sources conflict, **UNVERIFIED**. See https://www.wko.at/oe/epu/epu-erfolgstipps.pdf

### 4. Cross-border B2B services (reverse charge)
- Invoice: issue by the 15th of the month after the service. Include a note on the transfer of tax liability, e.g. **"Übergang der Steuerschuld auf den Leistungsempfänger"** (English "Reverse charge"); the **supplier's UID and the customer's UID**; no VAT shown. Source: https://www.usp.gv.at/themen/steuern-finanzen/umsatzsteuer-ueberblick/weitere-informationen-zur-umsatzsteuer/umsaetze-mit-auslandsbezug/grenzueberschreitende-dienstleistungen.html ; https://www.wko.at/steuern/reverse-charge-dienstleistungen-b2b
- Recapitulative statement: **Zusammenfassende Meldung (ZM)** through FinanzOnline, by the **end of the month after the reporting period**: calendar month, or quarter for quarterly UVA filers. Source: https://www.wko.at/steuern/reverse-charge-dienstleistungen-b2b ; https://formulare.bmf.gv.at/service/formulare/inter-Steuern/pdfd/9999/U13a.pdf

### 5. Mandatory invoice contents (§ 11 UStG)
Name and address of supplier and recipient; quantity and description; **date or period of the supply or service**; net amount, tax rate and tax amount; invoice date; sequential number; supplier's UID; recipient's UID if over €10,000 gross B2B. For ≤ €400 gross (Kleinbetragsrechnung), recipient details, number and UID may be omitted. Source: https://www.usp.gv.at/themen/steuern-finanzen/umsatzsteuer-ueberblick/rechnung.html ; https://www.wko.at/steuern/rechnung-richtig-ausstellen

### 6. E-invoicing
- B2G e-invoicing to the federal government is mandatory (since 2014). There is **no B2B or B2C mandate today and none enacted for 2027**, so a PDF is valid. ViDA cross-border B2B e-invoicing and reporting apply from 1 Jul 2030. Source: https://www.wko.at/aussenwirtschaft/e-rechnung-pflicht ; https://kpmg.com/at/de/insights/2026/03/vida-herausforderungen-und-chancen-in-der-umsatzsteuer.html

### 7. VAT return frequency and deadline
- **UVA** is quarterly if prior-year turnover ≤ €100,000, monthly above that. It is due on the **15th of the second month after the period** (quarterly: 15 May, 15 Aug, 15 Nov, 15 Feb). Source: https://www.usp.gv.at/themen/steuern-finanzen/umsatzsteuer-ueberblick/umsatzsteuervoranmeldung-und-umsatzsteuererklaerung.html
- **No nil return:** if prior-year turnover is ≤ €55,000 and the payment is made on time (or there is no payment or credit), no UVA needs to be filed. An internal U30 record must still be kept. An annual return is required. Source: https://www.usp.gv.at/themen/steuern-finanzen/umsatzsteuer-ueberblick/weitere-informationen-zur-umsatzsteuer/entstehen-der-steuerschuld-und-pflichten/umsatzsteuervoranmeldung.html ; https://www.wko.at/steuern/umsatzsteuervoranmeldung-umsatzsteuerjahreserklaerung

### 8. Income-tax withholding on invoices
None for resident freelancers. (§ 99 EStG withholding applies only to certain payments to non-residents and is done by the payer.) **UNVERIFIED** against an official page.

---

## Corrections to the app

| # | Country | Field | Currently in app | Correct value |
|---|---|---|---|---|
| 1 | NL | Small-business regime | Not supported | Add **KOR** (art. 25 Wet OB): €20,000 per calendar year, opt-in, ends immediately when exceeded; no VAT on the invoice; note e.g. "Factuur vrijgesteld van OB o.g.v. artikel 25 Wet OB" (or "Vrijgesteld van btw – kleineondernemersregeling"); hide the btw-id field when KOR is on |
| 2 | NL | Seller ID label | "KvK-nummer" | "KVK-nummer" (cosmetic). Warn users never to enter the omzetbelastingnummer |
| 3 | NL | Income-tax deadline | 1 May | "before 1 May" (i.e. 30 April), or the date in the aangiftebrief |
| 4 | NL | Reverse-charge text | (check) | "Btw verlegd" + customer btw-id; remind the user to file the opgaaf ICP |
| 5 | BE | Reduced rates | 6 | 6 **and 12** |
| 6 | BE | Small-business regime | Not supported | Add **vrijstellingsregeling kleine ondernemingen** (art. 56bis W.BTW): €25,000 excluding VAT; no VAT; mention "Bijzondere vrijstellingsregeling kleine ondernemingen"; annual klantenlisting turnover report |
| 7 | BE | Invoice format | PDF for all | **Domestic B2B: PDF not valid since 1 Jan 2026** (Peppol BIS 3.0 mandatory, small-business-exempt sellers included). Keep PDF for B2C and for non-BE customers; block or warn on BE→BE B2B PDF |
| 8 | BE | VAT return deadline (if shown) | (unknown) | Quarterly: 25th of the month after the quarter (monthly: 20th); nil return required |
| 9 | BE | Reverse-charge text | (check) | "Verlegging van heffing" / "Autoliquidation" (art. 21 §2 W.BTW); customer VAT number; file the IC-listing |
| 10 | DE | Kleinunternehmer text | "Gemäß §19 UStG wird keine Umsatzsteuer berechnet." | Still acceptable. Recommended post-2025 wording: "Steuerfreie Leistung gemäß § 19 UStG (Kleinunternehmerregelung)." |
| 11 | DE | Kleinunternehmer thresholds (if stored) | (check; old €22,000 / €50,000) | €25,000 previous year **and** €100,000 current year (hard cap, net) |
| 12 | DE | Tax name | "MwSt" | "USt." preferred (legal term). "MwSt." is tolerated |
| 13 | DE | E-invoice | PDF for all | Domestic B2B: PDF allowed with consent until 31 Dec 2026; in 2027 only if 2026 turnover ≤ €800k; **from 1 Jan 2028 XRechnung/ZUGFeRD required**. Kleinunternehmer and ≤ €250 exempt. Plan ZUGFeRD output |
| 14 | DE | Reverse-charge text | (check) | "Steuerschuldnerschaft des Leistungsempfängers" + both USt-IdNr.; ZM quarterly by the 25th (not for Kleinunternehmer) |
| 15 | DE | Seller ID | Steuernummer **and** USt-IdNr. | Either one is legally sufficient (§ 14 Abs. 4 Nr. 2); make the Steuernummer optional when a USt-IdNr. is given |
| 16 | AT | Reduced rates | 10 | 10, **13**, and **4.9** (basic foods, since 1 Jul 2026) |
| 17 | AT | Seller IDs | "Steuernummer" and "UID-Nummer" | **UID-Nummer** only (ATU + 8 digits); the Steuernummer is not an invoice element. Add customer UID for domestic B2B over €10,000 gross |
| 18 | AT | Small-business regime | Not supported | Add **Kleinunternehmerregelung** (§ 6 Abs. 1 Z 27 UStG): €55,000 **gross**, current and previous year, 10% tolerance; note "Umsatzsteuerfrei aufgrund der Kleinunternehmerregelung" |
| 19 | AT | Reverse-charge text | (check) | "Übergang der Steuerschuld auf den Leistungsempfänger" + both UIDs; ZM by the end of the following month |
| 20 | All | Invoice fields | (check) | Make sure the customer address and the service date/period are always printed (mandatory in all four countries) |
| 21 | All | Withholding | none | Correct: no income-tax withholding line needed (not verified against official pages) |

### UNVERIFIED items
- NL: exact current KOR minimum-participation rule; whether KOR traders still file the opgaaf ICP; EU-KOR details from an NL page.
- BE: exact statutory wording of the small-business and reverse-charge mentions; bank-account requirement under art. III.25 WER; non-alcoholic horeca drinks at 12%; the 2028 e-reporting date; 2027 rate changes.
- DE: whether Kleinunternehmer still file an annual VAT return after 2025 (I believe not).
- AT: whether the Kleinunternehmer exemption note is strictly mandatory or recommended, and whether simplified invoices apply regardless of amount.
- All: the withholding conclusions; and none of the official pages could be loaded directly in this session.
