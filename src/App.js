import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Galleria from "./components/Galleria";
import ListinoPrezzi from "./components/ListinoPrezzi";
import TipiCiglia from "./components/TipiCiglia";
import Contatti from "./components/Contatti";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <TipiCiglia />
      <ListinoPrezzi />
      <Galleria />
      <Contatti />
    </>
  );
}

export default App;
