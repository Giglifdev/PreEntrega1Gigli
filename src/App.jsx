import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <>
      <NavBar />

      <ItemListContainer greeting="Welcome to my Store" />
    </>
  );
};

export default App;
