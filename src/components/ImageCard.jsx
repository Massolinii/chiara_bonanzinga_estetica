const ImageCard = ({ src, alt, title }) => (
  <div className="image-card">
    <img src={src} alt={alt} className="img-fluid opacity-effect" />
    <div className="image-title">{title}</div>
  </div>
);

export default ImageCard;
