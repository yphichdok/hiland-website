import React from 'react'

const TrustedClients = () => {
  // Sample client logos - you can replace these with actual client logos
  const clientLogos = [
    {
      id: 1,
      name: "Sample Client",
      logo: "/assets/images/clients/sample-client-logo.svg",
      alt: "Sample Client Logo"
    },
    {
      id: 2,
      name: "Business Partner", 
      logo: "/assets/images/clients/sample-client-logo.svg",
      alt: "Business Partner Logo"
    },
    {
      id: 3,
      name: "Trusted Client",
      logo: "/assets/images/clients/sample-client-logo.svg",
      alt: "Trusted Client Logo"
    },
    {
      id: 4,
      name: "Corporate Client",
      logo: "/assets/images/clients/sample-client-logo.svg",
      alt: "Corporate Client Logo"
    },
    {
      id: 5,
      name: "Local Business",
      logo: "/assets/images/clients/sample-client-logo.svg",
      alt: "Local Business Logo"
    },
    {
      id: 6,
      name: "Industry Leader",
      logo: "/assets/images/clients/sample-client-logo.svg",
      alt: "Industry Leader Logo"
    }
  ]

  return (
    <section className="section trusted-clients-section">
      <div className="section-container">
        <h2 className="section-title">Our Trusted Clients</h2>
        <p className="section-subtitle">Trusted by businesses across Minnesota and California</p>
        
        <div className="clients-container">
          <div className="clients-scroll">
                         {/* First set of logos */}
             {clientLogos.map((client) => (
               <div key={client.id} className="client-logo">
                 <div className="logo-placeholder">
                   <img 
                     src={client.logo} 
                     alt={client.alt}
                     style={{
                       width: '100%',
                       height: '100%',
                       objectFit: 'contain',
                       padding: '10px'
                     }}
                   />
                 </div>
                 <span className="client-name">{client.name}</span>
               </div>
             ))}
             
             {/* Duplicate set for seamless scrolling */}
             {clientLogos.map((client) => (
               <div key={`duplicate-${client.id}`} className="client-logo">
                 <div className="logo-placeholder">
                   <img 
                     src={client.logo} 
                     alt={client.alt}
                     style={{
                       width: '100%',
                       height: '100%',
                       objectFit: 'contain',
                       padding: '10px'
                     }}
                   />
                 </div>
                 <span className="client-name">{client.name}</span>
               </div>
             ))}
          </div>
        </div>
        
        <div className="clients-note">
          <p>Ready to join our growing list of satisfied clients?</p>
          <a href="/contact" className="cta-button">Get Started Today</a>
        </div>
      </div>
    </section>
  )
}

export default TrustedClients
