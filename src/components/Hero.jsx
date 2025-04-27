import React from "react";

const Hero = () => {
  return (
    <>
      <section className="bg-[linear-gradient(to_top_left,_#f48221_50%,_#faa749_95%)]  mt-[70px] ">
        <div className=" p-6 flex flex-col md:flex-row gap-5 justify-between overflow-hidden px-4">
          <div className="flex flex-col gap-10">
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
              <p className="text-2xl text-[#ffffff] mb-2">New Fashion Item</p>
              <h1 className="text-5xl font-bold mb-8">Released Now!</h1>
              <p className="text-2xl mb-2 italic">Our biggest sale ever!</p>
              <p className="text-5xl font-bold text-[#ffffff]">40% OFF</p>
            </div>

            <div className="w-full">

              <svg
                width="100"
                height="60"
                viewBox="0 0 100 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                    className="float-right"
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

          <div className="flex gap-4 items-center">
            <div>
              <img
                src="/images/image1.jpeg"
                alt="Model 1"
                className="w-60 h-[50vh] object-cover rounded-full"
              />
            </div>

            <div>
              <img
                src="/images/image2.jpeg"
                alt="Model 2"
                className="w-60  h-[50vh] object-cover rounded-full"
              />

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
