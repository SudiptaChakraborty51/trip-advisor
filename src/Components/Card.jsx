import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = ({ data, navlink }) => {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate(navlink)}>
      <img src={data?.image} alt={data?.name} />
      <div className="card-content">
        <i className="fa-solid fa-location-dot"></i>
        <p>{data?.name}</p>
      </div>
    </div>
  );
};

export default Card;
