import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import "../css/HomeCarousel.css";
import "swiper/css";

export default function HomeCarousel() {
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <div className="swiper-div">
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
              src="/ServiziCiglia/laminazione.jpg"
              alt="Laminazione ciglia"
            />
            <div className="slide-caption">
              <h3>Laminazione</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={goNext}>
          <div className="slide-container">
            <img src="/ServiziCiglia/volume.jpg" alt="Volume ciglia" />
            <div className="slide-caption">
              <h3>Volume</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={goNext}>
          <div className="slide-container">
            <img src="/ServiziCiglia/megavolume.jpg" alt="Megavolume ciglia" />
            <div className="slide-caption">
              <h3>Megavolume</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={goNext}>
          <div className="slide-container">
            <img src="/ServiziCiglia/wet.jpg" alt="Wet ciglia" />
            <div className="slide-caption">
              <h3>WET</h3>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide onClick={goNext}>
          <div className="slide-container">
            <img src="/ServiziCiglia/onetoone.jpg" alt="One To One ciglia" />
            <div className="slide-caption">
              <h3>One To One</h3>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <h6>TOCCA LE FOTO PER VEDERNE ALTRE</h6>
    </div>
  );
}
