#!/usr/bin/env python3
import json
import re
import sys
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse

SLUG = "help-desk-outsourcing-companies-philippines-vetting"
KEYWORD = "help desk outsourcing companies"
EXACT_QUOTE = "The CSF has been a vital tool for many organizations, helping them anticipate and deal with cybersecurity threats."
FORBIDDEN = ["pricing", "rates", "tiers"]

class Node:
    def __init__(self, tag="", attrs=None, parent=None):
        self.tag = tag
        self.attrs = dict(attrs or [])
        self.parent = parent
        self.children = []
        self.text = []

    def classes(self):
        return set(self.attrs.get("class", "").split())

    def all_text(self):
        parts = list(self.text)
        for child in self.children:
            parts.append(child.all_text())
        return " ".join(parts)

    def walk(self):
        yield self
        for child in self.children:
            yield from child.walk()

class TreeParser(HTMLParser):
    void = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"}
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.root = Node("root")
        self.stack = [self.root]

    def handle_starttag(self, tag, attrs):
        node = Node(tag, attrs, self.stack[-1])
        self.stack[-1].children.append(node)
        if tag not in self.void:
            self.stack.append(node)

    def handle_startendtag(self, tag, attrs):
        self.stack[-1].children.append(Node(tag, attrs, self.stack[-1]))

    def handle_endtag(self, tag):
        for index in range(len(self.stack) - 1, 0, -1):
            if self.stack[index].tag == tag:
                self.stack = self.stack[:index]
                break

    def handle_data(self, data):
        if self.stack[-1].tag not in {"script", "style"}:
            self.stack[-1].text.append(data)


def words(text):
    return re.findall(r"\b[\w]+(?:['’-][\w]+)*\b", text, re.UNICODE)


def sentence_count(text):
    cleaned = re.sub(r"\s+", " ", text).strip()
    return len([part for part in re.split(r"(?<=[.!?])[\"']?\s+", cleaned) if part.strip()])


def main():
    repo = Path(__file__).resolve().parents[1]
    html_path = repo / ".next" / "server" / "app" / "blog" / f"{SLUG}.html"
    if not html_path.exists():
        raise SystemExit(f"missing built article: {html_path}")
    raw = html_path.read_text(encoding="utf-8")
    parser = TreeParser()
    parser.feed(raw)
    nodes = list(parser.root.walk())
    article = next((node for node in nodes if node.tag == "article" and node.attrs.get("data-article-marker") == "philippines-provider-vetting-2026"), None)
    if article is None:
        raise SystemExit("strict article root not found")
    article_nodes = list(article.walk())
    article_text = re.sub(r"\s+", " ", article.all_text()).strip()
    h1 = next((re.sub(r"\s+", " ", node.all_text()).strip() for node in article_nodes if node.tag == "h1"), "")
    banners = [node for node in article_nodes if "article-banner" in node.classes()]
    svgs = [node for node in article_nodes if node.tag == "svg"]
    svg_markers = {node.attrs.get("data-visual") for node in svgs}
    links = [node.attrs.get("href", "") for node in article_nodes if node.tag == "a"]
    internal = [href for href in links if href.startswith("/")]
    external = [href for href in links if href.startswith("http")]
    missing_internal = []
    for href in sorted(set(internal)):
        route = href.split("#", 1)[0].strip("/")
        if not route:
            continue
        candidates = [repo / ".next" / "server" / "app" / f"{route}.html", repo / ".next" / "server" / "app" / route / "index.html"]
        if not any(path.exists() for path in candidates):
            missing_internal.append(href)
    narrative_paragraphs = []
    for node in article_nodes:
        if node.tag != "p":
            continue
        if "module-kicker" in node.classes():
            continue
        ancestors = []
        parent = node.parent
        while parent and parent is not article:
            ancestors.extend(parent.classes())
            parent = parent.parent
        if "article-section" in ancestors or "answer-module" in ancestors:
            text = re.sub(r"\s+", " ", node.all_text()).strip()
            narrative_paragraphs.append({"text": text[:90], "sentences": sentence_count(text)})
    bad_paragraphs = [item for item in narrative_paragraphs if item["sentences"] not in {2, 3}]
    schemas = []
    for match in re.finditer(r'<script[^>]+type="application/ld\+json"[^>]*>(.*?)</script>', raw, re.S):
        try:
            schemas.append(json.loads(match.group(1)))
        except json.JSONDecodeError:
            pass
    schema_types = set()
    def collect(value):
        if isinstance(value, dict):
            kind = value.get("@type")
            if isinstance(kind, str): schema_types.add(kind)
            elif isinstance(kind, list): schema_types.update(item for item in kind if isinstance(item, str))
            for child in value.values(): collect(child)
        elif isinstance(value, list):
            for child in value: collect(child)
    for schema in schemas: collect(schema)
    lower_full = re.sub(r"\s+", " ", parser.root.all_text()).lower()
    forbidden_copy = {term: len(re.findall(rf"\b{re.escape(term)}\b", lower_full)) for term in FORBIDDEN}
    forbidden_hrefs = [href for href in [node.attrs.get("href", "") for node in nodes if node.tag == "a"] if "/pricing" in href.lower()]
    canonicals = [node.attrs.get("href") for node in nodes if node.tag == "link" and node.attrs.get("rel") == "canonical"]
    result = {
        "article_words": len(words(article_text)),
        "h1": h1,
        "h1_starts_keyword": h1.lower().startswith(KEYWORD),
        "canonical": canonicals,
        "unique_marker": "philippines-provider-vetting-2026" in raw,
        "narrative_paragraphs": len(narrative_paragraphs),
        "bad_paragraphs": bad_paragraphs,
        "rotating_banners": len(banners),
        "svg_count": len(svgs),
        "svg_markers": sorted(item for item in svg_markers if item),
        "table_count": sum(1 for node in article_nodes if node.tag == "table"),
        "methods_note": any("methods-note" in node.classes() for node in article_nodes),
        "internal_links": len(internal),
        "external_links": len(external),
        "missing_internal": missing_internal,
        "exact_quote": EXACT_QUOTE in article_text,
        "dated_stats": {"1.82 million": "1.82 million" in article_text, "4%": "4%" in article_text, "1.85m to 2.14m": "1.85m to 2.14m" in article_text},
        "numbered_sources": sum(1 for node in article_nodes if node.attrs.get("id", "").startswith("source-")),
        "forbidden_copy": forbidden_copy,
        "forbidden_hrefs": forbidden_hrefs,
        "schema_types": sorted(schema_types),
        "sitemap_route": f"/blog/{SLUG}" in (repo / ".next" / "server" / "app" / "sitemap.xml.body").read_text(encoding="utf-8"),
    }
    failures = []
    if not 1500 <= result["article_words"] <= 2000: failures.append("article_words")
    if not result["h1_starts_keyword"]: failures.append("h1")
    if result["canonical"] != [f"https://outsourcedhelpdeskservices.com/blog/{SLUG}"]: failures.append("canonical")
    if result["bad_paragraphs"]: failures.append("paragraphs")
    if result["rotating_banners"] != 3: failures.append("banners")
    if result["svg_count"] != 2 or svg_markers != {"workforce-evidence-chart", "provider-vetting-process"}: failures.append("visuals")
    if result["table_count"] < 1 or not result["methods_note"]: failures.append("table_or_methods")
    if result["internal_links"] < 3 or result["external_links"] < 4 or result["missing_internal"]: failures.append("links")
    if not result["exact_quote"] or not all(result["dated_stats"].values()) or result["numbered_sources"] < 5: failures.append("evidence")
    if any(result["forbidden_copy"].values()) or result["forbidden_hrefs"]: failures.append("forbidden")
    if not {"BlogPosting", "FAQPage", "BreadcrumbList"}.issubset(schema_types): failures.append("schema")
    if not result["sitemap_route"]: failures.append("sitemap")
    result["failures"] = failures
    print(json.dumps(result, indent=2))
    raise SystemExit(1 if failures else 0)

if __name__ == "__main__":
    main()
