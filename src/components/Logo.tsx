import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/JacobLogo.png';

const Logo = () => {
  return (
    <div className='container'>
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          style={{ width: '18rem', height: '15rem', cursor: 'pointer' }}
        />
      </Link>
    </div>
  );
};

export default Logo;
