import React from 'react';

const Logo = ({ size = 'default', className = '' }) => {
  const getSize = () => {
    switch (size) {
      case 'small':
        return { width: '40px', height: '40px', fontSize: '16px' };
      case 'large':
        return { width: '100px', height: '100px', fontSize: '28px' };
      default:
        return { width: '56px', height: '56px', fontSize: '20px' };
    }
  };

  const sizeStyles = getSize();

  return (
    <div 
      className={`logo-container ${className}`}
      style={{
        width: sizeStyles.width,
        height: sizeStyles.height,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: '800',
        fontSize: sizeStyles.fontSize,
        letterSpacing: '-0.025em',
        boxShadow: '0 4px 20px rgba(30, 58, 138, 0.3)',
        border: '2px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.05)';
        e.target.style.boxShadow = '0 6px 25px rgba(30, 58, 138, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 4px 20px rgba(30, 58, 138, 0.3)';
      }}
    >
      HT
    </div>
  );
};

export default Logo;
