import { useRef, useEffect, useMemo, useState } from "react";
import Navigation from "@/components/Navigation";
import ChatMessage from "@/components/ChatMessage";
import ChatInput from "@/components/ChatInput";
import { useToast } from "@/components/ui/use-toast";
import { FileText } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import * as pdfjsLib from 'pdfjs-dist';
import mammoth from 'mammoth';
import { useChat } from "@/context/ChatContext";
import GreetingDialog from "@/components/GreetingDialog";

type GreetingMessage = {
  greeting: string;
  greetingIcon: string;
};

const getGreetingMessage = (): GreetingMessage => {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return { greeting: "Good morning,", greetingIcon: "🌅" };
  }

  if (hour >= 12 && hour < 18) {
    return { greeting: "Good afternoon,", greetingIcon: "🌇" };
  }

  if (hour >= 18 && hour < 21) {
    return { greeting: "Good evening,", greetingIcon: "🌆" };
  }

  if (hour >= 21 && hour < 24) {
    return { greeting: "Good night,", greetingIcon: "🌙" };
  }

  return { greeting: "Working late?", greetingIcon: "☕" };
};

// Set up PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const Index = () => {
  const {
    messages,
    setMessages,
    isLoading,
    setIsLoading,
    uploadedFiles,
    setUploadedFiles,
    hasSeenGreeting,
    setHasSeenGreeting,
  } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [isGreetingOpen, setIsGreetingOpen] = useState(false);
  const { greeting, greetingIcon } = useMemo(getGreetingMessage, []);

  useEffect(() => {
    setIsGreetingOpen(!hasSeenGreeting);
  }, [hasSeenGreeting]);

  const handleGreetingClose = () => {
    setHasSeenGreeting(true);
    setIsGreetingOpen(false);
  };

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
      const { data, error } = await supabase.functions.invoke('chat', {
        body: { 
          messages: [...messages, { role: "user", content: message }].map(m => ({
            role: m.role,
            content: m.content
          }))
        }
      });

      if (error) throw error;

      if (data?.error) {
        toast({
          title: "Error",
          description: data.error,
          variant: "destructive",
        });
        return;
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.message,
        },
      ]);
    } catch (error) {
      console.error('Chat error:', error);
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
      let content = '';
      
      if (file.type === 'application/pdf') {
        // Parse PDF
        const arrayBuffer = await file.arrayBuffer();
        const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const textContent = await page.getTextContent();
          const pageText = textContent.items
            .map((item: any) => item.str)
            .join(' ');
          content += pageText + '\n\n';
        }
      } else if (file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        // Parse DOCX
        const arrayBuffer = await file.arrayBuffer();
        const result = await mammoth.extractRawText({ arrayBuffer });
        content = result.value;
      } else {
        // Plain text file
        content = await file.text();
      }

      if (!content.trim()) {
        toast({
          title: "Empty document",
          description: "The document appears to be empty or couldn't be parsed.",
          variant: "destructive",
        });
        return;
      }

      // Convert file to base64 for storage upload
      const arrayBufferForStorage = await file.arrayBuffer();
      const uint8Array = new Uint8Array(arrayBufferForStorage);
      let binary = '';
      uint8Array.forEach(byte => { binary += String.fromCharCode(byte); });
      const fileBase64 = btoa(binary);

      const { data, error } = await supabase.functions.invoke('upload-document', {
        body: { 
          fileName: file.name,
          content: content.trim(),
          fileBase64,
          mimeType: file.type,
        }
      });

      if (error) throw error;

      if (data?.error) {
        toast({
          title: "Upload failed",
          description: data.error,
          variant: "destructive",
        });
        return;
      }

      setUploadedFiles((prev) => [...prev, file.name]);
      
      toast({
        title: "Success",
        description: `${file.name} uploaded successfully! I can now answer questions about it.`,
      });

      // Add a system message to acknowledge the upload
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Great! I've processed ${file.name}. You can now ask me questions about the information in this document.`,
        },
      ]);
    } catch (error) {
      console.error('Upload error:', error);
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
      <GreetingDialog
        open={isGreetingOpen}
        greeting={greeting}
        greetingIcon={greetingIcon}
        onClose={handleGreetingClose}
      />
      
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
                    <p className="text-sm text-muted-foreground">Assistant is thinking...</p>
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
