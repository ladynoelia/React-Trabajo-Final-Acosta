import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import NotFoundComponent from "./components/NotFoundComponent";
import ItemDetail from "./components/ItemDetail";
import ItemListContainer from "./components/ItemListContainer";
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/product1" element={<ItemListContainer />} />
            <Route path="/product/:id" element={<ItemDetail />} />
            <Route path="*" element={<NotFoundComponent />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
      <footer>
        <p>FuwaFuwa Paradise © 2025 Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
