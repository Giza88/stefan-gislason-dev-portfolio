"use client";

import type { ChatAction } from "@/lib/chatbot/types";
import ChatActions from "@/components/chat/ChatActions";

type ChatMessageProps = {
  role: "user" | "assistant";
  content: string;
  actions?: ChatAction[];
  onAction?: () => void;
};

export default function ChatMessage({ role, content, actions, onAction }: ChatMessageProps) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`chat-message max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
          isUser ? "chat-message-user" : "chat-message-assistant"
        }`}
      >
        <p>{content}</p>
        {!isUser && actions && actions.length > 0 && (
          <ChatActions actions={actions} onAction={onAction} />
        )}
      </div>
    </div>
  );
}
