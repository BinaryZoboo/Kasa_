import React from "react";
import Accordeon from "../component/Accordeon";
import Footer from "../component/Footer";
import Header from "../component/Header";

const APropos = () => {
  return (
    <>
      <Header />
      <main className="main-apropos">
        <div className="banner">
          <img src="/assets/fondapropos.png" alt="lac et montagne" />
        </div>
        <section className="apropos-accordeon">
          <Accordeon
            title="Fiabilité"
            content={
              <div>
                Les annonces postées sur Kasa garantissent une flexibilité
                totale. Les photos sont conformes aux logements, et toutes les
                informations sont régulièrement vérifiées par nos équipes.
              </div>
            }
          />
          <Accordeon
            title="Respect"
            content={
              <div>
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </div>
            }
          />
          <Accordeon
            title="Service"
            content={
              <div>
                La bienveillance fait partie des valeurs fondatrices de Kasa.
                Tout comportement discriminatoire ou de perturbation du
                voisinage entraînera une exclusion de notre plateforme.
              </div>
            }
          />
          <Accordeon
            title="Sécurité"
            content={
              <div>
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
                que pour les voyageurs, chaque logement correspond aux critères
                de sécurité établis par nos services. En laissant une note aussi
                bien à l’hôte qu'au locataire, cela permet à nos équipes de
                vérifier que les standards sont bien respectés. Nous organisons
                également des ateliers sur la sécurité domestique pour nos
                hôtes.
              </div>
            }
          />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default APropos;
