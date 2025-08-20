import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="section fade-in">
        <h2>Welcome to Marove Aqua</h2>
        <p>Your minimalistic watercolour portfolio.</p>
      </section>

      <section className="section fade-in">
        <Carousel autoPlay={true} />
      </section>
    </>
  );
}
