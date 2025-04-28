import React from "react";
import MissionImage from "/images/MissionImage1.jpg";
import VisionImage from "/images/VissionImage.jpeg";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const MissionandVission = () => {
  return (
    <>
  <section className="text-[#4D4D4D] py-16 sm:py-20 w-[90%] mx-auto">
  <div className="flex flex-col gap-16 sm:gap-20 px-4 sm:px-6 lg:px-0">
    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-8 w-full">
      {/* Text Section */}
      <div className="flex flex-col md:flex-row gap-10 lg:gap-14 2xl:w-[70%] w-full">
        {/* Mission */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl xl:text-[40px] font-semibold uppercase">
            Our Mission
          </h2>
          <p className="mt-4 sm:mt-6 text-justify text-sm sm:text-base font-normal leading-relaxed">
            At AH Denim, we redefine denim with sustainability, ethical integrity, and innovation.
            Using organic cotton and eco-conscious materials, we minimize waste, reduce our carbon
            footprint, and optimize water & energy efficiency. Our commitment extends beyond
            production—ensuring responsible fashion through fair labor and cutting-edge techniques.
            At AH Denim, we don’t just create denim; we craft a future where style meets sustainability.
          </p>
        </div>

        {/* Vision */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl xl:text-[40px] font-semibold uppercase">
            Our Vision
          </h2>
          <p className="mt-4 sm:mt-6 text-justify text-sm sm:text-base leading-relaxed">
            AH Denim envisions becoming a global leader in manufacturing excellence, setting new
            standards in quality, efficiency, and sustainability. Through innovation and ethical
            stewardship, we drive transformative change—harmonizing fashion with environmental
            responsibility. With precision, sustainability, and cutting-edge craftsmanship, we are
            shaping a future where denim is a symbol of progress and purpose.
          </p>
        </div>
      </div>

      {/* Lottie Animation */}
      <div className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[400px]">
        <DotLottieReact
          src="https://lottie.host/b9758092-40aa-4234-a17d-0af812f39698/5xfNI031bQ.lottie"
          loop
          autoplay
          className="h-[25vh] sm:h-[30vh] md:h-[35vh] lg:h-[40vh] w-full mb-6"
        />
      </div>
    </div>
  </div>
</section>

    </>
  );
};

export default MissionandVission;
