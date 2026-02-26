import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1 className="hero-title">I'm Gonna Be the<br /><span className="highlight">King of Developers!</span></h1>
          <p className="hero-subtitle">Hi there! I'm <strong>Monkey D. Dev</strong> 👋</p>
          <p className="hero-role">🏴‍☠️ Aspiring Pirate Developer</p>
          <p className="hero-desc">
            Just like Luffy set sail for the Grand Line, I'm on my journey to master
            coding and build amazing things! Welcome to my beginner portfolio!
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-red">See My Projects 🗺️</Link>
            <Link to="/about" className="btn btn-navy">About Me 👤</Link>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-frame">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/One_piece_luffy.png/220px-One_piece_luffy.png"
              alt="Luffy"
              className="luffy-img"
              onError={(e) => {
                e.target.onerror = null
                e.target.src = 'https://placehold.co/220x280/e63946/fdf6e3?text=LUFFY!\n🏴‍☠️'
              }}
            />
            <div className="image-caption">My Coding Inspiration!</div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="wave-divider">🌊 ~ ~ ~ ⚓ ~ ~ ~ 🌊</div>

      {/* Stats Section */}
      <section className="stats">
        <h2 className="section-title">My Pirate Stats 📊</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">💻</div>
            <div className="stat-number">3</div>
            <div className="stat-label">Projects Built</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">☕</div>
            <div className="stat-number">∞</div>
            <div className="stat-label">Coffee Consumed</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🐛</div>
            <div className="stat-number">99+</div>
            <div className="stat-label">Bugs Defeated</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🌟</div>
            <div className="stat-number">1</div>
            <div className="stat-label">Dream (The One Piece!)</div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <blockquote className="pirate-quote">
          "I don't want to conquer anything. I just think the guy with the most freedom in this whole ocean... is the King of the Pirates!"
          <cite>— Monkey D. Luffy (also my life motto for coding)</cite>
        </blockquote>
      </section>
    </div>
  )
}

export default Home
