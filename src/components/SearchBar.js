import React from "react";

class SearchBar extends React.Component {
    render() {
        return (
            <div className="ui form">
                <div className="field">
                    <label>Search Here</label>
                    <input type="text" />
                </div>
            </div>
        );
    }
};

export default SearchBar;
