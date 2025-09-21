import { useEffect, useState } from "react";
import Item from "./Item";
import { getItems } from "../services/products";
/* import uploadItems from "../services/uploadItems"; */

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    /* uploadItems(); */
    getItems().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando productos</span>
          </div>
          <h2 className="text-center">Cargando productos...</h2>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {products.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
export default ItemListContainer;
