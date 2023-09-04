import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "../css/ScopriTrattamenti.css";

export default function ScopriTrattamenti() {
  return (
    <Container fluid className="container-section scopri-servizi">
      <h5 className="scopri-button">
        <Link className="scopri-link" to={"/trattamenti"}>
          SCOPRI I TRATTAMENTI{" "}
        </Link>
      </h5>
      <br />
      <br />

      <h5 className="scopri-button">
        <Link className="scopri-link" to={"/galleria"}>
          GALLERIA{" "}
        </Link>
      </h5>
      <br />
      <br />
    </Container>
  );
}
