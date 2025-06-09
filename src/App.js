import React from 'react'
import BackgroundImage from './components/background';
import Navbar from './components/navbar';
import Hero from './components/hero';
import WelcomeSection from './components/welcomeSection';
import JoinUs from './components/joinUs';
import Team from './components/rnnTeam';
import Contact from './components/contact';
import Footer from './components/footer';

const App = () => {
  return (
    <div className="w-full">
      <BackgroundImage>
        <Navbar/>
        <Hero/>
      </BackgroundImage>

      <div className=" w-full bg-[#272829] px-12 py-8">
        <WelcomeSection/>
        <JoinUs/>
        <Team/>
      </div>

      <div className="w-full">
        <Contact/>
      </div>

      <div className=" w-full bg-[#272829] px-12 py-8">
        <Footer/>
      </div>
    </div>
  )
}


export default App;
