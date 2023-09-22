import React from 'react';
import { Link } from 'react-router-dom';

interface CollectionsProps {
  onClickCallback: () => void;
}

const Collections: React.FC<CollectionsProps> = ({ onClickCallback }) => {
  return (
    <div>
     
      <div className=" ">
        Collections Page
      </div>
    </div>
  );
};

export default Collections;
