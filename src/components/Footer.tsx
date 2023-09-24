import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container" style={{ textAlign: 'center' }}>
        <div className="footer-section">
          <a href="/about-us">About Us</a>&nbsp;|&nbsp;
          <a href="/contact-us">Contact Us</a>&nbsp;|&nbsp;
          <a href="/gift-cards">Gift Cards</a>&nbsp;|&nbsp;
          <a href="/sponsored-pros">Sponsored Pros</a>
        </div>
        <div className="footer-section">
          <a href="/terms-and-conditions">Terms & Conditions</a>&nbsp;|&nbsp;
          <a href="/privacy-policy">Privacy Policy</a>&nbsp;|&nbsp;
          <a href="/disclaimer">Disclaimer</a>
        </div>
        <div className="footer-section">
          <a href="/faq">FAQ</a>&nbsp;|&nbsp;
          <a href="/customer-support">Customer Support</a>
        </div>
      </div>
      <div className="footer-bottom justifyCenter"> {/* Add justifyCenter class */}
        <p>&copy; {new Date().getFullYear()} 0Fear Designs. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
