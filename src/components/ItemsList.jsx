import { useEffect, useState } from "react";
import Item from "./Item";
import { getItemsByField } from "../services/products";

function ItemsList({ field, operator, value }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getItemsByField(field, operator, value).then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, [field, operator, value]);

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
        <div className="main">
          <h1>{value}</h1>
          <div className="row row-cols-1 row-cols-md-5 g-4">
            {products.map((product) => (
              <Item key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
export default ItemsList;
