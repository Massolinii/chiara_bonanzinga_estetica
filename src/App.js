import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import ImageGrid from "./components/ImageGrid";
import Trattamenti from "./components/Trattamenti";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ImageGrid />
      <Trattamenti />
    </>
  );
}

export default App;
