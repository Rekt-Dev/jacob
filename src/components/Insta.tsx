import React, { useEffect, useState } from 'react';

interface Photo {
  url: string;
  link: string; // Add a 'link' property to hold the real photo URL
}

interface CarouselProps {
  photos: Photo[];
}

const Carousel: React.FC<CarouselProps> = ({ photos }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === photos.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Change photo every 3 seconds (adjust as needed)

    return () => {
      clearInterval(interval); // Cleanup when the component unmounts
    };
  }, [photos]);

  return (
    <div className="carousel">
      {photos.map((photo, index) => (
        <a key={index} href={photo.link} target="_blank" rel="noopener noreferrer">
          <img
            src={photo.url}
            alt={`Instagram Photo ${index + 1}`}
            className={index === currentIndex ? 'active' : ''}
          />
        </a>
      ))}
    </div>
  );
};

const InstagramCarousel: React.FC = () => {
  // Dummy data to simulate API response
  const dummyPhotos: Photo[] = [
    { url: 'https://example.com/photo1.jpg', link: 'https://example.com/real-photo1.jpg' },
    { url: 'https://example.com/photo2.jpg', link: 'https://example.com/real-photo2.jpg' },
    { url: 'https://example.com/photo3.jpg', link: 'https://example.com/real-photo3.jpg' },
    // Add more photos here
  ];

  return <Carousel photos={dummyPhotos} />;
};

export default InstagramCarousel;
