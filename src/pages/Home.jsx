import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const images = [
  '/images/art1.jpg',
  '/images/art2.jpg',
  '/images/art3.jpg',
  '/images/art4.jpg',
  '/images/art5.jpg'
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  // Automatic carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 3000); // 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page">
      {/* Automatic carousel */}
      <div className="carousel-container">
        <div className="carousel">
          <img src={images[current]} alt={`Artwork ${current + 1}`} />
        </div>
      </div>

      {/* Block gallery */}
      <section className="section gallery fade-in">
        <h2>Gallery</h2>
        <div className="grid">
          {images.map((img, i) => (
            <Link to="/gallery" key={i}>
              <img src={img} alt={`Artwork ${i + 1}`} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
