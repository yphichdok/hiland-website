import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Hiland Tech transformed our online presence completely. Our new website increased our leads by 300% in just 3 months. The team was professional, responsive, and delivered exactly what we needed.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Digital Solutions",
      role: "Marketing Director",
      content: "Working with Hiland Tech was a game-changer for our business. They built us a custom e-commerce platform that's both beautiful and highly functional. Our customers love the user experience.",
      rating: 5,
      image: "👨‍💻"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Creative Agency",
      role: "Founder",
      content: "The team at Hiland Tech exceeded our expectations. They delivered a stunning website that perfectly captures our brand identity. The ongoing support and maintenance have been exceptional.",
      rating: 5,
      image: "👩‍🎨"
    }
  ]

  const renderStars = (rating) => {
    return "⭐".repeat(rating)
  }

  return (
    <section className="section">
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
                    color: '#ffffff',
                    marginBottom: '0.25rem',
                    textShadow: '0 0 10px rgba(0, 212, 255, 0.5)'
                  }}>
                    {testimonial.name}
                  </h3>
                  <p style={{ 
                    color: '#00d4ff', 
                    fontWeight: '500',
                    marginBottom: '0.25rem',
                    textShadow: '0 0 8px rgba(0, 212, 255, 0.4)'
                  }}>
                    {testimonial.role}
                  </p>
                  <p style={{ 
                    color: '#94a3b8', 
                    fontSize: '0.9rem',
                    textShadow: '0 0 5px rgba(148, 163, 184, 0.3)'
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
                color: '#e2e8f0', 
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
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(26, 26, 46, 0.9) 100%)',
            borderRadius: '50px',
            boxShadow: '0 5px 20px rgba(0, 212, 255, 0.2), 0 0 0 1px rgba(0, 212, 255, 0.1)',
            border: '1px solid rgba(0, 212, 255, 0.2)',
            backdropFilter: 'blur(10px)'
          }}>
            <div style={{ fontSize: '2rem' }}>🏆</div>
            <div>
              <div style={{ fontWeight: '600', color: '#ffffff', textShadow: '0 0 10px rgba(0, 212, 255, 0.3)' }}>4.9/5 Rating</div>
              <div style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Based on 150+ reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
