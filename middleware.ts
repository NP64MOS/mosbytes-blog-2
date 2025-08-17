import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple authentication check
function isAuthenticated(request: NextRequest) {
  const authToken = request.cookies.get('admin_token');
  return authToken?.value === process.env.ADMIN_TOKEN;
}

export function middleware(request: NextRequest) {
  // Only run middleware on admin routes, but exclude login page
  if (request.nextUrl.pathname.startsWith('/admin') && 
      !request.nextUrl.pathname.startsWith('/admin/login')) {
    if (!isAuthenticated(request)) {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}
