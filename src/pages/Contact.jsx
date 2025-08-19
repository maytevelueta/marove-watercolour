import React from 'react';
import Navbar from '../components/Navbar';

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="section fade-in">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:your@email.com">your@email.com</a></p>
        <p>Instagram: <a href="https://instagram.com/yourprofile">@yourprofile</a></p>
      </section>
    </>
  );
}
