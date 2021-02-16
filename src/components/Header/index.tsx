import React from 'react';
import Go from './go';
import Historyd from './history/index';
import Search from './search';

import './style.sass';
import UserMenu from './user';

const Header: React.FC = () => {
    return (
        <div className="header">
            <Go />
            <Historyd />
            <Search />
            <UserMenu />
        </div>
    )
}

export default Header;