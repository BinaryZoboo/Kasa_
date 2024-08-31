import React from "react";

export const Tags = ({ tags }) => {
  return (
    <div className="logement-tags">
      {tags.map((tag, tagIndex) => (
        <p key={tagIndex} className="tag">
          {tag}
        </p>
      ))}
    </div>
  );
};
