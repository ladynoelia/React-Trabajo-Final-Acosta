/* import { useContext } from "react"; */

// se muestra en el navBar, es el indicador que hay cosas en el carrito.

function CartWidget() {
  return (
    <a href="#" className="position-relative">
      <img
        src="/src/assets/shopping-cart.svg"
        alt="Carrito de compras"
        width="30"
        height="24"
        className="d-inline-block"
      />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        99+
        <span className="visually-hidden">unread messages</span>
      </span>
    </a>
  );
}

export default CartWidget;
{
  /* <div>
  <span>0</span>
</div> */
}
