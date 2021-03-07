import React from "react";

const HeroList = ({ heroData }) => {

    const heroNames = heroData.map((heroName) =>
        <h1 key={heroName.name}>{heroName.name}</h1>
    );

    return (
        <div>
            {heroNames}
        </div>
    )
};

export default HeroList;
