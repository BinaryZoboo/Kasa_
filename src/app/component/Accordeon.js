import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Accordeon({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordeon-container">
      <button className="accordeon-toggle" onClick={toggleCollapse}>
        {title}{" "}
        <FontAwesomeIcon
          icon={faChevronUp}
          className="accordeon-chevron"
          style={{
            transform: isOpen ? "rotate(-180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </button>
      <div
        className="accordeon-content"
        style={{
          maxHeight: isOpen ? "300px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <div>{content}</div>
      </div>
    </div>
  );
}

export default Accordeon;
