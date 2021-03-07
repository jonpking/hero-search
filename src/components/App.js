import React from "react";
import SearchBar from "./SearchBar";
import HeroList from "./HeroList";
import API from "../apis/api";

class App extends React.Component {
    state = {
        heroData: []
    }

    handleSearchSubmit = async (searchTerm, event) => {
        event.preventDefault();
        const response = await API.get(`search/${searchTerm}`);
        this.setState({ heroData: response.data.results });
        console.log(this.state.heroData);
    };

    render() {
        return (
            <div className="ui container">
                <div className="ui segment">
                    <SearchBar
                        onSearchSubmit={this.handleSearchSubmit}
                    />
                </div>
                <div className="ui segment">
                    <HeroList heroData={this.state.heroData} />
                </div>
            </div>
        );
    }
};

export default App;
