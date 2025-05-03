import React from "react";
import OurWorkImage from "/images/OurWork.jpg";

const Whoarewe = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row md:gap-[60px] gap-10 lg:px-0 px-3 py-16 md:justify-between w-full lg:w-[90%] mx-auto">
        {/* Text Section */}
        <div className="text-[#4D4D4D] flex flex-col md:w-[60%] lg:px-0 lg:w-[50%]">
          <div className="flex flex-col gap-4 md:gap-5 ">
            <h2 className="text-[26px] sm:text-3xl 2xl:text-[40px] text-center font-semibold not-italic">
              Who are we
            </h2>

            <p className="leading-relaxed  text-justify text-sm md:text-[15px]">
              <span className="block mb-3">
                Modern Tex has been at the forefront of
                garment manufacturing since 2010. What began as a humble
                operation with a monthly production capacity of just 10,000
                garments has grown into a globally recognized manufacturing
                unit, now exporting over 150,000 garments every month.
              </span>
              <span className="block mb-3">
                With consistent
                commitment to quality, ethics, and customer satisfaction, Modern
                Tex has expanded its reach across the globe—including the Middle
                East, the United States, the United Kingdom, and Europe. We take
                pride in being a trusted partner for international brands and
                retailers, delivering excellence in every stitch.
              </span>
              <span className="block mb-3">
          
                  Modern Tex operates under the highest standards of social and
                  environmental responsibility. We are fully certified by SEDEX
                  and WRAP, and we strictly adhere to international compliance
                  protocols. Regular audits and checks ensure ongoing
                  transparency and accountability across all levels of our
                  operations. We firmly uphold global labor standards and are
                  committed to ethical employment practices. Our facilities
                  strictly prohibit the use of child labor and comply with all
                  applicable labor laws and safety regulations. At Modern Tex,
                  integrity, innovation, and responsibility define who we
                  are—today and for the future.
        
              </span>
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-2/5 lg:w-[40%]">
          <img
            src={OurWorkImage}
            className="w-full h-full rounded-lg object-cover"
            alt="Our Work"
          />
        </div>
      </div>
    </>
  );
};

export default Whoarewe;
