import React, { useState } from 'react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const portfolioItems = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "ecommerce",
      image: "🛒",
      description: "Modern e-commerce website with advanced product management, secure payments, and inventory tracking.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
      featured: true
    },
    {
      id: 2,
      title: "Corporate Website",
      category: "website",
      image: "🏢",
      description: "Professional corporate website with content management system and SEO optimization.",
      technologies: ["React", "Next.js", "WordPress", "SEO"],
      link: "#"
    },
    {
      id: 3,
      title: "Web Application",
      category: "webapp",
      image: "💻",
      description: "Custom web application for business process management with user authentication and real-time updates.",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      link: "#"
    },
    {
      id: 4,
      title: "Restaurant Website",
      category: "website",
      image: "🍽️",
      description: "Beautiful restaurant website with online ordering, menu management, and reservation system.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
      link: "#"
    },
    {
      id: 5,
      title: "SaaS Dashboard",
      category: "webapp",
      image: "📊",
      description: "Comprehensive SaaS dashboard with analytics, user management, and subscription handling.",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
      link: "#"
    },
    {
      id: 6,
      title: "Portfolio Website",
      category: "website",
      image: "🎨",
      description: "Creative portfolio website for artists and designers with gallery and contact features.",
      technologies: ["React", "Framer Motion", "GSAP", "CSS3"],
      link: "#"
    }
  ]

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'website', label: 'Websites' },
    { key: 'webapp', label: 'Web Apps' },
    { key: 'ecommerce', label: 'E-commerce' }
  ]

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section className="section">
      <div className="section-container">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="section-subtitle">Explore some of our recent projects and see the quality of our work</p>
        
        {/* Filter Buttons */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          gap: '1rem', 
          marginBottom: '3rem',
          flexWrap: 'wrap'
        }}>
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              style={{
                padding: '0.75rem 1.5rem',
                border: activeFilter === filter.key ? '2px solid #667eea' : '2px solid #e2e8f0',
                background: activeFilter === filter.key ? '#667eea' : 'transparent',
                color: activeFilter === filter.key ? 'white' : '#667eea',
                borderRadius: '25px',
                cursor: 'pointer',
                fontWeight: '500',
                transition: 'all 0.3s ease'
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="cards-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="card portfolio-card">
              <div style={{ 
                fontSize: '4rem', 
                textAlign: 'center', 
                marginBottom: '1.5rem' 
              }}>
                {item.image}
              </div>
              
              <h3 style={{ 
                fontSize: '1.4rem', 
                fontWeight: '700', 
                color: '#ffffff',
                marginBottom: '1rem',
                textAlign: 'center',
                textShadow: '0 0 15px rgba(0, 212, 255, 0.5), 0 2px 4px rgba(0,0,0,0.3)'
              }}>
                {item.title}
              </h3>
              
              <p style={{ 
                color: '#f1f5f9', 
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                textAlign: 'center',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}>
                {item.description}
              </p>
              
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.5rem', 
                marginBottom: '1.5rem',
                justifyContent: 'center'
              }}>
                {item.technologies.map((tech, index) => (
                  <span key={index} style={{
                    background: 'rgba(0, 212, 255, 0.1)',
                    color: '#00d4ff',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    fontWeight: '500',
                    border: '1px solid rgba(0, 212, 255, 0.3)',
                    textShadow: '0 0 5px rgba(0, 212, 255, 0.3)'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
              
              <div style={{ textAlign: 'center' }}>
                <a href={item.link} style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
                  color: 'white',
                  padding: '0.75rem 1.5rem',
                  textDecoration: 'none',
                  borderRadius: '25px',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(0, 212, 255, 0.3)'
                }}>
                  View Project
                </a>
              </div>
              
              {item.featured && (
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: '#ff6b6b',
                  color: 'white',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                  fontWeight: '600'
                }}>
                  Featured
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <h3 style={{ 
            fontSize: '2rem', 
            marginBottom: '1rem', 
            color: '#2d3748' 
          }}>
            Ready to Start Your Project?
          </h3>
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '2rem', 
            color: '#718096' 
          }}>
            Let's create something amazing together
          </p>
          <a href="/contact" style={{
            display: 'inline-block',
            background: '#ff6b6b',
            color: 'white',
            padding: '1rem 2rem',
            textDecoration: 'none',
            borderRadius: '50px',
            fontWeight: '600',
            fontSize: '1.1rem',
            transition: 'all 0.3s ease'
          }}>
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
