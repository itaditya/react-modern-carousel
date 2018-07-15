import React from "react";

import "./style.css";

const Carousel = ({ carouselData, ...props }) => {
  return (
    <div className="carousel" {...props} >
      <ul className="carousel__items">
        {carouselData.map(({ text, imageUrl }, i) => (
          <li key={i} className="carousel__item">
            <div className="carousel__item__image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <span className="carousel__item__text">
              {text}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Carousel;
