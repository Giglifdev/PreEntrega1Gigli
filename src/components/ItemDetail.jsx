import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useCart } from "../context/CartContext";

const ItemDetail = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    console.log(handleDecrement);
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const formattedPrice = product?.price?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <div className="carddetail">
      <div key={product.id}>
        <Card style={{ width: "18rem", height: " 34rem" }}>
          <div className="card__wrapper">
            <div className="card__back">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 24"
                height="24"
                width="14"
              >
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="3"
                  stroke="#000"
                  d="M12 2L2 12L12 22"
                ></path>
              </svg>
            </div>
            <div className="card__menu">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                viewBox="0 0 29 14"
                height="14"
                fill="none"
              >
                <path
                  fill="#000"
                  d="m16.5714 9.16667h10.3572c.5493 0 1.0762.22827 1.4647.6346s.6067.95743.6067 1.53203c0 .5747-.2182 1.1258-.6067 1.5321s-.9154.6346-1.4647.6346h-10.3572c-.5493 0-1.0762-.2283-1.4647-.6346s-.6067-.9574-.6067-1.5321c0-.5746.2182-1.1257.6067-1.53203s.9154-.6346 1.4647-.6346zm-14.49997-8.66667h24.85717c.5493 0 1.0762.228273 1.4647.6346.3885.40633.6067.95743.6067 1.53207c0 .57463-.2182 1.12573-.6067 1.53206s-.9154.6346-1.4647.6346h-24.85717c-.54938 0-1.076254-.22827-1.464722-.6346s-.606708-.95743-.606708-1.53206c0-.57464.21824-1.12574.606708-1.53207.388468-.406327.915342-.6346 1.464722-.6346z"
                ></path>
              </svg>
            </div>
          </div>
          <Card.Img
            className="card__img"
            variant="top"
            src={product.image}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title className="card__title">{product.name}</Card.Title>
            <Card.Text className="card__description">
              {product.description}
            </Card.Text>
            <div className="card__wrapper">
              <div className="card__price">{formattedPrice}</div>
              <div className="card__counter">
                <button className="card__btn" onClick={handleDecrement}>
                  -
                </button>
                <div className="card__counter-score">{quantity}</div>
                <button
                  className="card__btn card__btn-plus"
                  onClick={() => {
                    handleIncrement();
                    handleAddToCart();
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <Button variant="dark" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ItemDetail;
