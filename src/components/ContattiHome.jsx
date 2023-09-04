import { Col, Container, Row } from "react-bootstrap";

export default function ContattiHome() {
  return (
    <Container fluid className="container-section py-4">
      <Row className="justify-content-center">
        <Col xs={11} md={9} lg={7} className="p-3 px-4">
          <h2>Contatti</h2>
        </Col>
      </Row>
    </Container>
  );
}
