import React, { useEffect, useRef } from "react";
import image1 from "/images/ownerImage1.jpg";
import image2 from "/images/ownerImage2.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";


const AboutUs = () => {

  const location = useLocation();

  // Scroll to section if URL contains a hash (#)
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [location]);



  return (
    <>
      {/* <Navbar /> */}
      <div id="about" className="text-[15px] sm:text-[16px]">
        {/* <section
          id="about-us"
          className="px-3 md:px-6 text-[#4D4D4D] lg:px-12 2xl:px-0 2xl:w-[90%] mt-24 mb-10 mx-auto"
        >
          <Button />
          <div className="flex flex-col md:flex-row gap-20 mx-auto">
            <div className="w-full">
              <h2 className="text-[26px] sm:text-3xl 2xl:text-[40px] mt-5 font-bold font-serif mb-4 text-[#4D4D4D]">
                About Us
              </h2>
              <p className="leading-relaxed font-normal text-justify text-sm sm:text-base">
                <span className="block mb-3">
                  <strong>Established in 1998:</strong> Modern Tex has become a
                  trusted name in the textile industry, delivering premium woven
                  fabrics and apparel solutions for international markets. With
                  decades of experience, we specialize in innovative fabric
                  development, precision weaving, and high-quality garment
                  production that meet the demands of global fashion brands.
                </span>
                <span className="block mb-3">
                  <strong>Why Choose Modern Tex?</strong>
                </span>
                <ul className="list-disc list-inside mb-3 space-y-2">
                  <li>
                    <strong> Innovative Fabric Solutions:</strong> We design and
                    develop woven fabrics that reflect the latest global
                    trends—combining durability, comfort, and modern aesthetics.
                  </li>
                  <li>
                    <strong> Advanced Technology:</strong> Our production units
                    are equipped with state-of-the-art weaving, dyeing, and
                    finishing machinery, ensuring consistent quality and timely
                    delivery.
                  </li>
                  <li>
                    <strong> Sustainability First:</strong> We prioritize
                    eco-friendly manufacturing by using organic fibers,
                    water-saving dyeing processes, and energy-efficient
                    production methods.
                  </li>
                  <li className="hidden 2xl:block">
                    <strong> Ethical Standards:</strong> At Modern Tex, we
                    uphold fair labor practices, safe working environments, and
                    transparent supply chain operations.
                  </li>
                  <li className="hidden 2xl:block">
                    <strong> Customization & Flexibility:</strong> From fabric
                    development to finished apparel, we offer tailored solutions
                    for brands of every size—delivering value without
                    compromise.
                  </li>
                </ul>
                <span className="hidden 2xl:block my-2">
                  <strong>Take a closer look inside our facilities,</strong>{" "}
                  where innovation meets craftsmanship, and every fabric is
                  produced with care, responsibility, and precision.
                </span>
                <span className="hidden 2xl:block">
                  <strong>At Modern Tex,</strong> we are more than a
                  manufacturer—we are partners in fashion innovation. Together,
                  let’s create textiles that inspire, perform, and endure.
                </span>
              </p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/2">
              <img
                src={AboutUsImage}
                className="h-[60vh] md:h-[70vh] w-full rounded-lg object-cover"
                alt="AboutUsImage"
              />
            </div>
          </div>
        </section> */}

        <section
          id="our-team"
          className="px-3 md:px-6 lg:px-12 2xl:px-0 my-10 2xl:w-[90%] mt-24 mx-auto text-center"
        >
          <div className="mb-12 text-center">
            <h2 className="text-3xl text-center mb-10 md:text-5xl font-bold text-gray-800 relative">
              Meet Our Founders
              {/* Decorative accent line */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Modern Tex was founded by{" "}
              <span className="font-semibold text-orange-500">Nadeem Ahmed</span>{" "}
              and
              <span className="font-semibold text-orange-500">
                {" "}
                Siraj Ahmed
              </span>{" "}
              — two visionary leaders driven by innovation, craftsmanship, and a
              deep passion for textiles. Together, they have built a company
              that blends creativity with quality, bringing world-class fabric
              and apparel solutions to life.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-20 items-center justify-center">
            <div className="bg-white w-full md:w-auto rounded-lg shadow-lg overflow-hidden group transition transform hover:-translate-y-2 hover:shadow-2xl duration-500">
              <img
                src={image1}
                alt="Team Member"
                className="w-full h-auto max-h-[60vh] object-contain rounded-t-lg transition-transform duration-500 group-hover:scale-105"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  Nadeem Ahmed
                </h3>
                <p className="text-sm text-gray-500">Founder</p>
              </div>
            </div>

            <div className="bg-white w-full md:w-auto rounded-lg shadow-lg overflow-hidden group transition transform hover:-translate-y-2 hover:shadow-2xl duration-500">
              <img
                src={image2}
                alt="Team Member"
                className="w-full h-auto max-h-[60vh] object-contain rounded-t-lg transition-transform duration-500 group-hover:scale-105"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800">
                  Siraj Ahmed
                </h3>
                <p className="text-sm text-gray-500">Co-Founder</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* <Footer /> */}
    </>
  );
};

export default AboutUs;
