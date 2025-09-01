import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "WebDev Services transformed our online presence completely. Our new website increased our leads by 300% in just 3 months. The team was professional, responsive, and delivered exactly what we needed.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Digital Solutions",
      role: "Marketing Director",
      content: "Working with WebDev Services was a game-changer for our business. They built us a custom e-commerce platform that's both beautiful and highly functional. Our customers love the user experience.",
      rating: 5,
      image: "👨‍💻"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Creative Agency",
      role: "Founder",
      content: "The team at WebDev Services exceeded our expectations. They delivered a stunning website that perfectly captures our brand identity. The ongoing support and maintenance have been exceptional.",
      rating: 5,
      image: "👩‍🎨"
    },
    {
      id: 4,
      name: "David Thompson",
      company: "Global Enterprises",
      role: "CTO",
      content: "We needed a complex web application with tight deadlines. WebDev Services delivered on time and exceeded our technical requirements. Highly recommended for enterprise projects.",
      rating: 5,
      image: "👨‍🔬"
    }
  ]

  const renderStars = (rating) => {
    return "⭐".repeat(rating)
  }

  return (
    <section className="section" style={{ backgroundColor: '#f7fafc' }}>
      <div className="section-container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">Don't just take our word for it - hear from some of our satisfied clients</p>
        
        <div className="cards-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card testimonial-card">
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '1.5rem' 
              }}>
                <div style={{ 
                  fontSize: '3rem', 
                  marginRight: '1rem' 
                }}>
                  {testimonial.image}
                </div>
                <div>
                  <h3 style={{ 
                    fontSize: '1.3rem', 
                    fontWeight: '600', 
                    color: '#2d3748',
                    marginBottom: '0.25rem'
                  }}>
                    {testimonial.name}
                  </h3>
                  <p style={{ 
                    color: '#667eea', 
                    fontWeight: '500',
                    marginBottom: '0.25rem'
                  }}>
                    {testimonial.role}
                  </p>
                  <p style={{ 
                    color: '#718096', 
                    fontSize: '0.9rem' 
                  }}>
                    {testimonial.company}
                  </p>
                </div>
              </div>
              
              <div style={{ 
                marginBottom: '1rem',
                fontSize: '1.1rem'
              }}>
                {renderStars(testimonial.rating)}
              </div>
              
              <p style={{ 
                color: '#4a5568', 
                lineHeight: '1.7',
                fontStyle: 'italic'
              }}>
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '1rem',
            padding: '1rem 2rem',
            background: 'white',
            borderRadius: '50px',
            boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '2rem' }}>🏆</div>
            <div>
              <div style={{ fontWeight: '600', color: '#2d3748' }}>4.9/5 Rating</div>
              <div style={{ fontSize: '0.9rem', color: '#718096' }}>Based on 150+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
