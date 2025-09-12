import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div className="col">
      <div className="card h-100">
        <img
          src={product.picture1Url}
          className="card-img-top"
          alt={product.title}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p>$ {product.price}</p>
          <Link to={`/product/${product.id}`}>
            <button className="btn btn-vermas">Ver más</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Item;
