import React, { useEffect, useState } from "react";

const AnimatedCounter = ({ target, label, duration = 2000 }) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(true);
    };

    window.addEventListener("scroll", handleScroll, { once: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!hasScrolled) return;

    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [hasScrolled, target, duration]);

  return (
    <div className="text-center text-[#ffffff]">
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">
        {count.toLocaleString()}
      </div>
      <div className="text-sm lg:text-md font-medium">{label}</div>
    </div>
  );
};

const Hero = () => {
  return (
    <>
      <section className="bg-[linear-gradient(to_top_left,_#f48221_50%,_#faa749_95%)]">
        <div className="flex flex-col md:flex-row gap-5 overflow-hidden">
          <div className="md:ml-[5rem] 2xl:ml-[15rem] w-full md:w-[60%] mt-28">
            <div className="px-4 md:px-0 flex flex-col gap-5 text-center md:text-start">
              <div>
                <svg
                  width="100"
                  height="60"
                  viewBox="0 0 100 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-3"
                >
                  <path
                    d="M0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10 T 100 10"
                    stroke="#ffffff"
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d="M0 20 Q 10 10, 20 20 T 40 20 T 60 20 T 80 20 T 100 20"
                    stroke="#ffffff"
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d="M0 30 Q 10 20, 20 30 T 40 30 T 60 30 T 80 30 T 100 30"
                    stroke="#ffffff"
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d="M0 40 Q 10 30, 20 40 T 40 40 T 60 40 T 80 40 T 100 40"
                    stroke="#ffffff"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </div>

              <div className="text-white max-w-md">
                <p className="text-2xl text-[#ffffff] mb-2">New Fashion Item</p>
                <h1 className="text-5xl font-bold mb-4">Released Now!</h1>
                <p className="text-2xl mb-2 italic">Our biggest sale ever!</p>
                <p className="text-5xl font-bold text-[#ffffff]">40% OFF</p>
              </div>
              <div className="flex items-center mt-4 gap-x-6">
                <a
                  href="#"
                  className="rounded-lg bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm w-[40%] text-center"
                >
                  Try for free
                </a>
              </div>

              <div className="w-full flex justify-center">
                <svg
                  width="100"
                  height="60"
                  viewBox="0 0 100 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 30 Q 10 20, 20 30 T 40 30 T 60 30 T 80 30 T 100 30"
                    stroke="#ffffff"
                    strokeWidth="3"
                    fill="none"
                  />
                  <path
                    d="M0 40 Q 10 30, 20 40 T 40 40 T 60 40 T 80 40 T 100 40"
                    stroke="#ffffff"
                    strokeWidth="3"
                    fill="none"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white w-full md:w-[40%]">
            <div className="md:relative md:right-[20%] lg:right-[30%] flex px-3 md:px-0 gap-5 md:gap-10 justify-center items-center">
              <div className="mt-[5rem] md:mt-[12rem] mb-[2rem]">
                <img
                  src="/images/image1.jpeg"
                  alt="Model 1"
                  className="w-64 h-[50vh] object-cover "
                />
              </div>
              <div>
                <img
                  src="/images/image2.jpeg"
                  alt="Model 2"
                  className="w-64 h-[50vh] object-cover "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="my-0 md:my-16 flow-root">
          <div className="py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <AnimatedCounter target={4800} label="STITCHING (MACHINES)" />
                <AnimatedCounter
                  target={200000}
                  label="GARMENT PRODUCTION PIECES PER DAY"
                />
                <AnimatedCounter
                  target={120000}
                  label="FABRIC PRODUCTION IN KG PER DAY"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
