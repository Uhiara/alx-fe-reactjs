function Services() {
    const servicesStyle = {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: 'calc(100vh - 200px)',
        padding: '60px 40px'
    };

    const containerStyle = {
        maxWidth: '1200px',
        margin: '0 auto'
    };

    const titleStyle = {
        fontSize: '48px',
        color: 'white',
        marginBottom: '50px',
        textAlign: 'center',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
    };

    const servicesGridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '30px'
    };

    const serviceCardStyle = {
        backgroundColor: 'white',
        padding: '40px',
        borderRadius: '15px',
        textAlign: 'center',
        boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'pointer'
    };

    const serviceIconStyle = {
        fontSize: '48px',
        marginBottom: '15px'
    };

    const serviceNameStyle = {
        fontSize: '24px',
        color: '#667eea',
        fontWeight: 'bold',
        marginBottom: '15px'
    };

    const serviceDescStyle = {
        fontSize: '16px',
        color: '#777',
        lineHeight: '1.6'
    };

    const services = [
        { name: 'Technology Consulting', desc: 'Expert guidance on modern tech solutions', icon: '💻' },
        { name: 'Market Analysis', desc: 'In-depth insights into market trends', icon: '📊' },
        { name: 'Product Development', desc: 'Innovative product creation services', icon: '🚀' }
    ];

    return (
        <div style={servicesStyle}>
            <style>{`
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 45px rgba(0,0,0,0.3) !important;
        }
      `}</style>
            <div style={containerStyle}>
                <h1 style={titleStyle}>Our Services</h1>
                <div style={servicesGridStyle}>
                    {services.map((service, index) => (
                        <div key={index} style={serviceCardStyle} className="service-card">
                            <div style={serviceIconStyle}>{service.icon}</div>
                            <h3 style={serviceNameStyle}>{service.name}</h3>
                            <p style={serviceDescStyle}>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;
