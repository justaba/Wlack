import React from 'react';
import { ReactComponent as Threads } from "./icons/threads.svg";
import { ReactComponent as Reaction } from "./icons/reaction.svg";
import { ReactComponent as Saved } from "./icons/saved.svg";
import { ReactComponent as More } from "./icons/more.svg";


import './style.sass';

const Menu: React.FC = () => {
    return (
        <div className="menu">
            <span className="menu-item">
                <Threads /> Threads
            </span>
            <span className="menu-item">
                <Reaction /> Mentions & reactions
            </span>
            <span className="menu-item">
                <Saved /> Saved items
            </span>
            <span className="menu-item">
                <More /> More
            </span>
        </div>       
    )
}

export default Menu;