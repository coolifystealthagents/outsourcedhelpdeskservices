import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://outsourcedhelpdeskservices.com'), title: { default: 'Outsourced Help Desk Services | Plan Your Support Team', template: '%s | Outsourced Help Desk Services' }, description: 'Plan outsourced help desk coverage, ticket triage, escalation, knowledge base work, and quality review.', openGraph: { title: 'Outsourced Help Desk Services', description: 'A practical way to plan help desk coverage, ownership, and escalation.', url: 'https://outsourcedhelpdeskservices.com', siteName: 'Outsourced Help Desk Services', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
