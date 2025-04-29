import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import MissionandVission from "../components/MissionandVission";
import Whoarewe from "../components/Whoarewe";
import Hero from "../components/Hero";
import DivisionsSection from "../components/Divisions";
import OurClients from "../components/OurClients";

const Home = () => {
  return (
    <>
      <div className=" h-screen">
        <Navbar />
 
        <Hero />
     
      
        <Whoarewe />
        
        <MissionandVission />
        <DivisionsSection/>
        <OurClients/>
        <Footer />
      </div>
 
    </>
  );
};

export default Home;
