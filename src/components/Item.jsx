import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Item(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={props.image}
        style={{ width: "200px", height: "200px" }}
      />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>Price:{props.price}</Card.Text>Stock:{props.stock}
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
