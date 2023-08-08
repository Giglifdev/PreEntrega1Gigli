import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemCounter from "./ItemCounter";

const ItemDetail = ({ product }) => {
  return (
    <div>
      {product && (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.image} />
          <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.stock}</Card.Text>
            <Button variant="dark">Add to Cart</Button>
          </Card.Body>
          <ItemCounter />
        </Card>
      )}
    </div>
  );
};

export default ItemDetail;
