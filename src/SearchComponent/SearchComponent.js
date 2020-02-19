import React from 'react';

import './SearchComponent.css';

const SearchComponent = (props) => {
    return(
        <div className="SearchContainer">
            <input className="SearchInput"
                   type="text"
                   value={props.searchValue}
                   onChange={event => props.changed(event)} />
            <button className="SearchButton"
                    onClick={props.clicked}>
                        Search
                    </button>
        </div>
    );
}

export default SearchComponent;