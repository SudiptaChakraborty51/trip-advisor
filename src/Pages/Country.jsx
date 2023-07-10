import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../Data/data";
import Card from "../Components/Card";

const Country = () => {
  const { continentName } = useParams();

  const continentData = data?.continents?.find(
    (continent) => continent?.name === continentName
  );

  const navigate = useNavigate();

  return (
    <div>
      <div className="back-heading-div">
        <i className="fa-solid fa-arrow-left" onClick={() => navigate("/")}></i>
        <h2>Top countries in {continentName} for your next holidays</h2>
      </div>
      <div className="flex-container">
        {continentData?.countries?.map((country) => (
          <Card
            key={country?.id}
            data={country}
            navlink={`/${continentName}/${country?.name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Country;
