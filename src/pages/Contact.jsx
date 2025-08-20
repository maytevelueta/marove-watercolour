import React from 'react';
import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="section fade-in">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:mayte.velueta@gmail.com">mayte.velueta@gmail.com</a></p>
        <p>Instagram: <a href="https://instagram.com/marove_aqua">@marove_aqua</a></p>
      </section>
    </>
  );
}
