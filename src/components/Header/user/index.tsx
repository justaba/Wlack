import React, { useState } from 'react';

import './style.sass';

const UserMenu: React.FC = () => {

    const [showMenu, setShowMenu] = useState<boolean>(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return(
        <div onClick={toggleMenu} className="user-menu">
            <img src="https://i.ibb.co/TctH3hS/avatar.png" alt=""/>
            <div className={`menu ${showMenu ? `show` : 'hide'}`}>
                <div className="user">
                    <div className="avatar">
                        <img src="https://i.ibb.co/TctH3hS/avatar.png" alt=""/>
                    </div>
                    <div className="user-name">
                        <span className="name">John Shaw</span>
                        <div className="status">
                            <i className="online"></i>
                            Active
                        </div>
                    </div>
                </div>
                <div className="edit-status">
                    <button>
                        <div className="status-icon">

                        </div>
                        "Update your status"
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserMenu;

