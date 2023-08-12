import React from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import products from "./data";

const ItemListContainer = () => {
  const { category } = useParams();
  const filteredProducts = products[category] || [];

  return (
    <div>
      <ItemList products={filteredProducts} />
    </div>
  );
};

export default ItemListContainer;
