import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/JacobLogo.png';

const Logo = () => {
  return (
    <div>
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          style={{ width: '18rem', height: '15rem', cursor: 'zoom-in' }}
        />
      </Link>
    </div>
  );
};

export default Logo;
