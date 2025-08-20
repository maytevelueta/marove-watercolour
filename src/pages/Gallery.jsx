import React from 'react';
import Carousel from '../components/Carousel';
import '../index.css'; 
import './Gallery.css';
import { Link } from 'react-router-dom';

export default function Gallery() {
  return (
    <div className="page gallery-page">
      <h2>
        <Link to="/" className="back-home">Gallery</Link>
      </h2>

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