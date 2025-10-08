import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Assalamu Alaikum! Welcome to KYUMSA. I'm here to help you with information about our events, activities, and resources. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses = {
    "prayer": "Our daily prayer services are held at the University Mosque. Fajr at 5:30 AM, Dhuhr at 1:00 PM, Asr at 4:30 PM, Maghrib at sunset, and Isha at 8:00 PM. Friday Jumu'ah prayers are at 1:00 PM.",
    "events": "We have various events including daily prayers, weekly Darus sessions, monthly community cleaning drives, and our annual KYUMSA Caravan. Check our events section for the latest schedule.",
    "membership": "To join KYUMSA, you need to be a Muslim student at Kyambogo University. You can register during our orientation events or contact our membership committee.",
    "caravan": "The KYUMSA Caravan is our annual flagship event featuring cultural displays, educational sessions, community outreach, and networking opportunities. It typically takes place in February.",
    "cleaning": "Our community cleaning drives happen monthly on Saturdays at 8:00 AM. We clean the campus and surrounding areas. All volunteers are welcome!",
    "darus": "Darus sessions are our weekly Islamic study circles held every Thursday at 6:00 PM at the Islamic Center. Topics include Quran study, Hadith, and Islamic history.",
    "academic": "We provide academic support through tutoring programs, study groups, and resource sharing. Visit our Academic section for study materials and educational resources.",
    "contact": "You can reach us at info@kyumsa.org or call +256 XXX XXX XXX. Our office is located at Kyambogo University campus.",
    "scholarships": "We offer various scholarship opportunities for deserving Muslim students. Check our news section for current openings and application procedures.",
    "mosque": "The new campus mosque construction is progressing well, expected completion by mid-2024. Current services are held at the temporary prayer facility.",
    "greeting": "Wa alaikum assalam wa rahmatullahi wa barakatuh! It's wonderful to connect with you. How may I help you today?"
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('assalam') || lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
      return predefinedResponses.greeting;
    }
    
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(key)) {
        return response;
      }
    }
    
    // Default response for unrecognized queries
    return "I understand you're looking for information. For specific queries about prayer times, events, membership, academic resources, or community activities, please feel free to ask. You can also contact our admin team at info@kyumsa.org for detailed assistance.";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputText),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: true 
    });
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-[#00703C] text-white p-4 rounded-full shadow-lg hover:bg-[#005A30] transition-all duration-300 z-50 hover:scale-110"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[500px] bg-white rounded-lg shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="bg-[#00703C] text-white p-4 rounded-t-lg flex items-center">
            <Bot className="h-6 w-6 mr-2" />
            <div>
              <h3 className="font-semibold">KYUMSA Assistant</h3>
              <p className="text-xs text-green-100">Online • Ready to help</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                  <div
                    className={`p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-[#00703C] text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 flex items-center">
                    {message.sender === 'user' ? (
                      <User className="h-3 w-3 mr-1" />
                    ) : (
                      <Bot className="h-3 w-3 mr-1" />
                    )}
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg max-w-[80%]">
                  <div className="flex items-center space-x-1">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="border-t p-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#00703C] focus:border-transparent"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="bg-[#00703C] text-white p-2 rounded-lg hover:bg-[#005A30] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Ask about prayer times, events, membership, or any KYUMSA services
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;