import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const Pricing = () => {
  return (
    <div className="pricing">
      <Helmet>
        <title>Website Design Pricing - Hiland Tech | Starting at $1,000</title>
        <meta name="description" content="Transparent website design pricing: Static websites $1,200 (first-time clients $1,000), custom development $2,500+, AI integration custom pricing. Minnesota & California." />
        <meta name="keywords" content="website design pricing, web design cost, custom website pricing, AI integration pricing, Minnesota web design pricing, California web design cost, affordable website design" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Website Design Pricing - Hiland Tech" />
        <meta property="og:description" content="Transparent pricing: Static websites $1,200, custom development $2,500+. First-time client discount available." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hiland.tech/pricing" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PriceSpecification",
            "name": "Website Design Pricing",
            "description": "Transparent pricing for website design services",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Hiland Tech"
            },
            "priceSpecification": [
              {
                "@type": "UnitPriceSpecification",
                "name": "Static Website Package",
                "price": "1200",
                "priceCurrency": "USD",
                "description": "5-page responsive website"
              },
              {
                "@type": "UnitPriceSpecification",
                "name": "Custom Website Development",
                "price": "2500",
                "priceCurrency": "USD",
                "description": "Custom websites with database"
              }
            ]
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>💻 Hiland Tech Pricing</h1>
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
              <h3 style={{ color: '#ffffff', marginBottom: '1rem', textShadow: '0 0 15px rgba(0, 212, 255, 0.5), 0 2px 4px rgba(0,0,0,0.3)' }}>Static Website</h3>
              <div className="price">$1,200</div>
              <div className="price-period">One-time payment</div>
              <p style={{ color: '#f1f5f9', marginBottom: '2rem', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Perfect for small businesses and startups</p>
              
              <ul className="pricing-features">
                <li>5-page responsive website</li>
                <li>Mobile-first design</li>
                <li>Basic SEO optimization</li>
                <li>Contact form</li>
                <li>Social media integration</li>
                <li>Basic analytics</li>
                <li>Content management system</li>
                <li><strong>First-time client discount: $1,000</strong></li>
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
              
              <h3 style={{ color: '#ffffff', marginBottom: '1rem', textShadow: '0 0 15px rgba(0, 212, 255, 0.5), 0 2px 4px rgba(0,0,0,0.3)' }}>Custom Website</h3>
              <div className="price">$2,500+</div>
              <div className="price-period">One-time payment</div>
              <p style={{ color: '#f1f5f9', marginBottom: '2rem', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Ideal for growing businesses with complex needs</p>
              
              <ul className="pricing-features">
                <li>Custom website with database</li>
                <li>Login system & user management</li>
                <li>Advanced SEO optimization</li>
                <li>Content management system</li>
                <li>Blog functionality</li>
                <li>Advanced analytics</li>
                <li>Custom features & integrations</li>
                <li>Performance optimization</li>
                <li><strong>Price varies by complexity</strong></li>
              </ul>
              
              <Link to="/contact" className="cta-button" style={{ marginTop: '2rem' }}>
                Get Started
              </Link>
            </div>
            
            <div className="pricing-card">
              <h3 style={{ color: '#ffffff', marginBottom: '1rem', textShadow: '0 0 15px rgba(0, 212, 255, 0.5), 0 2px 4px rgba(0,0,0,0.3)' }}>AI Integration</h3>
              <div className="price">Custom</div>
              <div className="price-period">Tailored consultation</div>
              <p style={{ color: '#f1f5f9', marginBottom: '2rem', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>For AI features and advanced automation</p>
              
              <ul className="pricing-features">
                <li>Custom AI solutions</li>
                <li>Chatbot development</li>
                <li>Automation tools</li>
                <li>AI-powered features</li>
                <li>Smart SEO integration</li>
                <li>Performance optimization</li>
                <li>Custom integrations</li>
                <li>Ongoing consultation</li>
                <li><strong>Contact us for quote</strong></li>
              </ul>
              
              <Link to="/contact" className="cta-button" style={{ marginTop: '2rem' }}>
                Get Quote
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
              <p>Unlimited edits, security patches, and performance optimization.</p>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                color: '#667eea', 
                marginTop: '1rem' 
              }}>
                $100/month
              </div>
            </div>
            
            <div className="card">
              <div className="card-icon">🔧</div>
              <h3>One-time Edits</h3>
              <p>Quick fixes and updates to your existing website.</p>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                color: '#667eea', 
                marginTop: '1rem' 
              }}>
                $20 per fix
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
              <h3 style={{ color: '#ffffff', marginBottom: '1rem', textShadow: '0 0 15px rgba(0, 212, 255, 0.5), 0 2px 4px rgba(0,0,0,0.3)' }}>How long does it take to complete a project?</h3>
              <p style={{ color: '#f1f5f9', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                Project timelines vary based on complexity. A simple website typically takes 2-4 weeks, while complex applications may take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.
              </p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#ffffff', marginBottom: '1rem', textShadow: '0 0 15px rgba(0, 212, 255, 0.5), 0 2px 4px rgba(0,0,0,0.3)' }}>Do you provide ongoing support after launch?</h3>
              <p style={{ color: '#f1f5f9', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                Yes! All our plans include post-launch support. We also offer monthly maintenance packages to keep your website secure, updated, and performing optimally.
              </p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#ffffff', marginBottom: '1rem', textShadow: '0 0 15px rgba(0, 212, 255, 0.5), 0 2px 4px rgba(0,0,0,0.3)' }}>Can I make changes to my website after it's built?</h3>
              <p style={{ color: '#f1f5f9', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                Absolutely! We can integrate a content management system (CMS) that allows you to easily update content, add new pages, and make other changes without technical knowledge.
              </p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#ffffff', marginBottom: '1rem', textShadow: '0 0 15px rgba(0, 212, 255, 0.5), 0 2px 4px rgba(0,0,0,0.3)' }}>What if I need changes during development?</h3>
              <p style={{ color: '#f1f5f9', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                We include 2 rounds of revisions in all our packages. Additional changes can be accommodated within the project scope or added as additional services.
              </p>
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <h3 style={{ color: '#ffffff', marginBottom: '1rem', textShadow: '0 0 15px rgba(0, 212, 255, 0.5), 0 2px 4px rgba(0,0,0,0.3)' }}>Do you provide hosting services?</h3>
              <p style={{ color: '#f1f5f9', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
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
