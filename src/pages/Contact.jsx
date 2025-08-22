import React from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <section className="section fade-in">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:mayte.velueta@gmail.com">mayte.velueta@gmail.com</a></p>
        <p>Instagram: <a href="https://instagram.com/marove_aqua">@marove_aqua</a></p>
        <Footer/>
      </section>
    </div>
  );
}
