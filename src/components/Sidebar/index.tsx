import React from 'react';
import Workspace from './Workspace';

import './style.sass';
import Navigation from './Navigation';

const Sidebar: React.FC = () => {
    return (
        <div className="sidebar">
           <Workspace />
           <Navigation />
        </div>
    )
}

export default Sidebar;