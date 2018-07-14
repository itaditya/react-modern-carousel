import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Carousel from "./Carousel";

function App() {
  const carouselData = [{
    imageUrl: '/images/carousel-image-1.jpg',
    text: 'San Francisco'
  }, {
    imageUrl: '/images/carousel-image-2.jpg',
    text: 'Paris'
  }, {
    imageUrl: '/images/carousel-image-3.jpg',
    text: 'India'
  }]
  return (
    <div className="App">
      <nav className="app-nav">
        <a href="home">Home</a>
        <a href="home">About</a>
      </nav>
      <h2 className="app-title">Select <br /> Destination</h2>
      <Carousel carouselData={carouselData} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
