import type { Metadata } from "next";
import { Header, Footer } from "../components";
import { site, services } from "../data";
import { ReviewsMarquee } from "../ReviewsMarquee";
import StandardContactForm from "./StandardContactForm";
import styles from "./contact.module.css";

const pageUrl = "https://outsourcedhelpdeskservices.com/contact-us";
const description = "Build a reliable outsourced help desk around clear ticket ownership, escalations, and service standards.";
export const metadata: Metadata = {
  title: "Contact Us | Free Consultation", description,
  alternates: { canonical: pageUrl }, robots: { index: true, follow: true },
  openGraph: { title: `Contact ${site.brand}`, description, url: pageUrl, type: "website", images: [{ url: "/brand/stealth-agents-team-bacolod.jpg", alt: "Official Stealth Agents team in Bacolod" }] },
};
const prep = ["The ticket types and channels you need covered", "Hours, response targets, tools, and access limits", "Escalation owners and quality review expectations"];

export default function ContactUsPage() { return <><Header/><main className={styles.page}>
  <section className={styles.hero}><div className={styles.shellGrid}><div><p className={styles.eyebrow}>Build dependable help desk coverage</p><h1>Turn an overloaded support queue into a clear operating plan.</h1><p className={styles.lead}>Tell us where tickets stall, which requests repeat, and what your internal owners must retain. We will prepare a focused staffing conversation around your workflow.</p><div className={styles.checks}>{prep.map(x=><span key={x}>✓ {x}</span>)}</div><ReviewsMarquee compact /></div><div id="consultation-form"><StandardContactForm endpoint="/api/contact" encoding="form"/></div></div></section>
  <section className={`${styles.section} ${styles.official}`}><div className={styles.shellGrid}><img src="/brand/stealth-agents-team-bacolod.jpg" alt="Official Stealth Agents team, Bacolod"/><div><img className={styles.partnerLogo} src="/brand/stealth-agents-logo.png" alt="Stealth Agents logo"/><p className={styles.kicker}>Official team, Bacolod</p><h2>Meet the team behind the staffing conversation.</h2><p className={styles.sub}>Stealth Agents supports recruiting and staffing after the queue, access limits, escalation owners, and review plan are defined.</p><a className={styles.textLink} href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Powered by StealthAgents</a></div></div></section>
  <section className={styles.section}><div className={styles.shell}><p className={styles.kicker}>Prepare the brief</p><h2>What to bring to your consultation</h2><div className={styles.cards}>{prep.map(x=><article key={x}><h3>{x}</h3><p>Real examples help define a practical handoff, permissions, and review rhythm.</p></article>)}</div></div></section>
  <section className={`${styles.section} ${styles.soft}`}><div className={styles.shell}><p className={styles.kicker}>How the consultation works</p><h2>Scope the queue before staffing begins.</h2><p className={styles.sub}>We use your real ticket lanes, permissions, escalation owners, and review requirements to shape a bounded role brief.</p></div></section>
  <section className={styles.section}><div className={styles.shellGrid}><div><p className={styles.kicker}>Coverage possibilities</p><h2>Shape the role around work your queue actually receives.</h2><p className={styles.sub}>Start with one bounded workstream, then expand only after ownership and quality checks are working.</p><a className={styles.textLink} href="#consultation-form">Plan my help desk role →</a></div><div className={styles.tags}>{services.slice(0,8).map(s=><span key={s.slug}>{s.title}</span>)}</div></div></section>
  <section className={styles.final}><div className={styles.shell}><h2>Ready to improve help desk coverage?</h2><p>Share the queue, tools, hours, and service expectations you need supported.</p><a href="#consultation-form">Book a free consultation</a></div></section>
  </main><Footer/></> }
