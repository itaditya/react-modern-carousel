import React from "react";

import "./style.css";

const Carousel = (props) => {
  return (
    <div className="carousel">
      <ul className="carousel__items">
        {Array(3).fill().map((_, i) => (
          <li key={i} className="carousel__item">
            San Fransico
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Carousel;