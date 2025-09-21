import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import CartItems from "./CartItems";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartList, deleteAllItems } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cartList.reduce(
    (acumulado, item) => acumulado + item.price * item.qty,
    0
  );
  const confirmCart = () => {
    if (cartList.length != 0) {
      navigate("/form");
    }
  };

  return (
    <>
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Mi carrito de compras
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          {cartList.length === 0 ? (
            <p>No hay productos por ahora en el carrito.</p>
          ) : (
            <ul className="list-group list-group-flush">
              {cartList.map((product) => (
                <CartItems key={product.id} product={product} />
              ))}
            </ul>
          )}
        </div>
        <div className="p-2">
          <h5>Total: ${total}</h5>
          <button className="btn me-2 btn-delete-cart" onClick={deleteAllItems}>
            Vaciar carrito
          </button>
          <button className="btn btn-continue" onClick={confirmCart}>
            Continuar
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
