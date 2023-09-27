import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImageCard from "./ImageCard";
import "../css/ImageGrid.css";

import img1 from "../assets/Galleria/gallery_1.webp";
import img2 from "../assets/Galleria/gallery_2.webp";
import img3 from "../assets/Galleria/gallery_3.webp";
import img4 from "../assets/Galleria/gallery_4.webp";
import img5 from "../assets/Galleria/gallery_5.webp";
import img6 from "../assets/Galleria/gallery_6.webp";
import img7 from "../assets/Galleria/gallery_7.webp";
import img8 from "../assets/Galleria/gallery_8.webp";
import img9 from "../assets/Galleria/gallery_9.webp";
import img10 from "../assets/Galleria/gallery_10.webp";
import img11 from "../assets/Galleria/gallery_11.webp";
import img12 from "../assets/Galleria/gallery_12.webp";
import img13 from "../assets/Galleria/gallery_13.webp";
import img14 from "../assets/Galleria/gallery_14.webp";
import img15 from "../assets/Galleria/gallery_15.webp";
import img16 from "../assets/Galleria/gallery_16.webp";

import laminazione from "../assets/ServiziCiglia/laminazione.webp";
import megavolume from "../assets/ServiziCiglia/megavolume.webp";
import onetoone from "../assets/ServiziCiglia/onetoone.webp";
import volume from "../assets/ServiziCiglia/volume.webp";
import wet from "../assets/ServiziCiglia/wet.webp";

export default function ImageGrid() {
  const images = [
    { src: img11, double: false },
    { src: img13, double: false },
    { src: "", double: false },
    { src: img3, double: false },
    { src: "", double: false },
    { src: "", double: false },
    { src: laminazione, double: true },
    { src: img4, double: false },
    { src: img5, double: false },
    { src: megavolume, double: true },
    { src: img6, double: false },
    { src: "", double: false },
    { src: img7, double: false },
    { src: img8, double: false },
    { src: "", double: false },
  ];
  return (
    <Container fluid>
      <Row className="px-2">
        {images.map((imgObj, index) => (
          <Col
            xs={imgObj.double ? 12 : 6}
            md={imgObj.double ? 8 : 4}
            lg={imgObj.double ? 6 : 3}
            key={index}
            className="p-0"
          >
            {imgObj.src ? (
              <ImageCard src={imgObj.src} alt={`Image ${index + 1}`} />
            ) : (
              <div className="empty-space"></div>
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
}
