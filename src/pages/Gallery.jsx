import React, { useState } from "react";
import Lightbox from "../components/Lightbox";
import "../index.css";

const images = [
  { src: "/images/art1.jpg", desc: "Blueberries / Vaccinium corymbosum. Watercolour on 23 x 31cm Arches hot press paper." },
  { src: "/images/art2.jpg", desc: "Pansy Swiss Giant Blue Blotch / Viola x wittrockiana. Watercolour on 23 x 31cm Arches hot press paper." },
  { src: "/images/art3.jpg", desc: "Single tulip / Tulipa gesneriana. Watercolour on 23 x 31cm Arches hot press paper." },
  { src: "/images/art4.jpg", desc: "Camellia / Camellia japonica. Watercolour on 23 x 31cm Arches hot press paper." },
  { src: "/images/art5.jpg", desc: "Paperflower / Bougainvillea glabra. Watercolour on 23 x 31cm Arches hot press paper." },
  { src: "/images/art7.jpg", desc: "Benton Lorna / Iris x germanica. Watercolour on 46 x 61cm Arches hot press paper." },
  { src: "/images/art8.jpg", desc: "Common octopus / Octopus vulgaris. Watercolour on 23 x 31cm Arches hot press paper." },
  { src: "/images/art9.jpg", desc: "Hydrangea / Hydrangea macrophylla. Watercolour on 23 x 31cm Arches hot press paper." },
  { src: "/images/art10.jpg", desc: "Magnolia / Magnolia x soulangeana. Watercolour on 23 x 31cm Arches hot press paper." },
  { src: "/images/art11.jpg", desc: "Purple bearded iris / Iris x germanica. Watercolour on 23 x 31cm Arches hot press paper." },
  { src: "/images/art12.jpg", desc: "Daffodil / Narcissus. Watercolour on 23 x 31cm Arches hot press paper." },
  { src: "/images/art13.jpg", desc: "Radishes / Raphanus sativus. Watercolour on 23 x 31cm Fabriano cold press paper." },
  { src: "/images/art14.jpg", desc: "Passion fruit / Passiflora edulis Sims. Watercolour on 23 x 31cm Fabriano cold press paper." },
  { src: "/images/art15.jpg", desc: "Hollyhock / Alcea, common hollyhock. Watercolour on 23 x 31cm Fabriano cold press paper." },
  { src: "/images/art16.jpg", desc: "Kingfisher / Alcedo atthis. Watercolour on 23 x 31cm Fabriano cold press paper." },
  { src: "/images/art17.jpg", desc: "Radishes / Raphanus sativus. Watercolour on 23 x 31cm Fabriano cold press paper." },
  { src: "/images/art18.jpg", desc: "Passion fruit / Passiflora edulis Sims. Watercolour on 23 x 31cm Fabriano cold press paper." },
  { src: "/images/art19.jpg", desc: "Hollyhock / Alcea, common hollyhock. Watercolour on 23 x 31cm Fabriano cold press paper." },
  { src: "/images/art20.jpg", desc: "Kingfisher / Alcedo atthis. Watercolour on 23 x 31cm Fabriano cold press paper." },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  return (
    <section className="section gallery-section">
      <div className="gallery-header">
        <h1 className="page-title">Gallery</h1>
        <p className="gallery-intro">
          A glimpse into my latest work.
        </p>
      </div>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <button
            key={img.src}
            type="button"
            className="gallery-item"
            onClick={() => setSelectedIndex(index)}
            aria-label={`Open artwork ${index + 1}`}
          >
            <img src={img.src} alt={img.desc} />
          </button>
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
          onNext={() => setSelectedIndex((selectedIndex + 1) % images.length)}
        />
      )}
      <p className="gallery-intro">
         Please note that not all pieces are available for sale, but if you're interested in any of them or would like to commission a custom painting, feel free to contact me.
        </p>
    </section>
  );
}