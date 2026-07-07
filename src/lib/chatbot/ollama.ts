import { getKnowledgeContext } from "@/lib/chatbot/knowledge";
import type { ChatMessage, ChatResponse } from "@/lib/chatbot/types";

const DEFAULT_MODEL = "llama3.2";
const OLLAMA_TIMEOUT_MS = 12_000;

function getOllamaUrl(): string | null {
  return process.env.OLLAMA_URL ?? process.env.OLLAMA_BASE_URL ?? null;
}

export function isOllamaEnabled(): boolean {
  return Boolean(getOllamaUrl());
}

export async function queryOllama(
  message: string,
  history: ChatMessage[] = [],
): Promise<ChatResponse | null> {
  const baseUrl = getOllamaUrl();
  if (!baseUrl) {
    return null;
  }

  const model = process.env.OLLAMA_MODEL ?? DEFAULT_MODEL;
  const systemPrompt = getKnowledgeContext();

  const messages = [
    { role: "system", content: systemPrompt },
    ...history.slice(-6).map((entry) => ({ role: entry.role, content: entry.content })),
    { role: "user", content: message },
  ];

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), OLLAMA_TIMEOUT_MS);

  try {
    const response = await fetch(`${baseUrl.replace(/\/$/, "")}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model,
        messages,
        stream: false,
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      return null;
    }

    const data = (await response.json()) as {
      message?: { content?: string };
    };

    const content = data.message?.content?.trim();
    if (!content) {
      return null;
    }

    return {
      intent: "ollama_response",
      message: content,
    };
  } catch {
    return null;
  } finally {
    clearTimeout(timeout);
  }
}
