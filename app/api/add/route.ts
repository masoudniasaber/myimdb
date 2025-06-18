import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const a = parseFloat(searchParams.get('a') || '0');
  const b = parseFloat(searchParams.get('b') || '0');
  const result = a + b;

  return new Response(`Result: ${a} + ${b} = ${result}`);
}
