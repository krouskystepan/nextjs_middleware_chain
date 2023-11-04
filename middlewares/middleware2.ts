import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';
import { CustomMiddleware } from './chain';

export function withMiddleware2(middleware: CustomMiddleware) {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const response = NextResponse.next();
    const pathname = request.nextUrl.pathname;
    console.log('middleware2 => ', { pathname });

    return middleware(request, event, response);
  };
}
