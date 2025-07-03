import React, { useState } from 'react';
import rnnLogo from '../assets/rnnLogo.svg';
import hamburgerIcon from '../assets/menuIcon.svg';
import closeIcon from '../assets/closeIcon.svg';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <section >
      <div className="flex items-center justify-between  md:justify-between px-6 py-4 xl:ml-8">
        <img src={rnnLogo} className="w-15" alt="logo" />

        
        <div className="xl:hidden">
          <button onClick={toggleMenu}>
            <img src={menuOpen ? closeIcon : hamburgerIcon} alt="menu" className="w-8 h-8" />
          </button>
        </div>

        
        <ul className="hidden xl:flex items-center gap-6 text-white">
          <li className="hover:font-semibold hover:text-[#5FDBFC] cursor-pointer lg:ml-20">Who we are</li>
          <li className="hover:font-semibold hover:text-[#5FDBFC] cursor-pointer lg:ml-10">Events</li>
          <li className="hover:font-semibold hover:text-[#5FDBFC] cursor-pointer lg:ml-10">Our Programs</li>
          <li className="hover:font-semibold hover:text-[#5FDBFC] cursor-pointer lg:ml-10">Get Involved</li>
          <li className="hover:font-semibold hover:text-[#5FDBFC] cursor-pointer ">Donate</li>
          <li className='lg:ml-122'>
            <a
              href="https://join.slack.com/t/reactnativenigeria/shared_invite/zt-c8od4rkl-xUOp01GMiKOt_7_mFvyOzA"
              className="px-5 py-2 bg-white text-black rounded-lg hover:bg-[#DADADA] transition-colors"
            >
              Join Us
            </a>
          </li>
        </ul>
      </div>


      {menuOpen && (
        <ul className="lg:hidden flex flex-col items-start px-6 pb-4 text-white gap-4 animate-slide-in">
          <li className="hover:font-semibold hover:text-[#5FDBFC] cursor-pointer">Who we are</li>
          <li className="hover:font-semibold hover:text-[#5FDBFC] cursor-pointer">Events</li>
          <li className="hover:font-semibold hover:text-[#5FDBFC] cursor-pointer">Our Programs</li>
          <li className="hover:font-semibold hover:text-[#5FDBFC] cursor-pointer">Get Involved</li>
          <li className="hover:font-semibold hover:text-[#5FDBFC] cursor-pointer">Donate</li>
          <li>
            <a
              href="https://join.slack.com/t/reactnativenigeria/shared_invite/zt-c8od4rkl-xUOp01GMiKOt_7_mFvyOzA"
              className="px-5 py-2 bg-white text-black rounded-lg hover:bg-[#DADADA] transition-colors"
            >
              Join Us
            </a>
          </li>
        </ul>
      )}
    </section>
  );
}

export default Navbar;
