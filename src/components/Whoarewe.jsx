import React, { useEffect, useRef, useState } from "react";
// import OurWorkImage from "/images/OurWork.jpg";
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
  const imageContainerRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);

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

    // Animate images with different directions
    if (imageContainerRef.current) {
      const images = [image1Ref.current, image2Ref.current, image3Ref.current];
      const directions = [
        { x: 100, y: -50, rotation: 5 }, // Top-right
        { x: -80, y: 30, rotation: -3 }, // Middle-left
        { x: 60, y: 80, rotation: 2 }    // Bottom-right
      ];

      images.forEach((image, index) => {
        if (image) {
          gsap.fromTo(
            image,
            { 
              x: directions[index].x, 
              y: directions[index].y, 
              opacity: 0, 
              scale: 0.8,
              rotation: directions[index].rotation
            },
            {
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 1.2,
              delay: index * 0.3,
              ease: "power2.out",
              scrollTrigger: {
                trigger: imageContainerRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div
        ref={sectionRef}
        className="flex flex-col md:flex-row md:gap-[60px] gap-10 py-16 lg:px-10 px-3 md:px-6 md:justify-between w-full lg:w-[80%] mx-auto"
      >
        {/* Text Section */}
        <div
          ref={textRef}
          className="text-[#4D4D4D] flex flex-col md:w-[60%] lg:px-0 lg:w-[50%] justify-center items-center"
        >
          <div className="flex flex-col gap-4 md:gap-5 ">
            <h2 className="text-[26px] sm:text-3xl 2xl:text-[40px] text-center font-semibold not-italic">
              Who are we
            </h2>

            <p className="leading-relaxed text-justify text-sm md:text-[15px]">
              <span className="block mb-3">
              Founded in <strong className="text-orange-500">2010</strong>, Modern Tex is a leading garment manufacturer in Pakistan, growing from <strong className="text-orange-500">10,000 to 150,000+ garments monthly</strong>. We export globally with <strong className="text-orange-500">state-of-the-art facilities</strong> and <strong className="text-orange-500">skilled professionals</strong>.
              </span>
              <span className="block mb-3">
              Our success is built on <strong className="text-orange-500">innovation, ethical practices, and advanced manufacturing</strong>. We ensure <strong className="text-orange-500">superior quality, flexibility, and competitive value</strong> for international clients through our customer-centric approach.
              </span>
              <span className="block mb-3">
              We proudly hold <strong className="text-orange-500">SEDEX and WRAP certifications</strong>, maintaining full compliance with international standards. Our operations are built on <strong className="text-orange-500">integrity, transparency, and accountability</strong>—strictly prohibiting child labor and promoting fair employment.
              </span>
              <span className="block mb-3">
              Today, we export to <strong className="text-orange-500">Middle East, USA, UK, and Europe</strong>, continuing our journey of responsible growth and global excellence in the apparel industry.
              </span>
            </p>
          </div>
        </div>

        {/* 3-Image Layout Section */}
        <div ref={imageContainerRef} className="w-full md:w-2/5 lg:w-[40%] relative">
          <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px]">
            {/* Image 1 - Top Right */}
            <div 
              ref={image1Ref}
              className="absolute top-0 right-0 w-[60%] sm:w-[55%] h-[40%] sm:h-[45%] z-10 transform transition-all duration-300 hover:scale-105 hover:z-20"
            >
              <LazyImage
                src="/images/denimImage.jpg"
                className="w-full h-full rounded-2xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                alt="Denim Manufacturing"
              />
            </div>

            {/* Image 2 - Middle Left */}
            <div 
              ref={image2Ref}
              className="absolute top-[20%] sm:top-[25%] left-0 w-[55%] sm:w-[50%] h-[50%] sm:h-[55%] z-20 transform transition-all duration-300 hover:scale-105 hover:z-30"
            >
              <LazyImage
                src="/images/Stitching.jpg"
                className="w-full h-full rounded-2xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                alt="Stitching Process"
              />
            </div>

            {/* Image 3 - Bottom Right */}
            <div 
              ref={image3Ref}
              className="absolute bottom-0 right-[5%] sm:right-[10%] w-[65%] sm:w-[60%] h-[35%] sm:h-[40%] z-10 transform transition-all duration-300 hover:scale-105 hover:z-20"
            >
              <LazyImage
                src="/images/Fabrication.jpg"
                className="w-full h-full rounded-2xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                alt="Fabrication Process"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Whoarewe;
