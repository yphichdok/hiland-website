import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Logo size="small" />
            <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'white' }}>Hiland Tech</span>
          </div>
        </Link>
        
        <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
        
        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={isActive('/') ? 'active' : ''} 
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={isActive('/about') ? 'active' : ''} 
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/services" 
              className={isActive('/services') ? 'active' : ''} 
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              to="/pricing" 
              className={isActive('/pricing') ? 'active' : ''} 
              onClick={closeMobileMenu}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={isActive('/contact') ? 'active' : ''} 
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      
      <style jsx>{`
        .nav-links.mobile-open {
          display: flex !important;
          flex-direction: column;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        
        .nav-links.mobile-open li {
          margin: 1rem 0;
        }
        
        .nav-links a.active {
          background: rgba(255,255,255,0.3);
          color: white;
        }
      `}</style>
    </nav>
  )
}

export default Navbar
