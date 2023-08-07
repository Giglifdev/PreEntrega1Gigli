import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Item(props) {
  return (
    <Card
      style={{
        width: "18rem",
        height: "450px",
      }}
    >
      <Card.Img
        variant="top"
        src={props.image}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      <Card.Body>
        <Card.Title style={{ fontSize: "1.2rem" }}>{props.name}</Card.Title>
        <Card.Text>Price:{props.price}</Card.Text>
        <Button variant="dark">Detail</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
