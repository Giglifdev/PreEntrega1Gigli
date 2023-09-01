import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const OrderSent = () => {
  const { cartItems } = useCart();
  const calculateSubtotal = () => {
    let subtotal = 0;
    for (const item of cartItems) {
      if (item.price) {
        subtotal += item.price * item.quantity;
      }
    }
    return subtotal;
  };

  const shippingCost = 500;

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal + shippingCost;
  };
  return (
    <div className="containerorder">
      <h1 className="ordersent">Send Order</h1>
      <h2 className="itemsinyourorder">Items in your order:</h2>

      <ul>
        {cartItems.map((item) => (
          <li className="order-item" key={item.id}>
            <div className="ordersent-details">
              <img
                src={item.image}
                alt={item.name}
                height="30px"
                width="50px"
              />
              <div className="ordersent-info">
                <span className="ordersent-name">{item.name}</span>
                <span className="ordersent-price">
                  {item.price
                    ? item.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })
                    : "Price not available"}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <hr className="hr" />
      <div className="readytopay">
        <div className="subtotal">
          Subtotal:{" "}
          {calculateSubtotal().toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
        <div className="shipping">Shipping: ${shippingCost}</div>
        <div className="total">
          <span className="total-label">Total:</span>{" "}
          {calculateTotal().toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </div>
        <Link to="/ready">
          <button className="payday">Pay</button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSent;
