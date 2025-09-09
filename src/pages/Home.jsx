import { Link } from "react-router-dom";
import Carousel from '../components/Carousel';
import '../index.css';

export default function Home() {
  return (
    <>
      <section className="welcome-section">
  <div className="home-title">
    <h1 className="title">Welcome</h1>
    <h1 className="title">to</h1>
    <h1 className="title">my</h1>
    <h1 className="title">virtual</h1>
    <h1 className="title">gallery</h1>
  </div>
      </section>
      <section className="section fade-in">
        <Link to="/gallery" className="carousel-link">
        <Carousel autoPlay={true} />
        </Link>
      </section>
    </>
  );
}
