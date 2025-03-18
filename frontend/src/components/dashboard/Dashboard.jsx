import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      setMessages([...messages, { text: inputMessage, sender: 'user' }]);
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: "Thanks for your message! I'm here to help.",
          sender: 'bot'
        }]);
      }, 1000);
      setInputMessage('');
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-brand">WiseWallet</div>
      </nav>
      <div className="chat-container">
        <div className="chat-messages">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 mt-8">
              No messages yet. Start a conversation!
            </div>
          )}
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`message ${message.sender}`}
            >
              {message.text}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="chat-input-form">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message here..."
            className="chat-input"
            autoFocus
          />
          <button type="submit" className="send-button">
            Send
          </button>
        </form>
      </div>
    </>
  );
}

export default Dashboard;
