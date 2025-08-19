import React from 'react';
import Carousel from '../components/Carousel';
import '../index.css'; // for global styles
import './Gallery.css'; // optional page-specific styles

export default function Gallery() {
  return (
    <div className="page gallery-page">
      <h2 className="page-title fade-in">Gallery</h2>

      <section className="section fade-in carousel-container">
        <Carousel />
      </section>

      <section className="section fade-in gallery-description">
        <p>
          Explore the collection of watercolours inspired by nature, light, and minimalism.
        </p>
      </section>
    </div>
  );
}