function Footer() {
    const footerStyle = {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center',
        boxShadow: '0 -5px 20px rgba(0,0,0,0.15)'
    };

    const textStyle = {
        margin: '0',
        fontSize: '16px',
        letterSpacing: '0.5px',
        opacity: '0.9'
    };

    const linkStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        transition: 'opacity 0.3s ease'
    };

    const socialStyle = {
        marginTop: '20px',
        fontSize: '24px',
        letterSpacing: '15px'
    };

    return (
        <footer style={footerStyle}>
            <style>{`
        a.footer-link:hover {
          opacity: 0.7;
          text-decoration: underline;
        }
      `}</style>
            <p style={textStyle}>
                &copy; 2024 <span style={{ fontWeight: 'bold' }}>MyCompany</span>. All rights reserved.
            </p>
            <p style={{ ...textStyle, marginTop: '10px', fontSize: '14px' }}>
                Crafted with care | <a href="#" style={linkStyle} className="footer-link">Privacy</a> | <a href="#" style={linkStyle} className="footer-link">Terms</a>
            </p>
            <div style={socialStyle}>
                <span>🚀 💡 🌟</span>
            </div>
        </footer>
    );
}

export default Footer;
