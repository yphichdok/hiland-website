import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className="services">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Our Web Development Services</h1>
          <p>Comprehensive web solutions tailored to your business needs and goals</p>
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
              <h3>Custom Website Development</h3>
              <p>Professional websites built from scratch, perfectly tailored to your brand and business requirements.</p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', color: '#718096' }}>
                <li>Responsive design for all devices</li>
                <li>SEO optimization</li>
                <li>Content management system</li>
                <li>Fast loading times</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-icon">📱</div>
              <h3>Web Applications</h3>
              <p>Custom web applications that streamline your business processes and improve efficiency.</p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', color: '#718096' }}>
                <li>User authentication & management</li>
                <li>Database integration</li>
                <li>API development</li>
                <li>Real-time updates</li>
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
              <h3>Website Maintenance</h3>
              <p>Ongoing support and maintenance to keep your website secure, updated, and performing optimally.</p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', color: '#718096' }}>
                <li>Security updates</li>
                <li>Performance optimization</li>
                <li>Content updates</li>
                <li>24/7 monitoring</li>
              </ul>
            </div>
            
            <div className="card">
              <div className="card-icon">📈</div>
              <h3>SEO & Digital Marketing</h3>
              <p>Search engine optimization and digital marketing strategies to increase your online visibility.</p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem', color: '#718096' }}>
                <li>Keyword research & optimization</li>
                <li>Content strategy</li>
                <li>Link building</li>
                <li>Analytics & reporting</li>
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
            <div style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚛️</div>
              <h3 style={{ marginBottom: '0.5rem', color: '#2d3748' }}>Frontend</h3>
              <p style={{ color: '#718096' }}>React, Vue.js, Angular, HTML5, CSS3, JavaScript</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🚀</div>
              <h3 style={{ marginBottom: '0.5rem', color: '#2d3748' }}>Backend</h3>
              <p style={{ color: '#718096' }}>Node.js, Python, PHP, Java, .NET, Ruby</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗄️</div>
              <h3 style={{ marginBottom: '0.5rem', color: '#2d3748' }}>Databases</h3>
              <p style={{ color: '#718096' }}>MySQL, PostgreSQL, MongoDB, Redis, SQLite</p>
            </div>
            
            <div style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '15px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>☁️</div>
              <h3 style={{ marginBottom: '0.5rem', color: '#2d3748' }}>Cloud & DevOps</h3>
              <p style={{ color: '#718096' }}>AWS, Google Cloud, Azure, Docker, Kubernetes</p>
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
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>1</div>
              <h3 style={{ marginBottom: '1rem', color: '#2d3748' }}>Discovery & Planning</h3>
              <p style={{ color: '#718096' }}>We start by understanding your business goals, target audience, and project requirements.</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>2</div>
              <h3 style={{ marginBottom: '1rem', color: '#2d3748' }}>Design & Prototyping</h3>
              <p style={{ color: '#718096' }}>Creating wireframes, mockups, and interactive prototypes for your approval.</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>3</div>
              <h3 style={{ marginBottom: '1rem', color: '#2d3748' }}>Development</h3>
              <p style={{ color: '#718096' }}>Building your website or application using modern technologies and best practices.</p>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                color: 'white',
                fontSize: '2rem',
                fontWeight: 'bold'
              }}>4</div>
              <h3 style={{ marginBottom: '1rem', color: '#2d3748' }}>Testing & Launch</h3>
              <p style={{ color: '#718096' }}>Rigorous testing followed by deployment and launch of your project.</p>
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
