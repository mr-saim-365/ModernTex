import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceImage1 from "/images/ServiceImage1.jpeg";
import ServiceImage2 from "/images/ServiceImage2.jpg";
import ServiceImage3 from "/images/ServiceImage3.jpeg";
import ServiceImage4 from "/images/ServiceImage4.jpeg";

const DivisionContent = () => {
  const services = [
    {
      id: "01",
      title: "Fabrication",
      description:
        "The foundation of every great garment is the fabric.We source only premium-quality denim and woven fabrics tailored to meet specific client and style requirements.Fabrics are selected based on design, texture, durability, and market trends.Each roll is quality checked before moving into production.",
      img: ServiceImage1,
    },
    {
      id: "02",
      title: "Stitching",
      description:
        "Our stitching unit combines skilled operators and modern machinery for high-efficiency output.Each production line produces up to 8,000 garments per day.We maintain precision, speed, and in-line quality control throughout the process.Advanced machines ensure clean construction and consistent quality",
      img: ServiceImage2,
    },
    {
      id: "03",
      title: "Washing",
      description:
        "We have a fully equipped in-house washing unit, staffed with experienced technicians.Our workforce brings years of specialized expertise in denim washing techniques.Only high-quality, eco-friendly chemicals are used to protect both fabric and environment.We focus on sustainable practices, including water-saving technologies and responsible chemical management.",
      img: ServiceImage3,
    },

    {
      id: "04",
      title: "Finishing",
      description:
        "The final stage where every garment is inspected, measured, and packed with care.Skilled finishing staff ensure products meet exact specifications and quality standards.Final checks include labeling, measurements, stitching accuracy, and overall presentation.Packaging is done with precision to protect the garment and deliver a premium unboxing experience.",
      img: ServiceImage4,
    },
  ];

  return (
    <>
      <Navbar />

      <div className="px-3 md:px-5 lg:px-0 my-30  text-[#4D4D4D] w-full lg:w-[90%] mx-auto">
        <h1 className="text-[26px] sm:text-3xl 2xl:text-[40px] mb-12 font-bold font-serif text-center">
          Our Divisions
        </h1>

        <div className="flex flex-col gap-12">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col md:flex-row md:gap-5 lg:gap-0 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }  bg-white overflow-hidden lg:justify-between`}
            >
              <div className="w-full md:w-1/2 lg:w-[40%] h-[300px] sm:h-[400px] lg:h-[450px] 2xl:h-[500px]">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div className="w-full md:w-1/2 lg:w-[40%] py-6 ">
                <div className="text-lg font-semibold mb-1">{service.id}</div>
                <h2 className="text-2xl font-bold font-serif mb-3">
                  {service.title}
                </h2>
                <p className="text-sm md:text-base text-justify">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DivisionContent;
