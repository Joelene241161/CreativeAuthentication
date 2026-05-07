import { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';

function LogIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const register = async () => {
    const res = await axios.post("http://localhost:5000/auth/register", {
      email,
      password
    });

    setMessage(res.data);
  };

  const login = async () => {
    const res = await axios.post("http://localhost:5000/auth/login", {
      email,
      password
    });

    setMessage(res.data);
  };

  return (
    <div class="container-fluid row">
    
    <div class="col-lg-4" style={{backgroundColor: "#DCDCDC"}}>

      <h1>Welcome to Deluxe Bookings</h1>
      <h3>Make an account to gain access to our exclusive Platform</h3>

      <button>I already have an account</button>
    
        </div>

      <div class="col-lg-8">

      <ProgressBar now={20} />

      <h4>Email Address</h4>
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <h4>Password</h4>
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

  {/* <div class="container-fluid row">
    <Button style={{ width: '18rem' }}>
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Ruby</Card.Title>
      </Card.Body>
    </Card>
    </Button>

    <Button style={{ width: '18rem' }}>
    <Card>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Copper</Card.Title>
      </Card.Body>
    </Card>
    </Button>
    
    <Button style={{ width: '18rem' }}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Emerald</Card.Title>
      </Card.Body>
    </Card>
    </Button>

    </div> */}

      <br /><br />

      <button onClick={register}>Register</button>
      <button onClick={login}>Login</button>

      <h3>{message}</h3>
      </div>

    </div>
  );
}

export default LogIn;