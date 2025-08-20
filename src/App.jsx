import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Technology from "./pages/Technology";
import TechDetail from "./pages/TechDetail";  
import Travel from "./pages/Travel";
import Lifestyle from "./pages/Lifestyle";
import About from "./pages/About";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/technology/:id" element={<TechDetail />} /> {/* ✅ */}
        <Route path="/travel" element={<Travel />} />
        <Route path="/lifestyle" element={<Lifestyle />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
