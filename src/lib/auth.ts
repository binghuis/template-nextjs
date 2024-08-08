import type { NextRequest } from 'next/server';

export function isAuthenticated(request: NextRequest) {
  return request.headers.get('token');
}
