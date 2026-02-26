import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="skull">☠️</span>
        <span className="logo-text">Monkey D. Dev</span>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            🏠 Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            👤 About
          </Link>
        </li>
        <li>
          <Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}>
            🗺️ Projects
          </Link>
        </li>
        <li>
          <Link to="/crew" className={location.pathname === '/crew' ? 'active' : ''}>
            🏴‍☠️ Crew
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
            📧 Contact
          </Link>
        </li>
      </ul>

      {/* Mobile hamburger (basic) */}
      <div className="navbar-tagline">⚓ Set Sail for Code! ⚓</div>
    </nav>
  )
}

export default Navbar
