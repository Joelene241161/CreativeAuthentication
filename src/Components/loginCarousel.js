import { useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Carousel from 'react-bootstrap/Carousel';
import backgroundImage from '../Assets/images/backgroundImage.png'
import marbleplaceholder from '../Assets/images/marbleplaceholder.jpg'


function LoginCarousel() {
        return (
          <div>
          <Carousel>
      <Carousel.Item>
        <img src={marbleplaceholder} className="imagePlaceholder"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={marbleplaceholder} className="imagePlaceholder"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={marbleplaceholder} className="imagePlaceholder"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
        );
}

export default LoginCarousel;