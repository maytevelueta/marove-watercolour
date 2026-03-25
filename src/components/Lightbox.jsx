import React, { useEffect } from "react";
import "../index.css";

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onPrev, onNext, onClose]);

  if (index === null) return null;

  const { src, desc } = images[index];

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close image">
          ×
        </button>

        <button type="button" className="lightbox-nav left" onClick={onPrev} aria-label="Previous image">
          ❮
        </button>

        <img src={src} alt={desc} className="lightbox-image" />

        <button type="button" className="lightbox-nav right" onClick={onNext} aria-label="Next image">
          ❯
        </button>

        <p className="lightbox-desc">{desc}</p>
      </div>
    </div>
  );
}