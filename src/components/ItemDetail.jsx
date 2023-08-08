import React from "react";
import ItemCounter from "./ItemCounter";
import Card from "react-bootstrap/Card";

const ItemDetail = ({ product }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          Price: {product.price}
          <br />
          Stock: {product.stock}
        </Card.Text>
        <Button variant="dark">Add to Cart</Button>
      </Card.Body>
      <ItemCounter />
    </Card>
  );
};

export default ItemDetail;
