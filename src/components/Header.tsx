import React, { useState } from 'react';
import SiteMenu from './SiteMenu';
import UserMenu from './UserMenu';
import Logo from './Logo';

const Header: React.FC = () => {
  const [showAssetGallery, setShowAssetGallery] = useState(false);

  // Function to handle the onClick event and set showAssetGallery to true
  const handleAssetGalleryToggle = () => {
    console.log('Asset gallery toggled'); // Add this line to log when the function is called
    setShowAssetGallery(true);
  };

  return (
    <div className="Header ">
      <UserMenu />
      <Logo />
      {/* Pass the handleAssetGalleryToggle function as onClickCallback */}
      <SiteMenu onClickCallback={handleAssetGalleryToggle} />
    </div>
  );
};

export default Header;
