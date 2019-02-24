import React from 'react';

const Search = (props) => {
    return (
      <div className="searchBox">
      <form onSubmit={props.handleSearch}>
                <input  onChange = {props.handleSearchText}type="text"/>
                <button type="submit">Search</button>
            </form>
      </div>
    )
}

export default Search;

