import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube, faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

const SocialMediaToolbar: React.FC = () => {
  return (
    <div className="social-media-toolbar justifyCenter social-media-icon">
      <a
        href="https://www.facebook.com/jacoblegacy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      
      <a
        href="https://wa.me/+972525224491        "
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} size="2x" bounce/>
      </a>
      <a
        href="https://www.instagram.com/jacoblegacy_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" shake />
      </a>
      <a
        href="https://www.linkedin.com/in/jacoblegacy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://www.youtube.com/jacoblegacy"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
    </div>
  );
};

export default SocialMediaToolbar;
