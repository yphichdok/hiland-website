import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  image, 
  url, 
  type = 'website',
  structuredData = null 
}) => {
  const defaultTitle = "Hiland Tech - Custom Website Design Company in Minnesota & California";
  const defaultDescription = "Professional website design services with AI integration. Serving beauty salons, restaurants, financial services, and more. Starting at $1,000.";
  const defaultKeywords = "website design Minnesota, custom website development, AI website integration, web design California, business website design, responsive website design, AI chatbot development, website maintenance Minnesota";
  const defaultImage = "https://hiland.tech/og-image.jpg";
  const defaultUrl = "https://hiland.tech";

  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = keywords || defaultKeywords;
  const finalImage = image || defaultImage;
  const finalUrl = url || defaultUrl;

  // Default structured data for Hiland Tech
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Hiland Tech",
    "description": "Custom website design company specializing in elegant modern designs with AI integration",
    "url": "https://hiland.tech",
    "logo": "https://hiland.tech/logo.png",
    "image": "https://hiland.tech/og-image.jpg",
    "telephone": ["+19522459629", "+17149123163"],
    "email": "info@hiland.tech",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Minnesota",
      "addressRegion": "MN",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Minnesota"
      },
      {
        "@type": "State", 
        "name": "California"
      }
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "44.5588",
        "longitude": "-93.2278"
      },
      "geoRadius": "500000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Website Design Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Static Website Package",
            "description": "5-page responsive website with content management system",
            "price": "1200",
            "priceCurrency": "USD"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "Custom Website Development",
            "description": "Custom websites with database and login systems",
            "price": "2500",
            "priceCurrency": "USD"
          }
        }
      ]
    },
    "sameAs": [
      "https://facebook.com/hilandtech",
      "https://twitter.com/hilandtech",
      "https://linkedin.com/company/hilandtech"
    ],
    "openingHours": "Mo-Fr 09:00-18:00",
    "priceRange": "$$"
  };

  const finalStructuredData = structuredData || defaultStructuredData;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="title" content={finalTitle} />
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={finalUrl} />
      <meta property="twitter:title" content={finalTitle} />
      <meta property="twitter:description" content={finalDescription} />
      <meta property="twitter:image" content={finalImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Local Business Schema */}
      <meta name="geo.region" content="US-MN" />
      <meta name="geo.placename" content="Minnesota" />
      <meta name="geo.position" content="44.5588;-93.2278" />
      <meta name="ICBM" content="44.5588, -93.2278" />
      
      {/* Business Hours */}
      <meta name="business:hours" content="Monday-Friday 9:00 AM-6:00 PM PST" />
      
      {/* Service Areas */}
      <meta name="business:service_area" content="Minnesota, California" />
      
      {/* Pricing Information */}
      <meta name="business:price_range" content="Starting at $1,000" />
      
      {/* Industry Focus */}
      <meta name="business:industry" content="Website Design, Web Development, AI Integration" />
    </Helmet>
  );
};

export default SEO;
