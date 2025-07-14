import React, { Children } from 'react';
import  backgroundImage from '../assets/rnnBgImg.png';

const BackgroundImage = ({children}) => {
  return (
    <div 
        className="w-full contrast-85 min-h-screen bg-no-repeat bg-center bg-cover"  
        style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div className="relative z-10">
            {children}
        </div>
    </div>
  )
}

export default BackgroundImage;
