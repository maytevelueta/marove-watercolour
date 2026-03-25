import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import "../index.css";

export default function Home() {
  return (
    <>
      <section className="welcome-section">
        <h1 className="home-title">Welcome to my virtual gallery</h1>
      </section>

      <section className="section fade-in">
        <Link to="/gallery" className="carousel-link">
          <Carousel autoPlay={true} />
        </Link>
      </section>
    </>
  );
}