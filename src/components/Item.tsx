import React from 'react';
import { Link } from 'react-router-dom';
import pants from '../assets/pants.png';

const Item = () => {
  return (
    <div>
      <Link to="/item-details">
        <img src={pants} alt="pants" style={{ width: 'auto', height: 'auto' }} />
      </Link>
    </div>
  );
};

export default Item;
