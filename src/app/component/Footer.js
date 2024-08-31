import React from "react";
import logo from "../assets/images/logofooter.png";

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="logo de Kasa"></img>
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
