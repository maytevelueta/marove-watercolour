import React from "react";

export default function Lightbox({ src, onClose }) {
  if (!src) return null;

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <img src={src} alt="Artwork" className="lightbox-image" />
    </div>
  );
}
