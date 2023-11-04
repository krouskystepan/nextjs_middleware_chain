import { NextMiddleware, NextResponse } from 'next/server';

type MiddlewareFactoy = (middleware: NextMiddleware) => NextMiddleware;

export function chain(
  functions: MiddlewareFactoy[],
  index = 0
): NextMiddleware {
  const current = functions[index];

  if (current) {
    const next = chain(functions, index + 1);
    return current(next);
  }
  return () => NextResponse.next();
}
