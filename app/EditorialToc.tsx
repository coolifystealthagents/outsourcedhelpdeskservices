"use client";

import { useEffect, useState } from "react";

type Item = { id: string; label: string; level: 2 | 3 };
type RelatedLink = { href: string; label: string };

type EditorialTocProps = {
  published?: string;
  updated?: string;
  readingTime?: number;
  publisher?: string;
  related?: RelatedLink[];
  sourceCount?: number;
  family?: "Blog" | "Research";
};

const formatDate = (date: string) => new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
}).format(new Date(`${date}T00:00:00Z`));

export function EditorialToc({
  published,
  updated,
  readingTime,
  publisher = "Outsourced Helpdesk Services",
  related = [],
  sourceCount = 0,
  family = "Blog",
}: EditorialTocProps) {
  const [items, setItems] = useState<Item[]>([]);
  const [active, setActive] = useState("");

  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-editorial-content]") ?? document.querySelector("article");
    if (!root) return;
    const headings = Array.from(root.querySelectorAll<HTMLHeadingElement>("h2, h3"));
    const used = new Set<string>();
    const next = headings.map((heading, index) => {
      const base = heading.id || heading.textContent?.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "") || `section-${index + 1}`;
      let id = base;
      let suffix = 2;
      while (used.has(id)) id = `${base}-${suffix++}`;
      used.add(id);
      heading.id = id;
      return { id, label: heading.textContent?.trim() || `Section ${index + 1}`, level: heading.tagName === "H3" ? 3 : 2 } as Item;
    });
    setItems(next);
    setActive(next[0]?.id || "");

    const updateActive = () => {
      const offset = 132;
      let current = next[0]?.id || "";
      for (const item of next) {
        const heading = document.getElementById(item.id);
        if (heading && heading.getBoundingClientRect().top <= offset) current = item.id;
      }
      setActive(current);
    };
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  if (!items.length) return null;
  return (
    <aside className="editorial-sidebar" aria-label="Article tools">
      <div className="editorial-sidebar-sticky">
        <details className="editorial-toc" open>
          <summary>On this page</summary>
          <nav aria-label="Table of contents">
            {items.map((item) => (
              <a className={item.level === 3 ? "toc-subitem" : undefined} key={item.id} href={`#${item.id}`} aria-current={active === item.id ? "location" : undefined}>
                {item.label}
              </a>
            ))}
          </nav>
        </details>
        <section className="editorial-side-module" aria-labelledby="article-details-heading">
          <h2 id="article-details-heading">Article details</h2>
          <dl>
            <div><dt>Publisher</dt><dd>{publisher}</dd></div>
            {published ? <div><dt>Published</dt><dd><time dateTime={published}>{formatDate(published)}</time></dd></div> : null}
            {updated && updated !== published ? <div><dt>Updated</dt><dd><time dateTime={updated}>{formatDate(updated)}</time></dd></div> : null}
            {readingTime ? <div><dt>Reading time</dt><dd>{readingTime} minutes</dd></div> : null}
            {sourceCount ? <div><dt>Sources</dt><dd>{sourceCount} cited</dd></div> : null}
          </dl>
        </section>
        {related.length ? <section className="editorial-side-module" aria-labelledby="related-reading-heading">
          <h2 id="related-reading-heading">Related reading</h2>
          <ul>{related.map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul>
        </section> : null}
        <section className="editorial-side-cta" aria-labelledby="editorial-help-heading">
          <h2 id="editorial-help-heading">Plan your support workflow</h2>
          <p>Discuss scope, ownership, access, and handoffs with our team.</p>
          <a href="/contact-us">Contact us</a>
          <a className="editorial-service-link" href="/services">Explore services</a>
          <span>{family} guide</span>
        </section>
      </div>
    </aside>
  );
}
