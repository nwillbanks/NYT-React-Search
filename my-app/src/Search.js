import React from 'react';

const Search = (props) => {
    return (
      <div className="searchBox">
        <form action="">
            <input onChange={props.handleSearch} type="text"/>
            <button type="submit">Search</button>
        </form>
      </div>
    )
}

export default Search;