import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <main className="hero-section">
        <div className="hero-text">
          <h1>Marove Aqua</h1>
          <p>Watercolour Portfolio | Minimalist & Serene</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

