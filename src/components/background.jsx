import React from 'react';
import backgroundImage from '../assets/rnnBgImg.png';

const BackgroundImage = ({ children, height = '100vh' }) => {
  return (
    <div 
      className="w-full contrast-85 bg-no-repeat bg-center bg-cover relative"  
      style={{
        backgroundImage: `url(${backgroundImage})`,
        minHeight: height,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BackgroundImage;
