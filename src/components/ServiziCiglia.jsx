import { Row, Col, Container, Image } from "react-bootstrap";

export default function ServiziCiglia() {
  const services = [
    {
      image: "/ServiziCiglia/laminazione.jpg",
      description: "Laminazione",
    },
    {
      image: "/ServiziCiglia/megavolume.jpg",
      description: "Megavolume",
    },
    { image: "/ServiziCiglia/onetoone.jpg", description: "One To One" },
    { image: "/ServiziCiglia/volume.jpg", description: "Volume" },
    { image: "/ServiziCiglia/wet.jpg", description: "WET" },
  ];

  return (
    <Container className="pt-5 mt-5">
      {services.map((service, index) => (
        <Row
          key={index}
          className={
            index % 2 === 0
              ? "align-items-center"
              : "align-items-center flex-row-reverse"
          }
        >
          <Col xl={6}>
            <Image src={service.image} fluid className="services-image" />
          </Col>
          <Col xl={6}>
            <p className="services-description">{service.description}</p>
          </Col>
        </Row>
      ))}
    </Container>
  );
}
