import React from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ products }) => {
  const { category, id } = useParams();
  const selectedCategoryProducts = products[category] || [];
  const filteredProduct = selectedCategoryProducts.find(
    (product) => product.id === parseInt(id)
  );

  return (
    <div>
      <ItemDetail product={filteredProduct} />
    </div>
  );
};

export default ItemDetailContainer;
