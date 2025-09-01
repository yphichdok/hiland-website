import React from 'react'
import { Helmet } from 'react-helmet'
import Logo from '../components/Logo'

const About = () => {
  return (
    <div className="about">
      <Helmet>
        <title>About Hiland Tech - Custom Website Design Company in Minnesota & California</title>
        <meta name="description" content="Learn about Hiland Tech, a custom website design company based in Minnesota with years of experience in web design and AI integration across diverse industries." />
        <meta name="keywords" content="about Hiland Tech, Minnesota web design company, custom website development, AI integration services, web design experience, Minnesota web designer" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Hiland Tech - Custom Website Design Company" />
        <meta property="og:description" content="Custom website design company with years of experience in web design and AI integration." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hiland.tech/about" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Hiland Tech",
            "description": "Custom website design company with years of experience",
            "url": "https://hiland.tech/about",
            "mainEntity": {
              "@type": "Organization",
              "name": "Hiland Tech",
              "description": "Custom website design company",
              "areaServed": ["Minnesota", "California"]
            }
          })}
        </script>
      </Helmet>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <Logo 
              size="large" 
              useImage={true} 
              imageSrc="/assets/logos/hitechlogo.jpg"
              imageAlt="Hiland Tech Logo"
            />
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
              <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#f1f5f9', marginBottom: '1.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                We believe that every website is not just an information page, but a brand story told through technology and creativity. We're committed to delivering elegant, modern designs tailored to each industry.
              </p>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#cbd5e1', textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
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
                margin: '0 auto 1.5rem',
                overflow: 'hidden',
                border: '3px solid rgba(0, 212, 255, 0.3)',
                boxShadow: '0 0 20px rgba(0, 212, 255, 0.2)'
              }}>
                <img 
                  src="/assets/images/team/Mr.Jack.jpg" 
                  alt="Jack - Lead Developer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <h3>Jack</h3>
              <p style={{ color: '#00d4ff', fontWeight: '600', marginBottom: '1rem', textShadow: '0 0 10px rgba(0, 212, 255, 0.4)' }}>Lead Developer</p>
              <p>Full-stack developer with 8+ years of experience in modern web technologies and frameworks.</p>
            </div>
            
            <div className="card">
              <div style={{ 
                width: '140px', 
                height: '140px', 
                borderRadius: '50%', 
                margin: '0 auto 1.5rem',
                overflow: 'hidden',
                border: '3px solid rgba(0, 212, 255, 0.3)',
                boxShadow: '0 0 20px rgba(0, 212, 255, 0.2)'
              }}>
                <img 
                  src="/assets/images/team/Mr.Huy.JPEG" 
                  alt="Huy - UI/UX Designer"
                  style={{
                    width: '120%',
                    height: '120%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transform: 'scale(1.2)',
                    marginLeft: '-10%',
                    marginTop: '-10%'
                  }}
                />
              </div>
              <h3>Huy</h3>
              <p style={{ color: '#00d4ff', fontWeight: '600', marginBottom: '1rem', textShadow: '0 0 10px rgba(0, 212, 255, 0.4)' }}>UI/UX Designer</p>
              <p>Creative designer passionate about creating beautiful, intuitive user experiences that convert.</p>
            </div>
            
            <div className="card">
              <div style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '50%', 
                background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
                margin: '0 auto 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                color: 'white',
                border: '3px solid rgba(0, 212, 255, 0.3)',
                boxShadow: '0 0 20px rgba(0, 212, 255, 0.2)'
              }}>
                📊
              </div>
              <h3>Gia Seo Vang</h3>
              <p style={{ color: '#00d4ff', fontWeight: '600', marginBottom: '1rem', textShadow: '0 0 10px rgba(0, 212, 255, 0.4)' }}>Sales Manager</p>
              <p>Experienced sales manager ensuring smooth delivery and exceptional client satisfaction.</p>
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
              <div style={{ fontSize: '3rem', fontWeight: '700', color: '#00d4ff', marginBottom: '0.5rem', textShadow: '0 0 15px rgba(0, 212, 255, 0.5)' }}>150+</div>
              <div style={{ fontSize: '1.2rem' }}>Projects Completed</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: '#00d4ff', marginBottom: '0.5rem', textShadow: '0 0 15px rgba(0, 212, 255, 0.5)' }}>98%</div>
              <div style={{ fontSize: '1.2rem' }}>Client Satisfaction</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: '#00d4ff', marginBottom: '0.5rem', textShadow: '0 0 15px rgba(0, 212, 255, 0.5)' }}>5+</div>
              <div style={{ fontSize: '1.2rem' }}>Years Experience</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: '700', color: '#00d4ff', marginBottom: '0.5rem', textShadow: '0 0 15px rgba(0, 212, 255, 0.5)' }}>24/7</div>
              <div style={{ fontSize: '1.2rem' }}>Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
