import React from 'react';
import AssetGallery from './AssetGallery';

interface CollectionsProps {
  onClickCallback: () => void;
}

const Collections: React.FC<CollectionsProps> = ({ onClickCallback }) => {
  // Function to handle the button click and trigger onClickCallback
  const handleButtonClick = () => {
    if (onClickCallback) {
      onClickCallback(); // Call the callback function to show the AssetGallery
    }
  };

  return (
    <div>
      <AssetGallery />
 
    </div>
  );
};

export default Collections;
