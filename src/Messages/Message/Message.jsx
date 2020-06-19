import React from 'react';
import './Message.css';

function Message({number= '', text=''}) {
  return (
    <div className="message">
        <span>The number is:{number}</span>
        <span>and the result is: {text}</span>
    </div>
  );
}

export default Message;
