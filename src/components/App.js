import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
    state = {
        searchTerm: ""
    };

    handleSearchSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.searchTerm);
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
