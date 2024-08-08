import { middlewareChain } from '@src/lib/utils';
import { withAuth } from '@src/middlewares/with-auth';
import { withCORS } from '@src/middlewares/with-cors';

export default middlewareChain([withCORS, withAuth]);

export const config = {
  matcher: '/api/:path*',
};
