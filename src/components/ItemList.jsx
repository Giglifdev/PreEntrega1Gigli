import React from "react";
import Item from "./Item";
import "./ContainerStyles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemList = ({ products }) => {
  return (
    <Container>
      <Row>
        {products.map((product) => (
          <Col key={product.id} sm={3} md={2} lg={3} xl={4}>
            <Item
              id={product.id}
              name={product.name}
              price={product.price}
              stock={product.stock}
              image={product.image}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemList;
