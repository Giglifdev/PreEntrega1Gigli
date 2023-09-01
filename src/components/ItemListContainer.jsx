import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    const db = getFirestore();

    const itemsCollection = collection(db, "products");
    getDocs(itemsCollection).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  const filteredProducts = products.filter(
    (product) => product.category == category
  );

  return (
    <div>
      <ItemList products={filteredProducts} />
    </div>
  );
};

export default ItemListContainer;
