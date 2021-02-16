import React from "react";

import "./style.sass";

interface IProps {
  avatar: string;
  name: string;
  text: string;
}

const Message: React.FC<IProps> = ({ avatar, name, text }) => {
  return (
    <div className="message">
      <div className="avatar">
        <img src={avatar} alt="" />
      </div>
      <div className="message-body">
        <div className="title">
          <span className="user-name">{name}</span>
          <span className="time">1:35 PM</span>
        </div>
        <div className="text">{text}</div>
      </div>
    </div>
  );
};

export default Message;
