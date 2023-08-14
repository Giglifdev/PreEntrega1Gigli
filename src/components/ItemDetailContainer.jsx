import React from "react";
import products from "./data.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  console.log(id);
  const [loadedProduct, setLoadedProduct] = useState(null);

  useEffect(() => {
    const productDetail = products
      .flatMap((category) => category)
      .find((product) => product.id === parseInt(id));

    if (productDetail) {
      setLoadedProduct(productDetail);
    }
  }, [id]);

  return <>{loadedProduct && <ItemDetail product={loadedProduct} />}</>;
};

export default ItemDetailContainer;
