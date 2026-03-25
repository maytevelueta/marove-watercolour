import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img src="/images/logo-black.png" alt="Marove Aqua logo" className="logo-img" />
        </Link>

        <button
          type="button"
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <ul
          id="primary-navigation"
          className={`nav-links ${isOpen ? "open" : ""}`}
        >
          {navItems.map((item) => (
            <li key={item.to}>
              <Link to={item.to} onClick={closeMenu}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {isOpen && <button className="nav-overlay" onClick={closeMenu} aria-label="Close menu overlay" />}
      </nav>
    </header>
  );
}