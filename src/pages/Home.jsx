import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
    <section className="section fade-in">
      <h1>Marove Aqua</h1>
      <p>Watercolour Portfolio</p>
      <nav>
        <Link to="/about">About</Link> |{" "}
        <Link to="/gallery">Gallery</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>
    </section>
    </div>
  );
}