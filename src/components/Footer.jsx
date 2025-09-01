import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>WebDev Services</h3>
          <p>Professional web development solutions for modern businesses. We create stunning, responsive websites and web applications that drive results.</p>
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
          <p>Email: info@webdevservices.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Web Street, Digital City, DC 12345</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 WebDev Services. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
