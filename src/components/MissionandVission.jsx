import React, { useEffect, useRef } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const MissionandVission = () => {
  const sectionRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate mission section
    if (missionRef.current) {
      gsap.fromTo(
        missionRef.current.children,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate vision section
    if (visionRef.current) {
      gsap.fromTo(
        visionRef.current.children,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: visionRef.current,
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
    <>
      <section
        ref={sectionRef}
        className="text-[#4D4D4D] py-16 sm:py-20 px-3 md:px-6 lg:px-0 w-full lg:w-[90%] mx-auto"
      >
        <div className="flex flex-col md:flex-row gap-10 lg:gap-14  w-full">
          <div ref={missionRef} className="w-full md:w-1/2">
            <div className="flex items-center">
              <DotLottieReact
                src="https://lottie.host/b9758092-40aa-4234-a17d-0af812f39698/5xfNI031bQ.lottie"
                loop
                autoplay
                className="h-[80px]  "
              />
              <h2 className="text-2xl sm:text-3xl xl:text-[40px]  font-semibold uppercase">
                Our Mission
              </h2>
            </div>

            <p className="mt-4 sm:mt-6 text-justify text-sm sm:text-base font-normal leading-relaxed">
              At MT, we redefine denim with sustainability, ethical integrity,
              and innovation. Using organic cotton and eco-conscious materials,
              we minimize waste, reduce our carbon footprint, and optimize water
              & energy efficiency. Our commitment extends beyond
              production—ensuring responsible fashion through fair labor and
              cutting-edge techniques. At AH Denim, we don't just create denim;
              we craft a future where style meets sustainability.
            </p>
          </div>

          {/* Vision */}
          <div ref={visionRef} className="w-full md:w-1/2">
            <div className="flex items-center">
              <DotLottieReact
                src="https://lottie.host/03873f4e-b1b7-4fd2-8b87-9700b5250afc/K9e0mvdHiE.lottie"
                loop
                autoplay
                className="h-[80px]"
              />
              <h2 className="text-2xl sm:text-3xl xl:text-[40px] font-semibold uppercase">
                Our Vision
              </h2>
            </div>
            <p className="mt-4 sm:mt-6 text-justify text-sm sm:text-base leading-relaxed">
              Denim envisions becoming a global leader in manufacturing
              excellence, setting new standards in quality, efficiency, and
              sustainability. Through innovation and ethical stewardship, we
              drive transformative change—harmonizing fashion with environmental
              responsibility. With precision, sustainability, and cutting-edge
              craftsmanship, we are shaping a future where denim is a symbol of
              progress and purpose.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MissionandVission;
