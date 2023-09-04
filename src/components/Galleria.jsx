import React, { useEffect, useState } from "react";
import "../css/Galleria.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Galleria() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoomed, setZoomed] = useState(false);

  const immagini = [
    "/Galleria/gallery_1.webp",
    "/Galleria/gallery_2.webp",
    "/Galleria/gallery_3.webp",
    "/Galleria/gallery_4.webp",
    "/Galleria/gallery_5.webp",
    "/Galleria/gallery_6.webp",
    "/Galleria/gallery_7.webp",
    "/Galleria/gallery_8.webp",
    "/Galleria/gallery_9.webp",
    "/Galleria/gallery_10.webp",
    "/Galleria/gallery_11.webp",
    "/Galleria/gallery_12.webp",
    "/Galleria/gallery_13.webp",
    "/Galleria/gallery_14.webp",
    "/Galleria/gallery_15.webp",
    "/Galleria/gallery_16.webp",
  ];

  useEffect(() => {
    if (selectedImage) {
      setTimeout(() => {
        setZoomed(true);
      }, 0);
    }
  }, [selectedImage]);

  const closeOverlay = () => {
    setZoomed(false);
    setSelectedImage(null);
  };

  return (
    <Container fluid className="container-page">
      <h1 className="mt-4 text-center galleria-title">GALLERIA</h1>
      <h5 className="text-center mb-0 galleria-title">
        CLICCA SULLE FOTO PER INGRANDIRLE
      </h5>
      <Row>
        {immagini.map((src, index) => (
          <Col className="col-6 col-md-4 col-lg-3" key={index}>
            <div
              className="image-wrapper"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Immagine ${index + 1}`}
                className="img-fluid"
              />
            </div>
          </Col>
        ))}
      </Row>
      <h6 className="return-home">
        <Link className="scopri-link" to={"/"}>
          RITORNA ALLA HOME{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 72 72"
          >
            <path d="M 36 10 C 34.861 10 33.722922 10.386609 32.794922 11.162109 L 11.517578 28.941406 C 10.052578 30.165406 9.5519375 32.270219 10.460938 33.949219 C 11.711938 36.258219 14.661453 36.740437 16.564453 35.148438 L 35.359375 19.445312 C 35.730375 19.135313 36.269625 19.135313 36.640625 19.445312 L 55.435547 35.148438 C 56.183547 35.774437 57.093047 36.078125 57.998047 36.078125 C 59.171047 36.078125 60.333953 35.567219 61.126953 34.574219 C 62.503953 32.850219 62.112922 30.303672 60.419922 28.888672 L 58 26.867188 L 58 16.667969 C 58 15.194969 56.805984 14 55.333984 14 L 52.667969 14 C 51.194969 14 50 15.194969 50 16.667969 L 50 20.181641 L 39.205078 11.162109 C 38.277078 10.386609 37.139 10 36 10 z M 35.996094 22.925781 L 13.996094 41.302734 L 13.996094 50 C 13.996094 54.418 17.578094 58 21.996094 58 L 49.996094 58 C 54.414094 58 57.996094 54.418 57.996094 50 L 57.996094 41.302734 L 35.996094 22.925781 z M 32 38 L 40 38 C 41.105 38 42 38.895 42 40 L 42 50 L 30 50 L 30 40 C 30 38.895 30.895 38 32 38 z"></path>
          </svg>
        </Link>
      </h6>

      {selectedImage && (
        <div className="overlay" onClick={closeOverlay}>
          <img
            src={selectedImage}
            alt="Selezionata"
            className={`overlay-image ${zoomed ? "zoomed" : ""}`}
          />
        </div>
      )}
    </Container>
  );
}
