import './globals.css';
import type { Metadata } from 'next';
export const metadata: Metadata = { metadataBase: new URL('https://outsourcedhelpdeskservices.com'), title: { default: 'Outsourced Helpdesk Services | Offshore outsourcing guides', template: '%s | Outsourced Helpdesk Services' }, description: 'Stealth Agents-style guides for outsourced helpdesk services: pricing, services, onboarding, and provider questions.', openGraph: { title: 'Outsourced Helpdesk Services', description: 'Practical outsourcing guides for business teams.', url: 'https://outsourcedhelpdeskservices.com', siteName: 'Outsourced Helpdesk Services', type:'website' } };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang='en'><body>{children}</body></html>}
