import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Carousel({ images }) {
  const [i, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirst = i === 0;
    const newIndex = isFirst ? images.length - 1 : i - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLast = i === images.length - 1;
    const newIndex = isLast ? 0 : i + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      {images.length > 1 && (
        <button onClick={goToPrevious} className="carousel-button-left">
          <FontAwesomeIcon icon={faChevronLeft} className="carousel-chevron" />
        </button>
      )}
      <img src={images[i]} alt="Apercu logement" className="carousel-img" />
      {images.length > 1 && (
        <button onClick={goToNext} className="carousel-button-right">
          <FontAwesomeIcon icon={faChevronRight} className="carousel-chevron" />
        </button>
      )}
      <div className="carousel-counter">
        {i + 1} / {images.length}
      </div>
    </div>
  );
}

export default Carousel;
