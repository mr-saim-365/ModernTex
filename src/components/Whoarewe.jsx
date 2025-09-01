import React, { useEffect, useRef, useState } from "react";
import OurWorkImage from "/images/OurWork.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Lazy Image Component
const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: "50px 0px",
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {/* Placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}

      {/* Actual Image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          onLoad={handleLoad}
        />
      )}
    </div>
  );
};

const Whoarewe = () => {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

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

    // Animate image
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { x: 50, opacity: 0, scale: 0.8 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
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
      <div
        ref={sectionRef}
        className="flex flex-col md:flex-row md:gap-[60px] gap-10 lg:px-0 px-3 py-16 md:justify-between w-full lg:w-[90%] mx-auto"
      >
        {/* Text Section */}
        <div
          ref={textRef}
          className="text-[#4D4D4D] flex flex-col md:w-[60%] lg:px-0 lg:w-[50%]"
        >
          <div className="flex flex-col gap-4 md:gap-5 ">
            <h2 className="text-[26px] sm:text-3xl 2xl:text-[40px] text-center font-semibold not-italic">
              Who are we
            </h2>

            <p className="leading-relaxed  text-justify text-sm md:text-[15px]">
              <span className="block mb-3">
                Modern Tex has been at the forefront of garment manufacturing
                since 2010. What began as a humble operation with a monthly
                production capacity of just 10,000 garments has grown into a
                globally recognized manufacturing unit, now exporting over
                150,000 garments every month.
              </span>
              <span className="block mb-3">
                With consistent commitment to quality, ethics, and customer
                satisfaction, Modern Tex has expanded its reach across the
                globe—including the Middle East, the United States, the United
                Kingdom, and Europe. We take pride in being a trusted partner
                for international brands and retailers, delivering excellence in
                every stitch.
              </span>
              <span className="block mb-3">
                Modern Tex operates under the highest standards of social and
                environmental responsibility. We are fully certified by SEDEX
                and WRAP, and we strictly adhere to international compliance
                protocols. Regular audits and checks ensure ongoing transparency
                and accountability across all levels of our operations. We
                firmly uphold global labor standards and are committed to
                ethical employment practices. Our facilities strictly prohibit
                the use of child labor and comply with all applicable labor laws
                and safety regulations. At Modern Tex, integrity, innovation,
                and responsibility define who we are—today and for the future.
              </span>
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div ref={imageRef} className="w-full md:w-2/5 lg:w-[40%]">
          <LazyImage
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
