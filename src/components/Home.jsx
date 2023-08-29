import HomeCarousel from "./HomeCarousel";
import ChiaraLashmaker from "./ChiaraLashmaker";
import ScopriServizi from "./ScopriTrattamenti";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Container fluid className="container-page">
        <ChiaraLashmaker />
        <HomeCarousel />
        <ScopriServizi />
      </Container>
    </div>
  );
}
