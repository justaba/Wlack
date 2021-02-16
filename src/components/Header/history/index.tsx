import React, { useState } from 'react';

import { ReactComponent as Clock } from "./icons/clock.svg";

import './style.sass';
import ListHistory from './list';

const History: React.FC = () => {

    const [listShow, setListShow] = useState<boolean>(false);

    return (
        <div onClick={() => setListShow(!listShow)} className="history">
            <Clock />
            <ListHistory show={listShow} />
            <div className="modal-history">
                
            </div>
        </div>
    )
}

export default History;