import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-intro">
                <h1>Contact</h1>
                <p>
                    I'm currently based in Roosendaal, Netherlands, and I'm able to work across
                    the United States, Mexico, and all countries within the European Union thanks to my 
                    triple citizenship. If you'd like to get in touch, feel free to reach out through 
                    any of the methods below.
                </p>
            </div>

            <div className="contact-grid">
                <a className="contact-card" href="tel: +31634496321">
                    <h3>📞 Phone</h3>
                    <p>+31 6 34 49 63 21</p>
                </a>

                <a className="contact-card" href="mailto:frankcvanris@gmail.com">
                    <h3>✉️ Email</h3>
                    <p>frankcvanris@gmail.com</p>
                </a>

                <a className="contact-card" href="https://www.linkedin.com/in/frankcvanris/" target="_blank">
                    <h3>🔗 LinkedIn</h3>
                    <p>linkedin.com/in/frankcvanris</p>
                </a>

                <a className="contact-card" href="https://github.com/FrankVanris2" target="_blank">
                    <h3>💻 GitHub</h3>
                    <p>github.com/FrankVanris2</p>
                </a>
            </div>
            
            <div className="work-elegibility">
                <strong>Work Eligibility:</strong>
                <p>
                    United States • Mexico • European Union
                </p>
            </div>
        </div>
    );
}

export default Contact;
