// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Retrieve the IP address
  const ip = request.headers.get('x-forwarded-for') || request.ip || '0.0.0.0';

  // Pass the IP address to the response headers
  const response = NextResponse.next();
  response.headers.set('x-client-ip', ip);

  return response;
}

// Apply middleware to all routes in src/app
export const config = {
  matcher: '/src/app/:path*',
};