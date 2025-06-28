
import { formatDistanceToNow } from "date-fns";

interface Message {
  id: string;
  text: string;
  sender: "user" | "expert";
  timestamp: Date;
}

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isExpert = message.sender === "expert";
  
  return (
    <div className={`flex ${isExpert ? "justify-start" : "justify-end"} animate-fade-in`}>
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
        isExpert 
          ? "bg-white text-gray-800 shadow-sm border border-gray-200" 
          : "bg-blue-600 text-white"
      }`}>
        <p className="text-sm">{message.text}</p>
        <p className={`text-xs mt-1 ${
          isExpert ? "text-gray-500" : "text-blue-100"
        }`}>
          {formatDistanceToNow(message.timestamp, { addSuffix: true })}
        </p>
      </div>
    </div>
  );
};
