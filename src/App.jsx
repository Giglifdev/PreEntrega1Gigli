import React from "react";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/notebooks" element={<ItemListContainer />} />
        <Route path="/store/:category" element={<ItemListContainer />} />
        <Route path="/store/:category/:id" element={<ItemDetailContainer />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};
export default App;
