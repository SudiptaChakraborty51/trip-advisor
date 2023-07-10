import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { data } from "../Data/data";

const DestinationDetails = () => {
  const { continentName, countryName, destinationName } = useParams();

  const continentData = data?.continents?.find(
    (continent) => continent?.name === continentName
  );

  const countryData = continentData?.countries?.find(
    (country) => country?.name === countryName
  );

  const destination = countryData?.destinations?.find(
    (destination) => destination?.name === destinationName
  );

  const navigate = useNavigate();
  return (
    <div>
      <div className="back-heading-div">
        <i className="fa-solid fa-arrow-left" onClick={() => navigate(-1)}></i>
        <h1>{destination?.name}</h1>
      </div>
      <div className="details-content">
        <img src={destination?.image} alt={destination?.name} />
        <div className="destination-details">
          <p>
            <strong>Description: </strong>
            <span>{destination?.description}</span>
          </p>
          <p>
            <strong>Ratings: </strong>
            <span>{destination?.ratings}</span>
          </p>
          <p>
            <strong>Reviews: </strong>
            <span>{destination?.reviews}</span>
          </p>
          <p>
            <strong>Location: </strong>
            <span>{destination?.location}</span>
          </p>
          <p>
            <strong>Opening Hours: </strong>
            <span>{destination?.openingHours}</span>
          </p>
          <p>
            <strong>Ticket Hours: </strong>
            <span>{destination?.ticketPrice}</span>
          </p>
          <Link
            to={destination?.website}
            className="website-link"
            target="_blank"
          >
            Website
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
