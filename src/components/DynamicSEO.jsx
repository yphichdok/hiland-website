import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const DynamicSEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  structuredData = null 
}) => {
  // Default values
  const defaultTitle = 'Hiland Tech - Custom Website Design Company in Minnesota & California';
  const defaultDescription = 'Hiland Tech is a custom website design company serving Minnesota and California. We create elegant, modern websites with AI integration for beauty salons, restaurants, financial services, and more. Starting at $1,000.';
  const defaultImage = 'https://hiland.tech/assets/images/social/hiland-feature.jpg';
  const defaultUrl = 'https://hiland.tech';
  
  // Use provided values or defaults
  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalImage = image || defaultImage;
  const finalUrl = url || defaultUrl;

  useEffect(() => {
    // Force social media platforms to re-scrape the page
    if (typeof window !== 'undefined' && window.location.href.includes('hiland.tech')) {
      // Add cache busting for social media platforms
      const metaImage = document.querySelector('meta[property="og:image"]');
      if (metaImage) {
        metaImage.setAttribute('content', `${finalImage}?v=${Date.now()}`);
      }
    }
  }, [finalImage]);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Hiland Tech" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:secure_url" content={finalImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Hiland Tech - Professional Website Design Services" />
      <meta property="og:site_name" content="Hiland Tech" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalUrl} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={finalImage} />
      <meta property="twitter:image:alt" content="Hiland Tech - Professional Website Design Services" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#1e3a8a" />
      <meta name="msapplication-TileColor" content="#1e3a8a" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Hiland Tech" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalUrl} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Cache Control for Social Media */}
      <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
      <meta httpEquiv="Pragma" content="no-cache" />
      <meta httpEquiv="Expires" content="0" />
    </Helmet>
  );
};

export default DynamicSEO;
