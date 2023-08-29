import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/HomeCarousel.css";
import "swiper/css";

export default function HomeCarousel() {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
      <Container fluid classname="container-section swiper-container">
        <Row className="justify-content-center">
        <Col xs={11} md={9} lg={7} className="py-4 px-0">
      <Swiper
        ref={swiperRef}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        spaceBetween={30}
      >
        <SwiperSlide onClick={goNext}>
          <div className="slide-container">
            <img
              src="/ServiziCiglia/laminazione.webp"
              alt="Laminazione ciglia"
            />
            <div className="slide-caption">
              <h3>Laminazione</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={goNext}>
          <div className="slide-container">
            <img src="/ServiziCiglia/volume.webp" alt="Volume ciglia" />
            <div className="slide-caption">
              <h3>Volume</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={goNext}>
          <div className="slide-container">
            <img src="/ServiziCiglia/megavolume.webp" alt="Megavolume ciglia" />
            <div className="slide-caption">
              <h3>Megavolume</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={goNext}>
          <div className="slide-container">
            <img src="/ServiziCiglia/wet.webp" alt="Wet ciglia" />
            <div className="slide-caption">
              <h3>WET</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={goNext}>
          <div className="slide-container">
            <img src="/ServiziCiglia/onetoone.webp" alt="One To One ciglia" />
            <div className="slide-caption">
              <h3>One To One</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <h6 className="action-carosello">TOCCA LE FOTO PER VEDERNE ALTRE</h6>
      </Col>
      </Row>
      </Container>
  );
}
