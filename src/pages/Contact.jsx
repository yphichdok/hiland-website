import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      message: ''
    })
  }

  return (
    <div className="contact">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Get In Touch</h1>
          <p>Ready to start your project? Let's discuss how we can help bring your vision to life.</p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="section">
        <div className="section-container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '4rem',
            alignItems: 'start'
          }}>
            {/* Contact Information */}
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: '#2d3748' }}>
                Let's Start a Conversation
              </h2>
              <p style={{ fontSize: '1.2rem', lineHeight: '1.7', color: '#4a5568', marginBottom: '3rem' }}>
                Whether you have a specific project in mind or just want to explore possibilities, we're here to help. 
                Reach out to us and let's discuss how we can transform your business online.
              </p>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#667eea', marginBottom: '1rem', fontSize: '1.3rem' }}>📧 Email</h3>
                <p style={{ color: '#718096', fontSize: '1.1rem' }}>info@hiland.tech</p>
                <p style={{ color: '#718096', fontSize: '1.1rem' }}>support@hiland.tech</p>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#667eea', marginBottom: '1rem', fontSize: '1.3rem' }}>📞 Phone</h3>
                <p style={{ color: '#718096', fontSize: '1.1rem' }}>952-245-9629</p>
                <p style={{ color: '#718096', fontSize: '1.1rem' }}>Mon-Fri: 9:00 AM - 6:00 PM PST</p>
              </div>
              
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{ color: '#667eea', marginBottom: '1rem', fontSize: '1.3rem' }}>📍 Address</h3>
                <p style={{ color: '#718096', fontSize: '1.1rem' }}>Minnesota, United States</p>
                <p style={{ color: '#718096', fontSize: '1.1rem' }}>Serving businesses across Minnesota</p>
                <p style={{ color: '#718096', fontSize: '1.1rem' }}>and beyond</p>
              </div>
              
              <div>
                <h3 style={{ color: '#667eea', marginBottom: '1rem', fontSize: '1.3rem' }}>💬 Social Media</h3>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="#" style={{ 
                    width: '40px',
                    height: '40px',
                    background: '#667eea',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '1.2rem'
                  }}>
                    📘
                  </a>
                  <a href="#" style={{ 
                    width: '40px',
                    height: '40px',
                    background: '#667eea',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '1.2rem'
                  }}>
                    🐦
                  </a>
                  <a href="#" style={{ 
                    width: '40px',
                    height: '40px',
                    background: '#667eea',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '1.2rem'
                  }}>
                    💼
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: '#2d3748' }}>
                  Send Us a Message
                </h3>
                
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="projectType">Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e2e8f0',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease'
                    }}
                  >
                    <option value="">Select project type</option>
                    <option value="website">Website Development</option>
                    <option value="webapp">Web Application</option>
                    <option value="ecommerce">E-commerce Website</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="maintenance">Website Maintenance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="budget">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e2e8f0',
                      borderRadius: '10px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease'
                    }}
                  >
                    <option value="">Select budget range</option>
                    <option value="under-1000">Under $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000-10000">$5,000 - $10,000</option>
                    <option value="over-10000">Over $10,000</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>
                
                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section" style={{ backgroundColor: '#f7fafc' }}>
        <div className="section-container">
          <h2 className="section-title">Find Us</h2>
          <div style={{ 
            background: '#e2e8f0', 
            height: '400px', 
            borderRadius: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            color: '#718096'
          }}>
            🗺️ Interactive Map Coming Soon
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
            Don't wait! Contact us today and let's discuss your project requirements.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+15551234567" style={{
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
              Call Now
            </a>
            <a href="mailto:info@webdevservices.com" style={{
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
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
