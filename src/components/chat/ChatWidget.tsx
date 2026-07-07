"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState, type FormEvent } from "react";
import ChatMessage from "@/components/chat/ChatMessage";
import ChatPrompts from "@/components/chat/ChatPrompts";
import { suggestedPrompts } from "@/lib/chatbot/knowledge";
import type { ChatAction, ChatMessage as ChatMessageType, ChatResponse } from "@/lib/chatbot/types";

const STEF_AVATAR = "/stef-guide.png";
const SESSION_KEY = "stef-chat-open";
const WELCOME_MESSAGE =
  "Hi! I'm Stef, your site guide. Ask me about Stefan's projects, experience, skills, or how to get in touch.";

type DisplayMessage = ChatMessageType & {
  actions?: ChatAction[];
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<DisplayMessage[]>([
    { role: "assistant", content: WELCOME_MESSAGE },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPrompts, setShowPrompts] = useState(true);

  const panelRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const bubbleRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (stored === "true") {
      setOpen(true);
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem(SESSION_KEY, String(open));
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    );

    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        bubbleRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !focusable?.length) {
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    window.setTimeout(() => inputRef.current?.focus(), 120);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const sendMessage = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || loading) {
        return;
      }

      setShowPrompts(false);
      setInput("");

      const userMessage: DisplayMessage = { role: "user", content: trimmed };
      const history = [...messages, userMessage];
      setMessages(history);
      setLoading(true);

      try {
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: trimmed,
            history: messages.map(({ role, content }) => ({ role, content })),
          }),
        });

        if (!response.ok) {
          throw new Error("Request failed");
        }

        const data = (await response.json()) as ChatResponse;
        setMessages((current) => [
          ...current,
          {
            role: "assistant",
            content: data.message,
            actions: data.actions,
          },
        ]);
      } catch {
        setMessages((current) => [
          ...current,
          {
            role: "assistant",
            content:
              "Sorry, I hit a snag. Try again or use the suggestions below to explore the site.",
          },
        ]);
        setShowPrompts(true);
      } finally {
        setLoading(false);
      }
    },
    [loading, messages],
  );

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    void sendMessage(input);
  };

  const toggleOpen = () => {
    setOpen((current) => !current);
  };

  return (
    <div
      className={`chat-widget fixed right-4 flex flex-col items-end sm:right-6 ${
        open ? "bottom-6 z-[60]" : "bottom-20 z-[45]"
      }`}
    >
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="chat-panel-enter flex max-h-[min(26rem,calc(100dvh-8rem))] w-[min(92vw,22rem)] flex-col overflow-hidden rounded-2xl border border-border bg-white/95 shadow-2xl backdrop-blur-md sm:max-h-[min(28rem,calc(100dvh-10rem))] sm:w-[22rem]"
        >
          <header className="chat-header relative z-10 flex shrink-0 items-center gap-3 border-b border-border px-4 py-3">
            <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-primary/30">
              <Image
                src={STEF_AVATAR}
                alt="Stef, site guide"
                fill
                sizes="40px"
                className="object-cover object-[center_18%]"
              />
              <span className="chat-online-dot absolute bottom-0 right-0" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <h2 id={titleId} className="font-display text-sm font-semibold text-foreground">
                Stef — Site Guide
              </h2>
              <p className="truncate text-xs text-muted">Ask about Stefan&apos;s portfolio</p>
            </div>
            <button
              type="button"
              onClick={toggleOpen}
              aria-label="Close chat"
              className="relative z-10 ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white/90 transition-colors hover:bg-white/15 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
                aria-hidden="true"
              >
                <path strokeLinecap="round" d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </header>

          <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-4 py-3">
            {messages.map((message, index) => (
              <ChatMessage
                key={`${message.role}-${index}-${message.content.slice(0, 12)}`}
                role={message.role}
                content={message.content}
                actions={message.actions}
                onAction={() => setOpen(false)}
              />
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="chat-message-assistant rounded-2xl px-3.5 py-2.5 text-sm">
                  <span className="chat-typing" aria-label="Stef is typing">
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
              </div>
            )}

            {showPrompts && !loading && (
              <ChatPrompts
                prompts={suggestedPrompts}
                onSelect={(message) => void sendMessage(message)}
                disabled={loading}
              />
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex shrink-0 items-center gap-2 border-t border-border px-3 py-3"
          >
            <label htmlFor="stef-chat-input" className="sr-only">
              Message Stef
            </label>
            <input
              id="stef-chat-input"
              ref={inputRef}
              type="text"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask Stef anything…"
              disabled={loading}
              autoComplete="off"
              className="min-w-0 flex-1 rounded-full border border-border bg-white px-4 py-2 text-sm outline-none transition-colors placeholder:text-muted focus:border-primary"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="btn-primary btn-interactive !w-auto shrink-0 !px-4 !py-2 text-xs disabled:cursor-not-allowed disabled:opacity-60"
            >
              Send
            </button>
          </form>
        </div>
      )}

      {!open && (
        <button
          ref={bubbleRef}
          type="button"
          onClick={toggleOpen}
          aria-label="Open Stef chat"
          aria-expanded={false}
          className="chat-bubble group relative inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-primary/40 bg-white shadow-lg transition-all hover:-translate-y-0.5 hover:border-primary hover:shadow-xl"
        >
          <span className="chat-bubble-pulse absolute inset-0 rounded-full" aria-hidden="true" />
          <span className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-primary/20">
            <Image
              src={STEF_AVATAR}
              alt="Open Stef chat"
              fill
              sizes="48px"
              className="object-cover object-[center_18%]"
            />
          </span>
        </button>
      )}

      {open && (
        <button
          ref={bubbleRef}
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          className="sr-only"
        />
      )}
    </div>
  );
}
