import React from 'react'

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development in 2025",
      excerpt: "Explore the latest trends and technologies that are shaping the future of web development, from AI integration to advanced CSS features.",
      category: "Technology",
      date: "March 15, 2025",
      readTime: "5 min read",
      image: "🚀",
      featured: true
    },
    {
      id: 2,
      title: "Why Mobile-First Design is Crucial for SEO",
      excerpt: "Learn how mobile-first design principles can significantly improve your website's search engine rankings and user experience.",
      category: "SEO",
      date: "March 10, 2025",
      readTime: "4 min read",
      image: "📱"
    },
    {
      id: 3,
      title: "Building Scalable Web Applications with React",
      excerpt: "Discover best practices for creating scalable and maintainable web applications using React and modern development patterns.",
      category: "Development",
      date: "March 5, 2025",
      readTime: "7 min read",
      image: "⚛️"
    },
    {
      id: 4,
      title: "The Complete Guide to Website Performance Optimization",
      excerpt: "Comprehensive strategies to improve your website's loading speed, Core Web Vitals, and overall performance metrics.",
      category: "Performance",
      date: "February 28, 2025",
      readTime: "8 min read",
      image: "⚡"
    },
    {
      id: 5,
      title: "E-commerce Trends That Will Dominate 2025",
      excerpt: "Stay ahead of the competition by implementing these cutting-edge e-commerce features and user experience improvements.",
      category: "E-commerce",
      date: "February 20, 2025",
      readTime: "6 min read",
      image: "🛒"
    },
    {
      id: 6,
      title: "Security Best Practices for Modern Web Applications",
      excerpt: "Essential security measures every web developer should implement to protect user data and prevent common vulnerabilities.",
      category: "Security",
      date: "February 15, 2025",
      readTime: "6 min read",
      image: "🔒"
    }
  ]

  const categories = ["All", "Technology", "SEO", "Development", "Performance", "E-commerce", "Security"]

  return (
    <section className="section" style={{ backgroundColor: '#f7fafc' }}>
      <div className="section-container">
        <h2 className="section-title">Latest Insights & Articles</h2>
        <p className="section-subtitle">Stay updated with the latest trends, tips, and insights in web development</p>
        
        {/* Featured Post */}
        <div style={{ 
          background: 'white', 
          borderRadius: '20px', 
          padding: '3rem', 
          marginBottom: '4rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ 
            position: 'absolute', 
            top: '0', 
            left: '0', 
            right: '0', 
            height: '5px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
          }} />
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div>
              <div style={{ 
                display: 'inline-block',
                background: '#667eea',
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '500',
                marginBottom: '1rem'
              }}>
                Featured Article
              </div>
              
              <h3 style={{ 
                fontSize: '2rem', 
                fontWeight: '700', 
                color: '#2d3748',
                marginBottom: '1rem',
                lineHeight: '1.3'
              }}>
                {blogPosts[0].title}
              </h3>
              
              <p style={{ 
                color: '#718096', 
                lineHeight: '1.7',
                marginBottom: '1.5rem',
                fontSize: '1.1rem'
              }}>
                {blogPosts[0].excerpt}
              </p>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '2rem',
                marginBottom: '2rem',
                color: '#718096',
                fontSize: '0.9rem'
              }}>
                <span>{blogPosts[0].date}</span>
                <span>•</span>
                <span>{blogPosts[0].readTime}</span>
              </div>
              
              <a href="#" style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                padding: '1rem 2rem',
                textDecoration: 'none',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '1rem',
                transition: 'all 0.3s ease'
              }}>
                Read Full Article
              </a>
            </div>
            
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '8rem' }}>
                {blogPosts[0].image}
              </div>
            </div>
          </div>
        </div>
        
        {/* Blog Grid */}
        <div className="cards-grid">
          {blogPosts.slice(1).map((post) => (
            <div key={post.id} className="card blog-card">
              <div style={{ 
                fontSize: '3rem', 
                textAlign: 'center', 
                marginBottom: '1.5rem' 
              }}>
                {post.image}
              </div>
              
              <div style={{ 
                display: 'inline-block',
                background: 'rgba(124, 58, 237, 0.1)',
                color: '#7c3aed',
                padding: '0.25rem 0.75rem',
                borderRadius: '15px',
                fontSize: '0.8rem',
                fontWeight: '500',
                marginBottom: '1rem',
                border: '1px solid rgba(124, 58, 237, 0.3)',
                textShadow: '0 0 5px rgba(124, 58, 237, 0.3)'
              }}>
                {post.category}
              </div>
              
              <h3 style={{ 
                fontSize: '1.3rem', 
                fontWeight: '700', 
                color: '#ffffff',
                marginBottom: '1rem',
                lineHeight: '1.4',
                textShadow: '0 0 15px rgba(0, 212, 255, 0.5), 0 2px 4px rgba(0,0,0,0.3)'
              }}>
                {post.title}
              </h3>
              
              <p style={{ 
                color: '#f1f5f9', 
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                textShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}>
                {post.excerpt}
              </p>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
                marginBottom: '1.5rem',
                color: '#94a3b8',
                fontSize: '0.9rem',
                textShadow: '0 1px 2px rgba(0,0,0,0.2)'
              }}>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              
              <a href="#" style={{
                display: 'inline-block',
                color: '#00d4ff',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '0.9rem',
                transition: 'color 0.3s ease',
                textShadow: '0 0 5px rgba(0, 212, 255, 0.3)'
              }}>
                Read More →
              </a>
            </div>
          ))}
        </div>
        
        {/* Newsletter Signup */}
        <div style={{ 
          background: 'linear-gradient(135deg, #00d4ff 0%, #7c3aed 100%)',
          borderRadius: '20px',
          padding: '3rem',
          marginTop: '4rem',
          textAlign: 'center',
          color: 'white'
        }}>
          <h3 style={{ 
            fontSize: '2rem', 
            marginBottom: '1rem',
            color: 'white'
          }}>
            Stay Updated with Our Newsletter
          </h3>
          <p style={{ 
            fontSize: '1.1rem', 
            marginBottom: '2rem',
            opacity: '0.9'
          }}>
            Get the latest web development insights, tips, and trends delivered to your inbox.
          </p>
          
          <div style={{ 
            display: 'flex', 
            gap: '1rem', 
            justifyContent: 'center',
            flexWrap: 'wrap',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            <input
              type="email"
              placeholder="Enter your email address"
              style={{
                flex: '1',
                minWidth: '250px',
                padding: '1rem',
                border: 'none',
                borderRadius: '25px',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
            <button style={{
              background: '#ff6b6b',
              color: 'white',
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '25px',
              fontWeight: '600',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
