import React, { useState, useEffect } from 'react'

// Add CSS animation for gentle floating
const floatingStyle = `
  @keyframes gentleFloat {
    0%, 100% { 
      transform: translateY(0px); 
    }
    50% { 
      transform: translateY(-8px); 
    }
  }
`

// Inject the CSS
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = floatingStyle
  document.head.appendChild(style)
}

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '50px',
        height: '50px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: '1.5rem',
        boxShadow: '0 4px 20px rgba(102,126,234,0.3)',
        transition: 'all 0.3s ease',
        zIndex: 1000,
        animation: 'gentleFloat 3s ease-in-out infinite'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'translateY(-3px)'
        e.target.style.boxShadow = '0 6px 25px rgba(102,126,234,0.4)'
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'translateY(0)'
        e.target.style.boxShadow = '0 4px 20px rgba(102,126,234,0.3)'
      }}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  )
}

export default ScrollToTop
