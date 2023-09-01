import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const itemDetail = doc(db, "products", id);
    getDoc(itemDetail)
      .then((docSnapshot) => {
        if (docSnapshot.exists()) {
          setProduct({ id: docSnapshot.id, ...docSnapshot.data() });
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
};

export default ItemDetailContainer;
