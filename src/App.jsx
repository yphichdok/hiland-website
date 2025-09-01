import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SEO from './components/SEO'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="App">
        {/* AI Tech Particle Effects */}
        <div className="ai-particles">
          <div className="ai-particle"></div>
          <div className="ai-particle"></div>
          <div className="ai-particle"></div>
          <div className="ai-particle"></div>
          <div className="ai-particle"></div>
          <div className="ai-particle"></div>
          <div className="ai-particle"></div>
          <div className="ai-particle"></div>
          <div className="ai-particle"></div>
        </div>
        
        {/* Cyberpunk Scan Line */}
        <div className="cyberpunk-scan"></div>
        
        <SEO />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
