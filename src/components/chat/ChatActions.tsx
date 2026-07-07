"use client";

import type { ChatAction } from "@/lib/chatbot/types";
import { useToast } from "@/components/ToastProvider";
import { smoothScrollTo } from "@/lib/smoothScroll";

type ChatActionsProps = {
  actions: ChatAction[];
  onAction?: () => void;
};

export default function ChatActions({ actions, onAction }: ChatActionsProps) {
  const { showToast } = useToast();

  const handleAction = async (action: ChatAction) => {
    switch (action.type) {
      case "scroll": {
        const scrolled = smoothScrollTo(action.target);
        if (scrolled) {
          showToast(`Scrolled to ${action.label}`, "info");
        }
        break;
      }
      case "copy": {
        try {
          await navigator.clipboard.writeText(action.value);
          showToast(`${action.label} copied`, "success");
        } catch {
          showToast("Could not copy to clipboard", "error");
        }
        break;
      }
      case "link": {
        window.open(action.href, "_blank", "noopener,noreferrer");
        break;
      }
      case "download": {
        const link = document.createElement("a");
        link.href = action.href;
        link.download = "";
        link.rel = "noopener";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast("CV download started", "info");
        break;
      }
    }
    onAction?.();
  };

  if (actions.length === 0) {
    return null;
  }

  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {actions.map((action, index) => (
        <button
          key={`${action.type}-${action.label}-${index}`}
          type="button"
          onClick={() => handleAction(action)}
          className={
            index === 0
              ? "btn-primary btn-interactive !w-auto !px-4 !py-2 text-xs"
              : "btn-secondary btn-interactive !w-auto !px-4 !py-2 text-xs"
          }
        >
          {action.label}
        </button>
      ))}
    </div>
  );
}
