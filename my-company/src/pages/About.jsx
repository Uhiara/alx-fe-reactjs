function About() {
    const aboutStyle = {
        background: 'linear-gradient(to bottom, #f5f7fa 0%, #c3cfe2 100%)',
        minHeight: 'calc(100vh - 200px)',
        padding: '60px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const containerStyle = {
        maxWidth: '900px',
        backgroundColor: 'white',
        padding: '50px',
        borderRadius: '15px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
        animation: 'slideUp 0.8s ease-out'
    };

    const titleStyle = {
        fontSize: '48px',
        color: '#667eea',
        marginBottom: '30px',
        fontWeight: 'bold',
        borderBottom: '4px solid #667eea',
        paddingBottom: '15px'
    };

    const textStyle = {
        fontSize: '18px',
        color: '#555',
        lineHeight: '1.8',
        letterSpacing: '0.5px'
    };

    return (
        <div style={aboutStyle}>
            <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
            <div style={containerStyle}>
                <h1 style={titleStyle}>About Us</h1>
                <p style={textStyle}>
                    Our company has been providing top-notch services since 1990. We specialize in various fields including technology, marketing, and consultancy. With over three decades of experience, we've built a reputation for excellence, innovation, and customer satisfaction. Our team of expert professionals is committed to delivering solutions that exceed expectations.
                </p>
            </div>
        </div>
    );
}

export default About;
