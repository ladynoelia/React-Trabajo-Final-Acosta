import { useEffect, useState } from "react";
import Item from "./Item";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(async () => {
        const resp = await fetch("./src/components/db/mock.json");
        const data = await resp.json();
        resolve(data);
      }, 2000);
    });
  };

  useEffect(() => {
    getProducts().then((data) => {
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
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}
export default ItemListContainer;
