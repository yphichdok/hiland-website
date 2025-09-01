import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Transform Your Business with Professional Web Development</h1>
          <p>We create stunning, responsive websites and web applications that help businesses grow and succeed in the digital world.</p>
          <Link to="/contact" className="cta-button">Get Started Today</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-title">Why Choose WebDev Services?</h2>
          <p className="section-subtitle">We combine cutting-edge technology with creative design to deliver exceptional results for our clients.</p>
          
          <div className="cards-grid">
            <div className="card fade-in-up">
              <div className="card-icon">🚀</div>
              <h3>Fast & Responsive</h3>
              <p>Lightning-fast websites that work perfectly on all devices. We optimize for speed and user experience.</p>
            </div>
            
            <div className="card fade-in-up">
              <div className="card-icon">💡</div>
              <h3>Modern Design</h3>
              <p>Beautiful, contemporary designs that capture your brand's essence and engage your audience.</p>
            </div>
            
            <div className="card fade-in-up">
              <div className="card-icon">🔧</div>
              <h3>Custom Development</h3>
              <p>Tailored solutions built specifically for your business needs and goals.</p>
            </div>
            
            <div className="card fade-in-up">
              <div className="card-icon">📱</div>
              <h3>Mobile-First</h3>
              <p>Websites designed for mobile users first, ensuring great experience across all devices.</p>
            </div>
            
            <div className="card fade-in-up">
              <div className="card-icon">🔒</div>
              <h3>Secure & Reliable</h3>
              <p>Enterprise-grade security and 99.9% uptime guarantee for your peace of mind.</p>
            </div>
            
            <div className="card fade-in-up">
              <div className="card-icon">📈</div>
              <h3>SEO Optimized</h3>
              <p>Built-in SEO best practices to help your website rank higher in search results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: '#f7fafc' }}>
        <div className="section-container">
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#2d3748' }}>
              Ready to Get Started?
            </h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#718096' }}>
              Let's discuss your project and create something amazing together.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/contact" className="cta-button">
                Start Your Project
              </Link>
              <Link to="/pricing" style={{
                display: 'inline-block',
                background: 'transparent',
                color: '#667eea',
                padding: '1rem 2rem',
                textDecoration: 'none',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '1.1rem',
                border: '2px solid #667eea',
                transition: 'all 0.3s ease'
              }}>
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
