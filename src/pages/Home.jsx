import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <>
      <section className="hero container">
        <div className="hero-copy">
          <p className="eyebrow">Botanical · Wildlife · Marine life</p>
          <h1>
            Watercolour paintings shaped by
            <span> delicacy, detail and nature.</span>
          </h1>
          <p className="hero-text">
            Marove Aqua is a collection of original works exploring flowers, birds,
            sea life and the quiet poetry of the natural world.
          </p>
          <div className="hero-actions">
            <Link to="/gallery" className="button button-primary">
              Explore gallery
            </Link>
            <Link to="/contact" className="button button-secondary">
              Enquire about commissions
            </Link>
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-card">
            <p className="hero-card-label">Studio note</p>
            <p>
              Each piece is painted by hand, with a focus on botanical structure,
              texture, and a calm, luminous palette.
            </p>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <p className="eyebrow">Selected works</p>
          <h2>A moving preview of the collection</h2>
        </div>
        <Carousel />
      </section>
    </>
  );
}