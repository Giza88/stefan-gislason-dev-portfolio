export type ChatAction =
  | { type: "scroll"; target: string; label: string }
  | { type: "copy"; value: string; label: string }
  | { type: "link"; href: string; label: string }
  | { type: "download"; href: string; label: string };

export type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export type ChatResponse = {
  message: string;
  actions?: ChatAction[];
  intent: string;
};

export type ChatRequest = {
  message: string;
  history?: ChatMessage[];
};

export type SuggestedPrompt = {
  label: string;
  message: string;
};
