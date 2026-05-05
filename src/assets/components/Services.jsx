import React from 'react';

const Services = () => {
  // Styles
  const pageStyle = {
    padding: '60px 20px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#1e293b'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '50px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px'
  };

  const serviceCardStyle = {
    padding: '40px',
    backgroundColor: '#ffffff',
    borderRadius: '15px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
    borderBottom: '5px solid #3b82f6',
    transition: '0.3s',
    textAlign: 'center'
  };

  const iconStyle = {
    fontSize: '40px',
    marginBottom: '20px',
    display: 'block'
  };

  const services = [
    {
      title: "Tech Consultation",
      description: "Not sure what you need? Our experts help you choose the right gear for your workflow.",
      icon: "💡"
    },
    {
      title: "Express Repair",
      description: "Quick and reliable repair services for laptops, cameras, and gaming peripherals.",
      icon: "🛠️"
    },
    {
      title: "Custom PC Builds",
      description: "We build high-performance rigs tailored to your specific gaming or editing needs.",
      icon: "🖥️"
    },
    {
      title: "Software Setup",
      description: "OS installation, driver updates, and professional software configuration.",
      icon: "💿"
    },
    {
      title: "Home Delivery",
      description: "Safe and fast delivery across Kolkata for all your Soumili Tec purchases.",
      icon: "🚚"
    },
    {
      title: "Warranty Support",
      description: "Dedicated support team to handle all your brand warranty and replacement claims.",
      icon: "🛡️"
    }
  ];

  return (
    <div style={pageStyle}>
      <div style={headerStyle}>
        <h1 style={{ fontSize: '3rem', color: '#0f172a', marginBottom: '10px' }}>Our Services</h1>
        <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Premium tech support for every Soumili Tec customer</p>
      </div>

      <div style={gridStyle}>
        {services.map((service, index) => (
          <div key={index} style={serviceCardStyle}>
            <span style={iconStyle}>{service.icon}</span>
            <h3 style={{ color: '#1e40af', marginBottom: '15px', fontSize: '1.5rem' }}>
              {service.title}
            </h3>
            <p style={{ color: '#475569', lineHeight: '1.6' }}>
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;