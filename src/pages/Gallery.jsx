import React, { useState } from "react";
import Lightbox from "../components/Lightbox";

export default function Gallery() {
  const images = [
    '/images/art1.jpg',
    '/images/art2.jpg',
    '/images/art3.jpg',
    '/images/art4.jpg',
    '/images/art5.jpg'
  ];

  const [selected, setSelected] = useState(null);

  return (
    <div className="gallery-page">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Artwork ${index + 1}`}
            onClick={() => setSelected(img)}
          />
        ))}
      </div>

      <Lightbox src={selected} onClose={() => setSelected(null)} />
    </div>
  );
}

