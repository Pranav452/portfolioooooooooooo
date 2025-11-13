import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import OpenAI from 'openai';


interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const openai = new OpenAI({
  apiKey: (import.meta as any).env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

const RESUME_CONTEXT = `
PRANAV NAIR
Contact: 8591257188 | Pranavnairop090@gmail.com
GitHub: https://github.com/Pranav452
LinkedIn: https://www.linkedin.com/in/pranav-nair-682a32384/
Portfolio: https://pranav-nair-portfolio.vercel.app

SUMMARY
Innovative AI Engineer with expertise in developing intelligent, production-grade agents using RAG, LangChain,
and LangGraph. Experienced in multi-agent systems, LLM fine-tuning, and full-stack development with modern
web technologies. Driven by a passion for designing scalable, high-performance solutions that turn complex
challenges into practical, AI-powered products.

SKILLS
• Generative AI: RAG Development & Deployment, LangChain, LangGraph, Vercel AI SDK, Agno AI
  Implementation, Multi-Agent System Architecture, Model Fine-Tuning, Optimization
• Front-End: Next.js, Three.js, TailwindCSS, Blender, After Effects
• Back-End: Node.js, Express, Python
• Databases: MongoDB, MySQL, Pinecone, Chroma
• Advanced Concepts: Advanced Machine Learning Concepts and Fine tuning Techniques, Scalable AI Agent Deployment

PROJECTS
1. Multi-Agent Customer Support Assistant (LangChain, SQL Agents, LLM Orchestration)
   • Designed and deployed a multi-agent architecture that cut average support response time by 50%
   • Integrated SQL-powered retrieval agents for dynamic database queries, enhancing response precision by 30%

2. Large Language Model Alignment Study (Python, PyTorch, Hugging Face, QLoRA, DPO)
   • Conducted fine-tuning of the Llama-3-8B model using QLoRA and DPO on the Anthropic HH-RLHF dataset
   • Achieved a 44.3% reduction in toxicity and 7.9% increase in helpfulness

3. AI-Powered Knowledge Retrieval System (LangChain, LangGraph, Vector Databases)
   • Engineered an optimized RAG pipeline using LangGraph to reduce query latency by 35%
   • Designed efficient vector indexing and chunking strategies, cutting data retrieval times by 40%

EXPERIENCE
AI Full-Stack Developer, Scogo Networks – Mumbai, India (Dec 2024 – Jun 2025)
• Developed and integrated RAG pipelines for AI voice agents, enabling context-aware query handling
• Contributed across the full stack—from front-end workflows to back-end logic

Software Developer Intern, HashedBit Innovations – Mumbai, India (Apr–Sep 2024)
• Revamped and optimized full-stack architecture, improving load efficiency by 15%
• Built and deployed scalable RESTful APIs with Node.js and Express

EDUCATION
• AI Engineering, MisogiAI by Masai, Bangalore (Jun 2025 – Present)
• Bachelor of Technology: Computer Engineering (AI/ML), Pillai College of Engineering, Navi Mumbai (Aug 2021 – May 2025)
`;

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi! I\'m Pranav\'s AI assistant. Ask me anything about his experience, skills, or projects! (Try asking me to tell you a joke 😉)'
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    
    // Easter egg responses
    const lowerInput = input.toLowerCase();
    if (lowerInput.includes('joke') || lowerInput.includes('funny')) {
      setMessages(prev => [...prev, userMessage, {
        role: 'assistant',
        content: 'Why do programmers prefer dark mode? Because light attracts bugs! 🐛💡 Want to know more about Pranav\'s work?'
      }]);
      setInput('');
      return;
    }
    
    if (lowerInput.includes('coffee') || lowerInput.includes('☕')) {
      setMessages(prev => [...prev, userMessage, {
        role: 'assistant',
        content: 'Pranav runs on coffee and code! ☕ Speaking of which, he\'s built some amazing AI projects. Want to hear about them?'
      }]);
      setInput('');
      return;
    }

    if (lowerInput === 'hello there') {
      setMessages(prev => [...prev, userMessage, {
        role: 'assistant',
        content: 'General Kenobi! 🎬 But seriously, want to know about Pranav\'s AI engineering skills?'
      }]);
      setInput('');
      return;
    }

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const systemMessage = {
        role: 'system' as const,
        content: `You are an AI assistant helping visitors learn about Pranav Nair, an AI Engineer. 
        Be professional, friendly, witty, and concise. Use the following information to answer questions:
        
        ${RESUME_CONTEXT}
        
        Only answer questions about Pranav's professional background, skills, projects, and experience. 
        If asked about something unrelated, politely redirect the conversation back to Pranav's profile.
        Add subtle humor when appropriate but stay professional.`
      };

      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [systemMessage, ...messages, userMessage],
        temperature: 0.7,
        max_tokens: 500
      });

      const assistantMessage = completion.choices[0].message.content;
      
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: assistantMessage || 'Sorry, I could not generate a response.'
      }]);
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please make sure your API key is configured correctly.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              bottom: '100px',
              right: '20px',
              width: '380px',
              height: '500px',
              backgroundColor: 'rgba(30, 30, 30, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
              display: 'flex',
              flexDirection: 'column',
              zIndex: 9999,
              overflow: 'hidden'
            }}
          >
            {/* Header */}
            <div style={{
              padding: '16px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '16px', color: '#fff' }}>AI Assistant</h3>
                <p style={{ margin: 0, fontSize: '12px', color: '#888' }}>Ask about Pranav</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  fontSize: '20px',
                  cursor: 'pointer',
                  padding: '4px 8px'
                }}
              >
                ×
              </button>
            </div>

            {/* Messages */}
            <div style={{
              flex: 1,
              overflowY: 'auto',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  style={{
                    alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '80%'
                  }}
                >
                  <div style={{
                    padding: '10px 14px',
                    borderRadius: '12px',
                    backgroundColor: msg.role === 'user' 
                      ? 'rgba(58, 144, 229, 0.9)' 
                      : 'rgba(60, 60, 60, 0.8)',
                    color: '#fff',
                    fontSize: '14px',
                    lineHeight: '1.5',
                    wordWrap: 'break-word'
                  }}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div style={{ alignSelf: 'flex-start', maxWidth: '80%' }}>
                  <div style={{
                    padding: '10px 14px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(60, 60, 60, 0.8)',
                    color: '#fff',
                    fontSize: '14px'
                  }}>
                    Thinking...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div style={{
              padding: '16px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              gap: '8px'
            }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask anything..."
                disabled={isLoading}
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backgroundColor: 'rgba(50, 50, 50, 0.8)',
                  color: '#fff',
                  fontSize: '14px',
                  outline: 'none'
                }}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                style={{
                  padding: '10px 20px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: 'rgba(58, 144, 229, 0.9)',
                  color: '#fff',
                  fontSize: '14px',
                  cursor: isLoading || !input.trim() ? 'not-allowed' : 'pointer',
                  opacity: isLoading || !input.trim() ? 0.5 : 1
                }}
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: 'rgba(58, 144, 229, 0.95)',
          color: '#fff',
          fontSize: '28px',
          cursor: 'pointer',
          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)',
          zIndex: 9998,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {isOpen ? '✕' : '💬'}
      </motion.button>
    </>
  );
}

