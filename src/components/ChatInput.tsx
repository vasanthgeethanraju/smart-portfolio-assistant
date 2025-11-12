import { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Send, Upload } from "lucide-react";
import { useToast } from "./ui/use-toast";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  onUploadPDF: (file: File) => void;
  isLoading: boolean;
}

const ChatInput = ({ onSendMessage, onUploadPDF, isLoading }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message);
      setMessage("");
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === "application/pdf") {
        onUploadPDF(file);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF file",
          variant: "destructive",
        });
      }
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
              placeholder="Ask me anything about my experience, skills, or projects..."
              className="min-h-[60px] max-h-[200px] resize-none pr-12 bg-card border-input focus:border-primary transition-colors"
              disabled={isLoading}
            />
            <label
              htmlFor="pdf-upload"
              className="absolute right-3 bottom-3 cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
            >
              <Upload className="w-5 h-5" />
              <input
                id="pdf-upload"
                type="file"
                accept=".pdf"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>
          
          <Button
            type="submit"
            disabled={!message.trim() || isLoading}
            className="h-[60px] px-6 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
        
        <p className="text-xs text-muted-foreground text-center mt-2 max-w-4xl mx-auto">
          Upload PDFs (resume, portfolio) to help me answer questions about your background
        </p>
      </form>
    </div>
  );
};

export default ChatInput;
