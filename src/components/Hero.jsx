import React from "react";
import { useEffect, useState } from 'react';

const Hero = () => {
  const AnimatedCounter = ({ target, label, duration = 2000 }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = target / (duration / 16); // 60fps

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
    }, [target, duration]);

    return (
      <div className="text-center text-[#ffffff]">
        <div className="text-5xl font-bold  mb-2">
          {count.toLocaleString()}
        </div>
        <div className="text-md font-medium">{label}</div>
      </div>
    );
  };

  return (
    <>
      <section className="bg-[linear-gradient(to_top_left,_#f48221_50%,_#faa749_95%)]">
        <div className="">
          <div className="  flex flex-col md:flex-row gap-5 overflow-hidden  h-[75vh]">
            <div className="lg:ml-[5rem] 2xl:ml-[10rem] w-[60%] mt-28">
              <div className="flex flex-col gap-10 ">
                <div>
                  <svg
                    width="100"
                    height="60"
                    viewBox="0 0 100 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-6"
                  >
                    <path
                      d="M0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10 T 100 10"
                      stroke="#ffffff"
                      stroke-width="3"
                      fill="none"
                    />
                    <path
                      d="M0 20 Q 10 10, 20 20 T 40 20 T 60 20 T 80 20 T 100 20"
                      stroke="#ffffff"
                      stroke-width="3"
                      fill="none"
                    />
                    <path
                      d="M0 30 Q 10 20, 20 30 T 40 30 T 60 30 T 80 30 T 100 30"
                      stroke="#ffffff"
                      stroke-width="3"
                      fill="none"
                    />
                    <path
                      d="M0 40 Q 10 30, 20 40 T 40 40 T 60 40 T 80 40 T 100 40"
                      stroke="#ffffff"
                      stroke-width="3"
                      fill="none"
                    />
                  </svg>
                </div>

                <div className="text-white max-w-md">
                  <p className="text-2xl text-[#ffffff] mb-2">
                    New Fashion Item
                  </p>
                  <h1 className="text-5xl font-bold mb-8">Released Now!</h1>
                  <p className="text-2xl mb-2 italic">Our biggest sale ever!</p>
                  <p className="text-5xl font-bold text-[#ffffff]">40% OFF</p>
                </div>
                <div className="mt-10 flex items-center  gap-x-6 ">
                  <a
                    href="#"
                    className="rounded-lg bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm w-[40%] text-center"
                  >
                    Try for free
                  </a>
                </div>

                <div className="w-full flex  justify-center">
                  <svg
                    width="100"
                    height="60"
                    viewBox="0 0 100 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10 T 100 10"
                      stroke="#ffffff"
                      stroke-width="3"
                      fill="none"
                    />
                    <path
                      d="M0 20 Q 10 10, 20 20 T 40 20 T 60 20 T 80 20 T 100 20"
                      stroke="#ffffff"
                      stroke-width="3"
                      fill="none"
                    />
                    <path
                      d="M0 30 Q 10 20, 20 30 T 40 30 T 60 30 T 80 30 T 100 30"
                      stroke="#ffffff"
                      stroke-width="3"
                      fill="none"
                    />
                    <path
                      d="M0 40 Q 10 30, 20 40 T 40 40 T 60 40 T 80 40 T 100 40"
                      stroke="#ffffff"
                      stroke-width="3"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className=" bg-white  w-[40%]">
              <div className="relative right-[30%] flex gap-10 justify-center items-center">
                <div className="mt-[12rem]">
                  <img
                    src="/images/image1.jpeg"
                    alt="Model 1"
                    className="w-64 h-[50vh] object-cover "
                  />
                </div>

                <div className="">
                  <img
                    src="/images/image2.jpeg"
                    alt="Model 2"
                    className="w-64  h-[50vh] object-cover "
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="my-16 flow-root">
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
        </div>
      </section>
    </>
  );
};

export default Hero;

// import React from "react";

// const Hero = () => {
//   return (
//     <div className="bg-white ">
//       <div className=" px-6 lg:px-8 bg-[linear-gradient(to_top_right,_#f48221_50%,_#faa749_95%)] h-[90vh]">
//         <div className="  flex flex-col gap-50 ">
//           <div className="max-w-xl">

//             <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
//               You'll love this business landing page template
//             </h1>
//             <p className="mt-6 text-lg leading-8 text-gray-600">
//               Here, you can put a short description about your project.
//             </p>
//             <div className="mt-10 flex items-center  gap-x-6 ">
//               <a
//                 href="#"
//                 className="rounded-lg bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm w-[80%] text-center"
//               >
//                 Try for free
//               </a>
//             </div>
//           </div>

//           <div className="mt-16 flow-root">
//             <div>
//               <div className="text-center text-sm text-gray-500 mb-6">
//                 Trusted by 10,000+ companies of all sizes
//               </div>
//               <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-8">
//                 <div className="h-12 w-32 bg-gray-200 rounded-lg flex items-center justify-center">
//                   <span className="text-gray-400">Logo 1</span>
//                 </div>
//                 <div className="h-12 w-32 bg-gray-200 rounded-lg flex items-center justify-center">
//                   <span className="text-gray-400">Logo 2</span>
//                 </div>
//                 <div className="h-12 w-32 bg-gray-200 rounded-lg flex items-center justify-center">
//                   <span className="text-gray-400">Logo 3</span>
//                 </div>
//                 <div className="h-12 w-32 bg-gray-200 rounded-lg flex items-center justify-center">
//                   <span className="text-gray-400">Logo 4</span>
//                 </div>
//                 <div className="h-12 w-32 bg-gray-200 rounded-lg flex items-center justify-center">
//                   <span className="text-gray-400">Logo 5</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
