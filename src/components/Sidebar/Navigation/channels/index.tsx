import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from "./icons/arrow.svg";
import { ReactComponent as Hashtag } from "./icons/hashtag.svg";
import { ReactComponent as Plus } from "./icons/add.svg";

import './style.sass';
import Modal from '../../../Modal';
import Add from './add';

const Channels: React.FC = () => {

    const [modal, setModal] = useState(false);


    return (
        <div className="channels">
            <div className="title">
                <Arrow /> Channels
            </div>
            <ul className="list">
                <Link to="./dfsdfsdf">
                    <li><Hashtag />improve_slack</li>
                </Link>
                <li><Hashtag />design_daily</li>
                <li><Hashtag />design_interface</li>
            </ul>
            <div onClick={() => setModal(true)} className="add-channel">
                <div className="add-icon">
                    <Plus />
                </div>
                 Add channel
            </div>
            <Modal show={modal} close={() => setModal(false)}>
                <Add />
            </Modal>
        </div>
    )
}

export default Channels;