import React, { useState, useEffect } from 'react';
import './Carousel.css';

export default function Carousel({ autoPlay = false, interval = 3000 }) {
  const images = [
    '/images/art1.jpg',
    '/images/art2.jpg',
    '/images/art3.jpg',
    '/images/art4.jpg',
    '/images/art5.jpg'
  ];
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((current + 1) % images.length);

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [current, autoPlay, interval]);

  return (
    <div className="carousel-container">
      <div className="carousel">
        <img src={images[current]} alt={`Artwork ${current + 1}`} />
      </div>
    </div>
  );
}
