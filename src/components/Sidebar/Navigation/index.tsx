import React from 'react';
import Channels from './channels';
import { ReactComponent as Arrow } from "./icons/arrow.svg";
import { ReactComponent as New } from "./icons/new.svg";
import Menu from './menu';
import Messages from './messages';

import './style.sass';

const Navigation: React.FC = () => {
    return (
        <div className="navigation">
            <div className="nav-head">
                <h2>Web App <Arrow /></h2>
                <New />
            </div>
            <div className="nav-panel">
                <Menu />
                <Channels />
                <Messages />
            </div>
        </div>
    )
}

export default Navigation;