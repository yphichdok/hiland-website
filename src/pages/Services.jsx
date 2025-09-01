import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className="services">
      <Helmet>
        <title>Website Design Services - Hiland Tech | Minnesota & California</title>
        <meta name="description" content="Professional website design services including static websites ($1,200), custom development ($2,500+), AI integration, and maintenance. Serving Minnesota and California businesses." />
        <meta name="keywords" content="website design services, custom website development, AI integration, website maintenance, Minnesota web design, California web design, responsive design, SEO optimization" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Website Design Services - Hiland Tech" />
        <meta property="og:description" content="Professional website design services with AI integration. Starting at $1,200." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hiland.tech/services" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Website Design Services",
            "description": "Professional website design services with AI integration",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Hiland Tech"
            },
            "offers": [
              {
                "@type": "Offer",
                "name": "Static Website Package",
                "price": "1200",
                "priceCurrency": "USD"
              },
              {
                "@type": "Offer",
                "name": "Custom Website Development",
                "price": "2500",
                "priceCurrency": "USD"
              }
            ]
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Our Website Design Services</h1>
          <p>Comprehensive web solutions tailored to your business needs and goals, with AI integration capabilities</p>
        </div>
      </section>

      {/* Main Services */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-title">What We Offer</h2>
          <p className="section-subtitle">From simple websites to complex web applications, we've got you covered</p>
          
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">🌐</div>
              <h3>Static Website Package</h3>
              <p>Professional 5-page websites built from scratch, perfectly tailored to your brand and business requirements.</p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', color: '#718096' }}>
                <li>Responsive design for all devices</li>
                <li>SEO optimization</li>
                <li>Content management system</li>
                <li>Fast loading times</li>
                <li><strong>Starting at $1,200</strong></li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-icon">📱</div>
              <h3>Custom Website Development</h3>
              <p>Custom websites with database & login systems that streamline your business processes and improve efficiency.</p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', color: '#718096' }}>
                <li>User authentication & management</li>
                <li>Database integration</li>
                <li>API development</li>
                <li>Real-time updates</li>
                <li><strong>Starting from $2,500+</strong></li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-icon">🛒</div>
              <h3>E-commerce Solutions</h3>
              <p>Complete online stores that drive sales and provide excellent shopping experiences.</p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', color: '#718096' }}>
                <li>Product catalog management</li>
                <li>Secure payment processing</li>
                <li>Inventory tracking</li>
                <li>Order management</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-icon">🎨</div>
              <h3>UI/UX Design</h3>
              <p>Beautiful, intuitive designs that enhance user experience and drive conversions.</p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', color: '#718096' }}>
                <li>User research & testing</li>
                <li>Wireframing & prototyping</li>
                <li>Visual design & branding</li>
                <li>Usability optimization</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-icon">🔧</div>
              <h3>Website Maintenance & Support</h3>
              <p>Ongoing support and maintenance to keep your website secure, updated, and performing optimally.</p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', color: '#718096' }}>
                <li>One-time edits: $20 per fix</li>
                <li>Unlimited edits plan: $100/month</li>
                <li>Security updates</li>
                <li>Performance optimization</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-icon">🤖</div>
              <h3>AI Integration & Consulting</h3>
              <p>Custom AI solutions and consultation to give your business competitive advantages in the digital age.</p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', color: '#718096' }}>
                <li>Custom AI solutions</li>
                <li>Chatbot development</li>
                <li>Automation tools</li>
                <li>AI-powered features</li>
                <li>Consultation process</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section" style={{ backgroundColor: '#f7fafc' }}>
        <div className="section-container">
          <h2 className="section-title">Technologies We Use</h2>
          <p className="section-subtitle">Modern, reliable technologies for building robust web solutions</p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem',
            marginTop: '3rem'
          }}>
            <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(0, 0, 0, 0.8)', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0, 212, 255, 0.2)', border: '1px solid rgba(0, 212, 255, 0.2)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚛️</div>
              <h3 style={{ marginBottom: '0.5rem', color: '#ffffff', textShadow: '0 0 15px rgba(0, 212, 255, 0.5), 0 2px 4px rgba(0,0,0,0.3)' }}>Frontend</h3>
              <p style={{ color: '#f1f5f9', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>React, Vue.js, Angular, HTML5, CSS3, JavaScript</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(0, 0, 0, 0.8)', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0, 212, 255, 0.2)', border: '1px solid rgba(0, 212, 255, 0.2)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
              <h3 style={{ marginBottom: '0.5rem', color: '#ffffff', textShadow: '0 0 15px rgba(0, 212, 255, 0.5), 0 2px 4px rgba(0,0,0,0.3)' }}>Backend</h3>
              <p style={{ color: '#f1f5f9', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Node.js, Python, PHP, Java, .NET, Ruby</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(0, 0, 0, 0.8)', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0, 212, 255, 0.2)', border: '1px solid rgba(0, 212, 255, 0.2)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗄️</div>
              <h3 style={{ marginBottom: '0.5rem', color: '#ffffff', textShadow: '0 0 15px rgba(0, 212, 255, 0.5), 0 2px 4px rgba(0,0,0,0.3)' }}>Databases</h3>
              <p style={{ color: '#f1f5f9', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>MySQL, PostgreSQL, MongoDB, Redis, SQLite</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(0, 0, 0, 0.8)', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0, 212, 255, 0.2)', border: '1px solid rgba(0, 212, 255, 0.2)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>☁️</div>
              <h3 style={{ marginBottom: '0.5rem', color: '#ffffff', textShadow: '0 0 15px rgba(0, 212, 255, 0.5), 0 2px 4px rgba(0,0,0,0.3)' }}>Cloud & DevOps</h3>
              <p style={{ color: '#f1f5f9', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>AWS, Google Cloud, Azure, Docker, Kubernetes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-title">Our Development Process</h2>
          <p className="section-subtitle">A proven methodology that ensures successful project delivery</p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem',
            marginTop: '3rem'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>1</div>
              <h3 style={{ marginBottom: '1rem', color: '#ffffff', textShadow: '0 0 15px rgba(0, 212, 255, 0.5), 0 2px 4px rgba(0,0,0,0.3)' }}>Discovery & Planning</h3>
              <p style={{ color: '#f1f5f9', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>We start by understanding your business goals, target audience, and project requirements.</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>2</div>
              <h3 style={{ marginBottom: '1rem', color: '#ffffff', textShadow: '0 0 15px rgba(0, 212, 255, 0.5), 0 2px 4px rgba(0,0,0,0.3)' }}>Design & Prototyping</h3>
              <p style={{ color: '#f1f5f9', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Creating wireframes, mockups, and interactive prototypes for your approval.</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>3</div>
              <h3 style={{ marginBottom: '1rem', color: '#ffffff', textShadow: '0 0 15px rgba(0, 212, 255, 0.5), 0 2px 4px rgba(0,0,0,0.3)' }}>Development</h3>
              <p style={{ color: '#f1f5f9', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Building your website or application using modern technologies and best practices.</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                margin: '0 auto 1rem',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>4</div>
              <h3 style={{ marginBottom: '1rem', color: '#ffffff', textShadow: '0 0 15px rgba(0, 212, 255, 0.5), 0 2px 4px rgba(0,0,0,0.3)' }}>Testing & Launch</h3>
              <p style={{ color: '#f1f5f9', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>Rigorous testing followed by deployment and launch of your project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: '#2d3748', color: 'white' }}>
        <div className="section-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'white' }}>
            Ready to Start Your Project?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.9' }}>
            Let's discuss your requirements and create a custom solution for your business.
          </p>
          <Link to="/contact" className="cta-button">
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Services
