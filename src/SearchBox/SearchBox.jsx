import React from 'react';
import './SearchBox.css'
const SearchBox = ({onInputChange}) => {
    return(
        <div  className="search-container">
        <input type="text" 
        onChange = 
        {(event) => onInputChange(event.target.value)} 
        className="search-input"
        placeholder = "type keywords"/>
        </div>
    )
}
export default SearchBox;