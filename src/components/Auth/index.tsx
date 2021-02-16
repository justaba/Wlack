import React from 'react';
import Login from './login';


import './style.sass';

const Auth: React.FC = () => {
    return (
        <div className="auth">
            <Login />
        </div>
    )
}

export default Auth;