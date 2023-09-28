import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ImageCard from "./ImageCard";
import "../css/Galleria.css";

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
import WhiteSpace from "./TitleSection";
import TitleSection from "./TitleSection";

export default function ImageGrid() {
  const images = [
    { src: img11, double: false, title: "WET" },
    { src: img8, double: false, title: "ONE TO ONE" },
    { src: "", double: false },
    { src: img13, double: false, title: "ONE TO ONE" },
    { src: "", double: false },
    { src: "", double: false },
    { src: laminazione, double: true, title: "LAMINAZIONE" },
    { src: img4, double: false, title: "MEGAVOLUME" },
    { src: img5, double: false, title: "MEGAVOLUME" },
    { src: volume, double: true, title: "VOLUME" },
    { src: img9, double: false, title: "LAMINAZIONE" },
    { src: "", double: false },
    { src: img7, double: false, title: "VOLUME" },
    { src: img12, double: false, title: "LAMINAZIONE" },
    { src: "", double: false },
    { src: wet, double: true, title: "WET" },
    { src: "", double: false },
    { src: img1, double: false, title: "LAMINAZIONE" },
    { src: img2, double: false, title: "LAMINAZIONE" },
    { src: img3, double: false, title: "LAMINAZIONE" },
    { src: img6, double: false, title: "LAMINAZIONE" },
  ];
  return (
    <Container fluid className="section-galleria">
      <Row className="ms-3 my-5">
        <TitleSection label={"GALLERIA"} />
        {images.map((imgObj, index) => (
          <Col
            xs={imgObj.double ? 12 : 6}
            md={imgObj.double ? 8 : 4}
            lg={imgObj.double ? 6 : 3}
            key={index}
            className="pt-4 p-0"
          >
            {imgObj.src ? (
              <ImageCard
                src={imgObj.src}
                alt={`Image ${index + 1}`}
                title={imgObj.title}
              />
            ) : (
              <div className="empty-space"></div>
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
}
