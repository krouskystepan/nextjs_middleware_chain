import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.url;
  console.log('middleware => ' + url);

  return NextResponse.next();
}

export const config = {
  matcher: ['/about'],
};
