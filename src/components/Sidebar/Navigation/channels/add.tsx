import React from 'react';

const Add: React.FC = () => {
    
    return (
        <div onClick={(e) => e.stopPropagation()} className="add-channel_modal">
            <h3>Create a channel</h3>
            <p>Channels are where your team communicates. They’re best when organized around a topic — #marketing, for example.</p>
            <label htmlFor="channel-name">Name</label>
            <input id="channel-name" type="text" placeholder=""/>
        </div>
    )
}

export default Add;