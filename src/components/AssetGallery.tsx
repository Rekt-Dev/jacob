import bb1 from '../assets/bb/bb1.png';
import bb2 from '../assets/bb/bb2.png';
import bb3 from '../assets/bb/bb3.png';
import bb4 from '../assets/bb/bb4.png'; 
import bb5 from '../assets/bb/bb5.png'; 
import bb6 from '../assets/bb/bb6.png'; 
import bb7 from '../assets/bb/bb7.png';
import bb8 from '../assets/bb/bb8.png'; 
import bb9 from '../assets/bb/bb9.png'; 
import bb10 from '../assets/bb/bb10.png';   

import bb11 from '../assets/bb/bb11.png';   

import bb12 from '../assets/bb/bb12.png';   

import bb13 from '../assets/bb/bb13.png';   

import bb14 from '../assets/bb/bb14.png';   

import bb15 from '../assets/bb/bb15.png';   

import bb16 from '../assets/bb/bb16.png';   
        import bb17 from '../assets/bb/bb17.png';
        import bb18 from '../assets/bb/bb18.png';
        import bb19 from '../assets/bb/bb19.png';
        import bb20 from '../assets/bb/bb20.png';
        

export default function AssetGallery() {

    const imagesArray = [bb1,bb2,bb3,bb4,bb5,bb6,bb7,bb8,bb9,bb10,bb11,bb12,bb13,bb14,bb15,bb16,bb17,bb18,bb19,bb20];

    return (
          <div className='Header '>
          {imagesArray.map((image, index) => (
            <img           style={{ width: '20rem', height: '20rem' }} 
            key={index} src={image} alt={`Image ${index}`} />
          ))}
        </div>
    );
  }