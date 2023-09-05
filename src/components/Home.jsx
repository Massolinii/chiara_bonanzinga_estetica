import HomeCarousel from "./HomeCarousel";
import ChiaraLashmaker from "./ChiaraLashmaker";
import ScopriServizi from "./ScopriTrattamenti";
import { Container } from "react-bootstrap";
import Contatti from "./Contatti";

export default function Home() {
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
