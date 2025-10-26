

import React from "react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

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

const OurProcess = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const topSectionRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);
  const textBlockRef = useRef(null);
  const leftCollageRef = useRef(null);

  // Lightbox states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Collage layout — preserved positions (same as your original)
  const collageItems = [
    {
      src: "/images/Stitching.jpg",
      alt: "Sewing Factory",
      size: "w-64 h-48",
      position: { top: "5%", left: "8%" },
      zIndex: 10,
      rotation: -2,
    },
    {
      src: "/images/Rolls.jpg",
      alt: "Fabric Storage",
      size: "w-64 h-48",
      position: { top: "5%", right: "8%" },
      zIndex: 10,
      rotation: 2,
    },
    {
      src: "/images/Washing.jpg",
      alt: "Washing Process",
      size: "w-52 h-40",
      position: { top: "25%", left: "15%" },
      zIndex: 8,
      rotation: 1,
    },
    {
      src: "/images/Finishing.jpg",
      alt: "Finishing Process",
      size: "w-52 h-40",
      position: { top: "25%", right: "15%" },
      zIndex: 8,
      rotation: -1,
    },
    {
      src: "/images/ServiceImage1.jpeg",
      alt: "Service Process 1",
      size: "w-44 h-36",
      position: { top: "45%", left: "5%" },
      zIndex: 6,
      rotation: -3,
    },
    {
      src: "/images/ServiceImage2.jpg",
      alt: "Service Process 2",
      size: "w-44 h-36",
      position: { top: "45%", left: "35%" },
      zIndex: 7,
      rotation: 2,
    },
    {
      src: "/images/ServiceImage3.jpeg",
      alt: "Service Process 3",
      size: "w-44 h-36",
      position: { top: "45%", right: "35%" },
      zIndex: 6,
      rotation: -2,
    },
    {
      src: "/images/ServiceImage4.jpeg",
      alt: "Service Process 4",
      size: "w-44 h-36",
      position: { top: "45%", right: "5%" },
      zIndex: 7,
      rotation: 3,
    },
    {
      src: "/images/Designs.jpg",
      alt: "Denim Production",
      size: "w-56 h-44",
      position: { top: "65%", left: "10%" },
      zIndex: 5,
      rotation: 1,
    },
    {
      src: "/images/Washing2.jpg",
      alt: "Denim Finish",
      size: "w-48 h-36",
      position: { top: "70%", left: "50%" },
      zIndex: 4,
      rotation: -2,
    },
    {
      src: "/images/Drying.jpg",
      alt: "Manufacturing",
      size: "w-48 h-36",
      position: { top: "70%", right: "48%" },
      zIndex: 4,
      rotation: 2,
    },
    {
      src: "/images/OurWork.jpg",
      alt: "Our Work",
      size: "w-56 h-44",
      position: { top: "65%", right: "10%" },
      zIndex: 5,
      rotation: -1,
    },
    {
      src: "/images/pants.jpg",
      alt: "Production",
      size: "w-40 h-32",
      position: { top: "85%", left: "20%" },
      zIndex: 3,
      rotation: -1,
    },
    {
      src: "/images/ShadedPant.jpg",
      alt: "Alert",
      size: "w-45 h-38",
      position: { top: "88%", left: "46%" },
      zIndex: 2,
      rotation: 1,
    },
    {
      src: "/images/jacket.webp",
      alt: "Fabric Roll",
      size: "w-40 h-32",
      position: { top: "85%", right: "20%" },
      zIndex: 3,
      rotation: -2,
    },
  ];

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === 0 ? collageItems.length - 1 : prev - 1
    );
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) =>
      prev === collageItems.length - 1 ? 0 : prev + 1
    );
  };

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

  // Keyboard control
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isModalOpen) return;
      if (e.key === "ArrowLeft") prevImage(e);
      if (e.key === "ArrowRight") nextImage(e);
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  // Hash scroll
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, [location]);

  return (
    <div
      id="howwedo"
      ref={sectionRef}
      className="w-full bg-white py-20 lg:py-24"
    >
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
              src="/images/Stitching1.jpg"
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
              src="/images/LiftedPant.jpg"
              alt="Fabric Storage Warehouse"
              className="w-full h-[350px] lg:h-[450px] object-cover rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
            />
          </div>
        </div>

        {/* Bottom Collage Section */}
        <div className="relative">
          {/* Desktop Collage */}
          <div
            ref={leftCollageRef}
            className="hidden md:block relative w-full h-[800px] lg:h-[900px] mx-auto"
          >
            {collageItems.map((item, index) => (
              <React.Fragment key={index}>
                <div
                  onClick={() => openModal(index)}
                  className={`collage-item absolute ${item.size} transform transition-all duration-500 hover:scale-110 hover:z-50 cursor-pointer`}
                  style={{
                    zIndex: item.zIndex,
                    top: item.position.top,
                    left: item.position.left,
                    right: item.position.right,
                    transform: `rotate(${item.rotation}deg)`,
                  }}
                >
                  <LazyImage
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
                  />
                </div>

                {index === 0 && (
                  <div
                    className="absolute top-[10%] left-1/2 -translate-x-1/2 flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-6 
               z-50 pointer-events-none"
                  >
                    {/* Stitching Machine Icon */}
                    <div className="flex flex-col items-center pointer-events-auto">
                      <div
                        className="group w-16 h-16 lg:w-18 lg:h-18 bg-orange-500 rounded-full flex items-center justify-center
                   transition-all duration-500 hover:scale-110 hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] hover:bg-orange-500 cursor-pointer"
                      >
                        <img
                          src="/images/sewing.png"
                          alt="Stitching Machine"
                                 style={{ filter: "invert(1)" }}
                          className="w-8 h-8 lg:w-10 lg:h-10 object-contain transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                        />
                      </div>
                    </div>

                    {/* Fabric Roll Icon */}
                    <div className="flex flex-col items-center pointer-events-auto">
                      <div
                        className="group w-16 h-16 lg:w-18 lg:h-18 bg-orange-500 rounded-full flex items-center justify-center
                   transition-all duration-500 hover:scale-110 hover:shadow-[0_0_25px_rgba(249,115,22,0.6)] hover:bg-orange-500 cursor-pointer"
                      >
                        <img
                          src="/images/fabric.png"
                          style={{ filter: "invert(1)" }}
                          alt="Fabric Roll"
                          className="w-8 h-8 lg:w-10 lg:h-10 object-contain transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Collage */}
          <div className="md:hidden relative w-full flex flex-wrap justify-center gap-4 py-6">
            {collageItems.map((item, index) => (
              <div
                key={index}
                onClick={() => openModal(index)}
                className="w-[45%] sm:w-[40%] h-auto rounded-xl shadow-lg cursor-pointer transform transition-transform duration-500 hover:scale-105"
                style={{
                  transform: `rotate(${
                    index % 2 === 0 ? -3 : 3
                  }deg) translateY(${(index % 3) * 4}px)`,
                  zIndex: 5 + (index % 3),
                }}
              >
                <LazyImage
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[1000]"
            onClick={closeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-5xl w-full mx-4 flex flex-col items-center"
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <LazyImage
                src={collageItems[currentIndex].src}
                alt={collageItems[currentIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl"
              />

              {/* Image Counter */}
              <p className="text-white text-sm mt-4 opacity-80 tracking-wide">
                {currentIndex + 1} / {collageItems.length}
              </p>

              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute cursor-pointer top-4 right-4 text-white hover:text-orange-500 transition text-2xl"
              >
                <FaTimes />
              </button>

              {/* Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 cursor-pointer -translate-y-1/2 text-white text-3xl hover:text-orange-500 transition"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 cursor-pointer -translate-y-1/2 text-white text-3xl hover:text-orange-500 transition"
              >
                <FaArrowRight />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OurProcess;
