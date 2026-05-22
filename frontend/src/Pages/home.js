import { Nav } from "react-bootstrap";
import NavBar from "../Components/navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Home() {
  return (
      <div className='heroImage'>

    <div className='row container-fluid'>

      <div className='col-lg-6'>
      <p className='m-plus-rounded-1c-black herotext marginBody'>Creative log in</p>

        <div className='herocard m-plus-rounded-1c-bold marginBody'>
            <p> A secure, modern web application featuring an innovative, creative authentication system. This project replaces traditional text-based passwords with a multi-step visual pattern password combined with robust backend security protocols.</p>
           <Button className='primaryButton col-4'><Link to="/login" className='inter-regular buttontext'>Create account</Link></Button>
            </div>
          </div>
      </div>

    </div>
  )
}

export default Home;