import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItemById } from "../services/products";
import Cart from "./cart";

function ItemDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getItemById(id).then((data) => setProduct(data));
  });

  if (!product) {
    return <h1>Producto no encontrado</h1>;
  }

  return (
    <div className="row align-items-start">
      <div id="carouselExample" className="col-6 carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={product.picture1Url}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={product.picture2Url}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src={product.picture3Url}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="col-6">
        <section className="p-6 border rounded shadow">
          <h1>{product.collection}</h1>
          <h2 className="text-2xl font-bold">{product.title}</h2>
          <p>{product.description}</p>
          <p>Precio $ {product.price}</p>
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
          >
            Agregar al carrito
          </button>
          <Cart />
        </section>
      </div>
    </div>
  );
}

export default ItemDetail;
