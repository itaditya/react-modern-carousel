import React from "react";

import "./style.css";

const Carousel = ({ carouselData, ...props }) => {
  return (
    <div className="carousel" {...props} >
      <ul className="carousel__items">
        {carouselData.map(({ text, imageUrl }, i) => (
          <li key={i} className="carousel__item" style={{ backgroundImage: `url(${imageUrl})` }}>
            {text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Carousel;
