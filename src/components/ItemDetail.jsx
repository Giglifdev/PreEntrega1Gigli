import React from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ItemDetail = ({ products }) => {
  const { id } = useParams();
  const filteredProducts = products.filter((product) => product.id == id);
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
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default ItemDetail;
