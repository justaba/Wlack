import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import * as io from 'socket.io-client';
import Form from "./form";
import { ReactComponent as Hashtag } from "./icons/hashtag.svg";
import Message from "./message";

import "./style.sass";

interface IMessage {
  avatar: string;
  user: string;
  text: string
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [message, setMessage] = useState<string>('');
  const [activeSubmit, setActiveSubmit] = useState<boolean>(false);
  const socketRef = useRef<SocketIOClient.Socket>();
  const chat = useParams();
  console.log(chat)
  useEffect(() => {
    socketRef.current = io.connect("http://localhost:3888");
    socketRef.current.on("get message", (msg:IMessage) => {
      setMessages((messages) => [...messages, msg]);
      console.log([...messages, msg])
    })
    return () => {socketRef.current?.disconnect()}
  }, [])

  const submitMessage = () => {
    socketRef.current?.emit("send message", {user: 'Boris', avatar: 'https://i.ibb.co/TctH3hS/avatar.png', text: message});
    setMessages([...messages, {user: 'Boris', avatar: 'https://i.ibb.co/TctH3hS/avatar.png', text: message}]);
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setMessage(text);
    setActiveSubmit(e.target.value.length > 0 ? true : false)
  }

  return (
    <div className="chat">
      <div className="head">
        <div className="title">
          <h3>
            <Hashtag />
            design_daily
          </h3>
          <span>Everyday design routine</span>
        </div>
      </div>
      <div className="body">
        <div className="message-list">
          {
            messages?.map((msg, i) => {
              return <Message key={i} avatar={msg.avatar} name={msg.user} text={msg.text} />
            })
          }

        </div>
        <Form activeSubmit={activeSubmit} submit={submitMessage} change={handleChange} />
      </div>
    </div>
  );
};

export default Chat;
