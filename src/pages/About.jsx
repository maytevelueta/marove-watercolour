import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      <Header />
      <main className="main-content">
        <section className="about-section">
          <h2>About</h2>
          <p>
            I am a watercolour artist inspired by nature, light, and simplicity. 
            Each piece is an attempt to capture the fleeting beauty of the natural world.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
