const Carousel = ({ collectionName, imagen1, imagen2, imagen3 }) => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="card-group carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={imagen1} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={imagen2} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={imagen3} className="d-block w-100" alt="..." />
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{collectionName}</h5>
      </div>
    </div>
  );
};

export default Carousel;
