import React, { useState } from 'react';
import rnnLogo from '../assets/rnnLogo.svg';
import hamburgerIcon from '../assets/menuIcon.svg'; // your Figma hamburger icon
import closeIcon from '../assets/closeIcon.svg';         // your Figma close icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <li><a href="whoWeAre" className="hover:text-[#5FDBFC]">Who We Are</a></li>
      <li><a href="events" className="hover:text-[#5FDBFC]">Events</a></li>
      <li><a href="programs" className="hover:text-[#5FDBFC]">Our Programs</a></li>
      <li><a href="getInvolved" className="hover:text-[#5FDBFC]">Get Involved</a></li>
      <li><a href="donate" className="hover:text-[#5FDBFC]">Donate</a></li>
    </>
  );

  return (
    <nav className="w-full px-4 py-4 flex justify-between items-center bg-transparent text-white relative">
      <img src={rnnLogo} alt="React Native Nigeria" className="w-12 h-12 cursor-pointer" />

      <ul className="hidden md:flex gap-8 text-[16px] items-center">
        {navLinks}
      </ul>

      
      <div className="hidden md:flex bg-white py-2 px-5 items-center gap-2 rounded-lg hover:bg-[#DADADA] cursor-pointer">
        <a href="https://join.slack.com/t/reactnativenigeria/shared_invite/zt-c8od4rkl-xUOp01GMiKOt_7_mFvyOzA"  target="_blank" rel="noopener noreferrer" className="text-black text-[16px]">Join us</a>
        <img src={rnnLogo} alt="Join Us" className="w-6 h-6" />
      </div>

      
      <div className="md:hidden">
        <img 
          src={isOpen ? closeIcon : hamburgerIcon} 
          alt={isOpen ? "Close menu" : "Open menu"} 
          className="w-7 h-7 cursor-pointer" 
          onClick={() => setIsOpen(!isOpen)} 
        />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-black text-white flex flex-col gap-6 px-6 py-10 z-50">
          <div className="flex justify-between items-center">
            <img src={rnnLogo} alt="Logo" className="w-10 h-10" />
            <img 
              src={closeIcon} 
              alt="Close menu" 
              className="w-7 h-7 cursor-pointer" 
              onClick={() => setIsOpen(false)} 
            />
          </div>

          <ul className="flex flex-col gap-6 mt-8 text-[18px]">
            {navLinks}
          </ul>

          <div className="bg-white mt-8 py-2 px-5 flex items-center gap-2 rounded-lg hover:bg-[#DADADA] w-fit cursor-pointer">
            <a href="https://join.slack.com/t/reactnativenigeria/shared_invite/zt-c8od4rkl-xUOp01GMiKOt_7_mFvyOzA" target="_blank" rel="noopener noreferrer" className="text-black text-[16px]">Join us</a>
            <img src={rnnLogo} alt="Join Us" className="w-6 h-6" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
