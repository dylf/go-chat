import React from 'react';
import './ChatInput.scss'

function ChatInput({ send }) {
  return (
    <div className="ChatInput">
      <input onKeyDown={send} />
    </div>
  );
}

export default ChatInput;
