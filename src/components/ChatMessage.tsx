import { Bot, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

const ChatMessage = ({ role, content }: ChatMessageProps) => {
  const isUser = role === "user";

  return (
    <div className={cn("flex gap-3 py-6 px-4 sm:px-6", isUser ? "bg-muted/30" : "bg-background")}>
      <div className="flex-shrink-0">
        <div
          className={cn(
            "w-8 h-8 rounded-lg flex items-center justify-center",
            isUser
              ? "bg-chat-user text-chat-user-foreground"
              : "bg-chat-assistant text-chat-assistant-foreground border border-border"
          )}
        >
          {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
        </div>
      </div>

      <div className="flex-1 space-y-2 overflow-hidden">
        <p className="text-sm font-medium text-foreground/80">
          {isUser ? "You" : "Vasanth's Assistant"}
        </p>
        <div className="prose prose-sm max-w-none text-foreground/90 leading-relaxed whitespace-pre-wrap">
          {content}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
