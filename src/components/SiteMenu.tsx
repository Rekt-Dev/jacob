import React from 'react';
import { Link } from 'react-router-dom';

interface SiteMenuProps {
  onClickCallback: (value: boolean) => void;
}

const SiteMenu: React.FC<SiteMenuProps> = ({ onClickCallback }) => {
  const handleItemClick = () => {
    console.log('Menu item clicked'); // Add this line

    if (onClickCallback) {
      onClickCallback(false); // Set showAssetGallery to true
    }
  };

  return (
    <div>
      <nav className="menu">
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="/collections" onClick={handleItemClick}>
              Collections
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/accessories" onClick={handleItemClick}>
              Accessories
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SiteMenu;
