import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function Item({ name, image, price, id }) {
  return (
    <Card
      className="cardObjects"
      style={{
        width: "18rem",
        height: "450px",
      }}
    >
      <Card.Img
        variant="top"
        src={image}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      <Card.Body>
        <Card.Title style={{ fontSize: "1.2rem" }}>{name}</Card.Title>
        <Card.Text>Price:{price}</Card.Text>
        <Link to={`/item/${id}`}>
          <Button variant="dark">Detail</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

export default Item;
