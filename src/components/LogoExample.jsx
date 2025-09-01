import React from 'react';
import Logo from './Logo';

const LogoExample = () => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Logo Usage Examples</h2>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3>Current Text Logo (HT initials)</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <Logo size="small" />
          <Logo size="default" />
          <Logo size="large" />
        </div>
        <p>This is your current logo using "HT" initials</p>
      </div>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3>Image Logo (when you add your logo file)</h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
          <Logo 
            size="small" 
            useImage={true} 
            imageSrc="/assets/logos/hiland-tech-logo.png"
            imageAlt="Hiland Tech Logo"
          />
          <Logo 
            size="default" 
            useImage={true} 
            imageSrc="/assets/logos/hiland-tech-logo.png"
            imageAlt="Hiland Tech Logo"
          />
          <Logo 
            size="large" 
            useImage={true} 
            imageSrc="/assets/logos/hiland-tech-logo.png"
            imageAlt="Hiland Tech Logo"
          />
        </div>
        <p>This will show your actual logo when you add the file to /assets/logos/</p>
        <p style={{ fontSize: '0.9rem', color: '#666' }}>
          Note: The image logo will only work after you add your logo file to the assets/logos folder
        </p>
      </div>
      
      <div style={{ marginBottom: '2rem' }}>
        <h3>How to Switch to Image Logo</h3>
        <div style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto', backgroundColor: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <p><strong>Step 1:</strong> Add your logo file to <code>/public/assets/logos/</code></p>
          <p><strong>Step 2:</strong> Update your components to use the image logo:</p>
          <pre style={{ backgroundColor: '#fff', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`// Instead of:
<Logo size="small" />

// Use:
<Logo 
  size="small" 
  useImage={true} 
  imageSrc="/assets/logos/your-logo.png"
  imageAlt="Your Company Logo"
/>`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default LogoExample;
