import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ItemDetail = ({ products }) => {
  const { id } = useParams();
  const [filteredProduct, setFilteredProduct] = useState(null);

  useEffect(() => {
    const product = products.find((product) => product.id === parseInt(id));
    setFilteredProduct(product);
  }, [products, id]);

  console.log(filteredProduct);

  if (!filteredProduct) {
    return null;
  }

  return (
    <div>
      <div key={filteredProduct.id}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={filteredProduct.image} />
          <Card.Body>
            <Card.Title>{filteredProduct.name}</Card.Title>
            <Card.Text>{filteredProduct.stock}</Card.Text>
            <Button variant="dark">Add to Cart</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ItemDetail;
