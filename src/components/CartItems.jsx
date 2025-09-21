import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const CartItems = ({ product }) => {
  const { deleteItem, updateQty } = useContext(CartContext);

  const handleUpdateQty = (e) => {
    const newQty = parseInt(e.target.value, 10);
    if (newQty >= 0 && newQty <= product.stock) {
      updateQty(product.id, newQty);
    }
  };

  return (
    <>
      <li
        key={product.id}
        className="list-group-item d-flex justify-content-between"
      >
        <div className="col-3">
          <img className="offcanvas-img" src={product.picture1Url} alt="" />
        </div>
        <div className="col-8">
          <strong>{product.title}</strong> <br />
          Precio: ${product.price} <br />
          Cantidad:
          <input
            type="number"
            name="Cantidad"
            id={product.id}
            defaultValue={product.qty}
            min={0}
            max={product.stock}
            onChange={handleUpdateQty}
          />
          <br />
          Subtotal: ${product.price * product.qty}
        </div>
        <button
          className="btn btn-sm btn-danger col-1"
          onClick={() => deleteItem(product.id)}
        >
          X
        </button>
      </li>
    </>
  );
};

export default CartItems;
