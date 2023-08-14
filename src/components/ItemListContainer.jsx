import React from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import products from "./data";

const ItemListContainer = () => {
  const { category } = useParams();
  const productsInCategory = products.filter(
    (product) => product.category === category
  );

  return (
    <div>
      <ItemList products={productsInCategory} />
    </div>
  );
};

export default ItemListContainer;
