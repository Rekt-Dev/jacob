import React from 'react';
import { Link } from 'react-router-dom';

interface CollectionsProps {
  onClickCallback: () => void;
}

const Collections: React.FC<CollectionsProps> = ({ onClickCallback }) => {
  return (
    <div>
      <Link to="/collections" onClick={onClickCallback}>
        Collections Link
      </Link>
      <div className=" ">
        Collectionssssssssssssssss Page
      </div>
    </div>
  );
};

export default Collections;
