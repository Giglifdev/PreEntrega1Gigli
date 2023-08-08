import React from "react";
import ItemCounter from "./ItemCounter";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";

const ItemDetail = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {filteredProducts.map((p) => {
        return (
          <div key={p.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={p.image} />
              <Card.Body>
                <Card.Title>{p.name}</Card.Title>
                <Card.Text>{p.stock}</Card.Text>
                <Button variant="dark">Add to Cart</Button>
              </Card.Body>
              <ItemCounter />
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetail;
