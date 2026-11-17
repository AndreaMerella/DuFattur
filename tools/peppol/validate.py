"""Validate a UBL invoice against the official EN 16931 + Peppol BIS 3.0 Schematron rules."""
import sys, os, re, json
from saxonche import PySaxonProcessor

HERE = os.path.dirname(os.path.abspath(__file__))
VENDOR = os.environ.get('PEPPOL_VENDOR', os.path.join(HERE, 'vendor'))
ISO = os.path.join(VENDOR, 'schematron', 'trunk', 'schematron', 'code')
SCH = os.path.join(VENDOR, 'peppol-bis-invoice-3', 'rules', 'sch')
CACHE = os.path.join(VENDOR, 'compiled')
RULESETS = ['CEN-EN16931-UBL.sch', 'PEPPOL-EN16931-UBL.sch']

def compile_rules(proc):
    os.makedirs(CACHE, exist_ok=True)
    xslt = proc.new_xslt30_processor()
    out = []
    for name in RULESETS:
        target = os.path.join(CACHE, name + '.xsl')
        if not os.path.exists(target):
            step = os.path.join(SCH, name)
            for i, stage in enumerate(['iso_dsdl_include.xsl', 'iso_abstract_expand.xsl', 'iso_svrl_for_xslt2.xsl']):
                ex = xslt.compile_stylesheet(stylesheet_file=os.path.join(ISO, stage))
                nxt = target if i == 2 else os.path.join(CACHE, f'{name}.{i}.xml')
                ex.transform_to_file(source_file=step, output_file=nxt)
                step = nxt
        out.append(target)
    return out

def validate(path):
    with PySaxonProcessor(license=False) as proc:
        xslt = proc.new_xslt30_processor()
        findings = []
        for rules in compile_rules(proc):
            ex = xslt.compile_stylesheet(stylesheet_file=rules)
            svrl = ex.transform_to_string(source_file=path)
            for m in re.finditer(r'<svrl:failed-assert\b([^>]*)>(.*?)</svrl:failed-assert>', svrl, re.S):
                attrs, body = m.group(1), m.group(2)
                rid = re.search(r'\bid="([^"]*)"', attrs)
                flag = re.search(r'\bflag="([^"]*)"', attrs)
                text = re.search(r'<svrl:text>(.*?)</svrl:text>', body, re.S)
                findings.append({'rules': os.path.basename(rules).replace('.sch.xsl', ''),
                                 'id': rid.group(1) if rid else '?', 'flag': flag.group(1) if flag else 'fatal',
                                 'text': re.sub(r'\s+', ' ', text.group(1)).strip() if text else ''})
        return findings

if __name__ == '__main__':
    res = {p: validate(p) for p in sys.argv[1:]}
    print(json.dumps(res, indent=1, ensure_ascii=False))
    sys.exit(1 if any(f['flag'] != 'warning' for fs in res.values() for f in fs) else 0)
