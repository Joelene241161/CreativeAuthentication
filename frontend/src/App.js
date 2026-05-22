import './App.css';
import LogIn from "./Pages/login";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./Pages/home";
import Account from "./Pages/account";
import NavBar from './Components/navbar';
import Button from 'react-bootstrap/Button';

function App() {
  
  return (
    <BrowserRouter>
      <style>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=M+PLUS+Rounded+1c:wght@100;300;400;500;700;800;900&display=swap');
</style>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/account" element={<Account />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;