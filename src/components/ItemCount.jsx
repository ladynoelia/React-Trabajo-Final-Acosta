import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function ItemCount({ product, maxQty }) {
  const [value, setValue] = useState(0);
  const { addToCart } = useContext(CartContext);

  const addValue = () => {
    if (value < maxQty) {
      setValue(value + 1);
    }
  };
  const decreaseValue = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  const handleClick = () => {
    addToCart(product, value);
    setValue(0);
  };
  return (
    <>
      <div className="btn-count">
        <button className="btn btn-add-cart" onClick={decreaseValue}>
          -
        </button>
        <h5>{value}</h5>
        <button className="btn btn-add-cart" onClick={addValue}>
          +
        </button>
      </div>
      <button
        className="btn btn-add-cart"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
        onClick={handleClick}
      >
        Agregar al carrito
      </button>
    </>
  );
}

export default ItemCount;
