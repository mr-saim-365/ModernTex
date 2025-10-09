import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import fabricationImg from "/images/Fabrication.jpg";
// import stitchingImg from "/images/Stitching.jpg";
// import washingImg from "/images/Washing.jpg";
// import finishingImg from "/images/Finishing.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: 1,
    title: "Fabrication",
    description:
      "We begin with premium quality fabrics, carefully sourced from trusted suppliers and thoroughly inspected for strength, durability, and comfort. Our fabrication process ensures precise cutting, accurate measurements, and proper preparation, laying the foundation for high-quality denim garments that stand the test of time.",
    image: "/images/Fabrication.jpg",
  },
  {
    id: 2,
    title: "Stitching",
    description:
      "Our skilled tailors combine craftsmanship with advanced stitching techniques to transform fabric into perfectly structured garments. Every seam is reinforced for strength and precision, while continuous quality checks ensure flawless construction. This process guarantees denim products that meet both durability and modern fashion standards.",
    image: "/images/Stitching.jpg",
  },
  {
    id: 3,
    title: "Washing",
    description:
      "Each garment undergoes specialized washing treatments designed to achieve the right softness, texture, and lasting color tones. From stone-wash to enzyme finishes, every technique is carefully applied. This stage enhances comfort, ensures fabric quality, and delivers a fashionable look that defines our denim collection.",
    image: "/images/Washing.jpg",
  },
  {
    id: 4,
    title: "Finishing",
    description:
      "The finishing stage ensures every piece is flawless before delivery. Our process includes ironing, trimming, labeling, and precise packaging. By focusing on every small detail, we guarantee denim products that not only look exceptional but also reflect professionalism and care in every shipment.",
    image: "/images/Finishing.jpg",
  },
];

const DivisionsContent = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      if (!section) return;

      const text = section.querySelector(".text-content");
      const image = section.querySelector(".image-content");

      if (text) {
        gsap.fromTo(
          text,
          { xPercent: -20, opacity: 0 },
          {
            xPercent: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      if (image) {
        gsap.fromTo(
          image,
          { xPercent: 20, opacity: 0, scale: 0.9 },
          {
            xPercent: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section>
      {/* <Navbar /> */}
      <div className="py-16 lg:px-0 lg:w-[90%] lg:mx-auto md:px-6 px-3 mt-[3rem] overflow-x-hidden">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl text-center mb-10 md:text-5xl font-bold text-gray-800 relative">
            Our 4-Step Process
            {/* Decorative accent line */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          </h2>
          <p className="mt-4 text-gray-600 text-[15px] sm:text-[16px] md:text-lg">
            From start to finish, we ensure perfection in every stage of our
            production.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={step.id}
              ref={(el) => {
                if (el) sectionsRef.current[index] = el;
              }}
              className={`flex flex-col md:flex-row md:justify-between items-center gap-8 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="image-content w-full md:w-2/5 lg:w-[40%]">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full rounded-lg object-cover shadow-lg"
                />
              </div>

              {/* Text Content */}
              <div className="text-content md:w-1/2">
                <h3 className="text-2xl lg:text-3xl font-semibold text-gray-800 flex items-center">
                  <span className="text-[rgb(244_130_33)] text-3xl lg:text-4xl font-bold mr-3">
                    {step.id}.
                  </span>
                  {step.title}
                </h3>
                <p className="mt-4 text-gray-600 text-[15px] md:text-[16px] lg:text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <Footer /> */}
    </section>
  );
};

export default DivisionsContent;
