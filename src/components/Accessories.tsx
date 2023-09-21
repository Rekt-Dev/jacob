import React from 'react';
import { Link } from 'react-router-dom';

interface AccessoriesProps {
  onClickCallback: () => void;
}

const Accessories: React.FC<AccessoriesProps> = ({ onClickCallback }) => {
  return (
    <div>
      <Link to="/accessories" onClick={onClickCallback}>
      </Link>
      <div className=" ">
        Accessories Page
      </div>
    </div>
  );
};

export default Accessories;
