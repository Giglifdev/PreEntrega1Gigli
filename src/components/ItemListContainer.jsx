import React from "react";
import Item from "./Item";
import audioProducts from "../../data.js";
import "./ContainerStyles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ItemListContainer = () => {
  return (
    <Container>
      <Row>
        {audioProducts.map((product) => (
          <Col key={product.id} sm={3} md={2} lg={3} xl={4}>
            <div className="card">
              <Item
                name={product.name}
                price={product.price}
                stock={product.stock}
                image={product.image}
              />
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ItemListContainer;
