const ImageCard = ({ src, alt, title, type }) => (
  <div className={`image-card ${type}`}>
    <img src={src} alt={alt} className="img-fluid opacity-effect" />
    {title && <div className="image-title">{title}</div>}
  </div>
);

export default ImageCard;
