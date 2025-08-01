import React from "react";
import BackgroundImage from "./components/background";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import WelcomeSection from "./components/welcomeSection";
import JoinUs from "./components/joinUs";
import Team from "./components/rnnTeam";
import Contact from "./components/contact";
import Footer from "./components/footer";

const Home = () => {
  return (
    <div>
      <BackgroundImage>
        <Navbar />
        <Hero />
      </BackgroundImage>

      <div className="">
        <WelcomeSection />
        <JoinUs />
        <Team />
      </div>

      <div className="">
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
