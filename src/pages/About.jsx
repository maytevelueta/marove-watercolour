import React from "react";
import "../index.css";

export default function About() {
  return (
    <section className="section about-section">
      <h1 className="page-title">About</h1>

      <div className="about-text">
        <p>
          Hi, I'm Mayte, a watercolour artist from Mexico. I started Marove Aqua
          in early 2021 as a small personal project to bring colour and life to
          my flat. Discovering this medium was a truly transformative experience
          for me.
        </p>

        <p>
          My work focuses on botanical illustrations and animal subjects,
          capturing the delicate details and vibrant textures of the natural
          world. I'm constantly exploring new techniques and seeking inspiration
          from nature.
        </p>

        <p>
          If you have any enquiries or would like to commission a custom
          painting, please don’t hesitate to get in touch — I'd be delighted to
          create something unique for you.
        </p>
      </div>
    </section>
  );
}