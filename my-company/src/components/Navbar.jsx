import { Link } from 'react-router-dom';

function Navbar() {
    const navStyle = {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundcolor: '#667eea',
        justifyContent: 'space-between',
        padding: '20px 40px',
        display: 'flex',
        gap: '30px',
        alignItems: 'center',
        boxShadow: '0 5px 20px rgba(0,0,0,0.15)',
        position: 'sticky',
        top: 0,
        zIndex: 1000
    };

    const logoStyle = {
        color: 'white',
        fontSize: '28px',
        fontWeight: 'bold',
        letterSpacing: '2px',
        textDecoration: 'none',
        marginRight: '30px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
        transition: 'transform 0.3s ease'
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        fontSize: '16px',
        fontWeight: '600',
        letterSpacing: '0.5px',
        padding: '10px 15px',
        borderRadius: '5px',
        transition: 'all 0.3s ease',
        position: 'relative'
    };

    return (
        <nav style={navStyle}>
            <style>{`
        .logo:hover {
          transform: scale(1.05);
        }
        a.nav-link {
          position: relative;
        }
        a.nav-link::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 3px;
          background-color: #fff;
          transition: width 0.3s ease;
        }
        a.nav-link:hover::after {
          width: 100%;
        }
        a.nav-link:hover {
          background-color: rgba(255,255,255,0.1);
        }
      `}</style>
            <Link to="/" style={logoStyle} className="logo">MyCompany</Link>
            <Link to="/" style={linkStyle} className="nav-link">Home</Link>
            <Link to="/about" style={linkStyle} className="nav-link">About</Link>
            <Link to="/services" style={linkStyle} className="nav-link">Services</Link>
            <Link to="/contact" style={linkStyle} className="nav-link">Contact</Link>
        </nav>
    );
}

export default Navbar;
