import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
            <Logo 
              size="small" 
              useImage={true} 
              imageSrc="/assets/logos/hitechlogo.jpg"
              imageAlt="Hiland Tech Logo"
            />
            <h3>Hiland Tech</h3>
          </div>
          <p>Custom website design company based in Minnesota. We create elegant, modern designs tailored to each industry with AI integration capabilities.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul style={{ listStyle: 'none' }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Services</h3>
          <ul style={{ listStyle: 'none' }}>
            <li>Custom Websites</li>
            <li>Web Applications</li>
            <li>E-commerce Solutions</li>
            <li>Mobile-First Design</li>
            <li>SEO Optimization</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>Email: info@hiland.tech</p>
          <p>Minnesota: 952-245-9629</p>
          <p>California: 714-912-3163</p>
          <p>Address: Minnesota, United States</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Hiland Tech. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
