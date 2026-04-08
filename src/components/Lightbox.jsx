import React, { useEffect } from "react";
import { FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (index === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [index, onClose, onNext, onPrev]);

  if (index === null) return null;

  const artwork = images[index];

  return (
    <div className="lightbox-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close image">
        <FiX />
      </button>

      <button
        type="button"
        className="lightbox-nav lightbox-prev"
        onClick={(event) => {
          event.stopPropagation();
          onPrev();
        }}
        aria-label="Previous artwork"
      >
        <FiChevronLeft />
      </button>

      <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
        <img src={artwork.src} alt={artwork.alt} className="lightbox-image" />
        <div className="lightbox-caption">
          <p className="eyebrow">{artwork.category}</p>
          <h3>{artwork.title}</h3>
          <p><em>{artwork.latin}</em></p>
          <p>{artwork.medium}</p>
          <p>{artwork.size}</p>
        </div>
      </div>

      <button
        type="button"
        className="lightbox-nav lightbox-next"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        aria-label="Next artwork"
      >
        <FiChevronRight />
      </button>
    </div>
  );
}