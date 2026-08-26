import React, { useState, useEffect } from 'react'
import './About.css'

export default function About() {
  const titles = ['Developer', 'Designer']
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const targetText = titles[currentTitleIndex]
    const typingSpeed = isDeleting ? 40 : 80

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(targetText.substring(0, displayText.length + 1))
        if (displayText === targetText) {
          setTimeout(() => setIsDeleting(true), 1800) // Pause when complete
        }
      } else {
        setDisplayText(targetText.substring(0, displayText.length - 1))
        if (displayText === '') {
          setIsDeleting(false)
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTitleIndex])

  return (
    <section id="about" className="about-section">
      <div className="bg-glow glow-1"></div>
      <div className="bg-glow glow-2"></div>
      <div className="bg-grid-pattern"></div>

      <div className="hero-card">
        
        {/* Left Side: Text & Actions */}
        <div className="hero-content">
          <span className="greeting font-mono">Hi !</span>
          <h1 className="hero-title">
            I'm <span className="highlight-text">RIYAS KHAN</span>
          </h1>
          
          {/* Animated Dynamic Subtitle */}
          <h2 className="hero-subtitle">
            <span className="typewriter-text">{displayText}</span>
            <span className="cursor">|</span>
          </h2>

          <p className="hero-bio">
            I am a Full Stack Web Developer specializing in the Python platform and FastAPI framework, 
            with a strong background in both development and design. Proficient in creating user-friendly, 
            fully functional, and efficient web solutions.
          </p>

          <div className="social-row">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.75a1.48 1.48 0 1 0 0 2.96 1.48 1.48 0 0 0 0-2.96Z"/></svg>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
            </a>
          </div>

          <div className="action-row">
            <a href="#resume" className="btn btn-secondary">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              <span>View Resume</span>
            </a>

            <a href="#contact" className="btn btn-primary">
              <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
              <span>Hire Me</span>
            </a>
          </div>

          <div className="scroll-indicator">
            <span>Scroll Down</span>
            <svg width="18" height="18" className="bounce-arrow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
          </div>
        </div>

        {/* Right Side: Photo + Interactive Graphics */}
        <div className="hero-image-wrapper">
          <div className="tech-circle-ring"></div>
          <div className="image-glow"></div>

          <div className="floating-badge badge-python">
            <span className="dot dot-blue"></span>
            <span>Python</span>
          </div>

          <div className="floating-badge badge-fastapi">
            <span className="dot dot-green"></span>
            <span>FastAPI</span>
          </div>

          <div className="floating-badge badge-experience">
            <div className="badge-title">Full Stack</div>
            <div className="badge-subtitle">Dev & Designer</div>
          </div>

          <img src="/images/riyas-char.png" alt="Abdul Riyas Khan" className="hero-photo" />
        </div>

      </div>
    </section>
  )
}