import React from "react";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemList from "./ItemList";
import products from "./data";

const ItemListContainer = () => {
  const { category } = useParams();
  const filteredProducts = products[category] || [];

  return (
    <div>
      <ItemDetailContainer products={filteredProducts} />
      <ItemList products={filteredProducts} />
    </div>
  );
};

export default ItemListContainer;
