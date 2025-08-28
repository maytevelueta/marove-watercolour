import React, { useState } from "react";
import Lightbox from "../components/Lightbox";

export default function Gallery() {
  const images = [
    { src: '/images/art1.jpg', desc: "Watercolour sunset over the sea" },
    { src: '/images/art2.jpg', desc: "Botanical-inspired composition" },
    { src: '/images/art3.jpg', desc: "Abstract ocean waves" },
    { src: '/images/art4.jpg', desc: "Delicate floral detail" },
    { src: '/images/art5.jpg', desc: "Nature-inspired colour study" }
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <div className="section">
      <h2>Gallery</h2>
      <div className="gallery-grid">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={`Artwork ${index + 1}`}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {selectedIndex !== null && (
        <Lightbox
          images={images}
          index={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onPrev={() =>
            setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
          }
          onNext={() =>
            setSelectedIndex((selectedIndex + 1) % images.length)
          }
        />
      )}
    </div>
  );
}
