"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = { role: "user" | "system" | "assistant"; content: string };

export default function FloatingChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length > 0) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { role: "user" as const, content: input },
    ];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: input,
          history: newMessages.filter((m) => m.role !== "system"),
        }),
      });

      if (!response.body) throw new Error("Response body is null");

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let assistantMessage = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        assistantMessage += decoder.decode(value, { stream: true });

        setMessages((prev) => {
          const updated = [...prev];
          if (updated[updated.length - 1]?.role === "assistant") {
            updated[updated.length - 1].content = assistantMessage;
          } else {
            updated.push({ role: "assistant", content: assistantMessage });
          }
          return updated;
        });
      }
    } catch (err) {
      console.error("Stream error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ scale: 0.5, opacity: 0, x: "50vw", y: "50vh" }}
            animate={{
              scale: 1,
              opacity: 1,
              x: 0,
              y: 0,
              transition: { duration: 1, ease: "easeIn" },
            }}
            exit={{
              scale: 0.5,
              opacity: 0,
              x: "50vw",
              y: "50vh",
              transition: { duration: 1, ease: "easeInOut" },
            }}
            className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white"
          >
            💬
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer"
              onClick={() => setOpen(!open)}
            >
              💬
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence> */}

      {/* Floating Chat Circle */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        💬
      </motion.div>
      {/* Chat Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-80 h-96 bg-gray-900 text-white rounded-2xl shadow-xl flex flex-col z-50"
          >
            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-3 space-y-2">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded-lg max-w-[75%] ${
                    msg.role === "user"
                      ? "bg-blue-600 ml-auto text-right"
                      : "bg-gray-700 mr-auto text-left"
                  }`}
                >
                  {msg.content}
                </div>
              ))}
              {loading && (
                <div className="text-gray-400 text-sm">⏳ Typing...</div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <div className="flex border-t border-gray-700">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 bg-gray-800 p-2 outline-none text-sm"
                placeholder="Type a message..."
              />
              <button
                onClick={sendMessage}
                className="px-3 bg-blue-600 hover:bg-blue-500 text-sm rounded-r-lg"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
