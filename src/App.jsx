import React from "react";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Footer from "./Footer/Footer";
import Contact from "./contact/Contact";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Checkout from "./checkout/Checkout";
import OrderSent from "./checkout/OrderSent";
import Ready from "./checkout/Ready";

const App = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/store/:category" element={<ItemListContainer />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/ordersent" element={<OrderSent />} />
          <Route path="/ready" element={<Ready />} />
        </Routes>

        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
};
export default App;
