import React from "react";

class SearchBar extends React.Component {
    state = {
        searchTerm: ""
    };

    render() {
        return (
            <div className="search-bar ui segment" >
                <form className="ui form" onSubmit={e => this.props.onSearchSubmit(this.state.searchTerm, e)}>
                    <div className="field">
                        <label>Search Here</label>
                        <input
                            type="text"
                            value={this.state.searchTerm}
                            onChange={
                                e => this.setState({
                                    searchTerm: e.target.value
                                })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}


export default SearchBar;
