// src/middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'fallback-secret-change-me'
);

// Routes that require authentication
const protectedRoutes = ['/dashboard', '/admin'];

// Routes that require admin role
const adminRoutes = ['/admin'];

// Routes that should redirect to dashboard if already logged in
const authRoutes = ['/login', '/signup'];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get('token')?.value;

  // Check if accessing auth routes while logged in
  if (authRoutes.some((route) => pathname.startsWith(route))) {
    if (token) {
      try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        // Redirect to appropriate dashboard based on role
        if (payload.role === 'ADMIN') {
          return NextResponse.redirect(new URL('/admin', request.url));
        }
        return NextResponse.redirect(new URL('/dashboard', request.url));
      } catch {
        // Token is invalid, allow access to auth routes
        const response = NextResponse.next();
        response.cookies.delete('token');
        return response;
      }
    }
    return NextResponse.next();
  }

  // Check protected routes
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      const { payload } = await jwtVerify(token, JWT_SECRET);

      // Check admin routes
      if (adminRoutes.some((route) => pathname.startsWith(route))) {
        if (payload.role !== 'ADMIN') {
          return NextResponse.redirect(new URL('/dashboard', request.url));
        }
      }

      return NextResponse.next();
    } catch {
      // Token is invalid
      const response = NextResponse.redirect(new URL('/login', request.url));
      response.cookies.delete('token');
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/admin/:path*',
    '/login',
    '/signup',
  ],
};
