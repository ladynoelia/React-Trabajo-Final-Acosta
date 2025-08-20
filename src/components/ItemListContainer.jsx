import { useEffect, useState } from "react";
import Card from "./Card";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = () => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        const resp = await fetch("./src/components/mock.json");
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
            <Card
              key={product.id}
              title={product.title}
              pictureUrl={product.pictureUrl}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      )}
    </>
  );
}
export default ItemListContainer;
