import { Col, Container, Row } from "react-bootstrap";

export default function Contatti() {
  return (
    <Container fluid className="container-section py-4" id="contatti">
      <Row className="justify-content-center hero-text">
        <Col xs={11} md={9} lg={7} className="p-3 px-4 full-width-link">
          <p>
            Puoi prenotare un appuntamento al numero:{" "}
            <a href="tel:+39123456789" className="text-black">
              3479844653
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}
