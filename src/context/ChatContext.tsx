import { createContext, useContext, useState, ReactNode } from "react";

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatContextValue {
  messages: ChatMessage[];
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  uploadedFiles: string[];
  setUploadedFiles: React.Dispatch<React.SetStateAction<string[]>>;
  resetChat: () => void;
}

const initialMessages: ChatMessage[] = [
  {
    role: "assistant",
    content:
      "Hi! I'm Vasanth's assistant trained on his resume and portfolio. Ask me anything about his experience, skills, projects, or background!",
  },
];

const ChatContext = createContext<ChatContextValue | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const resetChat = () => {
    setMessages(initialMessages);
    setUploadedFiles([]);
    setIsLoading(false);
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        setMessages,
        isLoading,
        setIsLoading,
        uploadedFiles,
        setUploadedFiles,
        resetChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};


