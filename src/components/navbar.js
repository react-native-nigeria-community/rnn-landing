import React, { useState } from 'react';
import rnnLogo from '../assets/rnnLogo.svg';
import hamburgerIcon from '../assets/menuIcon.svg'; 
import closeIcon from '../assets/closeIcon.svg';  
import en from '../config/language/en';       

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <li><a href="whoWeAre" className="hover:text-[#5FDBFC] transition-colors">{en.NAVBAR.whoWeAre}</a></li>
      <li><a href="events" className="hover:text-[#5FDBFC] transition-colors">{en.NAVBAR.events}</a></li>
      <li><a href="programs" className="hover:text-[#5FDBFC] transition-colors">{en.NAVBAR.programs}</a></li>
      <li><a href="getInvolved" className="hover:text-[#5FDBFC] transition-colors">{en.NAVBAR.getInvolved}</a></li>
      <li><a href="donate" className="hover:text-[#5FDBFC] transition-colors">{en.NAVBAR.donate}</a></li>
    </>
  );

  return (
    <nav className="px-4 sm:px-8 md:px-12 lg:px-[51px] py-4 sm:py-6 lg:py-8 flex justify-between items-center bg-transparent text-white relative">
      <img src={rnnLogo} alt="React Native Nigeria" className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 cursor-pointer" />

      <ul className="hidden lg:flex gap-6 xl:gap-8 text-sm lg:text-base xl:text-lg items-center">
        {navLinks}
      </ul>

      <div className="hidden lg:flex bg-white py-2 px-4 xl:px-5 items-center gap-2 rounded-lg hover:bg-[#DADADA] cursor-pointer transition-colors">
        <a href="https://join.slack.com/t/reactnativenigeria/shared_invite/zt-c8od4rkl-xUOp01GMiKOt_7_mFvyOzA"  
           target="_blank" 
           rel="noopener noreferrer" 
           className="text-black text-sm lg:text-base">
          {en.NAVBAR.button}
        </a>
        
      </div>

      <div className="lg:hidden">
        <img 
          src={isOpen ? closeIcon : hamburgerIcon} 
          alt={isOpen ? "Close menu" : "Open menu"} 
          className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer" 
          onClick={() => setIsOpen(!isOpen)} 
        />
      </div>

    
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black text-white flex flex-col gap-6 px-4 sm:px-6 py-8 sm:py-10 z-50">
          <div className="flex justify-between items-center">
            <img src={rnnLogo} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
            <img 
              src={closeIcon} 
              alt="Close menu" 
              className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer" 
              onClick={() => setIsOpen(false)} 
            />
          </div>

          <ul className="flex flex-col gap-4 sm:gap-6 mt-6 sm:mt-8 text-base sm:text-lg">
            {navLinks}
          </ul>

          <div className="bg-white mt-6 sm:mt-8 py-2 sm:py-3 px-4 sm:px-5 flex items-center gap-2 rounded-lg hover:bg-[#DADADA] w-fit cursor-pointer transition-colors">
            <a href="https://join.slack.com/t/reactnativenigeria/shared_invite/zt-c8od4rkl-xUOp01GMiKOt_7_mFvyOzA" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-black text-sm sm:text-base">
              {en.NAVBAR.button}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;