import React, { useState } from "react";
import "../navbar.css";
import Cart from "./Cart";

const CartWidget = () => {
  const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="Cart-Container">
      <div className="cart-icon" onClick={toggleCart}>
        <img src="/src/cart.png" alt="cart" width="28px" height="28px" />
        <p className="count">0</p>
      </div>
      {showCart && <Cart />}
    </div>
  );
};

export default CartWidget;
