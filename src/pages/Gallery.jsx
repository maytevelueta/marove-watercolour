import React, { useMemo, useState } from "react";
import Lightbox from "../components/Lightbox";
import { artworks } from "../data/artworks";

const filters = ["All", "Botanical", "Wildlife", "Marine life"];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredArtworks = useMemo(() => {
    if (activeFilter === "All") return artworks;
    return artworks.filter((artwork) => artwork.category === activeFilter);
  }, [activeFilter]);

  return (
    <section className="page-section container">
      <div className="section-heading section-heading-spaced">
        <div>
          <p className="eyebrow">Collection</p>
          <h1 className="page-title">Gallery</h1>
          <p className="gallery-intro">
            A glympse into my latest work.
          </p>
        </div>

        <div className="filter-row" role="tablist" aria-label="Filter artworks by category">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={activeFilter === filter ? "filter-chip is-active" : "filter-chip"}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="gallery-grid">
        {filteredArtworks.map((artwork, index) => (
          <button
            key={artwork.id}
            type="button"
            className="gallery-card"
            onClick={() => setSelectedIndex(index)}
          >
            <img src={artwork.src} alt={artwork.alt} loading="lazy" />
            <div className="gallery-card-body">
              <p className="eyebrow small">{artwork.category}</p>
              <h2>{artwork.title}</h2>
              <p>{artwork.size}</p>
            </div>
          </button>
        ))}
      </div>

      <Lightbox
        images={filteredArtworks}
        index={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onPrev={() =>
          setSelectedIndex((current) =>
            current === null ? null : (current - 1 + filteredArtworks.length) % filteredArtworks.length
          )
        }
        onNext={() =>
          setSelectedIndex((current) =>
            current === null ? null : (current + 1) % filteredArtworks.length
          )
        }
      />
      <div className="section-heading-spaced">
      <p className="gallery-intro">
            Please note that some pieces are not available, if you would like to enquire about a specific artwork or commission a custom piece, get in touch via the contact page.
      </p>
      </div>
    </section>
    
  );
}