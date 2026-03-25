import React, { useState } from "react";
import '../index.css';
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
  <Link to="/">
  <img src="/images/logo-black.png" alt="Logo" className="logo-img" />
  </Link>
  
  {/* Desktop nav links */}
  <ul className={`nav-links ${isOpen ? "open" : ""}`}>
  <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
  <li><a href="/about" onClick={() => setIsOpen(false)}>About</a></li>
  <li><a href="/gallery" onClick={() => setIsOpen(false)}>Gallery</a></li>
  <li><a href="/contact" onClick={() => setIsOpen(false)}>Contact</a></li>
</ul>

  {/* Hamburger (mobile only) */}
  <div
    className={`hamburger ${isOpen ? "open" : ""}`}
    onClick={() => setIsOpen(!isOpen)}
  >
    <span></span>
    <span></span>
    <span></span>
  </div>
</nav>

  );
}
