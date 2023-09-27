const ImageCard = ({ src, alt }) => (
  <div className="image-card">
    <img src={src} alt={alt} className="img-fluid opacity-effect" />
  </div>
);

export default ImageCard;
