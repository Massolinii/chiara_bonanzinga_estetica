import "../css/Hero.css";
import videoHero from "../assets/hero_chiara_60.mp4";
import React from "react";

export default function Hero() {
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="hero-section" id="tp-home">
      <div className="video-overlay"></div>
      <video className="hero-video" autoPlay loop muted playsInline>
        <source src={videoHero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-text">
        <h1>Chiara Bonanzinga</h1>
        <h2>Lashmaker, beautician, nail artist and much more.</h2>
      </div>
    </div>
  );
}
