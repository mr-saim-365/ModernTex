import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
// import LazyImage from "./LazyImage"; // your existing component
// import OrangeGraphic from "./OrangeGraphic"; // your existing graphic component


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
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl flex items-center justify-center">
          <div className="text-gray-400 text-sm">Loading...</div>
        </div>
      )}

      {/* Actual Image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-all duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          loading="lazy"
          onLoad={handleLoad}
        />
      )}
    </div>
  );
};

// Abstract Orange Graphic Component
const OrangeGraphic = ({ type, className = "" }) => {
  return (
    <div className={`${className} flex items-center justify-center`}>
      {type === "waves" && (
        <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
        </div>
      )}
      {type === "camera" && (
        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-white rounded"></div>
        </div>
      )}
      {type === "lines" && (
        <div className="w-14 h-14 bg-orange-500 rounded-full flex flex-col items-center justify-center space-y-1">
          <div className="w-8 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-8 h-0.5 bg-white"></div>
        </div>
      )}
    </div>
  );
};

const OurProcess = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const topSectionRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const textBlockRef = useRef(null);
  const leftCollageRef = useRef(null);
  const rightCollageRef = useRef(null);

  // Collage data matching the exact reference layout
  const collageItems = [
    // Top row - larger images
    {
      type: "image",
      src: "/images/Stitching1.jpg",
      alt: "Sewing Factory",
      size: "w-64 h-48",
      position: { top: "5%", left: "8%" },
      zIndex: 10,
      rotation: -2,
    },
    {
      type: "image",
      src: "/images/AboutUsImage.jpg",
      alt: "Fabric Storage",
      size: "w-64 h-48",
      position: { top: "5%", right: "8%" },
      zIndex: 10,
      rotation: 2,
    },

    // Second row - medium images with graphics
    {
      type: "image",
      src: "/images/Washing.jpg",
      alt: "Washing Process",
      size: "w-52 h-40",
      position: { top: "25%", left: "15%" },
      zIndex: 8,
      rotation: 1,
    },
    {
      type: "graphic",
      graphicType: "waves",
      size: "w-16 h-16",
      position: { top: "30%", left: "45%" },
      zIndex: 9,
      rotation: 0,
    },
    {
      type: "image",
      src: "/images/Finishing.jpg",
      alt: "Finishing Process",
      size: "w-52 h-40",
      position: { top: "25%", right: "15%" },
      zIndex: 8,
      rotation: -1,
    },
    {
      type: "graphic",
      graphicType: "lines",
      size: "w-14 h-14",
      position: { top: "30%", right: "45%" },
      zIndex: 9,
      rotation: 0,
    },

    // Third row - smaller images
    {
      type: "image",
      src: "/images/ServiceImage1.jpeg",
      alt: "Service Process 1",
      size: "w-44 h-36",
      position: { top: "45%", left: "5%" },
      zIndex: 6,
      rotation: -3,
    },
    {
      type: "image",
      src: "/images/ServiceImage2.jpg",
      alt: "Service Process 2",
      size: "w-44 h-36",
      position: { top: "45%", left: "35%" },
      zIndex: 7,
      rotation: 2,
    },
    {
      type: "image",
      src: "/images/ServiceImage3.jpeg",
      alt: "Service Process 3",
      size: "w-44 h-36",
      position: { top: "45%", right: "35%" },
      zIndex: 6,
      rotation: -2,
    },
    {
      type: "image",
      src: "/images/ServiceImage4.jpeg",
      alt: "Service Process 4",
      size: "w-44 h-36",
      position: { top: "45%", right: "5%" },
      zIndex: 7,
      rotation: 3,
    },

    // Fourth row - denim and fabric images
    {
      type: "image",
      src: "/images/denim.jpg",
      alt: "Denim Production",
      size: "w-56 h-44",
      position: { top: "65%", left: "10%" },
      zIndex: 5,
      rotation: 1,
    },
    {
      type: "image",
      src: "/images/denimImage.jpg",
      alt: "Denim Finish",
      size: "w-48 h-36",
      position: { top: "70%", left: "50%" },
      zIndex: 4,
      rotation: -2,
    },
    {
      type: "image",
      src: "/images/OurWork.jpg",
      alt: "Our Work",
      size: "w-56 h-44",
      position: { top: "65%", right: "10%" },
      zIndex: 5,
      rotation: -1,
    },
    {
      type: "image",
      src: "/images/Drying.jpg",
      alt: "Manufacturing",
      size: "w-48 h-36",
      position: { top: "70%", right: "45%" },
      zIndex: 4,
      rotation: 2,
    },

    // Bottom row - final images
    {
      type: "image",
      src: "/images/pants.jpg",
      alt: "Production",
      size: "w-40 h-32",
      position: { top: "85%", left: "20%" },
      zIndex: 3,
      rotation: -1,
    },
    {
      type: "image",
      src: "/images/circle.jpg",
      alt: "Yarn Production",
      size: "w-40 h-32",
      position: { top: "88%", left: "50%" },
      zIndex: 2,
      rotation: 1,
    },
    {
      type: "image",
      src: "/images/jacket.webp",
      alt: "Fabric Roll",
      size: "w-40 h-32",
      position: { top: "85%", right: "20%" },
      zIndex: 3,
      rotation: -2,
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate title
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate top section elements
    if (topSectionRef.current) {
      const elements = [
        leftImageRef.current,
        textBlockRef.current,
        rightImageRef.current,
      ];
      const directions = [
        { x: -100, y: 0, rotation: -5 },
        { y: 50, opacity: 0 },
        { x: 100, y: 0, rotation: 5 },
      ];

      elements.forEach((element, index) => {
        if (element) {
          gsap.fromTo(
            element,
            {
              x: directions[index].x || 0,
              y: directions[index].y || 0,
              opacity: directions[index].opacity || 0,
              scale: 0.9,
              rotation: directions[index].rotation || 0,
            },
            {
              x: 0,
              y: 0,
              opacity: 1,
              scale: 1,
              rotation: 0,
              duration: 1.2,
              delay: index * 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: topSectionRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        }
      });
    }

    // Animate collage items
    if (leftCollageRef.current) {
      const items = leftCollageRef.current.querySelectorAll(".collage-item");

      items.forEach((item, index) => {
        const randomX = (Math.random() - 0.5) * 200;
        const randomY = (Math.random() - 0.5) * 200;
        const randomRotation = (Math.random() - 0.5) * 30;

        gsap.fromTo(
          item,
          {
            x: randomX,
            y: randomY,
            opacity: 0,
            scale: 0.5,
            rotation: randomRotation,
          },
          {
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1,
            rotation: collageItems[index]?.rotation || 0,
            duration: 1.5,
            delay: index * 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: leftCollageRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);


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

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const collageImages = collageItems.filter((item) => item.type === "image");

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden"; // prevent background scroll
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = "auto";
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? collageImages.length - 1 : prev - 1
    );
  };

  const showNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === collageImages.length - 1 ? 0 : prev + 1
    );
  };


  return (
    <div id="howwedo" ref={sectionRef} className="w-full bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-3xl text-center mb-10 md:text-5xl font-bold text-gray-800 relative">
            HOW WE DO
            {/* Decorative accent line */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
          </h2>

        </div>

        {/* Top Section */}
        <div
          ref={topSectionRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-24"
        >
          {/* Left Image */}
          <div ref={leftImageRef} className="lg:col-span-1">
            <LazyImage
              src="/images/Stitching.jpg"
              alt="Garment Manufacturing Facility"
              className="w-full h-[350px] lg:h-[450px] object-cover rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
            />
          </div>

          {/* Center Text Block */}
          <div
            ref={textBlockRef}
            className="lg:col-span-1 flex flex-col justify-center px-4"
          >
            <h4 className="text-2xl sm:text-3xl font-bold text-[#2D2D2D] mb-8 uppercase tracking-wider">
              OUR PROCESS
            </h4>
            <ul className="space-y-4 text-[#2D2D2D]">
              <li className="text-lg sm:text-xl flex items-center group">
                <span className="w-3 h-3 bg-orange-500 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></span>
                <span className="group-hover:text-orange-600 transition-colors duration-300">
                  Fabrication
                </span>
              </li>
              <li className="text-lg sm:text-xl flex items-center group">
                <span className="w-3 h-3 bg-orange-500 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></span>
                <span className="group-hover:text-orange-600 transition-colors duration-300">
                  Stitching
                </span>
              </li>
              <li className="text-lg sm:text-xl flex items-center group">
                <span className="w-3 h-3 bg-orange-500 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></span>
                <span className="group-hover:text-orange-600 transition-colors duration-300">
                  Washing
                </span>
              </li>
              <li className="text-lg sm:text-xl flex items-center group">
                <span className="w-3 h-3 bg-orange-500 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></span>
                <span className="group-hover:text-orange-600 transition-colors duration-300">
                  Finishing
                </span>
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div ref={rightImageRef} className="lg:col-span-1">
            <LazyImage
              src="/images/Fabrication.jpg"
              alt="Fabric Storage Warehouse"
              className="w-full h-[350px] lg:h-[450px] object-cover rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>

   {/* Collage Section */}
        <div className="relative">
          <div className="relative w-full h-[800px] lg:h-[900px] mx-auto">
            {collageItems.map((item, index) => (
              <div
                key={index}
                className={`absolute ${item.size} transform transition-all duration-500 hover:scale-110 hover:z-50 cursor-pointer`}
                style={{
                  zIndex: item.zIndex,
                  top: item.position.top,
                  left: item.position.left,
                  right: item.position.right,
                  transform: `rotate(${item.rotation}deg)`,
                }}
                onClick={() =>
                  item.type === "image" && openLightbox(index)
                }
              >
                {item.type === "image" ? (
                  <LazyImage
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
                  />
                ) : (
                  <OrangeGraphic
                    type={item.graphicType}
                    className="w-full h-full hover:scale-110 transition-transform duration-300"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* --- Modern Lightbox Modal --- */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-6 right-8 text-white/80 hover:text-orange-500 transition-colors"
              >
                <X size={34} />
              </button>

              {/* Image Wrapper */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className="relative bg-white/5 rounded-2xl shadow-2xl overflow-hidden flex items-center justify-center max-w-4xl w-[90vw] h-[80vh]"
              >
                <img
                  src={collageImages[currentIndex].src}
                  alt={collageImages[currentIndex].alt}
                  className="object-contain w-full h-full"
                />

                {/* Image Counter */}
                <p className="absolute bottom-5 right-6 text-sm text-white/90 bg-black/40 px-4 py-1 rounded-full tracking-wider">
                  {currentIndex + 1} / {collageImages.length}
                </p>

                {/* Left Arrow */}
                <button
                  onClick={showPrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-orange-500/80 p-3 rounded-full text-white transition-all duration-300"
                >
                  <ChevronLeft size={28} />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={showNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-orange-500/80 p-3 rounded-full text-white transition-all duration-300"
                >
                  <ChevronRight size={28} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default OurProcess;







// import React from "react";
// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
// import { useLocation } from "react-router-dom";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// // Lazy Image Component
// const LazyImage = ({ src, alt, className }) => {
//   const [isLoaded, setIsLoaded] = useState(false);
//   const [isInView, setIsInView] = useState(false);
//   const imgRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true);
//           observer.unobserve(entry.target);
//         }
//       },
//       {
//         rootMargin: "50px 0px",
//         threshold: 0.1,
//       }
//     );

//     if (imgRef.current) {
//       observer.observe(imgRef.current);
//     }

//     return () => {
//       if (imgRef.current) {
//         observer.unobserve(imgRef.current);
//       }
//     };
//   }, []);

//   const handleLoad = () => {
//     setIsLoaded(true);
//   };

//   return (
//     <div ref={imgRef} className={`relative ${className}`}>
//       {/* Placeholder */}
//       {!isLoaded && (
//         <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl flex items-center justify-center">
//           <div className="text-gray-400 text-sm">Loading...</div>
//         </div>
//       )}

//       {/* Actual Image */}
//       {isInView && (
//         <img
//           src={src}
//           alt={alt}
//           className={`${className} transition-all duration-500 ${
//             isLoaded ? "opacity-100" : "opacity-0"
//           }`}
//           loading="lazy"
//           onLoad={handleLoad}
//         />
//       )}
//     </div>
//   );
// };

// // Abstract Orange Graphic Component
// const OrangeGraphic = ({ type, className = "" }) => {
//   return (
//     <div className={`${className} flex items-center justify-center`}>
//       {type === "waves" && (
//         <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
//           <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
//             <div className="w-4 h-4 bg-white rounded-full"></div>
//           </div>
//         </div>
//       )}
//       {type === "camera" && (
//         <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
//           <div className="w-6 h-6 border-2 border-white rounded"></div>
//         </div>
//       )}
//       {type === "lines" && (
//         <div className="w-14 h-14 bg-orange-500 rounded-full flex flex-col items-center justify-center space-y-1">
//           <div className="w-8 h-0.5 bg-white"></div>
//           <div className="w-6 h-0.5 bg-white"></div>
//           <div className="w-8 h-0.5 bg-white"></div>
//         </div>
//       )}
//     </div>
//   );
// };

// const OurProcess = () => {
//   const sectionRef = useRef(null);
//   const titleRef = useRef(null);
//   const topSectionRef = useRef(null);
//   const leftImageRef = useRef(null);
//   const rightImageRef = useRef(null);
//   const textBlockRef = useRef(null);
//   const leftCollageRef = useRef(null);

//   // Lightbox state
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Collage layout — preserved positions (same as your original)
//   const collageItems = [
//     {
//       src: "/images/Stitching.jpg",
//       alt: "Sewing Factory",
//       size: "w-64 h-48",
//       position: { top: "5%", left: "8%" },
//       zIndex: 10,
//       rotation: -2,
//     },
//     {
//       src: "/images/Fabrication.jpg",
//       alt: "Fabric Storage",
//       size: "w-64 h-48",
//       position: { top: "5%", right: "8%" },
//       zIndex: 10,
//       rotation: 2,
//     },
//     {
//       src: "/images/Washing.jpg",
//       alt: "Washing Process",
//       size: "w-52 h-40",
//       position: { top: "25%", left: "15%" },
//       zIndex: 8,
//       rotation: 1,
//     },
//     {
//       src: "/images/Finishing.jpg",
//       alt: "Finishing Process",
//       size: "w-52 h-40",
//       position: { top: "25%", right: "15%" },
//       zIndex: 8,
//       rotation: -1,
//     },
//     {
//       src: "/images/ServiceImage1.jpeg",
//       alt: "Service Process 1",
//       size: "w-44 h-36",
//       position: { top: "45%", left: "5%" },
//       zIndex: 6,
//       rotation: -3,
//     },
//     {
//       src: "/images/ServiceImage2.jpg",
//       alt: "Service Process 2",
//       size: "w-44 h-36",
//       position: { top: "45%", left: "35%" },
//       zIndex: 7,
//       rotation: 2,
//     },
//     {
//       src: "/images/ServiceImage3.jpeg",
//       alt: "Service Process 3",
//       size: "w-44 h-36",
//       position: { top: "45%", right: "35%" },
//       zIndex: 6,
//       rotation: -2,
//     },
//     {
//       src: "/images/ServiceImage4.jpeg",
//       alt: "Service Process 4",
//       size: "w-44 h-36",
//       position: { top: "45%", right: "5%" },
//       zIndex: 7,
//       rotation: 3,
//     },
//     {
//       src: "/images/denim.jpg",
//       alt: "Denim Production",
//       size: "w-56 h-44",
//       position: { top: "65%", left: "10%" },
//       zIndex: 5,
//       rotation: 1,
//     },
//     {
//       src: "/images/denimImage.jpg",
//       alt: "Denim Finish",
//       size: "w-48 h-36",
//       position: { top: "70%", left: "50%" },
//       zIndex: 4,
//       rotation: -2,
//     },
//     {
//       src: "/images/Drying.jpg",
//       alt: "Manufacturing",
//       size: "w-48 h-36",
//       position: { top: "70%", right: "45%" },
//       zIndex: 4,
//       rotation: 2,
//     },
//     {
//       src: "/images/OurWork.jpg",
//       alt: "Our Work",
//       size: "w-56 h-44",
//       position: { top: "65%", right: "10%" },
//       zIndex: 5,
//       rotation: -1,
//     },
//     {
//       src: "/images/pants.jpg",
//       alt: "Production",
//       size: "w-40 h-32",
//       position: { top: "85%", left: "20%" },
//       zIndex: 3,
//       rotation: -1,
//     },
//     {
//       src: "/images/circle.jpg",
//       alt: "Yarn Production",
//       size: "w-40 h-32",
//       position: { top: "88%", left: "50%" },
//       zIndex: 2,
//       rotation: 1,
//     },
//     {
//       src: "/images/jacket.webp",
//       alt: "Fabric Roll",
//       size: "w-40 h-32",
//       position: { top: "85%", right: "20%" },
//       zIndex: 3,
//       rotation: -2,
//     },
//   ];

//   // Lightbox handlers
//   const openModal = (index) => {
//     setCurrentIndex(index);
//     setIsModalOpen(true);
//   };
//   const closeModal = () => setIsModalOpen(false);
//   const prevImage = (e) => {
//     e.stopPropagation();
//     setCurrentIndex((prev) =>
//       prev === 0 ? collageItems.length - 1 : prev - 1
//     );
//   };
//   const nextImage = (e) => {
//     e.stopPropagation();
//     setCurrentIndex((prev) =>
//       prev === collageItems.length - 1 ? 0 : prev + 1
//     );
//   };

//   // Keyboard control
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (!isModalOpen) return;
//       if (e.key === "ArrowLeft") prevImage(e);
//       if (e.key === "ArrowRight") nextImage(e);
//       if (e.key === "Escape") closeModal();
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [isModalOpen]);

//   // Hash scroll
//   const location = useLocation();
//   useEffect(() => {
//     if (location.hash) {
//       const section = document.querySelector(location.hash);
//       if (section) {
//         setTimeout(() => {
//           section.scrollIntoView({ behavior: "smooth" });
//         }, 200);
//       }
//     }
//   }, [location]);

//   return (
//     <div id="howwedo" ref={sectionRef} className="w-full bg-white py-20 lg:py-24">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Title */}
//         <div ref={titleRef} className="text-center mb-20">
//           <h2 className="text-3xl md:text-5xl font-bold text-gray-800 relative mb-10">
//             HOW WE DO
//             <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"></div>
//           </h2>
//           <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#2D2D2D] italic">
//             Our Process
//           </h3>
//         </div>

//         {/* Collage Section */}
//         <div ref={leftCollageRef} className="relative w-full h-[900px] mx-auto">
//           {collageItems.map((item, index) => (
//             <div
//               key={index}
//               onClick={() => openModal(index)}
//               className={`collage-item absolute ${item.size} transform transition-all duration-500 hover:scale-110 hover:z-50 cursor-pointer`}
//               style={{
//                 zIndex: item.zIndex,
//                 top: item.position.top,
//                 left: item.position.left,
//                 right: item.position.right,
//                 transform: `rotate(${item.rotation}deg)`,
//               }}
//             >
//               <LazyImage
//                 src={item.src}
//                 alt={item.alt}
//                 className="w-full h-full object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Lightbox Modal */}
//       <AnimatePresence>
//         {isModalOpen && (
//           <motion.div
//             className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[1000]"
//             onClick={closeModal}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               className="relative max-w-5xl w-full mx-4 flex flex-col items-center"
//               initial={{ scale: 0.9, opacity: 0, y: 50 }}
//               animate={{ scale: 1, opacity: 1, y: 0 }}
//               exit={{ scale: 0.9, opacity: 0, y: 50 }}
//               transition={{ duration: 0.4, ease: "easeOut" }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               {/* Image */}
//               <LazyImage
//                 src={collageItems[currentIndex].src}
//                 alt={collageItems[currentIndex].alt}
//                 className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl"
//               />

//               {/* Image Counter */}
//               <p className="text-white text-sm mt-4 opacity-80 tracking-wide">
//                 {currentIndex + 1} / {collageItems.length}
//               </p>

//               {/* Close Button */}
//               <button
//                 onClick={closeModal}
//                 className="absolute top-4 right-4 text-white hover:text-orange-500 transition text-2xl"
//               >
//                 <FaTimes />
//               </button>

//               {/* Navigation */}
//               <button
//                 onClick={prevImage}
//                 className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-orange-500 transition"
//               >
//                 <FaArrowLeft />
//               </button>
//               <button
//                 onClick={nextImage}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl hover:text-orange-500 transition"
//               >
//                 <FaArrowRight />
//               </button>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default OurProcess;