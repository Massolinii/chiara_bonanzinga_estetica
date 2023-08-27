import { Container, Row, Col } from "react-bootstrap";
import "../css/ChiaraLashmaker.css";

export default function ChiaraLashmaker() {
  return (
    <div className="chiara-section">
      <Container>
        <Row className="justify-content-center">
          <Col xs={11} md={10} lg={9} className="hero p-1">
            <h1 className="hero-title">CHIARA BONANZINGA ESTETICA</h1>
            <p className="hero-text ps-2 mb-2">
              Il luogo ideale per prenderti cura del tuo sguardo e della tua
              bellezza. Situato in Via Palermo n°780 (ME), lasciati stupire dai
              miei trattamenti certificati di Laminazione Ciglia e Sopraciglia,
              One to One, Wet, Volume e Megavolume, dedicati ad esaltare la
              bellezza dei tuoi occhi. Con una tecnica raffinata ed un utilizzo
              di prodotti di alta qualità, sono garantiti risultati duraturi e
              soddisfacenti.
              <br /> <br />
              La gamma di servizi si estende anche alle cerette, sia per
              specifiche zone che per tutto il corpo, oltre trattamenti di
              semipermanente per mani e piedi.
              <br /> <br />
              Prenota ora un appuntamento per scoprire come raggiungere la tua
              bellezza ideale delle ciglia e sopracciglia.
              <br />
              Ti aspetto!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}