import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = () => {
  return (
    <div className="pricing">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Transparent Pricing Plans</h1>
          <p>Choose the perfect plan for your business needs. All plans include our commitment to quality and support.</p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-title">Choose Your Plan</h2>
          <p className="section-subtitle">Flexible pricing options designed to fit businesses of all sizes</p>
          
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>Starter</h3>
              <div className="price">$999</div>
              <div className="price-period">One-time payment</div>
              <p style={{ color: '#718096', marginBottom: '2rem' }}>Perfect for small businesses and startups</p>
              
              <ul className="pricing-features">
                <li>5-page responsive website</li>
                <li>Mobile-first design</li>
                <li>Basic SEO optimization</li>
                <li>Contact form</li>
                <li>Social media integration</li>
                <li>Basic analytics</li>
                <li>1 month of support</li>
              </ul>
              
              <Link to="/contact" className="cta-button" style={{ marginTop: '2rem' }}>
                Get Started
              </Link>
            </div>
            
            <div className="pricing-card featured">
              <div style={{ 
                position: 'absolute', 
                top: '-15px', 
                left: '50%', 
                transform: 'translateX(-50%)',
                background: '#667eea',
                color: 'white',
                padding: '0.5rem 1.5rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>
                Most Popular
              </div>
              
              <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>Professional</h3>
              <div className="price">$2,499</div>
              <div className="price-period">One-time payment</div>
              <p style={{ color: '#718096', marginBottom: '2rem' }}>Ideal for growing businesses</p>
              
              <ul className="pricing-features">
                <li>10-page responsive website</li>
                <li>Custom design & branding</li>
                <li>Advanced SEO optimization</li>
                <li>Content management system</li>
                <li>Blog functionality</li>
                <li>Advanced analytics</li>
                <li>E-commerce integration</li>
                <li>3 months of support</li>
                <li>Performance optimization</li>
              </ul>
              
              <Link to="/contact" className="cta-button" style={{ marginTop: '2rem' }}>
                Get Started
              </Link>
            </div>
            
            <div className="pricing-card">
              <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>Enterprise</h3>
              <div className="price">$4,999</div>
              <div className="price-period">One-time payment</div>
              <p style={{ color: '#718096', marginBottom: '2rem' }}>For large businesses with complex needs</p>
              
              <ul className="pricing-features">
                <li>Unlimited pages</li>
                <li>Custom web application</li>
                <li>Advanced functionality</li>
                <li>Database integration</li>
                <li>API development</li>
                <li>User authentication</li>
                <li>Advanced security</li>
                <li>6 months of support</li>
                <li>Priority support</li>
                <li>Performance monitoring</li>
              </ul>
              
              <Link to="/contact" className="cta-button" style={{ marginTop: '2rem' }}>
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section" style={{ backgroundColor: '#f7fafc' }}>
        <div className="section-container">
          <h2 className="section-title">Additional Services</h2>
          <p className="section-subtitle">Enhance your website with these optional services</p>
          
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">🔒</div>
              <h3>SSL Certificate</h3>
              <p>Secure your website with SSL encryption for better security and SEO.</p>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                color: '#667eea', 
                marginTop: '1rem' 
              }}>
                $99/year
              </div>
            </div>
            
            <div className="card">
              <div className="card-icon">📧</div>
              <h3>Email Hosting</h3>
              <p>Professional email hosting with your domain name.</p>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                color: '#667eea', 
                marginTop: '1rem' 
              }}>
                $49/year
              </div>
            </div>
            
            <div className="card">
              <div className="card-icon">📊</div>
              <h3>Monthly Maintenance</h3>
              <p>Ongoing updates, security patches, and performance optimization.</p>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                color: '#667eea', 
                marginTop: '1rem' 
              }}>
                $199/month
              </div>
            </div>
            
            <div className="card">
              <div className="card-icon">📈</div>
              <h3>SEO Services</h3>
              <p>Ongoing search engine optimization to improve your rankings.</p>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                color: '#667eea', 
                marginTop: '1rem' 
              }}>
                $299/month
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>How long does it take to complete a project?</h3>
              <p style={{ color: '#718096' }}>
                Project timelines vary based on complexity. A simple website typically takes 2-4 weeks, while complex applications may take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.
              </p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>Do you provide ongoing support after launch?</h3>
              <p style={{ color: '#718096' }}>
                Yes! All our plans include post-launch support. We also offer monthly maintenance packages to keep your website secure, updated, and performing optimally.
              </p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>Can I make changes to my website after it's built?</h3>
              <p style={{ color: '#718096' }}>
                Absolutely! We can integrate a content management system (CMS) that allows you to easily update content, add new pages, and make other changes without technical knowledge.
              </p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>What if I need changes during development?</h3>
              <p style={{ color: '#718096' }}>
                We include 2 rounds of revisions in all our packages. Additional changes can be accommodated within the project scope or added as additional services.
              </p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#2d3748', marginBottom: '1rem' }}>Do you provide hosting services?</h3>
              <p style={{ color: '#718096' }}>
                We can recommend reliable hosting providers and help you set up hosting. We also offer managed hosting solutions for clients who prefer a hands-off approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: '#2d3748', color: 'white' }}>
        <div className="section-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>
            Ready to Get Started?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.9' }}>
            Contact us today for a free consultation and custom quote for your project.
          </p>
          <Link to="/contact" className="cta-button">
            Get Free Quote
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Pricing
