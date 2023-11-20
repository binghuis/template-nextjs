import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';
// Optional, but recommended: run on the edge runtime.
// See https://vercel.com/docs/concepts/functions/edge-functions
export const runtime = 'edge';

const openai = new OpenAI({
  apiKey: '',
  baseURL: '',
});

export async function POST(req: Request) {
  const { messages, model } = await req.json();
  try {
    // Request the OpenAI API for the response based on the prompt
    const response = await openai.chat.completions.create({
      model: model ?? 'gpt-3.5-turbo',
      stream: true,
      messages,
    });

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response as any);

    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (error) {
    // Check if the error is an APIError
    if (error instanceof OpenAI.APIError) {
      const { name, status, headers, message } = error;
      return Response.json({ status, message }, { status });
    } else {
      throw error;
    }
  }
}
