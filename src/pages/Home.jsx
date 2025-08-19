import React from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="section fade-in">
        <h1>Marove Aqua</h1>
        <p>Watercolour Portfolio</p>
      </section>

      <section className="section fade-in">
        <h2>About</h2>
        <p>
          I am a watercolour artist inspired by nature, light, and simplicity.
          Each piece captures the fleeting beauty of the natural world.
        </p>
      </section>
    </>
  );
}
