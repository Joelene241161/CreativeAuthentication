import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Account from "./Pages/Account";
import Product from "./Pages/Product";
import Seller from "./Pages/Seller";
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
    <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap" rel="stylesheet">
</link>

      <nav activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <div class="container-fluid">
        <Link to="/" class="logomtg"><img src={logomtg} class="logomtg"></img></Link>

        <Link to="/" class="pageLinks">Home</Link> 
        <Link to="/Product" class="pageLinks">Product</Link> 
        <Link to="/Seller" class="pageLinks">Seller</Link> 
        <Link to="/Account" class="pageLinks">Account</Link> 
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Seller" element={<Seller />} />
        <Route path="/Account" element={<Account />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
