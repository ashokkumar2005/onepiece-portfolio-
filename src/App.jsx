import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Crew from './pages/Crew'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>⚓ Made with ❤️ and dreams of finding the One Piece ⚓</p>
          <p style={{ fontSize: '0.8rem', marginTop: '5px' }}>© 2024 Monkey D. Dev</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
