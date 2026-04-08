import React from "react";
import { Link } from "react-router-dom";
import { artworks } from "../data/artworks";
import "./Carousel.css";

export default function Carousel() {
  const featured = artworks.slice(0, 10);
  const looped = [...featured, ...featured];

  return (
    <div className="carousel-wrapper" aria-label="Featured artworks preview">
      <div className="carousel-track">
        {looped.map((artwork, index) => (
          <Link key={`${artwork.id}-${index}`} to="/gallery" className="carousel-link">
            <figure className="carousel-card">
              <img src={artwork.src} alt={artwork.alt} loading="lazy" />
              <figcaption>{artwork.title}</figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </div>
  );
}