// Chatbot.jsx
import React, { useState } from "react";
import { responses } from "./ChatbotResponses";
import "../CSS/Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi, Elara Here! 👋 Ask me anything about Jaideep's portfolio." }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMessage = input.toLowerCase();
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");

    // Find matching response
    let reply = responses.default;
    Object.keys(responses).forEach((key) => {
      if (userMessage.includes(key)) {
        reply = responses[key];
      }
    });

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    }, 800);
  };

  return (
    <>
      <button className="chatbot-btn" onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <span>Say Hello to Elara</span>
            <span className="x-span" onClick={() => (setIsOpen(false))}>X</span>
            </div>
          <div className="chatbot-body">
            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-msg ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chatbot-footer">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about skills, projects..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
