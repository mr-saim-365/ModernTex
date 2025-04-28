import { useState, useEffect } from "react";
import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { IoMenuOutline } from "react-icons/io5";
import { X } from "lucide-react";
import logo from "/images/logo.png";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  // const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      className="fixed top-0 left-0 right-0  backdrop-blur-md z-50 shadow-lg bg-white text-[#4D4D4D] w-[90%] mx-auto
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
            <div>
              <img
                className="w-[70px] h-[70px]"
                src={logo}
                alt="Logo"
              />
            </div>
          </div>

          <div
            className="hidden md:flex md:w-full md:justify-center font-normal space-x-9 lg:space-x-12 2xl:space-x-20"
            
          >
            <Link to="/">Home</Link>
            <Link to="/AboutUS">About Us</Link>
            <Link to="/Contact">Contact Us</Link>
            <Link to="/#faq" onClick={handleFAQClick}>
              FAQ
            </Link>
          </div>

          <div>
            
          </div>
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
          <Link to="/AboutUS" className="block p-4">
            About Us
          </Link>
          <Link to="/Contact" className="block p-4">
            Contact US
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
