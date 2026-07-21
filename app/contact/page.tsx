import { Header, Footer, JsonLd } from '../components';
import { site, helpdeskOffer, leadQuestions, helpdeskFitNote } from '../data';

export const metadata = {
  title: `Contact ${site.brand}`,
  description: 'Share your ticket types, coverage hours, tools, and escalation needs to request an outsourced help desk plan.',
};

export default function Contact() {
  const siteUrl = `https://${String(site.domain).toLowerCase()}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'ContactPage', name: `Contact ${site.brand}`, url: `${siteUrl}/contact` },
      { '@type': 'Organization', name: site.brand, url: siteUrl },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteUrl}/contact` },
        ],
      },
    ],
  };

  return <>
    <Header />
    <main className="section"><JsonLd data={schema} /><div className="container two">
      <div>
        <p className="eyebrow">Help desk intake</p>
        <h1>Plan your outsourced help desk</h1>
        <p className="lead">Tell us what enters the queue, when people need help, and which decisions must stay with your team. Those details shape the support plan.</p>
        <div className="card"><h2>What the plan can cover</h2><ul className="list">{helpdeskOffer.included.map((item) => <li key={item}>{item}</li>)}</ul></div>
        <div className="card"><h2>Useful details to send</h2><ul className="list">{leadQuestions.map((question) => <li key={question}>{question}</li>)}</ul></div>
        <p className="callout"><b>Fit note:</b> {helpdeskFitNote}</p>
      </div>
      <form className="card" action="/thank-you">
        <label>Name<br /><input required name="name" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
        <label>Email<br /><input required name="email" type="email" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
        <label>Company / website<br /><input name="company" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
        <label>Which tickets or support work do you want covered?<br /><textarea name="tasks" rows={6} style={{ width: '100%', padding: 12, margin: '6px 0 14px' }} /></label>
        <label>What needs the most attention?<br /><select name="concern" style={{ width: '100%', padding: 12, margin: '6px 0 14px' }}><option>Ticket scope and ownership</option><option>Answer quality and review</option><option>Coverage hours and backup</option><option>Tool access and customer data</option><option>Escalation rules</option></select></label>
        <button className="btn" type="submit">Send help desk request</button>
      </form>
    </div></main>
    <Footer />
  </>;
}
