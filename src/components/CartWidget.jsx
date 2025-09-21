import { useContext } from "react";
import { CartContext } from "../context/cartContext";

function CartWidget() {
  const { cartList } = useContext(CartContext);
  const totalItems = cartList.reduce(
    (acumulado, item) => acumulado + item.qty,
    0
  );

  return (
    <>
      <button
        className="btn btn-cart"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        Mi carrito
        <a className="position-relative">
          <img
            src="/src/assets/shopping-cart.svg"
            alt="Carrito de compras"
            width="30"
            height="24"
            className="d-inline-block"
          />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalItems}
          </span>
        </a>
      </button>
    </>
  );
}

export default CartWidget;
