import { matchChatIntent } from "@/lib/chatbot/intents";
import { isOllamaEnabled, queryOllama } from "@/lib/chatbot/ollama";
import type { ChatRequest, ChatResponse } from "@/lib/chatbot/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: ChatRequest;

  try {
    body = (await request.json()) as ChatRequest;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const message = body.message?.trim();
  if (!message) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }

  const intentResponse = matchChatIntent(message);

  if (intentResponse.intent !== "fallback_help") {
    return NextResponse.json(intentResponse satisfies ChatResponse);
  }

  if (isOllamaEnabled()) {
    const ollamaResponse = await queryOllama(message, body.history ?? []);
    if (ollamaResponse) {
      return NextResponse.json(ollamaResponse);
    }
  }

  return NextResponse.json(intentResponse);
}
