import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import AssetGallery from './AssetGallery';
import ItemDetails from './ItemDetails';
import Footer from './Footer';
import HomePage from './HomePage';
import Collections from './Collections';
import Accessories from './Accessories';
import Terms from './Terms';
import Cart from './Cart';
import UserLogin from './UserLogin';
import FA from './FA';
import Ofear from './Ofear';
import ThemeToggle from './ThemeToggle'; // Import the ThemeToggle component

function App() {
  const [showAssetGallery, setShowAssetGallery] = useState(false);

  const handleAssetGalleryToggle = () => {
    setShowAssetGallery(true);
  };

  const handleAssetGalleryToggleTrue = () => {
    setShowAssetGallery(true);
  };

  return (
    <BrowserRouter>
      <div className='Header '>
        <Header />
        <ThemeToggle /> {/* Add the ThemeToggle component here */}
        <Routes>
          <Route path="/" element={<HomePage onClickCallback={handleAssetGalleryToggleTrue} />} />
          <Route path="/collections" element={<Collections onClickCallback={handleAssetGalleryToggleTrue} />} />
          <Route path="/accessories" element={<Accessories onClickCallback={handleAssetGalleryToggle} />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/UserLogin" element={<UserLogin onClickCallback={handleAssetGalleryToggle} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item-details/:index" element={<ItemDetails />} />
        </Routes>
      </div>
      <Footer />
      <FA />
      <div className='justifyCenter'>
        <Ofear />
      </div>
      {showAssetGallery && (
        <div>
          <AssetGallery />
        </div>
      )}
      <UserLogin onClickCallback={handleAssetGalleryToggle} />
    </BrowserRouter>
  );
}

export default App;
