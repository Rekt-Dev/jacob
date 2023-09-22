import React from 'react';
import { Link } from 'react-router-dom';

interface HardgoodsProps {
  onClickCallback: () => void;
}

const Hardgoods: React.FC<HardgoodsProps> = ({ onClickCallback }) => {
  return (
    <div>
  
      <div className=" ">
        Hardgoods Page
      </div>
    </div>
  );
};

export default Hardgoods;
