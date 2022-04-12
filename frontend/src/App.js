import { useEffect, useState } from 'react';
import { connect, sendMsg } from './api';
import './App.css';
import ChatHistory from './components/ChatHistory';
import ChatInput from './components/ChatInput';
import Header from './components/Header';

function App() {
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connect((msg) => {
      setChatHistory([...chatHistory, msg]);
    });
  });

  let send = (event) => {
    if (event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = '';
    }
  };

  return (
    <div className="App">
      <Header />
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput send={send} />
    </div>
  );
}

export default App;
