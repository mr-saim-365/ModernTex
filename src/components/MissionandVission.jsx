import React from "react";
import MissionImage from "/images/MissionImage1.jpg";
import VisionImage from "/images/VissionImage.jpeg";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const MissionandVission = () => {
  return (
    <>
      <section className="text-[#4D4D4D] py-20">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col lg:flex-row items-center  md:gap-5 lg:gap-0 px-4 lg:px-5 2xl:px-8  w-full ">
            <div className="flex flex-col md:flex-row gap-8 2xl:gap-10 2xl:w-[70%]">
              <div className="w-full lg:w-[40%] ">
                <h2 className="text-[26px] sm:text-3xl 2xl:text-[40px] font-semibold uppercase ">
                  Our Mission
                </h2>
                <p className="mt-6 text-justify font-normal w-full">
                  At AH Denim, we redefine denim with sustainability, ethical
                  integrity, and innovation. Using organic cotton and
                  eco-conscious materials, we minimize waste, reduce our carbon
                  footprint, and optimize water & energy efficiency. Our
                  commitment extends beyond production—ensuring responsible
                  fashion through fair labor and cutting-edge techniques. At AH
                  Denim, we don’t just create denim; we craft a future where
                  style meets sustainability.
                </p>
              </div>

              <div className="w-full  lg:w-[40%] ">
                <h2 className="text-[26px] sm:text-3xl 2xl:text-[40px] uppercase font-semibold ">
                  Our Vision
                </h2>
                <p className="mt-6 text-justify w-full">
                  AH Denim envisions becoming a global leader in manufacturing
                  excellence, setting new standards in quality, efficiency, and
                  sustainability. Through innovation and ethical stewardship, we
                  drive transformative change—harmonizing fashion with
                  environmental responsibility. With precision, sustainability,
                  and cutting-edge craftsmanship, we are shaping a future where
                  denim is a symbol of progress and purpose.
                </p>
              </div>
            </div>

            <div className="md:w-[250px] lg:w-[400px] w-[250px]">
              <DotLottieReact
                src="https://lottie.host/b9758092-40aa-4234-a17d-0af812f39698/5xfNI031bQ.lottie"
                loop
                autoplay
                className=" h-[30vh] lg:h-[40vh] w-full mb-6"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionandVission;
