import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/BackButton";
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
        className="relative bg-fixed bg-center bg-cover pt-50 pb-10 px-3 md:px-6 lg:px-12"
        style={{ backgroundImage: "url('/images/backImage.jpg')" }}
      >
        <Button />
        <div className="relative z-10 max-w-6xl mx-auto text-center text-white">
          {/* Page Heading */}
          <div className="bg-white/70 rounded-2xl p-6 mb-12">
            <h2 className="text-[26px] sm:text-3xl 2xl:text-[40px] text-[#4D4D4D] font-bold font-serif mb-6">
              Our Certificates
            </h2>
            <p className="max-w-2xl mx-auto text-sm text-gray-600 sm:text-base leading-relaxed">
              At Modern Tex, we are committed to excellence, sustainability, and
              ethical manufacturing. Our certifications reflect our dedication
              to global standards, responsible production, and customer trust.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Certificate 1 */}
            <div className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden p-6 text-gray-800 hover:scale-105 transition duration-500">
              <img
                src={certificate1}
                alt="QESI Certification"
                className="w-full h-30 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">QESI Certification</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The QESI certification reflects our strong standards in quality,
                environment, safety, and innovation. It ensures that Modern Tex
                maintains sustainable production while delivering denim products
                that meet international expectations with responsibility and
                care.
              </p>
            </div>

            {/* Certificate 2 */}
            <div className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden p-6 text-gray-800 hover:scale-105 transition duration-500">
              <img
                src={certificate2}
                alt="Sedex Certification"
                className="w-40 h-30 mx-auto object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">
                Sedex Certification
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sedex certification confirms our commitment to ethical trade,
                transparency, and responsible sourcing. It highlights fair labor
                practices and safe workplaces, ensuring that every denim product
                reflects accountability across our supply chain and global
                partners.
              </p>
            </div>

            {/* Certificate 3 */}
            <div className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden p-6 text-gray-800 hover:scale-105 transition duration-500">
              <img
                src={certificate3}
                alt="WRAP Certification"
                className="w-40 h-30 mx-auto object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">WRAP Certification</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                WRAP certification assures that our denim production is lawful,
                humane, and ethical. It reflects safe working conditions and
                worker rights, demonstrating Modern Tex’s responsibility in
                delivering fashion with trust and accountability worldwide.
              </p>
            </div>

            {/* Certificate 4 */}
            <div className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden p-6 text-gray-800 hover:scale-105 transition duration-500">
              <img
                src={certificate4}
                alt="amfori BSCI Certification"
                className="w-48 h-30 mx-auto object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">
                amfori BSCI Certification
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                amfori BSCI certification demonstrates our focus on fair wages,
                employee rights, and safe workplaces. It highlights Modern Tex’s
                role in ensuring responsible denim production while respecting
                social values and global compliance standards at every stage.
              </p>
            </div>

            {/* Certificate 5 */}
            <div className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden p-6 text-gray-800 hover:scale-105 transition duration-500">
              <img
                src={certificate5}
                alt="ISO Certification"
                className="w-full h-30 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">ISO Certification</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                ISO certifications confirm our strong quality management and
                environmental responsibility. They recognize that Modern Tex
                delivers denim products with consistent standards, reduced
                environmental impact, and a focus on efficiency and
                sustainability.
              </p>
            </div>

            {/* Certificate 6 */}
            <div className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden p-6 text-gray-800 hover:scale-105 transition duration-500">
              <img
                src={certificate6}
                alt="BCI Certification"
                className="w-40 h-30 mx-auto object-contain mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">BCI Certification</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The Better Cotton Initiative ensures sustainable cotton sourcing
                and reduced environmental impact. It improves farmer livelihoods
                and supports fair practices, allowing Modern Tex to deliver
                denim that is better for both people and the planet.
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
