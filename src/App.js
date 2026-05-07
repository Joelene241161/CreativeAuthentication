<<<<<<< Updated upstream
import logo from './logo.svg';
import './App.css';
=======
import './App.css';
import { useState } from "react";
import axios from "axios";
import LogIn from "./Pages/login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import Home from "./Pages/home";
import Account from "./Pages/account";
import Product from "./Pages/product";
>>>>>>> Stashed changes

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
