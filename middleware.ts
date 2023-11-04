import { chain } from '@/middlewares/chain';
import { withAuthMiddleware } from '@/middlewares/withAuth';
import { withI18nMiddleware } from '@/middlewares/withI18n';
import { test } from './middlewares/test';

export default chain([withAuthMiddleware, withI18nMiddleware, test]);

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
