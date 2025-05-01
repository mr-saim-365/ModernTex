import React from 'react';
import { MdOutlineFacebook } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";


const Footer = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className='bg-[#222222] '>
   <footer id="footer" className=" text-[#ffffff] text-sm relative w-full md:w-[90%] mx-auto">
      <div ref={ref} className="w-full flex flex-col items-center">
        <motion.div
          className="py-[40px] md:w-[90%] px-8 md:px-0 flex items-center justify-center"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.div
            className="flex flex-wrap gap-8 justify-between w-full"
            variants={containerVariants}
          >
            <motion.div
              className="flex-1 min-w-[250px]"
              variants={itemVariants}
            >
              <Link href="index.html" className="flex items-center mb-6">
                <span className="text-3xl md:text-4xl  font-bold tracking-wide">
                  MT
                </span>
              </Link>
              <p className="text-sm">
              Modern-Tex
              </p>

            </motion.div>

            <motion.div
              className="flex-1 min-w-[200px] justify-center items-center"
              variants={itemVariants}
            >
              <h4 className="text-base font-bold pb-3 uppercase">Useful Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "/",
                      query: { scrollTo: "services" },
                    }}
                  >
                    0ur Services
                  </Link>
                </li>
                <li>
                  <Link
                    to={{
                      pathname: "/",
                      query: { scrollTo: "AboutUs" },
                    }}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/Contact">Contact Us</Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="flex-1 min-w-[200px]"
              variants={itemVariants}
            >
              <h4 className="text-base font-bold pb-3 uppercase">Our Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="#">Web Development</Link>
                </li>
                <li>
                  <Link to="#">Logo Design</Link>
                </li>
                <li>
                  <Link to="#">Software Consultancy</Link>
                </li>
                <li>
                  <Link to="#">Graphic Designing</Link>
                </li>
                <li>
                  <Link to="#">Digital Marketing</Link>
                </li>
                <li>
                  <Link to="#">Accounts Consultancy</Link>
                </li>
              </ul>
            </motion.div>

            <motion.div
              className="flex-1 min-w-[250px]"
              variants={itemVariants}
            >
              <h4 className="text-base font-bold pb-3 uppercase">Contact Us</h4>
              <p className="mt-4">
                <strong>Phone:</strong> <span>0321-2427626</span>
              </p>
              <p>
                <strong>Email:</strong> <span>infoclix@gmail.com</span>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center mt-8  py-4  w-full px-4 md:px-0"
          initial="hidden"
          animate={controls}
          variants={itemVariants}
        >
          <motion.div className="mx-auto md:w-[90%] w-full px-4 md:px-0 flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center">
            <p className="mb-1">
              © <span>Copyright</span> <strong className="px-1">Impact</strong>{" "}
              <span>All Rights Reserved Designed by <Link to="#">CLI-X</Link></span>
           
            </p>
            <div className="flex space-x-3 items-center">
              <div className='font-bold'>Follow us</div>

                <Link
                  to="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full border hover:text-blue-700 hover:border-white/60 transition"
                >
                  <MdOutlineFacebook size={20} />
                </Link>
                <Link
                  to="#"
                  className="flex items-center justify-center w-10 h-10 rounded-full border hover:text-pink-500 hover:border-white/60 transition"
                >
                  <IoLogoInstagram size={20} />
                </Link>
              </div>

          </motion.div>
        </motion.div>
      </div>
    </footer>
    </div>
 
  );
};

export default Footer;
