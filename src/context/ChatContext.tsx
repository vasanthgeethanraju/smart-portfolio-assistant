import { createContext, useContext, useEffect, useState, ReactNode } from "react";

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
  hasSeenGreeting: boolean;
  setHasSeenGreeting: React.Dispatch<React.SetStateAction<boolean>>;
  resetChat: () => void;
}

const initialMessages: ChatMessage[] = [
  {
    role: "assistant",
    content:
      "Hi! I'm Vasanth's assistant trained on his resume and portfolio. Ask me anything about his experience, skills, projects, or background!",
  },
];

const GREETING_STORAGE_KEY = "hasSeenGreeting";

// localStorage can throw in private mode or when storage is blocked, so fall back to "not seen"
const loadHasSeenGreeting = () => {
  try {
    return localStorage.getItem(GREETING_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
};

const ChatContext = createContext<ChatContextValue | undefined>(undefined);

export const ChatProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [hasSeenGreeting, setHasSeenGreeting] = useState(loadHasSeenGreeting);

  useEffect(() => {
    try {
      localStorage.setItem(GREETING_STORAGE_KEY, String(hasSeenGreeting));
    } catch {
      // Storage unavailable; the greeting will just show again next visit
    }
  }, [hasSeenGreeting]);

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
        hasSeenGreeting,
        setHasSeenGreeting,
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


