import React from "react";
import Navbar from "../components/Nabvar";
import Footer from "../components/Footer";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <Navbar />
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
