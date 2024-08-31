import React from "react";

function FullName({ fullName }) {
  return <div className="full-name">{fullName}</div>;
}

export default function App({ fullName, img }) {
  return (
    <div className="logement-host">
      <FullName fullName={fullName} />
      <img alt="Propriétaire" src={img} className="img-proprio"></img>
    </div>
  );
}
