import React, { useState } from 'react';
import './Carousel.css';

export default function Carousel() {
  const images = [
    '/images/art1.jpg',
    '/images/art2.jpg',
    '/images/art3.jpg',
    '/images/art4.jpg',
    '/images/art5.jpg'
  ];
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <div className="carousel-container">
      <button className="arrow left" onClick={prev}></button>
      <div className="carousel">
        <img src={images[current]} alt={`Artwork ${current + 1}`} />
      </div>
      <button className="arrow right" onClick={next}></button>
    </div>
  );
}
