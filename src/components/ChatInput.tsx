
import { useState } from "react";
import { Send, Paperclip, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className="border-t border-gray-200 p-4 bg-white">
      <form onSubmit={handleSubmit} className="flex items-end space-x-3">
        <div className="flex-1 relative">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            rows={1}
            style={{ minHeight: "44px", maxHeight: "120px" }}
          />
          <div className="absolute right-3 bottom-3 flex items-center space-x-2">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="p-1 h-8 w-8 text-gray-400 hover:text-gray-600"
            >
              <Paperclip className="w-4 h-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="p-1 h-8 w-8 text-gray-400 hover:text-gray-600"
            >
              <Smile className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <Button
          type="submit"
          disabled={!message.trim()}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send className="w-4 h-4" />
        </Button>
      </form>
      <p className="text-xs text-gray-500 mt-2 text-center">
        Press Enter to send, Shift + Enter for new line
      </p>
    </div>
  );
};
