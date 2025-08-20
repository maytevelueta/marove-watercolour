import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css";

export default function About() {
  return (
    <div className="about-page">
    <section className="section fade-in">
      <Navbar />
      <main className="about-section">
        <h2>About</h2>
        <p>Hi, I'm Mayte, a watercolour artist from Mexico. I started Marove Aqua in early 2021 as a small personal project to bring colour and life to my flat. Before that, I had never painted with watercolours, and discovering this medium was a truly transformative experience for me.</p>
        <br/>
        <p>My work focuses on botanical illustrations and animal subjects, capturing the delicate details and vibrant textures of the natural world. I'm constantly exploring new techniques and seeking inspiration from nature.</p>
        <br/>
        <p>If you have any enquiries or would like to commission a custom painting, please don’t hesitate to get in touch—I'd be delighted to create something unique for you!🙂
        </p>
      </main>
      <Footer />
    </section>
    </div>
  );
}

