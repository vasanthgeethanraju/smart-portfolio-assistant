import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Send } from "lucide-react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput = ({ onSendMessage, isLoading }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="border-t border-border bg-background/95 backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-end gap-2 max-w-4xl mx-auto">
          <div className="relative flex-1">
            <Textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything about Vasanth's experience, skills, or projects..."
              className="min-h-[60px] max-h-[200px] resize-none pr-12 bg-card border-input focus:border-primary transition-colors"
              disabled={isLoading}
            />
          </div>
          
          <Button
            type="submit"
            disabled={!message.trim() || isLoading}
            className="h-[60px] px-6 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;
