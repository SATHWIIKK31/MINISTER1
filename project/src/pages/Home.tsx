import React, { useState } from 'react';
import { Send, Brain } from 'lucide-react';

const frequentPrompts = [
  "What's the ethical approach to handling employee layoffs?",
  "How to balance profit with environmental responsibility?",
  "What are the ethical implications of AI in healthcare?",
];

const Home = () => {
  const [prompt, setPrompt] = useState('');
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
  
    setMessages([...messages, { text: prompt, isUser: true }]);
    setPrompt('');
  
    try {
      const response = await fetch("http://127.0.0.1:5000/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt }),
      });
  
      const data = await response.json();
      if (response.ok) {
        setMessages((prevMessages) => [...prevMessages, { text: data.response, isUser: false }]);
      } else {
        console.error("Error:", data.error);
      }
    } catch (error) {
      console.error("Request failed:", error);
    }
  };
  
  

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 border border-white/20 shadow-xl min-h-[600px] flex flex-col">
          <div className="flex-1 overflow-y-auto space-y-4 mb-4">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-white/70">
                <Brain className="w-16 h-16 mb-4 text-indigo-400" />
                <h2 className="text-2xl font-bold mb-2">Welcome to Minister AI</h2>
                <p className="text-center max-w-md">
                  Your ethical decision-making assistant powered by Mistral AI.
                  Ask me anything about ethical dilemmas and decision-making.
                </p>
              </div>
            ) : (
              messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                      msg.isUser
                        ? 'bg-indigo-600 text-white'
                        : 'bg-white/20 text-white/90'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {frequentPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => setPrompt(prompt)}
                  className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-white/80 text-sm transition-colors border border-white/10"
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="relative">
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Ask your ethical question..."
                className="w-full px-4 py-3 pr-12 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;