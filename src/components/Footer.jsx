import React from "react";
import { FaInstagram } from "react-icons/fa"; // Instagram icon

export default function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Your Website. All rights reserved.</p>
      <a
        href="https://www.instagram.com/marove_aqua"
        target="_blank"
        rel="noopener noreferrer"
        className="instagram-link"
      >
        <FaInstagram />
      </a>
    </footer>
  );
}
