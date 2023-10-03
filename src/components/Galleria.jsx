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

import lash from "../assets/Svg/lash-svg.svg";
import curler from "../assets/Svg/curler.svg";
import mascara from "../assets/Svg/mascara.svg";

import laminazione from "../assets/ServiziCiglia/laminazione.webp";
import megavolume from "../assets/ServiziCiglia/megavolume.webp";
import onetoone from "../assets/ServiziCiglia/onetoone.webp";
import volume from "../assets/ServiziCiglia/volume.webp";
import wet from "../assets/ServiziCiglia/wet.webp";

import TitleSection from "./TitleSection";

export default function ImageGrid() {
  const images = [
    { src: img9, type: "normal", title: "LAMINAZIONE" },
    { src: img12, type: "normal", title: "LAMINAZIONE" },
    { src: laminazione, type: "double", title: "LAMINAZIONE" },
    { src: img1, type: "normal", title: "LAMINAZIONE" },
    { src: img2, type: "normal", title: "LAMINAZIONE" },
    { src: lash, type: "svg" },
    { src: img6, type: "normal", title: "LAMINAZIONE" },

    { src: volume, type: "double", title: "VOLUME" },
    { src: img8, type: "normal", title: "VOLUME" },
    { src: img7, type: "normal", title: "VOLUME" },

    { src: megavolume, type: "double", title: "MEGAVOLUME" },
    { src: img4, type: "normal", title: "MEGAVOLUME" },
    { src: img5, type: "normal", title: "MEGAVOLUME" },

    { src: mascara, type: "svg" },
    { src: img13, type: "normal", title: "ONE TO ONE" },
    { src: onetoone, type: "double", title: "ONE TO ONE" },

    { src: curler, type: "svg" },
    { src: img11, type: "normal", title: "WET" },
    { src: wet, type: "double", title: "WET" },
  ];
  return (
    <Container fluid className="section-galleria p-0" id="tp-galleria">
      <br />
      <br />
      {/* Funziona, stica delle goodpractice */}
      <br />
      <br />
      <Row className="">
        <TitleSection label={"GALLERIA"} />
        {images.map((imgObj, index) => (
          <Col
            xs={imgObj.type === "double" ? 12 : 6}
            md={imgObj.type === "double" ? 8 : 4}
            lg={imgObj.type === "double" ? 6 : 3}
            key={imgObj.src || index}
            className="py-4 px-0"
          >
            <ImageCard
              src={imgObj.src}
              alt={`Image ${index + 1}`}
              title={imgObj.title}
              type={imgObj.type}
              loading="lazy"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
