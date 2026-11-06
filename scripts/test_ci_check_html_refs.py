"""Tests for ci_check_html_refs.py: a broken local reference fails, external and sibling-site ones do not.

Usage:
  python -m unittest scripts/test_ci_check_html_refs.py
"""
import os
import sys
import tempfile
import unittest

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import ci_check_html_refs as C  # noqa: E402


class HtmlRefs(unittest.TestCase):
    def site(self, html, files=()):
        tmp = tempfile.TemporaryDirectory()
        self.addCleanup(tmp.cleanup)
        os.makedirs(os.path.join(tmp.name, "sub"))
        for f in files:
            open(os.path.join(tmp.name, f), "w").close()
        with open(os.path.join(tmp.name, "sub", "index.html"), "w", encoding="utf-8") as f:
            f.write(html)
        return tmp.name

    def test_existing_relative_reference_passes(self):
        root = self.site('<script src="../app.js?v=2"></script><link href="../a.css" rel="stylesheet">',
                         ["app.js", "a.css"])
        self.assertEqual(C.check_html_refs(root), [])

    def test_missing_local_reference_fails(self):
        out = C.check_html_refs(self.site('<script src="../typo.js"></script>'))
        self.assertEqual(len(out), 1)
        self.assertIn("'../typo.js'", out[0])

    def test_external_and_sibling_site_references_are_skipped(self):
        html = ('<link href="https://fonts.googleapis.com/x" rel="stylesheet">'
                '<script src="/social-statistics-swipe-cards/boot.js"></script>')
        self.assertEqual(C.check_html_refs(self.site(html)), [])

    def test_real_site_passes(self):
        self.assertEqual(C.check_html_refs(), [])


if __name__ == "__main__":
    unittest.main()
