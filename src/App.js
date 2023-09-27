import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import WhiteSpace from "./components/WhiteSpace";
import ImageGrid from "./components/ImageGrid";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ImageGrid />
    </>
  );
}

export default App;
