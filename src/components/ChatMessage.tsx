import { User } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatMessageProps {
  role: "user" | "assistant";
  content: string;
}

// Render markdown links: [text](url)
const renderContent = (content: string): React.ReactNode[] => {
  const linkRegex = /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g;
  const result: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      result.push(content.slice(lastIndex, match.index));
    }
    result.push(
      <a
        key={match.index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent underline hover:opacity-80 font-medium"
      >
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < content.length) {
    result.push(content.slice(lastIndex));
  }

  return result;
};

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
          {isUser ? (
            <User className="w-4 h-4" />
          ) : (
            <img src="/vg-logo.png" alt="Assistant avatar" className="w-8 h-8" />
          )}
        </div>
      </div>

      <div className="flex-1 space-y-2 overflow-hidden">
        <p className="text-sm font-medium text-foreground/80">
          {isUser ? "You" : "Vasanth's Assistant"}
        </p>
        <div className="prose prose-sm max-w-none text-foreground/90 leading-relaxed whitespace-pre-wrap">
          {renderContent(content)}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
