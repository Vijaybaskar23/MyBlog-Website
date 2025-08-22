import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";


export default function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
   

    if (
      ["react", "javascript", "node", "ui"].some(word =>
        search.toLowerCase().includes(word)
      )
    ) {
      navigate(`/technology?search=${search}`);
    } else if (
      ["paris", "himalayas", "goa", "tokyo"].some(word =>
        search.toLowerCase().includes(word)
      )
    ) {
      navigate(`/travel?search=${search}`);
    } else if (
      ["healthy", "minimalist", "balance", "workout"].some(word =>
        search.toLowerCase().includes(word)
      )
    ) {
      navigate(`/lifestyle?search=${search}`);
    } else {
      alert("No matching blog found!");
    }
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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search blogs..."
        />
        <button type="submit">Search</button>
      </form>
          <div className="nav-links">
            <Link to="/">Home</Link>

            {/* ✅ Dropdown Menu */}
            <div className="dropdown">
              <button className="dropbtn">Categories ⬇️</button>
              <div className="dropdown-content">
                <Link to="/technology">Technology</Link>
                <Link to="/travel">Travel</Link>
                <Link to="/lifestyle">Lifestyle</Link>
              </div>
            </div>

            <Link to="/about">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
