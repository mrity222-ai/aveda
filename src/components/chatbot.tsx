"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { handleChatQuery } from "@/app/actions";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";

type Message = {
  role: "user" | "bot";
  content: string;
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", content: "Hello! How can I help you today?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = { role: "user", content: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    const result = await handleChatQuery(inputValue);

    setIsLoading(false);

    if (result.success) {
      const botMessage: Message = { role: "bot", content: result.response! };
      setMessages((prev) => [...prev, botMessage]);
    } else {
      const errorMessage: Message = {
        role: "bot",
        content: result.error || "An unexpected error occurred.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="icon"
          className="rounded-full w-14 h-14 shadow-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
          <span className="sr-only">Toggle Chat</span>
        </Button>
      </div>

      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-50 w-full max-w-sm h-[60vh] flex flex-col shadow-xl animate-in fade-in zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex items-center gap-3">
                <Avatar>
                    <AvatarFallback>
                        <Bot />
                    </AvatarFallback>
                </Avatar>
                <CardTitle className="text-xl font-headline">AI Assistant</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="flex-1 overflow-hidden p-0">
            <ScrollArea className="h-full">
               <div className="p-4 space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex items-start gap-3",
                      message.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    {message.role === "bot" && (
                      <Avatar className="h-8 w-8">
                         <AvatarFallback><Bot /></AvatarFallback>
                      </Avatar>
                    )}
                     <p className={cn(
                        "max-w-[75%] rounded-lg px-3 py-2 text-sm",
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary"
                      )}>
                        {message.content}
                     </p>
                    {message.role === "user" && (
                      <Avatar className="h-8 w-8">
                        <AvatarFallback><User /></AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}
                {isLoading && (
                    <div className="flex items-start gap-3 justify-start">
                         <Avatar className="h-8 w-8">
                            <AvatarFallback><Bot /></AvatarFallback>
                         </Avatar>
                         <div className="bg-secondary rounded-lg px-3 py-2 space-y-2">
                            <Skeleton className="h-4 w-10 animate-pulse" />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
               </div>
            </ScrollArea>
          </CardContent>
          <CardFooter className="pt-4 border-t">
            <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-2">
              <Input
                id="message"
                placeholder="Type your message..."
                className="flex-1"
                autoComplete="off"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                disabled={isLoading}
              />
              <Button type="submit" size="icon" disabled={isLoading || !inputValue.trim()}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </>
  );
}
