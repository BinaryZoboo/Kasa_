import { faStar } from "@fortawesome/free-solid-svg-icons"; // Étoile remplie
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Star = ({ filled }) => (
  <FontAwesomeIcon
    icon={faStar}
    className={filled ? "rating-star-pleine" : "rating-star-vide"}
  />
);
export default function Stars({ rating }) {
  const starArray = Array(5).fill();

  return (
    <div className="stars">
      {starArray.map((_, index) => (
        <Star key={index} filled={index < rating} />
      ))}
    </div>
  );
}
