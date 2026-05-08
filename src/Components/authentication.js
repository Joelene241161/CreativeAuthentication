import { useState } from "react";
import axios from "axios";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';

import ruby from "../Assets/images/login/ruby1.png"
import copper from "../Assets/images/login/copper1.png"
import emerald from "../Assets/images/login/emerald1.png"

import golf from "../Assets/images/login/golf2.png"
import bar from "../Assets/images/login/bar2.png"
import marina from "../Assets/images/login/marina2.png"

import wine from "../Assets/images/login/wine3.png"
import whiskey from "../Assets/images/login/whiskey3.png"
import drinks from "../Assets/images/login/drink3.png"

function Authentication() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  var [password1, setPassword1] = useState("");
  var [password2, setPassword2] = useState("");
  var [password3, setPassword3] = useState("");

  console.log(password1);

  const register = async () => {
    const res = await axios.post("http://localhost:5000/auth/register", {
      email,
      password,
      name
    });

    setMessage(res.data);
  };

  const login = async () => {
    const res = await axios.post("http://localhost:5000/auth/login", {
      email,
      password,
      name
    });

    setMessage(res.data);
  };

  return (
          <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      <Tab eventKey="home" title="Sign up">
        <h1>Welcome to Deluxe Bookings</h1>
            <h3>Make an account to gain access to our exclusive Platform</h3>

              <br /><br />
      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
        <ToggleButton id="tbg-radio-1" value={1}>
          I am customer
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2}>
          I am a seller
        </ToggleButton>
      </ToggleButtonGroup>

      <br /><br />

      <button onClick={register}>Register</button>

      <br /><br />

      <h3>{message}</h3>

            <h7><a href="/">Return to homepage</a></h7>
      </Tab>
      <Tab eventKey="profile" title="Log in">

      <br /><br />

      <Tab.Container id="left-tabs-example" 
      
      defaultActiveKey="first">
      <Row>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              
              <h1>Welcome back</h1>
            <h3>Fill in your details to access your account</h3>

        <br /><br />

      <input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

            </Tab.Pane>

            <Tab.Pane eventKey="second">
              
              <div>
    <h6>Create a custom password:</h6>            
      <h4>Choose your favourite colour</h4>

      <div type="row">
        <button variant="outline-dark" className="logInButton" onClick={(e) => setPassword1(1)}>
          <img src={ruby} alt="ruby red" className="logInButtonImg"/>
          <p>Ruby Red</p>
          </button>
        <button variant="outline-dark" className="logInButton" onClick={(e) => setPassword1(2)}>
          <img src={copper} alt="copper brown" className="logInButtonImg"/>
          <p>Copper Brown</p>
          </button>
        <button variant="outline-dark" className="logInButton" onClick={(e) => setPassword1(3)}>
          <img src={emerald} alt="emerald green" className="logInButtonImg"/>
          <p>Emerald Green</p>
          </button>
      </div>
      </div>
            </Tab.Pane>

            <Tab.Pane eventKey="third">

            <div>
    <h6>Create a custom password:</h6>
      <h4>Choose the best place to relax</h4>

      <div type="row">
        <button variant="outline-dark" className="logInButton" onClick={(e) => setPassword2(1)}>
          <img src={golf} alt="golf course" className="logInButtonImg"/>
          <p>The golf course</p>
          </button>
        <button variant="outline-dark" className="logInButton" onClick={(e) => setPassword2(2)}>
          <img src={bar} alt="a bar" className="logInButtonImg"/>
          <p>The bar</p>
          </button>
        <button variant="outline-dark" className="logInButton" onClick={(e) => setPassword2(3)}>
          <img src={marina} alt="a marina" className="logInButtonImg"/>
          <p>The marina</p>
          </button>
      </div>
      </div>
            </Tab.Pane>
            
            <Tab.Pane eventKey="fourth">
              <div>
    <h6>Create a custom password:</h6>
      <h4>Choose your favourite drink</h4>

      <div type="row">
        <button variant="outline-dark" className="logInButton" onClick={(e) => setPassword3(1)}>
          <img src={wine} alt="wine glasses" className="logInButtonImg"/>
          <p>Wine</p>
          </button>
        <button variant="outline-dark" className="logInButton" onClick={(e) => setPassword3(2)}>
          <img src={whiskey} alt="whiskey in a glass" className="logInButtonImg"/>
          <p>Whiskey</p>
          </button>
        <button variant="outline-dark" className="logInButton" onClick={(e) => setPassword3(3)}>
          <img src={drinks} alt="cocktails" className="logInButtonImg"/>
          <p>Cocktails</p>
          </button>
      </div>

      <button onClick={login}>Login</button>

      <br /><br />

      <h3>{message}</h3>
        
      </div>
            </Tab.Pane>

          </Tab.Content>
          <Nav variant="pills" className="loginPagination">
            <Nav.Item>
              <Nav.Link eventKey="first">1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">3</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">4</Nav.Link>
            </Nav.Item>
          </Nav>
      </Row>
    </Tab.Container>

            <h7><a href="/">Return to homepage</a></h7>
      </Tab>
    </Tabs>
  );
}

export default Authentication;