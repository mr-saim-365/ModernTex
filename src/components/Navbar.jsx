import { useState, useEffect, useRef } from "react";
import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoMenuOutline } from "react-icons/io5";
import { X } from "lucide-react";
import logo from "/images/logo.png";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { gsap } from "gsap";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  const navbarRef = useRef(null);
  const logoRef = useRef(null);
  const navItemsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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

  const handleFAQClick = () => {
    if (location.pathname === "/") {
      document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 left-0 right-0 backdrop-blur-md z-50 shadow-lg bg-white text-[#4D4D4D] md:mx-6 lg:w-[90%] lg:mx-auto
      "
    >
      <div className="px-4 sm:px-6 h-18 lg:px-8">
        <div className="flex items-center">
          <div className="flex justify-between md:justify-normal w-full md:w-auto items-center">
            <button
              className="md:hidden -ml-2 p-2 flex order-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <IoMenuOutline size={25} />}
            </button>
            <div ref={logoRef}>
              <img className="w-[70px] h-[70px]" src={logo} alt="Logo" />
            </div>
          </div>

          <div
            ref={navItemsRef}
            className="hidden md:flex md:w-full md:justify-center font-normal space-x-9 lg:space-x-12 2xl:space-x-20"
          >
            <Link to="/">Home</Link>
            <div className="relative flex items-center gap-1 group">
              <span>Catalog</span>
              <RiArrowDownSLine size={16} className="mt-1" />
              <div className="bg-[#222222] text-[#ffffff] py-4 px-2 w-[150px] rounded-lg shadow-lg flex flex-col items-center gap-3 absolute top-[3rem] left-[-45px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link className="hover:scale-110" to="/Items?category=Man">
                  Women
                </Link>
                <Link className="hover:scale-110 " to="/Items?category=Woman">
                  Men
                </Link>
                <Link className="hover:scale-110" to="/Items?category=Kids">
                  Kid
                </Link>
              </div>
            </div>
            <Link to="/AboutUS">About Us</Link>
            <Link to="/Contact">Contact Us</Link>
            <Link to="/#faq" onClick={handleFAQClick}>
              Our Factory
            </Link>
          </div>

          <div></div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMenuOpen
            ? "max-h-[500px] opacity-100 visible transition-all duration-300 ease-in"
            : "max-h-0 opacity-0 invisible transition-all duration-300 ease-out"
        }`}
      >
        <div className="px-2 pt-4 pb-4 font-normal">
          <Link to="/" className="block p-4">
            Home
          </Link>

          <div className="relative w-[92%]">
            <button
              onClick={handleNestedClick}
              className="flex p-4 items-center gap-1 w-full text-left"
            >
              Catalog
              <RiArrowDownSLine size={16} className="mt-1" />
            </button>
            <div
              className={`overflow-hidden px-2 py-0 rounded-lg shadow-lg flex flex-col bg-[#222222] text-[#ffffff] relative left-[7%] transition-all duration-300 ease-in-out ${
                open ? "max-h-[150px] opacity-100 py-4" : "max-h-0 opacity-0"
              } `}
            >
              <Link
                className="hover:scale-110 block p-2"
                to="/Items?category=Man"
              >
                Women
              </Link>
              <Link
                className="hover:scale-110 block p-2"
                to="/Items?category=Woman"
              >
                Men
              </Link>
              <Link
                className="hover:scale-110 block p-2"
                to="/Items?category=Kids"
              >
                Kid
              </Link>
            </div>
          </div>
          <Link to="/AboutUS" className="block p-4">
            About Us
          </Link>
          <Link to="/Contact" className="block p-4">
            Contact US
          </Link>
          <Link to="/OurFactory" className="block p-4">
            Our Factory
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
