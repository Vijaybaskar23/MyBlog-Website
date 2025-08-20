export default function About() {
  return (
    <section className="about-container">
      {/* Mission & Vision */}
      <div className="mission-section">
        <h2>💡Our Mission & Vision</h2>
        <p>
          Welcome to <b>My Blog</b>! Our mission is to share knowledge, inspire
          creativity, and connect people through meaningful content. Our vision
          is to build a platform where technology, travel, and lifestyle come
          together for everyone.
        </p>
      </div>

      {/* Author Card */}
      <div className="author-card">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/005/544/753/small_2x/profile-icon-design-free-vector.jpg" alt="Author" className="author-img" />
        <div>
          <h3>👤 Vijaya Baskar</h3>
          <p>
            A passionate frontend developer & blogger who loves writing about
            tech, travel, and lifestyle.
          </p>
          <div className="social-links">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="mailto:example@email.com">Email</a>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="values-section">
        <h2>⚡Our Values</h2>
        <div className="values-grid">
          <div className="value-card">✨ Simplicity</div>
          <div className="value-card">🚀 Innovation</div>
          <div className="value-card">🎨 Creativity</div>
        </div>
      </div>

      {/* Timeline / Journey */}
      <div className="timeline-section">
        <h2>⏳Our Journey</h2>
        <ul>
          <li>2025 – Blog started with Technology, Travel, Lifestyle</li>
          <li>2026 – Added advanced features & community discussions</li>
          <li>Future – Expanding into tutorials & podcasts</li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <h2>📱 Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
