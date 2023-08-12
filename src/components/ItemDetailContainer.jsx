import React from "react";
import ItemDetail from "./ItemDetail";
import products from "./data.js";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  console.log(id);
  const [loadedProduct, setLoadedProduct] = useState(null);

  useEffect(() => {
    const getProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    getProducts.then((res) => {
      const allProducts = Object.values(res).flat();
      const selectedProduct = allProducts.find(
        (product) => product.id === parseInt(id)
      );

      if (selectedProduct) {
        setLoadedProduct(selectedProduct);
      }
    });
  }, [id]);

  return <>{loadedProduct && <ItemDetail product={loadedProduct} />}</>;
};

export default ItemDetailContainer;
