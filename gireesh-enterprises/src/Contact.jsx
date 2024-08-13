import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Get in Touch</h1>
      <p>Have a question or want to learn more about our services? We'd love to hear from you!</p>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <ul>
          <li>
            <i className="fas fa-phone"></i>
            <span>Phone: 8808564141, 9260961496</span>
          </li>
          <li>
            <i className="fas fa-envelope"></i>
            <span>Email: gireeshyadav035@gmail.com</span>
          </li>
          <li>
            <i className="fas fa-map-marker-alt"></i>
            <span>Address: Davi Nagar, Nawabganj - 209859</span>
          </li>
        </ul>
      </div>

      <div className="social-media">
        <h2>Follow Us</h2>
        <ul>
          <li>
            <a href="https://www.facebook.com/share/rd9eJvAKeb6Eosmn/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
                 Facebook
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/aahirgireeshyadav4169?igsh=NXcwYW1hcTZkdTI1" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
                Instagram
            </a>
          </li>
          {/* Add more social media links here */}
        </ul>
      </div>

    </div>
  );
};

export default Contact;