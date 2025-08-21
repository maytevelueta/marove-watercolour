import React from 'react';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';
import '../index.css';

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="welcome-section">
  <div className="home-title">
    <h1 className="title">Welcome</h1>
    <h1 className="title">to</h1>
    <h1 className="title">my</h1>
    <h1 className="title">virtual</h1>
    <h1 className="title">gallery</h1>
  </div>
      </section>
      <section className="section fade-in">
        <Carousel autoPlay={true} />
      </section>
    </>
  );
}
