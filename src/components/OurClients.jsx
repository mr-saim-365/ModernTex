import React, { useEffect, useRef } from "react";

// Remove importing from public; use direct public URLs to avoid ?import
const clients = [
  "/images/Client1.jpeg",
  "/images/Client2.jpg",
  "/images/Client3.png",
  "/images/Client4.jpg",
  "/images/Client5.png",
  "/images/Client6.png",
  "/images/Client7.jpeg",
  "/images/Client8.jpeg",
  "/images/Client9.jpeg",
  "/images/Client10.jpeg",
];
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const OurClients = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const logosRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate text content
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        { x: -50, opacity: 0 },
        {
          x: 0,
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

    // Animate client logos
    if (logosRef.current) {
      gsap.fromTo(
        logosRef.current.children,
        { y: 50, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: logosRef.current,
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
      <section className="w-full lg:w-[90%] px-4 md:px-6 lg:px-0 py-20 lg:mx-auto">
        <div ref={textRef} className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D2D2D] mb-6 tracking-tight">
            OUR CLIENTS
          </h2>
          <div className="w-20 h-1 bg-[#2D2D2D] mx-auto mb-6"></div>
        </div>
        <div
          ref={sectionRef}
          className="w-full lg:w-[90%] lg:mx-auto flex flex-col justify-center items-center lg:flex-row gap-5 lg:justify-between lg:gap-0"
        >
          <div className="w-full lg:w-[30%]">
            {/* <h1 className="text-3xl font-bold text-gray-800 mb-4">Clients</h1> */}
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              We have happy clients all over the world
            </h2>
            <p className="text-gray-600 mb-6">
              We are leaders in creating, developing and manufacturing of
              knitted apparel products right from basic to highly fashioned
              garments thus responding to emerging trends in the industry. We
              translate conceptual ideas of our customers into reality and shape
              them through our technical bent and professional acumen.
            </p>
          </div>

          <div className="w-full lg:w-[60%]">
            <div
              ref={logosRef}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-8 md:gap-10"
            >
              {clients.map((client, index) => (
                <img
                  key={`client-${index}`}
                  src={client}
                  alt={`Client ${index + 1}`}
                  className="w-24 sm:w-28 md:w-32 lg:w-36 aspect-square object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurClients;
