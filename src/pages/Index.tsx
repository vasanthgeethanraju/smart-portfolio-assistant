import { useState, useRef, useEffect } from "react";
import Navigation from "@/components/Navigation";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import { useToast } from "@/components/ui/use-toast";
import { FileText } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Index = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi! I'm an AI assistant trained on the portfolio owner's resume and documents. Ask me anything about their experience, skills, projects, or background!",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setIsLoading(true);

    try {
      // TODO: Will be implemented with Lovable Cloud
      // For now, provide a mock response
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm ready to help! Once you connect Lovable Cloud and upload your PDFs, I'll be able to answer questions based on your actual resume and documents.",
        },
      ]);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleUploadPDF = async (file: File) => {
    setIsLoading(true);
    
    try {
      // TODO: Will be implemented with Lovable Cloud
      setUploadedFiles((prev) => [...prev, file.name]);
      
      toast({
        title: "File uploaded",
        description: `${file.name} has been uploaded. Connect Lovable Cloud to process it with AI.`,
      });
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "Failed to upload file. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex flex-col pt-16">
        {uploadedFiles.length > 0 && (
          <div className="border-b border-border bg-muted/30 px-4 sm:px-6 lg:px-8 py-3">
            <div className="container mx-auto max-w-4xl">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <FileText className="w-4 h-4" />
                <span className="font-medium">Uploaded documents:</span>
                <span>{uploadedFiles.join(", ")}</span>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex-1 overflow-y-auto">
          <div className="container mx-auto max-w-4xl">
            {messages.map((message, index) => (
              <ChatMessage key={index} role={message.role} content={message.content} />
            ))}
            {isLoading && (
              <div className="py-6 px-4 sm:px-6">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-chat-assistant border border-border flex items-center justify-center">
                    <div className="w-4 h-4 border-2 border-accent border-t-transparent rounded-full animate-spin" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">AI is thinking...</p>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        <ChatInput
          onSendMessage={handleSendMessage}
          onUploadPDF={handleUploadPDF}
          isLoading={isLoading}
        />
      </main>
    </div>
  );
};

export default Index;
