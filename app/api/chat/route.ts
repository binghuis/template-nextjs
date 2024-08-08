import { azure } from '@ai-sdk/azure';
import { APICallError, streamText } from 'ai';
import { NextResponse } from 'next/server';

// Optional, but recommended: run on the edge runtime.
// See https://vercel.com/docs/concepts/functions/edge-functions
export const runtime = 'edge';

const openai = azure('your-deployment-name', {
  logitBias: {
    // optional likelihood for specific tokens
    '50256': -100,
  },
  user: 'test-user', // optional unique user identifier
});

export async function POST(req: Request) {
  const { messages, model } = await req.json();
  try {
    const response = await streamText({
      model: azure(model ?? 'gpt-3.5-turbo'),
      messages,
    });

    return response.toDataStreamResponse();
  } catch (error) {
    if (error instanceof APICallError) {
      const { statusCode, message } = error;
      return NextResponse.json({ status: statusCode, message });
    } else {
      throw error;
    }
  }
}
