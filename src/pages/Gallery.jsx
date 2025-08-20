import React from 'react';
import Navbar from '../components/Navbar';

export default function Gallery() {
  const images = [
    '/images/art1.jpg',
    '/images/art2.jpg',
    '/images/art3.jpg',
    '/images/art4.jpg',
    '/images/art5.jpg',
  ];

  return (
    <>
      <Navbar />
      <section className="section fade-in">
        <h2>Gallery</h2>
        <div className="grid">
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Artwork ${i + 1}`} />
          ))}
        </div>
      </section>
    </>
  );
}
