import React, { useState } from 'react';



function HomePage() {
    const [currentImage, setCurrentImage] = useState(0);
  
    // Array of image URLs
    const imageUrls = [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
      // Add more image URLs as needed
    ];
  
    const handleClickNext = () => {
      // Increment the current image index and loop back to the first image
      setCurrentImage((prevImage) => (prevImage + 1) % imageUrls.length);
    };
  
    const handleClickPrevious = () => {
      // Decrement the current image index and loop to the last image if it's negative
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
        />
        <button onClick={handleClickNext}>Next</button>
      </div>
    );
  }
  
  export default HomePage;
  