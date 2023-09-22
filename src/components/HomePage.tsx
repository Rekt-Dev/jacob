import React, { useState } from 'react';
import a from '../assets/a.jpg';
import b from '../assets/b.jpg';
import c from '../assets/c.jpg';
import d from '../assets/d.jpg';
import e from '../assets/e.jpg';
import f from '../assets/f.jpg';
import fallbackImage from '../assets/fallback.jpg';
import './HomePage.css';

interface HomePageProps {
  onClickCallback: () => void;
}

function HomePage({ onClickCallback }: HomePageProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const imageUrls = [a, b, c, d, e, f];

  const handleClickNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % imageUrls.length);
  };

  const handleClickPrevious = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? imageUrls.length - 1 : prevImage - 1
    );
  };

  return (
    <div>
      <button onClick={handleClickPrevious}>Previous</button>
      <img
        src={imageUrls[currentImage]}
        alt={`Image ${currentImage + 1}`}
        onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
          const target = e.target as HTMLImageElement;
          target.src = fallbackImage;
        }}
      />
      <button onClick={handleClickNext}>Next</button>
    </div>
  );
}

export default HomePage;
