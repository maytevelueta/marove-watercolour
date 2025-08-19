import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <main className="main-content">
        <section className="intro-section">
          <h2>Welcome to Marove Aqua</h2>
          <p>
            Explore a serene collection of watercolour artworks, inspired by nature, light, and simplicity.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
