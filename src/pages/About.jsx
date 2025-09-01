import React from 'react'
import Logo from '../components/Logo'

const About = () => {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <Logo size="large" />
          </div>
          <h1>About Hiland Tech</h1>
          <p>We're a custom website design company based in Minnesota with years of experience in web design and development, successfully completing numerous projects across diverse industries.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="section-container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                Our Mission
              </h2>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#4a5568', marginBottom: '1.5rem' }}>
                We believe that every website is not just an information page, but a brand story told through technology and creativity. We're committed to delivering elegant, modern designs tailored to each industry.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#718096' }}>
                In today's AI-driven era, a modern, sophisticated, and professional website is not just your brand's face—it's a powerful tool to attract customers, elevate your business image, and create competitive advantages.
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '8rem', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                🎯
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section" style={{ backgroundColor: '#f7fafc' }}>
        <div className="section-container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">The principles that guide everything we do</p>
          
          <div className="cards-grid">
            <div className="card">
              <div className="card-icon">🎨</div>
              <h3>Elegant Design</h3>
              <p>We create beautiful, contemporary designs tailored to each industry that capture your brand's essence.</p>
            </div>
            
            <div className="card">
              <div className="card-icon">🤖</div>
              <h3>AI Integration</h3>
              <p>We integrate cutting-edge AI technologies including chatbots, smart SEO, and automation tools.</p>
            </div>
            
            <div className="card">
              <div className="card-icon">⚡</div>
              <h3>Performance Focus</h3>
              <p>We optimize for optimal speed and performance across all devices and platforms.</p>
            </div>
            
            <div className="card">
              <div className="card-icon">🔧</div>
              <h3>Custom Solutions</h3>
              <p>We provide flexible solutions that match your exact needs and budget requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="section-container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">The talented professionals behind our success</p>
          
          <div className="cards-grid">
            <div className="card">
              <div style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '50%', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                margin: '0 auto 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                color: 'white'
              }}>
                👨‍💻
              </div>
              <h3>John Smith</h3>
              <p style={{ color: '#667eea', fontWeight: '600', marginBottom: '1rem' }}>Lead Developer</p>
              <p>Full-stack developer with 8+ years of experience in modern web technologies and frameworks.</p>
            </div>
            
            <div className="card">
              <div style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '50%', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                margin: '0 auto 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                color: 'white'
              }}>
                🎨
              </div>
              <h3>Sarah Johnson</h3>
              <p style={{ color: '#667eea', fontWeight: '600', marginBottom: '1rem' }}>UI/UX Designer</p>
              <p>Creative designer passionate about creating beautiful, intuitive user experiences that convert.</p>
            </div>
            
            <div className="card">
              <div style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '50%', 
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                margin: '0 auto 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                color: 'white'
              }}>
                📊
              </div>
              <h3>Mike Chen</h3>
              <p style={{ color: '#667eea', fontWeight: '600', marginBottom: '1rem' }}>Project Manager</p>
              <p>Experienced project manager ensuring smooth delivery and exceptional client satisfaction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section" style={{ backgroundColor: '#2d3748', color: 'white' }}>
        <div className="section-container">
          <h2 className="section-title" style={{ color: 'white' }}>Our Impact</h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '3rem',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: '#667eea', marginBottom: '0.5rem' }}>150+</div>
              <div style={{ fontSize: '1.2rem' }}>Projects Completed</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: '#667eea', marginBottom: '0.5rem' }}>98%</div>
              <div style={{ fontSize: '1.2rem' }}>Client Satisfaction</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: '#667eea', marginBottom: '0.5rem' }}>5+</div>
              <div style={{ fontSize: '1.2rem' }}>Years Experience</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: '#667eea', marginBottom: '0.5rem' }}>24/7</div>
              <div style={{ fontSize: '1.2rem' }}>Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
