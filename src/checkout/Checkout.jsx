import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShippingFast,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import "./Checkout.css";

const Checkout = () => {
  const [showLoader, setShowLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formIsValid()) {
      setShowLoader(true);

      setTimeout(() => {
        setShowLoader(false);
      }, 2000);
      setTimeout(() => {
        window.location.href = "/ordersent";
      }, 2000);
    } else {
    }
  };

  const formIsValid = () => {
    return true;
  };
  return (
    <div className="checkoutdiv">
      {showLoader && (
        <div className="three-body">
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
          <div className="three-body__dot"></div>
        </div>
      )}
      <body className="bodycheckout">
        <div className="containercheck">
          <form action="" onSubmit={handleSubmit}>
            <h1>
              <FontAwesomeIcon icon={faShippingFast} />
              Shipping Details
            </h1>
            <div className="name">
              <div className="firstname">
                <label htmlFor="f-name">First</label>
                <input type="text" name="f-name" required />
              </div>
              <div className="lastname">
                <label htmlFor="l-name">Last</label>
                <input type="text" name="l-name" required />
              </div>
              <div className="emailcheckout">
                <label htmlFor="mail">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="street">
              <label htmlFor="name">Street</label>
              <input type="text" name="address" required />
            </div>
            <div className="address-info">
              <div>
                <label htmlFor="city">City</label>
                <input type="text" name="city" required />
              </div>
              <div>
                <label htmlFor="state">State</label>
                <input type="text" name="state" required />
              </div>
              <div>
                <label htmlFor="zip">Zip</label>
                <input type="text" name="zip" required />
              </div>
            </div>
            <h1>
              <FontAwesomeIcon icon={faCreditCard} /> Payment Information
            </h1>
            <div className="cc-num">
              <label htmlFor="card-num">Credit Card No.</label>
              <input type="text" name="card-num" required />
            </div>
            <div className="cc-info">
              <div>
                <label htmlFor="card-num">Exp</label>
                <input type="text" name="expire" required />
              </div>
              <div>
                <label htmlFor="card-num">CCV</label>
                <input type="text" name="security" required />
              </div>
            </div>
            <div className="btns">
              <button className="purchase" type="submit">
                Continue
              </button>

              <button className="backtocart">Back to cart</button>
            </div>
          </form>
        </div>
      </body>
    </div>
  );
};

export default Checkout;
