import { Container, Row, Col } from "react-bootstrap";

export default function ChiaraLashmaker() {
  return (
    <div>
      <Container className="sfondo-chiara">
        <Row>
          <Col className="col-12 col-sm-11 col-md-10 col-lg-9 pt-3 hero">
            <h1 className="hero-title">CHIARA BONANZINGA ESTETICA</h1>
            <p className="ps-3 pt-4 hero-text">
              Il luogo ideale per prenderti cura del tuo sguardo e della tua
              bellezza. Situato in Via Palermo n°780 (ME), lasciati stupire dai
              miei trattamenti certificati di Laminazione Ciglia e Sopraciglia,
              One to One, Wet, Volume e Megavolume, dedicati ad esaltare la
              bellezza dei tuoi occhi. Con una tecnica raffinata ed un utilizzo
              di prodotti di alta qualità, sono garantiti risultati duraturi e
              soddisfacenti. <br /> <br />
              La gamma di servizi si estende oltre, con l'offerta di cerette,
              sia per specifiche zone che per tutto il corpo, e trattamenti di
              semipermanente per mani e piedi.
              <br /> <br />
              Non esitare a prenotare un appuntamento per scoprire come
              raggiungere la tua bellezza ideale delle ciglia e sopracciglia.{" "}
              <br />
              Ti aspetto!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
