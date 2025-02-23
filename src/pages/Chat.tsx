
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  Send,
  ArrowLeft,
} from "lucide-react";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [chats] = useState([
    { id: 1, title: "Research Paper Discussion" },
    { id: 2, title: "Study Notes Analysis" },
  ]);

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r border-border bg-card p-4 overflow-y-auto">
        <div className="mb-6">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back</span>
          </Link>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Recent Chats</h2>
          {chats.map((chat) => (
            <button
              key={chat.id}
              className="w-full p-3 rounded-lg flex items-center gap-3 hover:bg-accent transition-colors text-left"
            >
              <MessageSquare className="w-5 h-5" />
              <span className="truncate">{chat.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-4 overflow-y-auto">
          {/* Messages will appear here */}
          <div className="flex flex-col gap-4">
            <div className="bg-accent p-4 rounded-lg max-w-[80%] animate-fade-in">
              Hello! I'm ready to help you with your PDF. What would you like to discuss?
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="border-t border-border p-4">
          <div className="flex gap-4 max-w-4xl mx-auto">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-3 rounded-lg bg-accent border border-border focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button className="p-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
