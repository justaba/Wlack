import React from 'react';
import { ReactComponent as Back } from "./icons/arrowback.svg";
import { ReactComponent as Forward } from "./icons/arrowforw.svg";

import './style.sass';

const Go: React.FC = () => {
    return (
        <div className="go">
            <Back />
            <Forward />
        </div>
    )
}

export default Go;