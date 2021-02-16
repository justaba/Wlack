import React, { ReactNode } from 'react';

import './style.sass';

interface IProps {
    children: ReactNode;
    show: boolean;
    close: Function;
}

const Modal: React.FC<IProps> = ({children, show, close}) => {
    if(!show) return null;
    return (
        <div onClick={() => close()} className="modal">
            {children}
        </div>
    )
}

export default Modal;