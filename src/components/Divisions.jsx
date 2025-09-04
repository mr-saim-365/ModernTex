import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const DivisionsSection = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const iconsRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate text content
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate division icons
    if (iconsRef.current) {
      gsap.fromTo(
        iconsRef.current.children,
        { y: 50, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: iconsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={sectionRef} className=" my-8 overflow-hidden">
      <div
        style={{ backgroundImage: "url('/images/DivisionImage.png')" }}
        className="z-10 flex flex-col md:flex-row gap-8 text-[#ffffff] bg-cover bg-center bg-no-repeat"
      >
        <div className="lg:w-[90%] lg:mx-auto w-full px-3 md:px-6 lg:px-0 flex flex-col md:flex-row gap-5 lg:gap-10 py-20">
          <div ref={textRef} className="md:w-[60%]">
            <h1 className="text-3xl font-bold  mb-4">DIVISIONS</h1>
            <h2 className="text-2xl font-semibold mb-4">
              MANUFACTURING PROCESS
            </h2>
            <p className=" mb-6">
              At Modern Tex, we proudly operate as a vertically integrated denim
              textile unit, where every stage of production is managed in-house
              to ensure precision, quality, and timely delivery. Our
              step-by-step process combines skilled manpower, advanced
              technology, and a commitment to sustainability.
            </p>

            <div className="flex items-center justify-center md:justify-normal mt-4 gap-x-6">
              <a
                href="/DivisionContent"
                className="rounded-lg bg-black px-3.5 py-2.5 w-uto text-sm font-semibold text-white flex gap-2 items-center justify-center shadow-sm"
              >
                Learn More
                <FaArrowRight size={20} />
              </a>
            </div>
          </div>

          <div className="py-10 md:mt-5  md:px-4 flex items-center">
            <div
              ref={iconsRef}
              className="w-full md:max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6  text-center text-white"
            >
              <div className="flex flex-col gap-2 items-center">
                {/* <p className="text-white text-lg 2xl:text-3xl">01</p> */}
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto ">
                  <img
                    src="/images/yarn.png"
                    alt="yarn"
                    className="w-10 h-10 ml-2.5"
                  />
                </div>

                <p className="font-medium">Fabrication</p>
              </div>

              <div className="flex flex-col gap-2 items-center ">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto ">
                  <img
                    src="/images/apparel.png"
                    alt="apparel"
                    className="w-10 h-10"
                  />
                </div>

                <p className="font-medium ">Stitching</p>
              </div>

              <div className="flex flex-col gap-2 items-center ">
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto ">
                  <img
                    src="/images/washing.png"
                    alt="apparel"
                    className="w-10 h-10"
                  />
                </div>

                <p className="font-medium ">Washing</p>
              </div>

              <div className="flex flex-col  gap-2 items-center">
                <div className="bg-white rounded-full  w-20 h-20 flex items-center justify-center mx-auto">
                  <img
                    src="/images/fabric.png"
                    alt="fabric"
                    className="w-10 h-10"
                  />
                </div>

                <p className="font-medium">Finishing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DivisionsSection;
