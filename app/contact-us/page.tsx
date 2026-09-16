import type { Metadata } from "next";
import { Header, Footer } from "../components";
import { TestimonialsRail } from "../booking-components";
import { site, services } from "../data";
import StandardContactForm from "./StandardContactForm";
import styles from "./contact.module.css";

const pageUrl = "https://outsourcedhelpdeskservices.com/contact-us";
const description = "Build a reliable outsourced help desk around clear ticket ownership, escalations, and service standards.";
export const metadata: Metadata = {
  title: `Contact ${site.brand} | Free Consultation`,
  description,
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: { title: `Contact ${site.brand}`, description, url: pageUrl, type: "website", images: [{ url: "/helpdesk-team.jpg", alt: site.alt }] },
};
const prep = ["The ticket types and channels you need covered", "Hours, response targets, tools, and access limits", "Escalation owners and quality-review expectations"];

export default function ContactUsPage() { return <><Header/><main className={styles.page}>
  <section className={styles.hero}><div className={styles.shellGrid}><div><p className={styles.eyebrow}>Build dependable help desk coverage</p><h1>Turn an overloaded support queue into a clear operating plan.</h1><p className={styles.lead}>Tell us where tickets stall, which requests repeat, and what your internal owners must retain. We’ll prepare a focused staffing conversation around your workflow.</p><div className={styles.checks}>{prep.map(x=><span key={x}>✓ {x}</span>)}</div><a className={styles.powered} href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Powered by Stealth Agents</a></div><div id="consultation-form"><StandardContactForm endpoint="/api/contact" encoding="form"/></div></div></section>
  <section className={styles.section}><div className={styles.shell}><p className={styles.kicker}>Prepare the brief</p><h2>What to bring to your consultation</h2><div className={styles.cards}>{prep.map((x,i)=><article key={x}><b>0{i+1}</b><h3>{x}</h3><p>Real examples help define a practical handoff, permissions, and review rhythm.</p></article>)}</div></div></section>
  <section className={`${styles.section} ${styles.soft}`}><div className={styles.shell}><p className={styles.kicker}>Client perspective</p><h2>What Stealth Agents clients say</h2><p className={styles.sub}>Attributed client feedback provides context for the staffing partner behind this consultation path.</p><TestimonialsRail contact/></div></section>
  <section className={styles.section}><div className={styles.shellGrid}><div><p className={styles.kicker}>Coverage possibilities</p><h2>Shape the role around work your queue actually receives.</h2><p className={styles.sub}>Start with one bounded workstream, then expand only after ownership and quality checks are working.</p><a className={styles.textLink} href="#consultation-form">Plan my help desk role →</a></div><div className={styles.tags}>{services.slice(0,8).map(s=><span key={s.slug}>{s.title}</span>)}</div></div></section>
  <section className={`${styles.section} ${styles.about}`}><div className={styles.shellGrid}><img src="/helpdesk-team.jpg" alt={site.alt}/><div><p className={styles.kicker}>Our staffing partner</p><h2>About Stealth Agents</h2><p>Stealth Agents works with over 35+ different industries. We&apos;re featured on Forbes as the top rated virtual assistant company.</p><a className={styles.textLink} href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Powered by Stealth Agents</a></div></div></section>
  <section className={styles.section}><div className={styles.shell}><p className={styles.kicker}>A safer launch</p><h2>Clear scope before recruiting starts</h2><div className={styles.cards}><article><h3>Named ownership</h3><p>Keep sensitive decisions with the right internal owner.</p></article><article><h3>Documented handoffs</h3><p>Define inputs, outputs, and escalation checkpoints.</p></article><article><h3>Measured quality</h3><p>Review early work before expanding the queue.</p></article></div></div></section>
  <section className={styles.final}><div className={styles.shell}><h2>Ready to improve help desk coverage?</h2><p>Share the queue, tools, hours, and service expectations you need supported.</p><a href="#consultation-form">Book a free consultation</a></div></section>
  </main><Footer/></> }
