import React from "react";

class SearchBar extends React.Component {
    state = {
        searchTerm: ""
    };

    onSearchSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onSearchSubmit}>
                    <div className="field">
                        <label>Search Here</label>
                        <input
                            type="text"
                            value={this.state.searchTerm}
                            onChange={
                                e => this.setState({
                                    searchTerm: e.target.value
                                })
                            }
                        />
                    </div>
                </form>
            </div>
        );
    }
};

export default SearchBar;
