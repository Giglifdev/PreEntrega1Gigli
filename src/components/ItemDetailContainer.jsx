import React from "react";
import ItemDetail from "./ItemDetail";
import products from "./data.js";

const getProducts = new Promise((resolve, reject) => {
  if (products.length > 0) {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  } else {
    reject(new Error("no data"));
  }
});

getProducts
  .then((res) => {})
  .catch((error) => {
    console.log(error);
  });

const ItemDetailContainer = () => {
  return (
    <>
      <ItemDetail products={products} />
    </>
  );
};

export default ItemDetailContainer;
