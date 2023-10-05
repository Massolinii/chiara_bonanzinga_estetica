import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Galleria from "./components/Galleria";
import ListinoPrezzi from "./components/ListinoPrezzi";
import TipiCiglia from "./components/TipiCiglia";
import Contatti from "./components/Contatti";
import { Container } from "react-bootstrap";
function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Container fluid className="body-container px-4">
        <TipiCiglia />
        <ListinoPrezzi />
        <Galleria />
        <Contatti />
      </Container>
    </>
  );
}

export default App;
