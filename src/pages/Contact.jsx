import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import emailjs from '@emailjs/browser'

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
  
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY") // You'll replace this with your actual EmailJS public key
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus(null)

    try {
      // EmailJS template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        company: formData.company,
        project_type: formData.projectType,
        budget: formData.budget,
        message: formData.message,
        to_email: 'info@hiland.tech', // Your email address
        to_name: 'Hiland Tech Team'
      }

      // Send email using EmailJS
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // You'll replace this with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // You'll replace this with your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY' // You'll replace this with your EmailJS public key
      )

      if (result.status === 200) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          budget: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      message: ''
    })
    setSubmitStatus(null)
  }

  return (
    <div className="contact">
      <Helmet>
        <title>Contact Hiland Tech - Get Website Design Quote | Minnesota & California</title>
        <meta name="description" content="Contact Hiland Tech for website design services. Get a free quote for your project. Minnesota: 952-245-9629, California: 714-912-3163. Serving businesses nationwide." />
        <meta name="keywords" content="contact Hiland Tech, website design quote, Minnesota web designer contact, California web design contact, get website quote, web design consultation" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Hiland Tech - Get Website Design Quote" />
        <meta property="og:description" content="Contact us for website design services. Minnesota: 952-245-9629, California: 714-912-3163." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hiland.tech/contact" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Hiland Tech",
            "description": "Contact page for website design services",
            "url": "https://hiland.tech/contact",
            "mainEntity": {
              "@type": "Organization",
              "name": "Hiland Tech",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+19522459629",
                  "contactType": "customer service",
                  "areaServed": "US-MN",
                  "availableLanguage": "English"
                },
                {
                  "@type": "ContactPoint",
                  "telephone": "+17149123163",
                  "contactType": "customer service",
                  "areaServed": "US-CA",
                  "availableLanguage": "English"
                }
              ]
            }
          })}
        </script>
      </Helmet>
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
                <p style={{ color: '#718096', fontSize: '1.1rem' }}>Minnesota: 952-245-9629</p>
                <p style={{ color: '#718096', fontSize: '1.1rem' }}>California: 714-912-3163</p>
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
                
                <button type="submit" className="submit-btn" disabled={isLoading}>
                  {isLoading ? (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ 
                        width: '16px', 
                        height: '16px', 
                        border: '2px solid transparent', 
                        borderTop: '2px solid white', 
                        borderRadius: '50%', 
                        animation: 'spin 1s linear infinite' 
                      }}></div>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div style={{ 
                    background: '#d4edda', 
                    color: '#155724', 
                    padding: '1rem', 
                    borderRadius: '10px', 
                    marginTop: '1rem',
                    border: '1px solid #c3e6cb',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    ✅ <strong>Message sent successfully!</strong> We'll get back to you within 24 hours.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div style={{ 
                    background: '#f8d7da', 
                    color: '#721c24', 
                    padding: '1rem', 
                    borderRadius: '10px', 
                    marginTop: '1rem',
                    border: '1px solid #f5c6cb',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    ❌ <strong>Failed to send message.</strong> Please try again or contact us directly at info@hiland.tech
                  </div>
                )}

                {/* Success Actions */}
                {submitStatus === 'success' && (
                  <div style={{ marginTop: '1rem', textAlign: 'center' }}>
                    <button 
                      onClick={resetForm}
                      style={{
                        background: '#667eea',
                        color: 'white',
                        border: 'none',
                        padding: '0.5rem 1rem',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '0.9rem'
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
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
