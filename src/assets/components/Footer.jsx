import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  // Styles
  const footerStyle = {
    backgroundColor: '#0f172a', // Modern deep navy/black
    color: '#f8fafc',
    padding: '60px 20px 20px 20px',
    marginTop: '80px',
    fontFamily: "'Segoe UI', Roboto, sans-serif",
    borderTop: '4px solid #3b82f6' // Tech blue accent bar
  };

  const containerStyle = {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '40px'
  };

  const columnStyle = {
    flex: '1',
    minWidth: '250px'
  };

  const linkStyle = {
    color: '#94a3b8',
    textDecoration: 'none',
    fontSize: '15px',
    display: 'block',
    margin: '10px 0',
    transition: '0.3s'
  };

  const bottomStyle = {
    textAlign: 'center',
    marginTop: '50px',
    paddingTop: '20px',
    borderTop: '1px solid #1e293b',
    color: '#64748b',
    fontSize: '13px'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        
        {/* Brand & Mission */}
        <div style={columnStyle}>
          <h2 style={{ color: '#3b82f6', marginBottom: '20px', fontSize: '24px' }}>
            Soumili Tec
          </h2>
          <p style={{ lineHeight: '1.6', color: '#94a3b8' }}>
            Elevating your digital lifestyle with the finest electronics. 
            From gaming gear to professional tools, we power your future.
          </p>
        </div>

        {/* Navigation */}
        <div style={columnStyle}>
          <h4 style={{ marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Quick Links
          </h4>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/products" style={linkStyle}>Products</Link>
          <Link to="/services" style={linkStyle}>Services</Link>
          <Link to="/about" style={linkStyle}>About Us</Link>
        </div>

        {/* Help & Support */}
        <div style={columnStyle}>
          <h4 style={{ marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Contact Us
          </h4>
          <p style={{ color: '#94a3b8', margin: '10px 0' }}>📍 Burdwan, West Bengal</p>
          <p style={{ color: '#94a3b8', margin: '10px 0' }}>📧 support@soumilitec.com</p>
          <p style={{ color: '#94a3b8', margin: '10px 0' }}>📞 +91 9932380148</p>
        </div>

      </div>

      <div style={bottomStyle}>
        <p>
          &copy; {new Date().getFullYear()} <strong>Soumili Tec</strong>. 
          Built with React. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;