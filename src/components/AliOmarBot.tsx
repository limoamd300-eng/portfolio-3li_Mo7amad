import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BotMessageSquare, X, Send, Terminal } from 'lucide-react';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

export const AliOmarBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: 'SYSTEM: Connection established. I am AliOmar_Bot. How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      let response = "I'm sorry, my database doesn't have an entry for that query. Try asking about Ali's skills or how to hire him.";
      
      const lowerInput = userMessage.toLowerCase();
      if (lowerInput.includes('who is ali') || lowerInput.includes('about')) {
        response = "Ali Omar is a Cybersecurity Programmer, Security Researcher, and Software Developer dedicated to defending digital frontiers.";
      } else if (lowerInput.includes('skill') || lowerInput.includes('coding') || lowerInput.includes('language')) {
        response = "Ali is a master of C++ (OOP), Python for security scripting, and high-performance systems architecture.";
      } else if (lowerInput.includes('hire') || lowerInput.includes('contact') || lowerInput.includes('work')) {
        response = "You can initiate a secure messaging protocol via the ENCRYPTION_POINT page to discuss potential collaborations.";
      } else if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
        response = "Greetings, user. Access granted. How can I help you navigate Ali's portfolio?";
      }

      setMessages(prev => [...prev, { role: 'bot', content: response }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-80 sm:w-96 h-[450px] bg-deep-space border border-cyber-blue/30 rounded-lg shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-3 bg-cyber-blue/10 border-b border-cyber-blue/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal size={16} className="text-cyber-lime" />
                <span className="text-xs font-bold tracking-widest">AliOmar_Bot v1.0.4</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-cyber-blue/60 hover:text-cyber-lime">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-cyber-blue/20">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-lg text-xs leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-cyber-blue/20 border border-cyber-blue/30 text-white' 
                      : 'bg-deep-space border border-cyber-lime/30 text-cyber-lime'
                  }`}>
                    {msg.role === 'bot' && <span className="block opacity-50 mb-1">[BOT_MSG]</span>}
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-cyber-blue/20 bg-deep-space">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Enter_Query..."
                  className="w-full bg-cyber-blue/5 border border-cyber-blue/20 rounded px-3 py-2 text-xs focus:outline-none focus:border-cyber-lime transition-colors pr-10"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-cyber-blue hover:text-cyber-lime transition-colors"
                >
                  <Send size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-cyber-blue/10 border border-cyber-blue/30 rounded-full flex items-center justify-center text-cyber-blue hover:text-cyber-lime hover:border-cyber-lime transition-all shadow-[0_0_15px_rgba(0,212,255,0.2)]"
      >
        {isOpen ? <X size={24} /> : <BotMessageSquare size={24} />}
      </motion.button>
    </div>
  );
};
