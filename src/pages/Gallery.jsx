import React from "react";
import Slider from "react-slick";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Gallery.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function Gallery() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const images = [
    "/images/art1.jpg",
    "/images/art2.jpg",
    "/images/art3.jpg",
    "/images/art4.jpg",
  ];

  return (
    <div className="gallery-page">
      <Header />
      <main className="main-content">
        <section className="gallery-section">
          <h2>Gallery</h2>
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index}>
                <img src={src} alt={`Artwork ${index + 1}`} className="gallery-img" />
              </div>
            ))}
          </Slider>
        </section>
      </main>
      <Footer />
    </div>
  );
}
