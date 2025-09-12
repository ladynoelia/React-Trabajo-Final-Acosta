import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (id, qty) => {
    //funcion de agregasr al carrito según el id.
  };

  const deleteItem = (id) => {
    //función de borrar un item del array carrito
  };

  const deleteAllItems = () => {
    //función para vaciar el array carrito
  };

  return (
    <CartContext.Provider value={{ addToCart, deleteItem, deleteAllItems }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
