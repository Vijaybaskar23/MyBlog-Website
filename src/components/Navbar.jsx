import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";


export default function Navbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    const q = query.toLowerCase();

    if (q.includes("react") || q.includes("ai") || q.includes("cloud")) {
      navigate(`/technology?search=${q}`);
    } else if (q.includes("travel")) {
      navigate(`/travel?search=${q}`);
    } else if (q.includes("lifestyle")) {
      navigate(`/lifestyle?search=${q}`);
    } else {
      navigate(`/notfound?search=${q}`);
    }
    setQuery("");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link className="logo">
          <img src={logo} alt="logo" className="logo-img" />
          <span className="logo-text">My Blog</span>
        </Link>

        {/* Right → Search + Links */}
        <div className="right-section">
          <form onSubmit={handleSearch} className="search-form">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">🔍</button>
          </form>

          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
