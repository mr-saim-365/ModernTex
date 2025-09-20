import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import certificate1 from "/images/certificate1.jpg";
import certificate2 from "/images/certificate2.jpg";
import certificate3 from "/images/certificate3.jpg";
import certificate4 from "/images/certificate4.jpg";
import certificate5 from "/images/certificate5.jpg";
import certificate6 from "/images/certificate6.jpg";

const Certificates = () => {
  return (
    <>
    <Navbar />
        <section
      id="certificates"
      className="relative bg-fixed bg-center bg-cover py-20 px-3 md:px-6 lg:px-12"
      style={{ backgroundImage: "url('/images/backImage.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-60"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
        {/* Page Heading */}
        <h2 className="text-[26px] sm:text-3xl 2xl:text-[40px] font-bold font-serif mb-6">
          Our Certificates
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-sm sm:text-base leading-relaxed">
          At Modern Tex, we are committed to excellence, sustainability, and
          ethical manufacturing. Our certifications reflect our dedication to
          global standards, responsible production, and customer trust.
        </p>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Certificate 1 */}
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden p-6 text-gray-800 hover:scale-105 transition duration-500">
            <img
              src={certificate1}
              alt="Certificate 1"
              className="w-full h-56 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">
              ISO 9001:2015 Certification
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Recognized for our strong quality management system and commitment
              to continuous improvement.
            </p>
          </div>

          {/* Certificate 2 */}
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden p-6 text-gray-800 hover:scale-105 transition duration-500">
            <img
              src={certificate2}
              alt="Certificate 2"
              className="w-full h-56 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">
              OEKO-TEX® Standard 100
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Ensuring our fabrics are tested against harmful substances and
              certified safe for global markets.
            </p>
          </div>

          {/* Certificate 3 */}
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden p-6 text-gray-800 hover:scale-105 transition duration-500">
            <img
              src={certificate3}
              alt="Certificate 3"
              className="w-full h-56 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Sedex Certification</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Recognized for maintaining ethical trade practices and responsible
              supply chain management.
            </p>
          </div>

          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden p-6 text-gray-800 hover:scale-105 transition duration-500">
            <img
              src={certificate4}
              alt="Certificate 4"
              className="w-full h-56 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Sedex Certification</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Recognized for maintaining ethical trade practices and responsible
              supply chain management.
            </p>
          </div>

          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden p-6 text-gray-800 hover:scale-105 transition duration-500">
            <img
              src={certificate5}
              alt="Certificate 5"
              className="w-full h-56 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Sedex Certification</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Recognized for maintaining ethical trade practices and responsible
              supply chain management.
            </p>
          </div>

          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden p-6 text-gray-800 hover:scale-105 transition duration-500">
            <img
              src={certificate6}
              alt="Certificate 6"
              className="w-full h-56 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">Sedex Certification</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Recognized for maintaining ethical trade practices and responsible
              supply chain management.
            </p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
    </>

  );
};

export default Certificates;
