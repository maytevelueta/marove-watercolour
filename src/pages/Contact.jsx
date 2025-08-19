import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-page">
    <section className="section fade-in">
      <Navbar />
      <main className="contact-section">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:your@email.com">your@email.com</a></p>
        <p>Instagram: <a href="https://instagram.com/yourprofile">@yourprofile</a></p>
      </main>
      <Footer />
      </section>
    </div>
  );
}
