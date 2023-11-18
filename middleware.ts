import { chain } from '@/middlewares/chain';
import { withAuthMiddleware } from '@/middlewares/withAuth';
import { withi18nMiddleware } from '@/middlewares/withi18n';
import { test } from './middlewares/test';

export default chain([withAuthMiddleware, withi18nMiddleware, test]);

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
