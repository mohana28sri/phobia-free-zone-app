
import React, { useState, useRef, useEffect } from 'react';
import Layout from '../components/Layout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

type Message = {
  id: string;
  content: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm your PhobiaFree AI assistant. How can I help you with your phobia today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate AI response delay
    setTimeout(() => {
      const botResponse = getBotResponse(inputValue);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  // Simple response logic - in a real app, this would be replaced with an actual AI service
  const getBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    if (lowerInput.includes('spider') || lowerInput.includes('arachnophobia')) {
      return "Arachnophobia, or fear of spiders, is very common. Would you like some coping techniques, or information about exposure therapy for spider phobias?";
    } else if (lowerInput.includes('height') || lowerInput.includes('acrophobia')) {
      return "Fear of heights affects many people. Gradual exposure starting with visualization exercises can help. Would you like me to suggest some beginner exercises?";
    } else if (lowerInput.includes('help') || lowerInput.includes('scared') || lowerInput.includes('anxiety')) {
      return "I'm here to help. Deep breathing can help during moments of fear: breathe in for 4 seconds, hold for 2, and exhale for 6. Would you like to learn more coping strategies?";
    } else if (lowerInput.includes('therapy') || lowerInput.includes('treatment')) {
      return "Cognitive Behavioral Therapy (CBT) and exposure therapy are highly effective for treating phobias. Our consultancy section can connect you with specialists in these approaches.";
    } else {
      return "Thank you for sharing. Can you tell me more about your specific concerns or what kind of information would be most helpful for you right now?";
    }
  };

  return (
    <Layout>
      <div className="container py-12">
        <div className="max-w-4xl mx-auto">
          <Card className="border-2">
            <CardHeader className="border-b bg-muted/30">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage src="/placeholder.svg" alt="AI" />
                  <AvatarFallback className="bg-primary text-primary-foreground">AI</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>PhobiaFree Assistant</CardTitle>
                  <CardDescription>AI-powered support for your journey</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[500px] overflow-y-auto p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div 
                      key={message.id}
                      className={cn(
                        "flex",
                        message.sender === 'user' ? "justify-end" : "justify-start"
                      )}
                    >
                      <div 
                        className={cn(
                          "max-w-[80%] rounded-lg px-4 py-2",
                          message.sender === 'user' 
                            ? "bg-primary text-primary-foreground" 
                            : "bg-muted"
                        )}
                      >
                        <p>{message.content}</p>
                        <div className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString([], {
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="max-w-[80%] rounded-lg px-4 py-2 bg-muted">
                        <div className="flex gap-1">
                          <span className="animate-pulse">•</span>
                          <span className="animate-pulse delay-100">•</span>
                          <span className="animate-pulse delay-200">•</span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t p-4">
              <form onSubmit={handleSendMessage} className="flex gap-2 w-full">
                <Input
                  placeholder="Type your message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-grow"
                />
                <Button type="submit">
                  <Search className="h-4 w-4 mr-2" />
                  Send
                </Button>
              </form>
            </CardFooter>
          </Card>
          
          <div className="mt-8">
            <h3 className="text-lg font-medium mb-3">Suggested Topics</h3>
            <div className="flex flex-wrap gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setInputValue("Tell me about arachnophobia")}
              >
                Arachnophobia
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setInputValue("How to deal with fear of heights?")}
              >
                Fear of Heights
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setInputValue("What are some coping strategies for anxiety?")}
              >
                Coping Strategies
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setInputValue("When should I see a therapist?")}
              >
                Professional Help
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Chatbot;
