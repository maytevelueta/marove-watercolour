import React from 'react';
import './Carousel.css';

export default function Carousel() {
  const images = [
    '/images/art1.jpg',
    '/images/art2.jpg',
    '/images/art3.jpg',
    '/images/art4.jpg',
    '/images/art5.jpg',
    /*'/images/art6.jpg',*/
    '/images/art7.jpg',
    '/images/art8.jpg',
    '/images/art9.jpg',
    '/images/art10.jpg',
    '/images/art11.jpg',
    '/images/art12.jpg',
    '/images/art13.jpg',
    '/images/art14.jpg',
    '/images/art15.jpg',
    '/images/art16.jpg',
    '/images/art17.jpg',
    '/images/art18.jpg',
    '/images/art19.jpg',
    '/images/art20.jpg'
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
