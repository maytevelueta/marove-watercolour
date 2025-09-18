import React, { useState } from "react";
import Lightbox from "../components/Lightbox";

export default function Gallery() {
  const images = [
  { src: '/images/art1.jpg', desc: "Blueberries/Vaccinium corymbosum. Watercolour on 23 x 31cm Arches hot press paper. " },
  { src: '/images/art2.jpg', desc: "Pansy Swiss Giant Blue Blotch/Viola x wittrockiana. Watercolour on 23 x 31cm Arches hot press paper." },
  { src: '/images/art3.jpg', desc: "Single tulip/Tulipa gesneriana. Watercolour on 23 x 31cm Arches hot press paper." },
  { src: '/images/art4.jpg', desc: "Watercolour on 23 x 31cm Arches hot press paper." },
  { src: '/images/art5.jpg', desc: "Watercolour on 23 x 31cm Arches hot press paper." },
 /* { src: '/images/art6.jpg', desc: "Botanical-inspired composition" },*/
  { src: '/images/art7.jpg', desc: "Watercolour on 23 x 31cm Arches hot press paper." },
  { src: '/images/art8.jpg', desc: "DWatercolour on 23 x 31cm Arches hot press paper." },
  { src: '/images/art9.jpg', desc: "Watercolour on 23 x 31cm Arches hot press paper." },
  { src: '/images/art10.jpg', desc: "Watercolour on 23 x 31cm Arches hot press paper." },
  { src: '/images/art11.jpg', desc: "BWatercolour on 23 x 31cm Arches hot press paper." },
  { src: '/images/art12.jpg', desc: "Watercolour on 23 x 31cm Arches hot press paper." },
  { src: '/images/art13.jpg', desc: "Watercolour on 23 x 31cm Arches hot press paper." },
  { src: '/images/art14.jpg', desc: "Watercolour on 23 x 31cm Arches hot press paper." },
  { src: '/images/art15.jpg', desc: "Watercolour on 23 x 31cm Arches hot press paper." }
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
