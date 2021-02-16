import React from 'react';
import { ReactComponent as Plus } from "./icons/plus.svg";

import './style.sass';

const Workspace: React.FC = () => {
    return (
        <div className="workspaces">
            <div className="space choose">
                <img src="https://i.ibb.co/8XtxMj2/avatar.png" alt=""/>
            </div>
            <div className="add">
                <Plus />
            </div>
            
        </div>
    )
}

export default Workspace;