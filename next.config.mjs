/** @type {import("next").NextConfig} */
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline' https://acrtracking.stealthagents.us; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://acrtracking.stealthagents.us; frame-src https://go.oncehub.com; base-uri 'self'; form-action 'self'; frame-ancestors 'self'; upgrade-insecure-requests" },
];
const nextConfig = {
  poweredByHeader: false,
  async headers(){return [{source:'/(.*)',headers:securityHeaders}]},
  async redirects(){return [
    {source:'/:path*',has:[{type:'host',value:'www.outsourcedhelpdeskservices.com'}],destination:'https://outsourcedhelpdeskservices.com/:path*',permanent:true},
    {source:'/contact',destination:'/contact-us',permanent:true},
  ]},
};
export default nextConfig;
