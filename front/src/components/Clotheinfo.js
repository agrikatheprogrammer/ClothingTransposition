import React from 'react'
import CustomCarousel from './CustomCarousel';
import ShowCloths from './ShowCloths';
export default function Clotheinfo({ showLogin, loginStatus, user, isEmployee }) {
  
  const images = [
    {
      imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT25ZLwTwMg5r2PisvnjQUHCLMGFSYztfFLlw&s",
      imgAlt: "Image 1"
    },
    {
      imgURL: "https://www.telegraph.co.uk/content/dam/men/2022/01/12/Main-image_trans_NvBQzQNjv4Bq2oUEflmHZZHjcYuvN_Gr-bVmXC2g6irFbtWDjolSHWg.jpg?imwidth=680",
      imgAlt: "Image 2"
    },
    {
      imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg-6NKPbq04AlHWoLTuBDm4J0hu-hTThbBNA&s",
      imgAlt: "Image 3"
    }
  ];

  return (
    <div>
      <CustomCarousel>
        {images.map((image, index) => (
          <img key={index} src={image.imgURL} alt={image.imgAlt} />
        ))}
      </CustomCarousel>
      <ShowCloths />
    </div>
  );
}
