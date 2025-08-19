import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-page">
      <Header />

      <main className="main-content">
        <section className="hero">
          <h2>Welcome to Marove Aqua</h2>
          <p>
            Discover a watercolour portfolio inspired by nature, light, and simplicity. 
            Each piece captures the fleeting beauty of the natural world.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
