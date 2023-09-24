import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Remove BrowserRouter
import Collections from './Collections';
import Accessories from './Accessories';
import Hardgoods from './Hardgoods';
import HomePage from './HomePage';
import ItemDetails from './ItemDetails';
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
import Insta from './Insta';
import Footer from './Footer';

function App() {
  const [showAssetGallery, setShowAssetGallery] = useState(false);

  const handleAssetGalleryToggle = () => {
    setShowAssetGallery(true);
  };

  const handleAssetGalleryToggleTrue = () => {
    setShowAssetGallery(true);
  }

  return (
      <>
        <div className='Header '>
        <Header />
          <Routes>
            <Route path="/" element={<HomePage onClickCallback={handleAssetGalleryToggleTrue}/>} />

            <Route
              path="/collections"
              element={<Collections onClickCallback={handleAssetGalleryToggleTrue} />}
            />
            <Route
              path="/accessories"
              element={<Accessories onClickCallback={handleAssetGalleryToggle} />}
            />
            <Route
              path="/hardgoods"
              element={<Hardgoods onClickCallback={handleAssetGalleryToggle} />}
            />
            <Route path="/UserLogin" element={<UserLogin onClickCallback={handleAssetGalleryToggle} />} />
            <Route path="/item-details" element={<ItemDetails onClickCallback={handleAssetGalleryToggle} />} />
          </Routes>
        </div>
        <Footer />

        {showAssetGallery && (
          <div>
            <AssetGallery />
          </div>
          
        )}
       
        <UserLogin onClickCallback={handleAssetGalleryToggle} />
      </>
  );
}

export default App;
