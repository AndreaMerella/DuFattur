# Peppol / EN 16931 validator

Checks DuFattur's UBL export against the official Schematron rules
(CEN EN 16931 + Peppol BIS Billing 3.0), the same rules Peppol access points use.

```sh
cd tools/peppol
git clone --depth 1 https://github.com/OpenPEPPOL/peppol-bis-invoice-3.git vendor/peppol-bis-invoice-3
git clone --depth 1 https://github.com/Schematron/schematron.git vendor/schematron
python3 -m venv vendor/venv && vendor/venv/bin/pip install saxonche
vendor/venv/bin/python validate.py path/to/INV-2026-001.xml
```

Prints every failed rule (id, flag, message) and exits non-zero on any fatal error.
`PEPPOL-EN16931-R010` (buyer electronic address) is expected for private clients and
non-EU clients without a VAT number: those invoices can't travel over Peppol.
