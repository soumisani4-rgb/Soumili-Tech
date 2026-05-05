import React from 'react';

const About = () => {
  // Styles
  const sectionStyle = {
    padding: '80px 20px',
    maxWidth: '1000px',
    margin: '0 auto',
    color: '#334155',
    fontFamily: "'Segoe UI', Roboto, sans-serif",
    lineHeight: '1.8'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '50px'
  };

  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    marginTop: '40px'
  };

  const cardStyle = {
    flex: '1',
    minWidth: '280px',
    padding: '30px',
    backgroundColor: '#f8fafc',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    borderTop: '4px solid #3b82f6'
  };

  return (
    <div style={sectionStyle}>
      <div style={headerStyle}>
        <h1 style={{ fontSize: '36px', color: '#0f172a', marginBottom: '10px' }}>
          About Soumili Tec
        </h1>
        <div style={{ width: '60px', height: '4px', backgroundColor: '#3b82f6', margin: '0 auto' }}></div>
      </div>

      <p style={{ fontSize: '18px', textAlign: 'center', marginBottom: '40px' }}>
        Founded in 2026, Soumili Tec was born out of a passion for high-performance technology. 
        We believe that everyone deserves access to the tools that power innovation, 
        whether you're a gamer, a professional creator, or a tech enthusiast.
      </p>

      <div style={cardContainerStyle}>
        {/* Mission Card */}
        <div style={cardStyle}>
          <h3 style={{ color: '#1e40af', marginBottom: '15px' }}>Our Mission</h3>
          <p style={{ fontSize: '15px' }}>
            To provide cutting-edge electronics with a focus on durability, 
            performance, and style. We don't just sell gadgets; we provide solutions.
          </p>
        </div>

        {/* Quality Card */}
        <div style={cardStyle}>
          <h3 style={{ color: '#1e40af', marginBottom: '15px' }}>Why Choose Us?</h3>
          <p style={{ fontSize: '15px' }}>
            Every product in our store undergoes rigorous testing. From our 
            mechanical keyboards to our DSLR cameras, quality is never a compromise.
          </p>
        </div>
      </div>

      <div style={{ marginTop: '60px', textAlign: 'center' }}>
        <h2 style={{ color: '#0f172a' }}>Visit Our Tech Hub</h2>
        <p>Located in the heart of Purba Bardhaman, providing 24/7 support for all your tech needs.</p>
      </div>
    </div>
  );
};

export default About;