import React from 'react'
import { Link } from 'react-router-dom'
import Testimonials from '../components/Testimonials'
import Portfolio from '../components/Portfolio'
import Blog from '../components/Blog'

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Professional Website Design That Drives Business Growth</h1>
          <p>In today's AI-driven era, a modern, sophisticated, and professional website is not just your brand's face—it's a powerful tool to attract customers, elevate your business image, and create competitive advantages.</p>
          <Link to="/contact" className="cta-button">Get Started Today</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-title">Why Choose Hiland Tech?</h2>
          <p className="section-subtitle">We combine cutting-edge technology with creative design to deliver exceptional results for businesses across diverse industries.</p>
          
          <div className="cards-grid">
            <div className="card fade-in-up">
              <div className="card-icon">🎨</div>
              <h3>Elegant Modern Design</h3>
              <p>Beautiful, contemporary designs tailored to each industry that capture your brand's essence and engage your audience.</p>
            </div>
            
            <div className="card fade-in-up">
              <div className="card-icon">🤖</div>
              <h3>AI Integration</h3>
              <p>Cutting-edge AI technologies including chatbots, smart SEO, and automation tools to give you competitive advantages.</p>
            </div>
            
            <div className="card fade-in-up">
              <div className="card-icon">⚡</div>
              <h3>Optimal Performance</h3>
              <p>Lightning-fast websites with optimal speed and performance across all devices and platforms.</p>
            </div>
            
            <div className="card fade-in-up">
              <div className="card-icon">🔧</div>
              <h3>Custom Solutions</h3>
              <p>Flexible solutions that match your exact needs and budget, built specifically for your business goals.</p>
            </div>
            
            <div className="card fade-in-up">
              <div className="card-icon">📱</div>
              <h3>Mobile-First Design</h3>
              <p>Websites designed for mobile users first, ensuring great experience across all devices and screen sizes.</p>
            </div>
            
            <div className="card fade-in-up">
              <div className="card-icon">📊</div>
              <h3>Easy Management</h3>
              <p>User-friendly content management systems that make it easy to update and maintain your website.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="section" style={{ backgroundColor: '#f8fafc' }}>
        <div className="section-container">
          <h2 className="section-title">Industry Expertise</h2>
          <p className="section-subtitle">We have successfully completed numerous projects across diverse industries</p>
          
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">💅</div>
              <h3>Beauty & Wellness</h3>
              <p>Nail salons, spas, beauty salons with elegant designs that showcase your services and attract clients.</p>
            </div>
            
            <div className="card">
              <div className="card-icon">💰</div>
              <h3>Financial Services</h3>
              <p>Insurance, financial consulting with professional designs that build trust and credibility.</p>
            </div>
            
            <div className="card">
              <div className="card-icon">🍽️</div>
              <h3>Food & Hospitality</h3>
              <p>Restaurants, cafes, dining establishments with appetizing designs that drive reservations.</p>
            </div>
            
            <div className="card">
              <div className="card-icon">🚀</div>
              <h3>Technology & Startups</h3>
              <p>Tech companies, innovative businesses with cutting-edge designs that showcase innovation.</p>
            </div>
            
            <div className="card">
              <div className="card-icon">⛪</div>
              <h3>Non-profit Organizations</h3>
              <p>Churches, community organizations with meaningful designs that connect with your community.</p>
            </div>
            
            <div className="card">
              <div className="card-icon">🏠</div>
              <h3>Real Estate & Legal</h3>
              <p>Property management, law firms with sophisticated designs that convey professionalism.</p>
            </div>
            
            <div className="card">
              <div className="card-icon">🎓</div>
              <h3>Education & Training</h3>
              <p>Schools, training centers, educational institutions with engaging designs that inspire learning.</p>
            </div>
            
            <div className="card">
              <div className="card-icon">🛒</div>
              <h3>E-commerce & Retail</h3>
              <p>Online stores, digital marketplaces with conversion-focused designs that drive sales.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Portfolio Section */}
      <Portfolio />

      {/* Blog Section */}
      <Blog />

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
