import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ItemDetail = ({ products }) => {
  const { id } = useParams();
  const [filteredProducts, setFilteredProduct] = useState(null); // Estado para almacenar el producto encontrado

  useEffect(() => {
    const product = products.find((product) => product.id === parseInt(id));
    setFilteredProduct(product);
  }, [products, id]);

  if (!filteredProducts) {
    return <div>Loading...</div>; // Puedes mostrar un indicador de carga mientras se obtiene el producto
  }
  console.log(filteredProducts);
  return (
    <div>
      <div key={filteredProducts.id}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={filteredProducts.image} />
          <Card.Body>
            <Card.Title>{filteredProducts.name}</Card.Title>
            <Card.Text>{filteredProducts.stock}</Card.Text>
            <Button variant="dark">Add to Cart</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ItemDetail;
