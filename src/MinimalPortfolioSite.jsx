// src/MinimalPortfolioSite.jsx
import React from "react";
import "./MinimalPortfolioSite.css";

export default function MinimalPortfolioSite() {
  return (
    <div className="site">
      {/* Header */}
      <header className="header">
        <h1 className="title">Marove Aqua</h1>
        <p className="subtitle">Watercolour Portfolio</p>
      </header>

      {/* About Section */}
      <section className="section about">
        <h2>About</h2>
        <p>
          I am a watercolour artist inspired by nature, light, and simplicity. 
          Each piece is an attempt to capture the fleeting beauty of the natural world.
        </p>
      </section>

      {/* Gallery Section */}
      <section className="section gallery">
        <h2>Gallery</h2>
        <div className="grid">
          <img src="/images/art1.jpg" alt="Watercolour artwork 1" />
          <img src="/images/art2.jpg" alt="Watercolour artwork 2" />
          <img src="/images/art3.jpg" alt="Watercolour artwork 3" />
          <img src="/images/art4.jpg" alt="Watercolour artwork 4" />
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:your@email.com">your@email.com</a></p>
        <p>Instagram: <a href="https://instagram.com/yourprofile">@yourprofile</a></p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Marove Aqua</p>
      </footer>
    </div>
  );
}
