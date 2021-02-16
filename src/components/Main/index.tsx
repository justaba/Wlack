import React from 'react';
import Auth from '../Auth';
import logo from './icons/slacklogo.png';

import './style.sass';

const Main: React.FC = () => {
    return (
        <div className="index">
            <div className="head">
                <img src={logo} alt=""/>
                <h1>Wlack</h1>
            </div>
            <div className="auth-toggle">
                <span>LOGIN</span>
                <span>REGISTER</span>
            </div>
            <Auth />
        </div>
    )
}

export default Main;