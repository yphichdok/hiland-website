import React, { useState, useEffect } from 'react';

const SocialMediaDebug = () => {
  const [metaTags, setMetaTags] = useState({});
  const [imageStatus, setImageStatus] = useState('');

  useEffect(() => {
    // Check all meta tags
    const checkMetaTags = () => {
      const tags = {};
      
      // Open Graph tags
      const ogImage = document.querySelector('meta[property="og:image"]');
      const ogTitle = document.querySelector('meta[property="og:title"]');
      const ogDescription = document.querySelector('meta[property="og:description"]');
      
      // Twitter tags
      const twitterImage = document.querySelector('meta[property="twitter:image"]');
      const twitterTitle = document.querySelector('meta[property="twitter:title"]');
      const twitterDescription = document.querySelector('meta[property="twitter:description"]');
      
      tags.ogImage = ogImage?.getAttribute('content') || 'Not found';
      tags.ogTitle = ogTitle?.getAttribute('content') || 'Not found';
      tags.ogDescription = ogDescription?.getAttribute('content') || 'Not found';
      tags.twitterImage = twitterImage?.getAttribute('content') || 'Not found';
      tags.twitterTitle = twitterTitle?.getAttribute('content') || 'Not found';
      tags.twitterDescription = twitterDescription?.getAttribute('content') || 'Not found';
      
      setMetaTags(tags);
    };

    // Check image accessibility
    const checkImage = async () => {
      try {
        const imageUrl = '/assets/images/social/hiland-feature.jpg';
        const response = await fetch(imageUrl);
        if (response.ok) {
          setImageStatus(`✅ Image accessible (${response.headers.get('content-length')} bytes)`);
        } else {
          setImageStatus(`❌ Image not accessible (${response.status})`);
        }
      } catch (error) {
        setImageStatus(`❌ Image error: ${error.message}`);
      }
    };

    checkMetaTags();
    checkImage();
    
    // Check every 5 seconds
    const interval = setInterval(() => {
      checkMetaTags();
      checkImage();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testSocialMedia = () => {
    const currentUrl = window.location.href;
    const testUrls = [
      `https://developers.facebook.com/tools/debug/?q=${encodeURIComponent(currentUrl)}`,
      `https://cards-dev.twitter.com/validator?url=${encodeURIComponent(currentUrl)}`,
      `https://www.linkedin.com/post-inspector/inspect/${encodeURIComponent(currentUrl)}`
    ];

    testUrls.forEach(url => {
      window.open(url, '_blank');
    });
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '20px',
      right: '20px',
      background: 'rgba(0, 0, 0, 0.9)',
      color: 'white',
      padding: '20px',
      borderRadius: '10px',
      maxWidth: '400px',
      zIndex: 10000,
      fontFamily: 'monospace',
      fontSize: '12px'
    }}>
      <h3 style={{ margin: '0 0 15px 0', color: '#00d4ff' }}>🔍 Social Media Debug</h3>
      
      <div style={{ marginBottom: '15px' }}>
        <strong>Image Status:</strong><br />
        <span style={{ color: imageStatus.includes('✅') ? '#00ff00' : '#ff0000' }}>
          {imageStatus}
        </span>
      </div>

      <div style={{ marginBottom: '15px' }}>
        <strong>Meta Tags:</strong><br />
        <div style={{ marginTop: '5px' }}>
          <strong>OG Image:</strong> {metaTags.ogImage}<br />
          <strong>OG Title:</strong> {metaTags.ogTitle}<br />
          <strong>Twitter Image:</strong> {metaTags.twitterImage}<br />
          <strong>Twitter Title:</strong> {metaTags.twitterTitle}
        </div>
      </div>

      <button 
        onClick={testSocialMedia}
        style={{
          background: '#00d4ff',
          color: 'black',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '12px'
        }}
      >
        🧪 Test Social Media
      </button>
      
      <div style={{ marginTop: '10px', fontSize: '10px', opacity: '0.7' }}>
        Current URL: {window.location.href}
      </div>
    </div>
  );
};

export default SocialMediaDebug;
