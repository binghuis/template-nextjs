import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: unknown }) {
  const cookieStore = cookies();
  const token = cookieStore.get('token') ?? '';

  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': `token=${token}` },
  });
}
