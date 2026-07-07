"use client";

import type { SuggestedPrompt } from "@/lib/chatbot/types";

type ChatPromptsProps = {
  prompts: readonly SuggestedPrompt[];
  onSelect: (message: string) => void;
  disabled?: boolean;
};

export default function ChatPrompts({ prompts, onSelect, disabled }: ChatPromptsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {prompts.map((prompt) => (
        <button
          key={prompt.label}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(prompt.message)}
          className="filter-pill text-left text-xs disabled:cursor-not-allowed disabled:opacity-60"
        >
          {prompt.label}
        </button>
      ))}
    </div>
  );
}
