import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Header = () => {
  const location = useLocation();

  return (
    <header className="headers">
      <Link to="/" className="header-a-banner">
        <img src={logo} className="banner-logo" alt="Logo de Kasa" />
      </Link>
      <ul>
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active-link" : ""}
          >
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/a-propos"
            className={location.pathname === "/a-propos" ? "active-link" : ""}
          >
            A Propos
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
