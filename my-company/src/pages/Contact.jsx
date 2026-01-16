import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setFormData({ name: '', email: '', message: '' });
            setSubmitted(false);
        }, 3000);
    };

    const contactStyle = {
        background: 'linear-gradient(to bottom, #f5f7fa 0%, #c3cfe2 100%)',
        minHeight: 'calc(100vh - 200px)',
        padding: '60px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const containerStyle = {
        maxWidth: '600px',
        backgroundColor: 'white',
        padding: '50px',
        borderRadius: '15px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
        animation: 'slideUp 0.8s ease-out'
    };

    const titleStyle = {
        fontSize: '42px',
        color: '#667eea',
        marginBottom: '30px',
        textAlign: 'center',
        fontWeight: 'bold',
        borderBottom: '3px solid #667eea',
        paddingBottom: '15px'
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
    };

    const inputStyle = {
        padding: '15px',
        border: '2px solid #e0e0e0',
        borderRadius: '8px',
        fontSize: '16px',
        fontFamily: 'Arial, sans-serif',
        transition: 'all 0.3s ease',
        backgroundColor: '#f9f9f9'
    };

    const inputFocusStyle = {
        ...inputStyle,
        borderColor: '#667eea',
        backgroundColor: '#fff',
        boxShadow: '0 0 0 3px rgba(102, 126, 234, 0.1)'
    };

    const textareaStyle = {
        ...inputStyle,
        resize: 'vertical',
        minHeight: '150px',
        fontFamily: 'Arial, sans-serif'
    };

    const buttonStyle = {
        padding: '15px 40px',
        backgroundColor: '#667eea',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '18px',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 5px 15px rgba(102, 126, 234, 0.4)'
    };

    const successStyle = {
        padding: '20px',
        backgroundColor: '#4caf50',
        color: 'white',
        borderRadius: '8px',
        textAlign: 'center',
        fontSize: '18px',
        marginBottom: '20px',
        animation: 'slideDown 0.5s ease-out'
    };

    return (
        <div style={contactStyle}>
            <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        input:focus, textarea:focus {
          border-color: #667eea !important;
          background-color: #fff !important;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
          outline: none;
        }
        button:hover {
          background-color: #764ba2;
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.6);
          transform: translateY(-2px);
        }
        button:active {
          transform: translateY(0);
        }
      `}</style>
            <div style={containerStyle}>
                {submitted && (
                    <div style={successStyle}>
                        ✓ Thank you! Your message has been sent successfully.
                    </div>
                )}
                <h1 style={titleStyle}>Contact Us</h1>
                <form onSubmit={handleSubmit} style={formStyle}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        style={inputStyle}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        style={textareaStyle}
                        required
                    />
                    <button type="submit" style={buttonStyle}>Send Message</button>
                </form>
            </div>        </div>
    );
}

export default Contact;