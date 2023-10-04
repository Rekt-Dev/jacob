import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          {/* Use Link components for navigation */}
          <Link to="/about-us">About Us</Link>&nbsp;|&nbsp;
          <Link to="/contact-us">Contact Us</Link>&nbsp;|&nbsp;
          <Link to="/gift-cards">Gift Cards</Link>&nbsp;|&nbsp;
          <Link to="/sponsored-pros">Sponsored Pros</Link>
        </div>
        <div className="footer-section">
          <Link to="/terms-and-conditions">Terms & Conditions</Link>&nbsp;|&nbsp;
          <Link to="/privacy-policy">Privacy Policy</Link>&nbsp;|&nbsp;
          <Link to="/disclaimer">Disclaimer</Link>
        </div>
        <div className="footer-section">
          <Link to="/faq">FAQ</Link>&nbsp;|&nbsp;
          <Link to="/customer-support">Customer Support</Link>
        </div>
      </div>
      <div className="footer-bottom justifyCenter smaller-text">
        
      </div>
    </footer>
  );
};

export default Footer;
 