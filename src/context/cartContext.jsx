import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (product, qty) => {
    if (qty <= 0) return;
    setCartList((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        const newQty = existingItem.qty + qty;
        if (newQty > product.stock) {
          return prev.map((item) =>
            item.id === product.id ? { ...item, qty: product.stock } : item
          );
        } else {
          return prev.map((item) =>
            item.id === product.id ? { ...item, qty: newQty } : item
          );
        }
      } else {
        return [...prev, { ...product, qty }];
      }
    });
  };

  const deleteItem = (id) => {
    setCartList((prev) => prev.filter((item) => item.id !== id));
  };

  const deleteAllItems = () => {
    setCartList([]);
  };

  const updateQty = (id, newQty) => {
    setCartList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: newQty } : item))
    );
  };

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, deleteItem, deleteAllItems, updateQty }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
