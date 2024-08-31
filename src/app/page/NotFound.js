import React from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
import Header from "../component/Header";

const NotFound = () => {
  return (
    <>
      <div className="page-container">
        <Header />
        <main className="first">
          <h1>404</h1>
          <div>
            <p>Oups! La page que&nbsp;</p>
            <p>vous cherchez n'existe pas.</p>
          </div>
          <Link to="/">Retourner sur la page d'accueil</Link>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NotFound;
