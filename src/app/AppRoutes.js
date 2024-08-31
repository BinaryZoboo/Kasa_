import React from "react";
import { Route, Routes } from "react-router-dom";
import APropos from "./page/Apropos";
import Home from "./page/Home";
import Logement from "./page/Logement";
import NotFound from "./page/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/logement/:id" element={<Logement />} />
      <Route exact path="/a-propos" element={<APropos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
