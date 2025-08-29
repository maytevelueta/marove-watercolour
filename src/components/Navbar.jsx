import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../index.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
  <img src="/images/logo-black.png" alt="Logo" className="logo-img" />

  {/* Desktop nav links */}
  <ul className={`nav-links ${isOpen ? "open" : ""}`}>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/about">About</Link></li>
    <li><Link href="/gallery">Gallery</Link></li>
    <li><Link href="/contact">Contact</Link></li>
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
