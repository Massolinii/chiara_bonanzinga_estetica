import { Col, Container, Row } from "react-bootstrap";
import "../css/Trattamenti.css";
import { useState } from "react";

export default function Trattamenti() {
  const formatPrice = (price) => (
    <>
      {" "}
      € {price}
      <span className="small-text">,00</span>
    </>
  );

  const MenuSection = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <Col xs={12} md={3} className="ruler-left mt-4 mb-2">
        <h3
          className={`p-2 mb-4 menu-title ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
        </h3>
        <div className={`menu-content ${isOpen ? "show" : "hide"}`}>
          {items.map((item, index) => (
            <div className="menu-item" key={index}>
              <div className="menu-service">{item.name}</div>
              <div className="menu-price">{formatPrice(item.price)}</div>
              <hr className="m-2" />
            </div>
          ))}
        </div>
      </Col>
    );
  };

  const ciglia = [
    { name: "Laminazione ciglia", price: 30 },
    { name: "Laminazione sopracciglia", price: 30 },
    { name: "Laminazione ciglia + sopracciglia", price: 50 },
    { name: "One to one", price: 30 },
    { name: "Wet", price: 40 },
    { name: "Volume", price: 60 },
    { name: "Megavolume", price: 70 },
  ];

  const cere = [
    { name: "Ceretta gambe", price: 20 },
    { name: "Ceretta gambe + inguine integrale", price: 30 },
    { name: "Ceretta mezze braccia (entrambe)", price: 5 },
    { name: "Ceretta braccia intere", price: 10 },
    { name: "Ceretta ascelle", price: 5 },
    { name: "Ceretta sopracciglia", price: 5 },
    { name: "Ceretta baffi", price: 1 },
    { name: "Ceretta glutei", price: 5 },
    { name: "Ceretta schiena", price: 5 },
    { name: "Ceretta total body", price: 40 },
  ];

  const unghie = [
    { name: "Semipermanente mani", price: 20 },
    { name: "Semipermanente piedi", price: 20 },
    { name: "Manicure", price: 10 },
    { name: "Smontaggio + Manicure", price: 15 },
    { name: "Allungamento in gel con cartina", price: 25 },
    { name: "Refill allungamento in gel", price: 20 },
    { name: "Allungamento in acrigel con dual form", price: 30 },
    { name: "Refill allungamento in acrigel", price: 25 },
  ];

  return (
    <Container fluid className="section-trattamenti">
      <Row className="ms-3">
        <Col xs={12} md={3}>
          <h2 className="pb-3">Trattamenti</h2>
          <h4>
            Vieni a lasciarti coccolare da trattamenti per la bellezza di tutto
            il tuo corpo. Dalle ciglia, alle cerette, ai trattamenti per unghie.
            <br />
            Esiste la soluzione adatta per chiunque.
          </h4>
        </Col>
        <MenuSection title="Ciglia" items={ciglia} />
        <MenuSection title="Cere" items={cere} />
        <MenuSection title="Unghie" items={unghie} />
      </Row>
    </Container>
  );
}
