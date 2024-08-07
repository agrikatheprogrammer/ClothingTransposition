import React from 'react'
import CustomCarousel from './CustomCarousel';
import PictureList from './PictureList';
import '../stylings/Clotheinfo.css';
export default function Clotheinfo({ showLogin, loginStatus, user, isEmployee }) {
  
  const images = [
    {
      imgURL: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imgAlt: "Image 1"
    },
    {
      imgURL: "https://www.telegraph.co.uk/content/dam/men/2022/01/12/Main-image_trans_NvBQzQNjv4Bq2oUEflmHZZHjcYuvN_Gr-bVmXC2g6irFbtWDjolSHWg.jpg?imwidth=680",
      imgAlt: "Image 2"
    },
    {
      imgURL: "https://images.pexels.com/photos/8483487/pexels-photo-8483487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imgAlt: "Image 3"
    }
  ];

  return (
    <>      
    
    <div>    
    <CustomCarousel>
    {images.map((image, index) => (
      <img key={index} src={image.imgURL} alt={image.imgAlt} />
    ))}
  </CustomCarousel></div>

    <div>
<div className='clothings'>
<PictureList />
</div>
    </div>
    </>
  );
}
