import React from "react";
import { Link } from "react-router-dom";
import { FiInstagram, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-title">Marove Aqua</p>
          <p className="footer-copy">
            Original watercolour works inspired by flora, fauna and the quiet beauty of nature.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/gallery">View gallery</Link>
          <Link to="/contact">Commission enquiry</Link>
        </div>

        <div className="footer-socials" aria-label="Social links">
          <a
            href="https://www.instagram.com/maroveaqua/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <FiInstagram />
          </a>
          <a href="mailto:hello@marove-aqua.com" aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>

      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} Marove Aqua</span>
        <span>London · Watercolour artist</span>
      </div>
    </footer>
  );
}