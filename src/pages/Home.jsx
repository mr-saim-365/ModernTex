import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import MissionandVission from "../components/MissionandVission";
import Whoarewe from "../components/Whoarewe";
import Hero from "../components/Hero";
import DivisionsSection from "../components/Divisions";
import OurClients from "../components/OurClients";
import DenimImage from "../components/DenimImage";
import OurProcess from "../components/OurProcess";
import DivisionsContent from "./DivisionsContent";
import AboutUs from "../components/AboutUs";

const Home = () => {
  return (
    <>
      <div className="min-h-screen w-full">
        <Navbar />
        <Hero />
        <Whoarewe />
        <OurProcess />
        {/* <DenimImage/> */}
        <DivisionsContent />
        {/* <MissionandVission /> */}
        {/* <DivisionsSection /> */}
        <AboutUs />
        <OurClients />
        <Footer />
      </div>
    </>
  );
};

export default Home;
