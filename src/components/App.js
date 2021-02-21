import React from "react";
import SearchBar from "./SearchBar";
import API from "../apis/api";

class App extends React.Component {
    state = {
        searchTerm: ""
    };

    handleSearchSubmit = async event => {
        event.preventDefault();
        console.log(this.state.searchTerm);
        const response = await API.get(`search/${this.state.searchTerm}`);
        console.log(response);
    };

    handleSearchChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    render() {
        return (
            <div className="ui container">
                <div className="ui segment">
                    <SearchBar
                        onSearchSubmit={this.handleSearchSubmit}
                        searchTerm={this.state.searchTerm}
                        onSearchChange={this.handleSearchChange}
                    />
                </div>
            </div>
        );
    }
};

export default App;
