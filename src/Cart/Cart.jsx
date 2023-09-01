import React, { useState, useEffect } from "react";
import "./CartStyle.css";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, clearCart, setCartItems } = useCart();
  const [itemPrices, setItemPrices] = useState({});

  useEffect(() => {
    const updatedCart = cartItems.filter((item) => item.quantity > 0);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }, [cartItems, setCartItems]);

  const handleDecrement = (itemId) => {
    const updatedCart = [...cartItems];
    const itemIndex = updatedCart.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1 && updatedCart[itemIndex].quantity > 0) {
      updatedCart[itemIndex].quantity -= 1;

      if (updatedCart[itemIndex].quantity === 0) {
        localStorage.removeItem("cart");
      } else {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    }

    setCartItems(updatedCart);
    updateItemPrice(updatedCart[itemIndex]);
  };

  const handleIncrement = (itemId) => {
    const updatedCart = [...cartItems];
    const itemIndex = updatedCart.findIndex((item) => item.id === itemId);

    if (itemIndex !== -1) {
      updatedCart[itemIndex].quantity += 1;
    }

    setCartItems(updatedCart);
    updateItemPrice(updatedCart[itemIndex]);
  };

  const updateItemPrice = (item) => {
    setItemPrices((prevPrices) => ({
      ...prevPrices,
      [item.id]: item.price * item.quantity,
    }));
  };
  const calculateTotal = () => {
    let total = 0;
    for (const item of cartItems) {
      if (item.price) {
        total += item.price * item.quantity;
      }
    }
    return total;
  };
  return (
    <div className="cart__window">
      <h2 className="cartheader">Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div className="cart-container">
              <div>
                <img
                  className="imagecart"
                  src={item.image}
                  alt={item.name}
                  width="40px"
                  height="30px"
                />
                <span className="namecart">{item.name}</span>
              </div>
              <div className="cart-price">
                {" "}
                {itemPrices[item.id]
                  ? itemPrices[item.id].toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })
                  : "0"}
              </div>
            </div>
            <div className="decrement-increment">
              <button
                className="decrement"
                onClick={() => handleDecrement(item.id)}
              >
                <span className="decrementicon">-</span>
              </button>
              <span className="counter">{item.quantity}</span>
              <button
                className="increment"
                onClick={() => handleIncrement(item.id)}
              >
                +
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="total">
        <span className="total-label">Total:</span>
        <span className="total-price">
          {calculateTotal().toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </span>
      </div>
      <hr className="cart-divider" />
      <button className="empty-cart" onClick={clearCart}>
        Empty Cart
      </button>
      <Link to={`/checkout/`}>
        <button className="checkout">Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;
