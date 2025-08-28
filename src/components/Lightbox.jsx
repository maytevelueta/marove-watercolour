import React from "react";

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  if (index === null) return null;

  const { src, desc } = images[index];

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <span className="lightbox-arrow left" onClick={(e) => { e.stopPropagation(); onPrev(); }}>
        &#10094;
      </span>
      <img src={src} alt="Artwork" className="lightbox-image" />
      <span className="lightbox-arrow right" onClick={(e) => { e.stopPropagation(); onNext(); }}>
        &#10095;
      </span>
      <p className="lightbox-desc">{desc}</p>
    </div>
  );
}
