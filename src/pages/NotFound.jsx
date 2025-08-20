import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const query = new URLSearchParams(useLocation().search).get("search");

  return (
    <section className="page">
      <div className="wrapper">
        <h2 className="page-title">No Results Found</h2>
        {query && <p>We couldn’t find any results for <strong>{query}</strong>.</p>}
        
        <p>Try searching with another keyword or explore categories.</p>

        <Link to="/" className="back-home-btn">⬅ Back to Home</Link>
      </div>
    </section>
  );
}
