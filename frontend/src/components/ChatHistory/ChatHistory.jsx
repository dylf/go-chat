import React from 'react';
import Message from '../Message';

function ChatHistory({ chatHistory }) {
  const messages = chatHistory.map((message, index) => (
    <Message message={message.data} />
  ));

  return (
    <div className="ChatHistory">
      <h2>Chat History</h2>
      {messages}
    </div>
  );
}

export default ChatHistory;
