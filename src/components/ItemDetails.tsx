import React from 'react';
import { Link } from 'react-router-dom';

interface ItemDetailsProps {
  onClickCallback: () => void;
}


const ItemDetails: React.FC<ItemDetailsProps> = ({ onClickCallback }) => {
  return (
    <div>
      <Link to="/ItemDetails" onClick={onClickCallback}>
        ItemDetails Link
      </Link>
      <div className=" ">
        ItemDetailssssssssssssssss Page
      </div>
    </div>
  );
};

export default ItemDetails;
