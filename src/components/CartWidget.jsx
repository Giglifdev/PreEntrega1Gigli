import React from "react";
import "../navbar.css";

const CartWidget = () => {
  return (
    <div className="Cart-Container">
      <div className="cart-icon">
        <img src="./src/cart.png" alt="cart" width="25px" height="25px" />
        <p>5</p>
      </div>
    </div>
  );
};

export default CartWidget;
