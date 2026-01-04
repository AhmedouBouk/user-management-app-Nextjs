// src/app/api/auth/logout/route.ts

import { NextResponse } from 'next/server';

export async function POST() {
  // Since we're using JWT stored in cookies on the client side,
  // logout is handled on the client by removing the cookie.
  // This endpoint exists for API completeness and can be used
  // for any server-side cleanup if needed in the future.

  return NextResponse.json({ message: 'Logged out successfully' });
}
