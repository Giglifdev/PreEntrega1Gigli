import React from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({ products }) => {
  const { id } = useParams();

  const productId = parseInt(id);

  const product = products.find((item) => item.id === productId);

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
