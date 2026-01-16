function Home() {
    const homeStyle = {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        minHeight: 'calc(100vh - 200px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        color: 'white',
        textAlign: 'center'
    };

    const contentStyle = {
        maxWidth: '800px',
        animation: 'fadeIn 1s ease-in'
    };

    const titleStyle = {
        fontSize: '72px',
        fontWeight: 'bold',
        marginBottom: '20px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
        letterSpacing: '2px'
    };

    const descriptionStyle = {
        fontSize: '24px',
        lineHeight: '1.8',
        opacity: '0.95',
        fontWeight: '300'
    };

    return (
        <div style={homeStyle}>
            <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
            <div style={contentStyle}>
                <h1 style={titleStyle}>Welcome to MyCompany</h1>
                <p style={descriptionStyle}>We are dedicated to delivering excellence in all our services.</p>
            </div>
        </div>
    );
}

export default Home;
