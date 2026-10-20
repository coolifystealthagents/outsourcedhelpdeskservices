import { NextRequest, NextResponse } from 'next/server';

const canonicalHost = 'outsourcedhelpdeskservices.com';

export function middleware(request: NextRequest) {
  const forwardedProto = request.headers.get('x-forwarded-proto')?.split(',')[0]?.trim();
  const forwardedHost = request.headers.get('x-forwarded-host')?.split(',')[0]?.trim();
  const requestHost = (forwardedHost || request.headers.get('host') || '').split(':')[0].toLowerCase();
  const isLocal = requestHost === 'localhost' || requestHost === '127.0.0.1';
  const needsHttps = forwardedProto === 'http' && !isLocal;
  const needsCanonicalHost = requestHost === `www.${canonicalHost}`;

  if (needsHttps || needsCanonicalHost) {
    const destination = request.nextUrl.clone();
    destination.protocol = 'https:';
    destination.hostname = canonicalHost;
    destination.port = '';
    return NextResponse.redirect(destination, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico).*)',
};