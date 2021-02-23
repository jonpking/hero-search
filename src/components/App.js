import React from "react";
import SearchBar from "./SearchBar";
import API from "../apis/api";

class App extends React.Component {
    handleSearchSubmit = async (searchTerm, event) => {
        event.preventDefault();
        console.log(searchTerm);
        const response = await API.get(`search/${searchTerm}`);
        console.log(response);
    };

    render() {
        return (
            <div className="ui container">
                <div className="ui segment">
                    <SearchBar
                        onSearchSubmit={this.handleSearchSubmit}
                    />
                </div>
            </div>
        );
    }
};

export default App;
