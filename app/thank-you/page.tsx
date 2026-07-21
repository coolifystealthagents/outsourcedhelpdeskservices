import { Header, Footer } from '../components';

export const metadata = {
  title: 'Help desk request received',
  description: 'Your outsourced help desk planning request has been received.',
  robots: { index: false, follow: false },
};

export default function Thanks() {
  return <>
    <Header />
    <main className="section"><div className="container">
      <p className="eyebrow">Request sent</p>
      <h1>We have your help desk details.</h1>
      <p className="lead">The next step is to review your ticket types, hours, tools, and escalation needs. If anything is missing, the follow-up will ask for it.</p>
      <a className="btn" href="/blog">Read the help desk guides</a>
    </div></main>
    <Footer />
  </>;
}
