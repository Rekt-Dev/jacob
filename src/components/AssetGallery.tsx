import bb1 from '../assets/bigboy theft/bb1.png'
import bb2 from '../assets/bigboy theft/bb2.png'
import bb3 from '../assets/bigboy theft/bb3.png'
import bb4 from '../assets/bigboy theft/bb4.png'
import bb5 from '../assets/bigboy theft/bb5.png'
import bb6 from '../assets/bigboy theft/bb6.png'
import bb7 from '../assets/bigboy theft/bb7.png'
import bb8 from '../assets/bigboy theft/bb8.png'
import bb9 from '../assets/bigboy theft/bb9.png'
import bb10 from '../assets/bigboy theft/bb10.png'
import bb11 from '../assets/bigboy theft/bb11.png'
import bb12 from '../assets/bigboy theft/bb12.png'  
import bb13 from '../assets/bigboy theft/bb13.png'
import bb14 from '../assets/bigboy theft/bb14.png'
import bb15 from '../assets/bigboy theft/bb15.png'
import bb16 from '../assets/bigboy theft/bb16.png'
import bb17 from '../assets/bigboy theft/bb17.png'
import bb18 from '../assets/bigboy theft/bb18.png'
import bb19 from '../assets/bigboy theft/bb19.png'
import bb20 from '../assets/bigboy theft/bb20.png'

export default function AssetGallery() {

    const imagesArray = [bb1,bb2,bb3,bb4,bb5,bb6,bb7,bb8,bb9,bb10,bb11,bb12,bb13,bb14,bb15,bb16,bb17,bb18,bb19,bb20];

    return (
          <div className='Header '>
          {imagesArray.map((image, index) => (
            <img           style={{ width: '20rem', height: '20rem' }} // Set the desired width and height
            key={index} src={image} alt={`Image ${index}`} />
          ))}
        </div>
    );
  }