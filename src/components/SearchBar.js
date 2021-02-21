import React from "react";

const SearchBar = (props) => {
    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={props.onSearchSubmit}>
                <div className="field">
                    <label>Search Here</label>
                    <input
                        type="text"
                        value={props.searchTerm}
                        onChange={props.onSearchChange}
                    />
                </div>
            </form>
        </div>
    )
};

export default SearchBar;
