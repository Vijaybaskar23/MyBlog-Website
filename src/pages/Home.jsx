import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home-container">
      <div className="wrapper home-center">
        <h1 className="title">Welcome to My Blog Website </h1>
        <p className="subtitle">Select a category to explore :) </p>

        <div className="categories">
          <Link to="/technology" className="category-btn">Technology</Link>
          <Link to="/travel" className="category-btn">Travel</Link>
          <Link to="/lifestyle" className="category-btn">Lifestyle</Link>
        </div>
      </div>
    </section>
  );
}


