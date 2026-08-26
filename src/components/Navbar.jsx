import { useState, useEffect } from 'react'
import logo from '/images/logo-white.png'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="nav-wrapper">
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          
          {/* Logo & Badge */}
          <a href="#" className="nav-logo">
            <img src={logo} alt="Logo" className="logo-img" />
            <span className="status-badge">Available for Hire</span>
          </a>

          {/* Desktop Links */}
          <nav className="nav-links">
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="cta-button">Let's Talk</a>
          </nav>

          {/* Hamburger Icon */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mobile-toggle"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              {isOpen ? (
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              ) : (
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              )}
            </svg>
          </button>

        </div>
      </header>

      {/* Floating Mobile Drawer */}
      {isOpen && (
        <div className="mobile-menu">
          <a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</a>
          <a href="#skills" className="nav-link" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#education" className="nav-link" onClick={() => setIsOpen(false)}>Education</a>
          <a href="#projects" className="nav-link" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className="cta-button mobile-cta" onClick={() => setIsOpen(false)}>Let's Talk</a>
        </div>
      )}
    </div>
  )
}