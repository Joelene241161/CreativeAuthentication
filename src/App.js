import './App.css';
import { useState } from "react";
import axios from "axios";
import LogIn from "./Pages/login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Pages/home";
import Account from "./Pages/account";
import Product from "./Pages/product";
import Seller from "./Pages/seller";

function App() {
  
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Home</Link> |
        <Link to="/product">Product</Link> |
        <Link to="/seller">Seller</Link> |
        <Link to="/login">LogIn</Link> |
        <Link to="/account">Account</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/seller" element={<Seller />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/account" element={<Account />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;