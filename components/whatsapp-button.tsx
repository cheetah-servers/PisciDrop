"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Headset, X, Send } from "lucide-react";

const presetFAQs = [
  {
    question: "What is PicsiDrop?",
    answer: "PicsiDrop is Hyderabad's peer-to-peer delivery network that connects people who want to send packages with everyday travelers going in the same direction. By utilizing unused cargo/bag space, we offer ultra-fast delivery at a fraction of the cost."
  },
  {
    question: "How do you ensure my package is safe?",
    answer: "Safety is our top priority. We use a dual OTP verification system where both the sender and receiver must confirm delivery before payment is released. Additionally, every traveler completes a mandatory Aadhaar/KYC identity check (Aadhaar + PAN + Driving License + selfie face match) to prevent fraud."
  },
  {
    question: "How much can I earn as a traveler?",
    answer: "Most daily commuters and travelers earn between ₹200 to ₹500 per delivery trip, depending on the distance, urgency, and size of the package. It's a great way to cover fuel and travel costs on routes you already travel."
  },
  {
    question: "What items are allowed to be sent?",
    answer: "You can send legal, non-hazardous household items, keys, documents, clothing, books, or packed electronics that fit in a standard backpack or vehicle seat. Illegal substances, weapons, hazardous materials, and fragile items without proper packaging are strictly prohibited."
  },
  {
    question: "How are payments handled?",
    answer: "Payments are handled securely via UPI/Netbanking. Senders pay upfront, and the funds are held securely in a safe escrow account. Once the delivery OTP is verified at the destination, the payout (75% share) is instantly transferred to the traveler's registered UPI ID."
  },
  {
    question: "Is there insurance for my parcels?",
    answer: "Yes! PicsiDrop offers optional parcel insurance as an add-on during the booking flow. This covers damage or loss up to ₹5,000 for standard verified shipments, giving you extra peace of mind."
  }
];

interface Message {
  sender: "bot" | "user";
  text: string;
  timestamp: Date;
}

export function WhatsappButton() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hello! Welcome to PicsiDrop Support. How can I help you today? Please click any of the questions below to get instant answers about our service.",
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const handleQuestionClick = (faq: typeof presetFAQs[0]) => {
    const userMsg: Message = {
      sender: "user",
      text: faq.question,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botMsg: Message = {
        sender: "bot",
        text: faq.answer,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    }, 800);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg: Message = {
      sender: "user",
      text: inputText,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMsg]);
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const matchedFAQ = presetFAQs.find(faq =>
        inputText.toLowerCase().includes(faq.question.toLowerCase()) ||
        faq.question.toLowerCase().includes(inputText.toLowerCase())
      );

      const botMsg: Message = {
        sender: "bot",
        text: matchedFAQ 
          ? matchedFAQ.answer 
          : "I'm a specialized PicsiDrop assistant. For general questions, please select one of the predefined questions below or click the WhatsApp button to chat with our human support!",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <>
      <div className="group fixed bottom-28 right-6 z-50 flex items-center">
        <div className="absolute right-[76px] mr-2 bg-zinc-900 text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-lg whitespace-nowrap opacity-0 scale-95 origin-right group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none flex items-center gap-1.5 border border-zinc-800">
          <span>Chat with us on WhatsApp</span>
          <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2.5 h-2.5 bg-zinc-900 rotate-45 border-r border-t border-zinc-800"></div>
        </div>

        <a
          href="https://wa.me/918125432177"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 rounded-full"
          aria-label="Chat on WhatsApp"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/960px-WhatsApp.svg.png"
            alt="WhatsApp Logo"
            className="w-full h-full object-contain"
          />
        </a>
      </div>

      <div className="group fixed bottom-6 right-6 z-50 flex items-center">
        <div className="absolute right-[76px] mr-2 bg-zinc-900 text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-lg whitespace-nowrap opacity-0 scale-95 origin-right group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none flex items-center gap-1.5 border border-zinc-800">
          <span>Ask PicsiDrop Assistant</span>
          <div className="absolute top-1/2 -translate-y-1/2 -right-1 w-2.5 h-2.5 bg-zinc-900 rotate-45 border-r border-t border-zinc-800"></div>
        </div>

        <button
          onClick={() => setChatOpen(!chatOpen)}
          className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer border border-orange-400/20 ${
            chatOpen ? "bg-zinc-800" : "bg-orange-500"
          }`}
          aria-label="Toggle chatbot"
        >
          {chatOpen ? (
            <X className="w-6 h-6 sm:w-7 sm:h-7" />
          ) : (
            <Headset className="w-6 h-6 sm:w-7 sm:h-7" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 sm:bottom-24 right-6 w-[340px] sm:w-[380px] h-[580px] max-h-[calc(100vh-6rem)] bg-white/95 backdrop-blur-md shadow-2xl rounded-2xl border border-zinc-150 overflow-hidden z-50 flex flex-col font-sans"
          >
            <div className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 p-4 text-white flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/10">
                  <Headset className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-sm leading-tight">PicsiDrop Assistant</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[10px] text-orange-100 font-medium">Online Helpdesk</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-zinc-50/70 scrollbar-thin">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm shadow-xs ${
                      msg.sender === "user"
                        ? "bg-orange-500 text-white rounded-br-none"
                        : "bg-white text-zinc-800 border border-zinc-150 rounded-bl-none"
                    }`}
                  >
                    <p className="leading-relaxed font-normal whitespace-pre-wrap">{msg.text}</p>
                    <span
                      className={`text-[9px] block text-right mt-1.5 ${
                        msg.sender === "user" ? "text-orange-100" : "text-zinc-400"
                      }`}
                    >
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-zinc-500 border border-zinc-150 rounded-2xl rounded-bl-none px-4 py-3 shadow-xs">
                    <div className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce delay-100"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce delay-200"></span>
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce delay-300"></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-3 bg-white border-t border-zinc-150/70">
              <span className="text-[10px] uppercase tracking-wider font-bold text-zinc-400 block mb-2 px-1">
                Frequently Asked Questions
              </span>
              <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto pr-1">
                {presetFAQs.map((faq, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionClick(faq)}
                    className="text-[11px] text-zinc-700 bg-zinc-100 hover:bg-orange-50 hover:text-orange-600 border border-zinc-200 hover:border-orange-200/50 rounded-lg px-2 py-1 text-left transition-all duration-200 font-medium"
                  >
                    {faq.question}
                  </button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-zinc-150/70 flex gap-2">
              <input
                type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2 text-xs focus:outline-none focus:border-orange-500 transition-colors placeholder:text-zinc-400 text-zinc-800"
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-xl p-2.5 transition-colors flex items-center justify-center shadow-xs cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
