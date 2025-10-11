import { useState, useEffect, useRef } from "react";
import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoMenuOutline } from "react-icons/io5";
import { X } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { gsap } from "gsap";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isInVideoSection, setIsInVideoSection] = useState(false);
  const [open, setOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const navItemsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const videoSectionHeight = window.innerHeight * 0.9; // Video section height

      setIsScrolled(scrollY > 50);
      // Hide navbar when user is in the video section (after initial logo view)
      setIsInVideoSection(scrollY > 200 && scrollY < videoSectionHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!navbarRef.current) return;

    // Animate logo
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        }
      );
    }

    // Animate navigation items
    if (navItemsRef.current) {
      gsap.fromTo(
        navItemsRef.current.children,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }

    return () => {
      // Cleanup animations if needed
    };
  }, []);

  const handleNestedClick = (e) => {
    e.preventDefault();
    setScrollPos(window.scrollY);
    setOpen(!open);
  };

  useEffect(() => {
    window.scrollTo(0, scrollPos);
  }, [open]);


  const location = useLocation();
  const navigate = useNavigate();


  // Custom smooth scroll when clicking a link on the same page
  const handleLinkClick = (e, sectionId) => {
    if (location.pathname === "/") {
      e.preventDefault(); // prevent navigation
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // navigate to home with hash if not already there
      e.preventDefault();
      navigate(`/#${sectionId}`);
    }
  };

  // Highlight active section when scrolling
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, [location.pathname]);



  return (
    <>
      {/* Desktop Navbar */}
      <nav
        ref={navbarRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isInVideoSection
          ? "opacity-0 pointer-events-none"
          : isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2"
            : "bg-gray-100 pb-6 pt-2"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <button
            className="md:hidden absolute top-4 left-4 p-2 z-10 text-gray-700 hover:text-blue-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <IoMenuOutline size={25} />}
          </button>


          {isScrolled && (
            <div className="md:hidden absolute top-4 left-1/2 transform -translate-x-1/2">
              <img className="w-12 h-12" src="/images/logo.png" alt="Logo" />
            </div>
          )}


          {!isScrolled && (
            <div className="text-center mb-4 md:mb-6">
              <div ref={logoRef} className="flex items-center justify-center">

                <img
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 mr-4 sm:mr-6"
                  src="/images/logo.png"
                  alt="Logo"
                />

       
                <div className="flex flex-col items-start">
                
                  <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 font-medium tracking-wide">
                    MODERN TEX
                  </h2>
        
                  <div className="flex items-center mb-2">
                    <div className="w-6 sm:w-8 h-px bg-orange-500 mr-2 sm:mr-3"></div>
                    <span className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                      Est. 1989
                    </span>
                    <div className="w-6 sm:w-8 h-px bg-orange-500 ml-2 sm:ml-3"></div>
                  </div>


                </div>

              </div>
            </div>
          )}

          {/* Navigation Links */}
          <div
            ref={navItemsRef}
            className={`hidden md:flex justify-center font-medium text-gray-700 space-x-8 lg:space-x-12 xl:space-x-16 ${isScrolled ? "text-sm" : "text-base"
              }`}
          >
            <Link
              to="/"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              HOME
            </Link>

            <Link to="/#whoarewe" onClick={(e) => handleLinkClick(e, "whoarewe")} className="hover:text-blue-600 transition-colors duration-200">
              WHO ARE WE
            </Link>

            <Link to="/#howwedo" onClick={(e) => handleLinkClick(e, "howwedo")} className="hover:text-blue-600 transition-colors duration-200">
              HOW WE DO
            </Link>

            <Link to="/#about" onClick={(e) => handleLinkClick(e, "about")} className="hover:text-blue-600 transition-colors duration-200">
              OUR FOUNDERS
            </Link>

            <Link
              to="/#clients" onClick={(e) => handleLinkClick(e, "clients")} className="hover:text-blue-600 transition-colors duration-200"
            >
              OUR CLIENTS
            </Link>
            <Link
              to="/OurCertificates"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              OUR CERTIFICATES
            </Link>
            <Link
              to="/Contact"
              className="hover:text-blue-600 transition-colors duration-200"
            >
              CONTACT US
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${isMenuOpen
            ? "max-h-[500px] opacity-100 visible transition-all duration-300 ease-in"
            : "max-h-0 opacity-0 invisible transition-all duration-300 ease-out"
            }`}
        >
          <div className="px-4 pt-4 pb-4 font-medium bg-white shadow-lg">
            <Link
              to="/"
              className="block p-4 text-gray-700 hover:text-blue-600"
            >
              HOME
            </Link>
            
            <Link to="/#whoarewe" onClick={(e) => handleLinkClick(e, "whoarewe")} className="block p-4 text-gray-700 hover:text-blue-600">
              WHO ARE WE
            </Link>


            <Link to="/#howwedo" onClick={(e) => handleLinkClick(e, "howwedo")} className="block p-4 text-gray-700 hover:text-blue-600">
              HOW WE DO
            </Link>
            
          <Link to="/#about" onClick={(e) => handleLinkClick(e, "about")} className="block p-4 text-gray-700 hover:text-blue-600">
              OUR FOUNDERS
            </Link>


            <Link
              to="/#clients" onClick={(e) => handleLinkClick(e, "clients")} className="block p-4 text-gray-700 hover:text-blue-600"
            >
              OUR CLIENTS
            </Link>
            <Link
              to="/OurCertificates"
              className="block p-4 text-gray-700 hover:text-blue-600"
            >
              OUR CERTIFICATES
            </Link>
            <Link
              to="/Contact"
              className="block p-4 text-gray-700 hover:text-blue-600"
            >
              CONTACT US
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
