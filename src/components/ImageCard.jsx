const ImageCard = ({ src, alt }) => (
  <div className="image-card">
    <img src={src} alt={alt} className="img-fluid" />
  </div>
);

export default ImageCard;
