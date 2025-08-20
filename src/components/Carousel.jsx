import React from 'react';
import './Carousel.css';

export default function Carousel() {
  const images = [
    '/images/art1.jpg',
    '/images/art2.jpg',
    '/images/art3.jpg',
    '/images/art4.jpg',
    '/images/art5.jpg'
  ];

  // Duplicate the images array for smooth looping
  const loopedImages = [...images, ...images];

  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {loopedImages.map((src, index) => (
          <img key={index} src={src} alt={`Artwork ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}
