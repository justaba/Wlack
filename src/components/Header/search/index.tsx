import React from 'react';

import './style.sass';

const Search: React.FC = () => {
    return (
        <div className="search">
            <div className="search-input">
                <input type="text"/>
            </div>
        </div>
    )
}

export default Search;