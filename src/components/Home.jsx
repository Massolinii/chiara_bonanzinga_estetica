import HomeCarousel from "./HomeCarousel";
import ChiaraLashmaker from "./ChiaraLashmaker";
import ScopriServizi from "./ScopriTrattamenti";
import { Container } from "react-bootstrap";
import Contatti from "./Contatti";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
    }
  }, []);

  return (
    <div>
      <Container fluid className="container-page">
        <ChiaraLashmaker />
        <HomeCarousel />
        <ScopriServizi />
        <Contatti />
      </Container>
    </div>
  );
}
