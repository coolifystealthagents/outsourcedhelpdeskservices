import * as data from '../data';

export function GET() {
  const d = data as any;
  const site = d.site || {};
  const services = d.services || [];
  const blogPosts = d.blogPosts || [];
  const base = `https://${String(site.domain).toLowerCase()}`;
  const paths = ['/', '/blog', '/contact', '/privacy', '/terms', '/cancellation-policy', ...services.map((service: any) => `/services/${service.slug}`), ...blogPosts.map((post: any) => `/blog/${post.slug}`)];
  const body = paths.map((path) => `<url><loc>${path === '/' ? base : `${base}${path}`}</loc></url>`).join('');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`, {
    headers: { 'content-type': 'application/xml' },
  });
}
