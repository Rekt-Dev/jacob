import React, { useState, useEffect } from 'react';
import '../styles.css'

import a from '../assets/a.jpg';
import b from '../assets/b.jpg';
import c from '../assets/c.jpg';
import d from '../assets/d.jpg';
import e from '../assets/e.jpg';
import f from '../assets/f.jpg';
import g from '../assets/g.png';
import h from '../assets/h.png';
import i from '../assets/i.png';
import j from '../assets/j.png';
import k from '../assets/k.png';
import l from '../assets/l.png';
import m from '../assets/m.png';

import fallbackImage from '../assets/fallback.jpg';

import './HomePage.css';

// Define the prop type for HomePage
interface HomePageProps {
  onClickCallback: () => void;
}

function HomePage({ onClickCallback }: HomePageProps) {
  const [currentImage, setCurrentImage] = useState(0);

  // Define an array of image URLs
  const imageUrls = [a, b, c, d, e, f, g,h,i,j,k,l,m];

  // Function to handle moving to the next image
  const handleClickNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % imageUrls.length);
  };

  // Function to handle moving to the previous image
  const handleClickPrevious = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? imageUrls.length - 1 : prevImage - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleClickNext();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='  overflowHidden'>
      <button onClick={handleClickPrevious}>Previous</button>
      <img
        src={imageUrls[currentImage]}
        alt={`Image ${currentImage + 1}`}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = fallbackImage; // Use the fallback image on error
        }}
      />
      <button onClick={handleClickNext}>Next</button>
    </div>
  );
}

export default HomePage;
