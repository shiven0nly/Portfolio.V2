import React, { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import './ChatWidget.css';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hi there! I'm Shiven's AI Assistant. Ask me anything about his skills, projects, or upload a JD to run a match analysis!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const recognitionRef = useRef(null);

  // Speech Recognition Setup
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        let transcript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          transcript += event.results[i][0].transcript;
        }
        setInput(transcript);
      };

      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);

      recognitionRef.current = recognition;
    }
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert('Voice recognition is not supported in this browser.');
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isLoading, isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    }

    const userQuery = input.trim();
    setInput('');
    setIsLoading(true);

    const userMsgId = Date.now();
    const botMsgId = Date.now() + 1;

    setMessages((prev) => [
      ...prev,
      { id: userMsgId, sender: 'user', text: userQuery },
      { id: botMsgId, sender: 'bot', text: '' },
    ]);

    // Make sure this points to your deployed backend API URL
    const BACKEND_URL = "https://ai-engineering-repo.vercel.app";
    await streamResponse(`${BACKEND_URL}/chat`, JSON.stringify({ message: userQuery }), 'application/json', botMsgId);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file || isLoading) return;

    setIsLoading(true);
    const userMsgId = Date.now();
    const botMsgId = Date.now() + 1;

    setMessages((prev) => [
      ...prev,
      { id: userMsgId, sender: 'user', text: `📁 Uploaded Job Description: **${file.name}**` },
      { id: botMsgId, sender: 'bot', text: '' },
    ]);

    const formData = new FormData();
    formData.append('file', file);
    e.target.value = '';

    const BACKEND_URL = "https://ai-engineering-repo.vercel.app";
    await streamResponse(`${BACKEND_URL}/chat/match-jd`, formData, null, botMsgId);
  };

  const streamResponse = async (url, body, contentType, botMsgId) => {
    try {
      const headers = {};
      if (contentType) headers['Content-Type'] = contentType;

      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: body,
      });

      if (!response.body) throw new Error('No response body');

      const reader = response.body.getReader();
      const decoder = new TextDecoder('utf-8');

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === botMsgId ? { ...msg, text: msg.text + chunk } : msg
          )
        );
      }
    } catch (error) {
      console.error('Streaming error:', error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === botMsgId
            ? { ...msg, text: '⚠️ Unable to complete request. Please try again.' }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="widget-wrapper">
      {/* 1. Floating Toggle Trigger Button */}
      <button
        className={`floating-bubble-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        title="Ask AI Assistant"
      >
        {isOpen ? (
          /* Close Icon */
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          /* Chat / Sparkle Icon */
          <div className="bubble-content">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span className="bubble-label">Ask AI</span>
          </div>
        )}
      </button>

      {/* 2. Floating Popup Chat Window */}
      {isOpen && (
        <div className="widget-popup">
          <header className="widget-header">
            <div className="brand">
              <div className="sparkle-icon">🤖</div>
              <div>
                <h3>Shiven's AI Assistant</h3>
                <p className="subtitle">Powered by Groq LLM</p>
              </div>
            </div>
            <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
          </header>

          <div className="widget-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`message-row ${msg.sender === 'user' ? 'user-row' : 'bot-row'}`}
              >
                <div className={`glass-bubble ${msg.sender === 'user' ? 'user-bubble' : 'bot-bubble'}`}>
                  {msg.text === '' && isLoading && msg.sender === 'bot' ? (
                    <div className="typing-indicator">
                      <span></span><span></span><span></span>
                    </div>
                  ) : (
                    <div className="markdown-content">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="widget-input-wrapper">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept=".pdf,.docx"
              style={{ display: 'none' }}
            />

            <button
              type="button"
              className="attach-btn"
              onClick={() => fileInputRef.current?.click()}
              disabled={isLoading}
              title="Upload JD"
            >
              📎
            </button>

            <button
              type="button"
              className={`mic-btn ${isListening ? 'listening' : ''}`}
              onClick={toggleListening}
              disabled={isLoading}
            >
              🎙️
            </button>

            <input
              type="text"
              placeholder={isListening ? 'Listening...' : 'Ask something...'}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
            />

            <button type="submit" className="send-btn" disabled={isLoading || !input.trim()}>
              ➔
            </button>
          </form>
        </div>
      )}
    </div>
  );
}