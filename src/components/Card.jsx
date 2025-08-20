function Card({ pictureUrl, title, description, price }) {
  return (
    <div className="col">
      <div className="card">
        <img src={pictureUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p>{price}</p>
          <a href="#" className="btn btn-primary">
            Agregar al carrito
          </a>
        </div>
      </div>
    </div>
  );
}
export default Card;
