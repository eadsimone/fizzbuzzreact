import React from 'react';
import logo from './logo.svg';
import './App.css';
import Messages from "./Messages/Messages";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Messages />
      </header>
    </div>
  );
}

export default App;
