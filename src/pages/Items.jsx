import React, { useState, useEffect, useRef } from "react";
import { useLocation, Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { slides } from "../slides";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Lazy Image Component for Product Cards
const LazyProductImage = ({
  src,
  alt,
  className,
  onMouseEnter,
  onMouseLeave,
}) => {
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
        rootMargin: "100px 0px", // Start loading 100px before the image enters viewport
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
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onLoad={handleLoad}
        />
      )}
    </div>
  );
};

const Items = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedCategory = queryParams.get("category") || "Men"; // Default to "Men"
  const [searchTerm, setSearchTerm] = useState("");

  // ✅ Save category to localStorage when it changes
  const [category, setCategory] = useState(selectedCategory);

  const sectionRef = useRef(null);
  const filtersRef = useRef(null);
  const productsRef = useRef(null);

  useEffect(() => {
    setCategory(selectedCategory);
    localStorage.setItem("selectedCategory", selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Animate filters section
    if (filtersRef.current) {
      gsap.fromTo(
        filtersRef.current.children,
        { y: -30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: filtersRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate products grid
    if (productsRef.current) {
      gsap.fromTo(
        productsRef.current.children,
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: productsRef.current,
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
  }, [category, searchTerm]); // Re-run when category or search changes

  const filteredSlides = slides.filter(
    (slide) =>
      slide.category.trim().toLowerCase() === category.trim().toLowerCase() &&
      slide.disc?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [imageIndices, setImageIndices] = useState({});

  // Function to change image
  const nextImage = (productId, length) => {
    setImageIndices((prev) => ({
      ...prev,
      [productId]: (prev[productId] + 1) % length || 0,
    }));
  };

  const prevImage = (productId, length) => {
    setImageIndices((prev) => ({
      ...prev,
      [productId]: prev[productId] === 0 ? length - 1 : prev[productId] - 1,
    }));
  };

  return (
    <>
      <Navbar />
      <div ref={sectionRef} className="min-h-screen flex flex-col">
        <div className="mt-[5rem] ">
          <div
            ref={filtersRef}
            className="mensWear flex flex-col my-10 gap-10 z-50 px-4 md:px-20 w-full mx-auto"
          >
            <div className="flex flex-col gap-10 items-start md:flex-row md:justify-between md:items-center">
              {/* ✅ Category Toggle */}
              <ul className="flex gap-5 text-[#000000] text-[17px] sm:text-lg uppercase cursor-pointer">
                {["Woman", "Man", "Kids"].map((cat) => (
                  <li key={cat}>
                    <button
                      className={`uppercase ${
                        category === cat ? "font-bold" : ""
                      }`}
                      onClick={() => setCategory(cat)}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>

              {/* ✅ Search Input */}
              <div className="flex items-center relative w-[250px]">
                <input
                  type="text"
                  className="border-2 border-[#ccc] relative py-1 px-2 rounded-[6px] bg-[#ffffff] w-full text-[16px]
                   text-[#000000] outline-none focus:border-[#007bff] focus:bg-[#ffffff] 
                   focus:[box-shadow:0_0_8px_rgba(0,123,255,0.3)] transition-all duration-300 ease-in-out"
                  placeholder="Search"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FiSearch
                  size={20}
                  className="cursor-pointer absolute right-[10px] text-[#000000]"
                />
              </div>
            </div>
          </div>

          {/* ✅ Product Grid */}
          <div className="md:px-0 flex flex-col gap-10 mb-12 ">
            <h2 className="text-[#4D4D4D] px-4 md:px-8 my-7 uppercase font-bold font-serif text-[18px]">
              <span>You are interested in {category}</span>
            </h2>

            {/* ✅ Check if products exist */}
            {filteredSlides.length > 0 ? (
              <div
                ref={productsRef}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 2xl:gap-8 px-3 md:px-8"
              >
                {filteredSlides.map((product, index) => {
                  return (
                    <div
                      key={product.id}
                      className="card relative group cursor-pointer"
                    >
                      <div className="h-[50vh] 2xl:h-[60vh] shadow-lg border border-gray-200 bg-white relative overflow-hidden">
                        <Link
                          to={`/ProductPage?id=${product.id}`}
                          state={product}
                        >
                          <LazyProductImage
                            className="w-full h-full object-cover transition-all duration-300"
                            src={product.src[imageIndices[product.id] || 0]}
                            alt={`Product ${index + 1}`}
                            onMouseEnter={() => {
                              if (product.src.length > 1) {
                                setImageIndices((prev) => ({
                                  ...prev,
                                  [product.id]: 1,
                                }));
                              }
                            }}
                            onMouseLeave={() => {
                              if (product.src.length > 1) {
                                setImageIndices((prev) => ({
                                  ...prev,
                                  [product.id]: 0,
                                }));
                              }
                            }}
                          />
                        </Link>

                        {/* Left Arrow */}
                        <button
                          className="absolute top-1/2 bg-white cursor-pointer text-black p-1 rounded-r-md shadow opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={(e) => {
                            e.stopPropagation();
                            prevImage(product.id, product.src.length);
                          }}
                        >
                          <MdOutlineKeyboardArrowLeft size={25} />
                        </button>

                        {/* Right Arrow */}
                        <button
                          className="absolute top-1/2 right-0 bg-white text-black cursor-pointer  p-1 rounded-l-md shadow opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={(e) => {
                            e.stopPropagation();
                            nextImage(product.id, product.src.length);
                          }}
                        >
                          <MdOutlineKeyboardArrowRight size={25} />
                        </button>
                      </div>
                      <div className="p-5 text-center">
                        <h2 className="mb-3 md:text-[15px] 2xl:text-[17px] text-[#111111] font-medium font-sans tracking-[2px] uppercase">
                          {product.title}
                        </h2>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-center text-gray-500 text-xl font-normal">
                No products found for "{category}"
              </p>
            )}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Items;
