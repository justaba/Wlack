import React from 'react';

interface IProps {
    show: boolean
}

const ListHistory: React.FC<IProps> = ({show}) => {
    
    if(!show) return null;
    return (
        <div className="history-list">
             <span>Recent</span>
             <ul className="list">
                 <li></li>
             </ul>
        </div>
    )
}

export default ListHistory;

