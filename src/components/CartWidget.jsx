import React from "react";
import "../navbar.css";

const CartWidget = () => {
  return (
    <div className="Cart-Container">
      <div className="cart-icon">
        <img src="/src/cart.png" alt="cart" width="28px" height="28px" />
        <p className="count">0</p>
      </div>
    </div>
  );
};

export default CartWidget;
