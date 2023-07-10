import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "../Data/data";
import Card from "../Components/Card";

const Destination = () => {
  const { continentName, countryName } = useParams();

  const continentData = data?.continents?.find(
    (continent) => continent?.name === continentName
  );

  const countryData = continentData?.countries?.find(
    (country) => country?.name === countryName
  );

  const navigate = useNavigate();
  return (
    <div>
      <div className="back-heading-div">
        <i className="fa-solid fa-arrow-left" onClick={() => navigate(-1)}></i>
        <h2>Top destinations in {countryName} for your next holidays</h2>
      </div>
      <div className="flex-container">
        {countryData?.destinations?.map((destination) => (
          <Card
            key={destination?.id}
            data={destination}
            navlink={`/${continentName}/${countryName}/${destination?.name}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Destination;
