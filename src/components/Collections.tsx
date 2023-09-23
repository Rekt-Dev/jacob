import React from 'react';

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
      <h1>Collections Page</h1>
      <p>This is the Collections page content.</p>
      <button onClick={handleButtonClick}>Show Asset Gallery</button>
    </div>
  );
};

export default Collections;
