import React from 'react';
import { Link } from 'react-router-dom';
import pants from '../assets/pants.png';

const Item = () => {
  return (
    <div>
    <Link to="/item-details" style={{ textDecoration: 'none' }}>
  <img
    src={pants}
    alt="JacobSkatePants"
    style={{
      width: 'auto',
      height: 'auto',
      transition: 'background-color 0.2s ease', // Add a transition for a smoother effect
    }}
  />
</Link>

    </div>
  );
};

export default Item;
