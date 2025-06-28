
import { useState, useRef, useEffect } from "react";
import { MessageBubble } from "./MessageBubble";
import { ExpertProfile } from "./ExpertProfile";
import { ChatInput } from "./ChatInput";
import { Send } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: "user" | "expert";
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: "1",
    text: "Hello! I'm Dr. Sarah Johnson, and I'm here to help you with your questions. How can I assist you today?",
    sender: "expert",
    timestamp: new Date(Date.now() - 300000),
  },
  {
    id: "2",
    text: "Hi Dr. Johnson! I have some questions about career development in tech. Could you help me understand what skills are most important right now?",
    sender: "user",
    timestamp: new Date(Date.now() - 240000),
  },
  {
    id: "3",
    text: "Absolutely! Great question. In today's tech landscape, I'd say the most critical skills include cloud computing, AI/ML fundamentals, and strong problem-solving abilities. But it also depends on your specific area of interest. What field of tech are you most drawn to?",
    sender: "expert",
    timestamp: new Date(Date.now() - 180000),
  },
];

export const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, newMessage]);
    
    // Simulate expert typing and response
    setIsTyping(true);
    setTimeout(() => {
      const expertResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "That's a great question! Let me think about that and provide you with a comprehensive answer based on my experience...",
        sender: "expert",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, expertResponse]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
      {/* Expert Profile Header */}
      <ExpertProfile />
      
      {/* Chat Messages */}
      <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
        
        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex items-center space-x-2 text-gray-500">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            </div>
            <span className="text-sm">Dr. Johnson is typing...</span>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input */}
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};
