import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Collections from './Collections';
import Accessories from './Accesories'; // Correct the import name
import Hardgoods from './Hardgoods';
import '../App.css';
import Cart from './Cart';
import Currency from './Currency';
import User from './User';
import UserMenu from './UserMenu';
import Item from './Item';
import '../styles.css';
import Header from './Header';
import AssetGallery from './AssetGallery';
import UserLogin from './UserLogin';

function App() {
  const [showAssetGallery, setShowAssetGallery] = useState(true);

  const handleAssetGalleryToggle = () => {
    setShowAssetGallery(false);
  };

  return (
    <Router>
      <>
        <div className='Header '>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/collections"
              element={<Collections onClickCallback={handleAssetGalleryToggle} />} // Pass the callback
            />
            <Route
              path="/accessories"
              element={<Accessories onClickCallback={handleAssetGalleryToggle} />} // Pass the callback
            />
            <Route
              path="/hardgoods"
              element={<Hardgoods onClickCallback={handleAssetGalleryToggle} />} // Pass the callback
            />
            <Route path="/UserLogin" element={<UserLogin onClickCallback={handleAssetGalleryToggle} />} /> {/* Pass the callback */}
          </Routes>
        </div>
        {showAssetGallery && (
          <div>
            <AssetGallery />
          </div>
        )}
        <div className=' flex-container  '>
          {/* Additional content for your app */}
        </div>
        <UserLogin onClickCallback={handleAssetGalleryToggle} /> {/* Pass the callback */}
      </>
    </Router>
  );
}

// Define a component for the home page
function Home() {
  return <div>Home Page</div>;
}

export default App;
