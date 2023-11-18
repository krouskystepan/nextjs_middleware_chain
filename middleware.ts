import { chain } from '@/middlewares/chain';
import { authMiddleware } from '@/middlewares/authMiddleware';
import { i18nMiddleware } from '@/middlewares/i18nMiddleware';
// import { test } from './middlewares/test';

export default chain([authMiddleware, i18nMiddleware]);

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
