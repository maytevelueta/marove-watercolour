import React from "react";
import { FaInstagram } from "react-icons/fa";
import "../index.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Marove Aqua. All rights reserved.</p>

        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Visit Instagram"
          className="footer-social"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}