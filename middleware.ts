import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

async function middleware1(request: NextRequest) {
  const url = request.url;
  console.log('middleware1 => ', { url });

  return NextResponse.next();
}

async function middleware2(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  console.log('middleware2 => ', { pathname });

  return NextResponse.next();
}

export async function middleware(request: NextRequest) {
  await middleware1(request);
  await middleware2(request);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)',],
};
