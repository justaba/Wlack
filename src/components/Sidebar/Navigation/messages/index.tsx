import React from 'react';
import { ReactComponent as Arrow } from "./icons/arrow.svg";

import './style.sass';

const Messages: React.FC = () => {
    return (
        <div className="messages">
            <div className="title">
                <Arrow /> Direct messages
            </div>
            <ul className="list">
                <li><img src="https://i.ibb.co/wRRSQw0/my-avatar.png" alt=""/>Slackbot</li>
                <li><img src="https://i.ibb.co/7NtzD55/avatar.png" alt=""/>Abner Antonio</li>
            </ul>
            
        </div>
    )
}

export default Messages;