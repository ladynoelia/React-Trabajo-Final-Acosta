import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getItemById } from "../services/products";
import Cart from "./Cart";
import ItemListContainer from "./ItemListContainer";
import ItemCount from "./ItemCount";

function ItemDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getItemById(id).then((data) => setProduct(data));
  });

  if (!product) {
    return <h1>Producto no encontrado</h1>;
  }

  return (
    <>
      <div className="row align-items-start p-1 border rounded shadow item-detail main">
        <div id="carouselExample" className="col-6 carousel slide h-100">
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
          <section>
            <h1>{product.collection}</h1>
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <p>Descripción:</p>
            <p>{product.description}</p>
            <p>Precio $ {product.price}</p>
            <ItemCount product={product} maxQty={product.stock} />
            <p>Stock {product.stock}</p>
            <Cart />
          </section>
        </div>
      </div>
      <div className="main">
        <h1>Mas productos disponibles</h1>
        <ItemListContainer />
      </div>
    </>
  );
}

export default ItemDetail;
