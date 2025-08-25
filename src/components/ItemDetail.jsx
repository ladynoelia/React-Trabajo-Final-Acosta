import { useParams } from "react-router-dom";
import data from "./db/mock.json";

function ItemDetail() {
  const { id } = useParams();
  const product = data.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h1>Producto no encontrado</h1>;
  }

  return (
    <section className="p-6 border rounded shadow">
      <h1>Colección Sekiguchi Pokemon</h1>
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <img src={product.picture1Url} alt={product.title} />
      <p>{product.description}</p>
      <p>Precio $ {product.price}</p>
    </section>
  );
}

export default ItemDetail;
