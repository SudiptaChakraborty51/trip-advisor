import React from "react";
import { data } from "../Data/data";
import Card from "../Components/Card";

const Continent = () => {
  return (
    <div>
      <h1>Welcome to Trip Advisor</h1>
      <h3 className="heading-text">Top Continents for your next holiday</h3>
      <div className="flex-container">
        {data.continents.map((continent) => (
          <Card
            key={continent?.id}
            data={continent}
            navlink={`/${continent?.name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Continent;
