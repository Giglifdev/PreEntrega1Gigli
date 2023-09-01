import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  const addToCart = (item) => {
    const existingItemIndex = cartItems.findIndex((i) => i.id === item.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
      setCartItems(updatedCart);

      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const updatedCart = [...cartItems, { ...item, quantity: 1 }];
      setCartItems(updatedCart);

      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);

    if (updatedCart.length === 0) {
      localStorage.removeItem("cart");
    } else {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const clearCart = () => {
    setCartItems([]);

    localStorage.removeItem("cart");
  };
  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, setCartItems }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
