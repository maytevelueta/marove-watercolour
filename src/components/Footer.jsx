import React from "react";
import { FaInstagram, FaFacebookF, FaEtsy } from "react-icons/fa";
import "../index.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} Marove Aqua. All rights reserved.</p>

        <div className="footer-social">
          <a
            href="https://www.instagram.com/marove_aqua/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://www.etsy.com/shop/MaroveAqua?ref=dashboard-header"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Etsy"
          >
            <FaEtsy />
          </a>

          <a
            href="https://www.facebook.com/maroveaqua/"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Facebook"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </footer>
  );
}