import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Accordeon from "../component/Accordeon";
import Carousel from "../component/Carousel";
import Footer from "../component/Footer";
import Header from "../component/Header";
import Proprio from "../component/Proprio";
import Stars from "../component/Stars";
import { Tags } from "../component/Tags";
import data from "../data/logement.json";
import NotFound from "./NotFound";

const Logement = () => {
  const { id } = useParams();

  const [logement, setLogement] = useState({
    tags: [],
    equipments: [],
    pictures: [],
    rating: "",
    title: "",
    host: { name: "", picture: "" },
    location: "",
  });

  useEffect(() => {
    data.map((house) => {
      if (house.id === id) {
        setLogement(house);
      }
      return null;
    });
  }, [id]);

  if (logement.id === undefined) {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      <main className="logement-main">
        <Carousel images={logement.pictures} />
        <section className="section-log1">
          <div className="logement-header">
            <div className="logement-info">
              <h1>{logement.title}</h1>
              <p>{logement.location}</p>
            </div>
            <Tags tags={logement.tags} />
          </div>
          <div className="logement-compo">
            <Proprio
              fullName={logement.host.name}
              img={logement.host.picture}
            />
            <Stars rating={logement.rating} />
          </div>
        </section>
        <section className="section-log2">
          <Accordeon title="Description" content={logement.description} />
          <Accordeon
            title="Équipement"
            content={
              <ul>
                {logement.equipments.map((equipment, index) => {
                  return <li key={index}>{equipment}</li>;
                })}
              </ul>
            }
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Logement;
