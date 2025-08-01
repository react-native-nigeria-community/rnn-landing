import React, { useState, useEffect } from 'react';
import rnnLogo from '../assets/rnnLogo.svg';
import hamburgerIcon from '../assets/menuIcon.svg';
import closeIcon from '../assets/closeIcon.svg';

const SLACK_INVITE_URL = 'https://join.slack.com/t/reactnativenigeria/shared_invite/zt-c8od4rkl-xUOp01GMiKOt_7_mFvyOzA';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  const navLinks = (
    <>
      <li className="cursor-pointer">
        <a href="#whoWeAre" className="hover:text-[#5FDBFC] hover:font-bold transition-colors">Who We Are</a>
      </li>
      <li className="cursor-pointer">
        <a href="#events" className="hover:text-[#5FDBFC] hover:font-bold transition-colors">Events</a>
      </li>
      <li className="cursor-pointer">
        <a href="#programs" className="hover:text-[#5FDBFC] hover:font-bold transition-colors">Our Programs</a>
      </li>
      <li className="cursor-pointer">
        <a href="#getInvolved" className="hover:text-[#5FDBFC] hover:font-bold transition-colors">Get Involved</a>
      </li>
      {/* <li className="cursor-pointer">
        <a href="#donate" className="hover:text-[#5FDBFC] hover:font-bold transition-colors">Donate</a>
      </li> */}
    </>
  );

  return (
    <nav role="navigation" className="px-4 sm:px-8 md:px-12 lg:px-[51px] py-4 sm:py-6 lg:py-8 flex justify-between items-center bg-transparent text-white relative">
      <img
        src={rnnLogo}
        alt="React Native Nigeria"
        className="sm:w-10 sm:h-10 lg:w-12 lg:h-12 cursor-pointer"
      />

      <ul className="hidden font-[300] lg:flex gap-6 xl:gap-8 text-sm lg:text-base xl:text-lg items-center">
        {navLinks}
      </ul>

      <div className="hidden lg:flex bg-white py-2 px-4 xl:px-5 items-center gap-2 rounded-lg hover:bg-[#DADADA] cursor-pointer transition-colors">
        <a
          href={SLACK_INVITE_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join React Native Nigeria Slack community"
          className="text-black text-sm lg:text-base hover:text-[#5FDBFC] transition-colors"
        >
          Join us
        </a>
      </div>

      <div className="lg:hidden">
        <img
          src={isOpen ? closeIcon : hamburgerIcon}
          alt={isOpen ? "Close menu" : "Open menu"}
          className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setIsOpen(!isOpen);
          }}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        />
      </div>

      {isOpen && (
  <div className="absolute top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center gap-6 px-4 sm:px-6 py-8 sm:py-10 z-50 transition duration-300">
    <div className="flex justify-between items-center w-full">
      <img src={rnnLogo} alt="React Native Nigeria Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
      <img
        src={closeIcon}
        alt="Close menu"
        className="w-6 h-6 sm:w-7 sm:h-7 cursor-pointer"
        onClick={() => setIsOpen(false)}
      />
    </div>

    {/* Optional tagline */}
    <p className="text-sm sm:text-base text-center font-light leading-snug mt-4 max-w-xs">
      Empowering React Native developers across Nigeria and beyond.
    </p>

    <ul className="flex flex-col gap-5 sm:gap-6 mt-6 sm:mt-8 text-lg sm:text-xl items-center text-center font-medium">
      <li><a href="#whoWeAre" className="hover:text-[#5FDBFC] transition-colors">Who we are</a></li>
      <li><a href="#events" className="hover:text-[#5FDBFC] transition-colors">Events</a></li>
      <li><a href="#programs" className="hover:text-[#5FDBFC] transition-colors">Our programs</a></li>
      <li><a href="#getInvolved" className="hover:text-[#5FDBFC] transition-colors">Get involved</a></li>
      {/* <li><a href="#donate" className="hover:text-[#5FDBFC] transition-colors">Donate</a></li> */}
    </ul>

    <div className="bg-white mt-6 sm:mt-8 py-2 sm:py-3 px-4 sm:px-5 flex items-center gap-2 rounded-lg hover:bg-[#DADADA] cursor-pointer transition-colors">
      <a
        href={SLACK_INVITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join the React Native Nigeria Slack community"
        className="text-black text-sm sm:text-base font-medium hover:text-[#5FDBFC] transition-colors"
      >
        Join our Slack
      </a>
    </div>
  </div>
)}

    </nav>
  );
};

export default Navbar;
