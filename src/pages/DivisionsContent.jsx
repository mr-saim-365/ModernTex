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
      "We start with premium quality fabrics, carefully sourced and inspected to ensure durability and comfort. Our fabrication process focuses on precision cutting and preparation for stitching.",
    image: "/images/Fabrication.jpg",
  },
  {
    id: 2,
    title: "Stitching",
    description:
      "Our skilled tailors use advanced stitching techniques to bring designs to life with accuracy, strength, and attention to detail. Quality control is maintained at every stage.",
    image: "/images/Stitching.jpg",
  },
  {
    id: 3,
    title: "Washing",
    description:
      "Each garment goes through specialized washing treatments to achieve the perfect texture, softness, and color tone. This step ensures both style and long-lasting quality.",
    image: "/images/Washing.jpg",
  },
  {
    id: 4,
    title: "Finishing",
    description:
      "The final step involves careful finishing touches including ironing, trimming, and packaging, ensuring the product is delivered in flawless condition.",
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
      <Navbar />
      <div className="bg-gray-50 py-16 lg:px-0 lg:w-[90%] lg:mx-auto md:px-6 px-3 mt-[3rem] overflow-x-hidden">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
            Our 4-Step Process
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
      <Footer />
    </section>
  );
};

export default DivisionsContent;
