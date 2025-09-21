import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="/src/assets/react.svg"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
        </a>
        <Link to="/">FuwaFawa</Link>
        {/* ---------- Desplegable de Productos --------- */}
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Productos
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/product1">
                  Sekiguchi Pokemon
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/product2">
                  Digimon Adventure: Plush
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/product3">
                  Digimon Adventure: Stuffed Collection
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        {/* ---------- Carrito --------- */}
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <CartWidget />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
