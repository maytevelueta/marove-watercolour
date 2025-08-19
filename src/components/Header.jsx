import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 className="site-title">Marove Aqua</h1>
      <p className="site-subtitle">Watercolour Portfolio</p>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/gallery">Gallery</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
