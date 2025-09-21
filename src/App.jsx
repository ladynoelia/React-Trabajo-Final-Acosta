import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import NotFoundComponent from "./components/NotFoundComponent";
import ItemDetail from "./components/ItemDetail";
import ItemsList from "./components/ItemsList";
import { CartProvider } from "./context/cartContext";
import Cart from "./components/Cart";
import CheckOutForm from "./components/pages/CheckOutForm";
import Finally from "./components/pages/Finally";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/product1"
              element={
                <ItemsList
                  field="collection"
                  operator="=="
                  value="Sekiguchi Pokemon"
                />
              }
            />
            <Route
              path="/product2"
              element={
                <ItemsList
                  field="collection"
                  operator="=="
                  value="Digimon Adventure: Plush"
                />
              }
            />
            <Route
              path="/product3"
              element={
                <ItemsList
                  field="collection"
                  operator="=="
                  value="Digimon Adventure Stuffed Collection"
                />
              }
            />
            <Route path="/product/:id" element={<ItemDetail />} />
            <Route path="/form" element={<CheckOutForm />} />
            <Route path="/last" element={<Finally />} />
            <Route path="*" element={<NotFoundComponent />} />
          </Routes>
          <Cart />
        </BrowserRouter>
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;
