import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import Carousel from "./Carousel";

function App() {
  return (
    <div className="App">
      <nav className="app-nav">
        <a href="home">Home</a>
        <a href="home">About</a>
      </nav>
      <h2 className="app-title">Select <br /> Destination</h2>
      <Carousel />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
