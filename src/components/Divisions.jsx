import React from "react";

const DivisionsSection = () => {
  return (
    <div className=" my-8 overflow-hidden">

      <div  style={{ backgroundImage: "url('/images/DivisionImage.png')" }} className="z-10 flex flex-col md:flex-row gap-8 text-[#ffffff] bg-cover bg-center bg-no-repeat">

      <div className="w-[90%] mx-auto flex gap-5 py-20">

      <div className="md:w-[60%]">
          <h1 className="text-3xl font-bold  mb-4">DIVISIONS</h1>
          <h2 className="text-2xl font-semibold mb-4">
            MANUFACTURING PROCESS
          </h2>
          <p className=" mb-6">
            Massoul is a truly vertically integrated Tartile Unit. It has
            in-house from Kristling, Fotolia Dining, processing Apparel
            Manufacturing and Country Institute. The Company has five sets a and
            a highly qualified experienced Miss Manager Needs each unit. All
            Miss Managers in turn report to the General Manager. The objective
            to operate in this manner is that there is a close co-ordinate and
            fair between all the divisions, they will operate in the most
            efficient manner in order to achieve competitive prices, timely
            delivery and quality products.
          </p>
        </div>

        {/* Numbered items */}
        <div className="md:w-[40%] grid grid-cols-2 gap-4">
          {["Spinning", "Kristling", "Processing", "Apparel"].map(
            (item, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-[#f48221] mb-2">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="font-semibold text-gray-700">{item}</div>
              </div>
            )
          )}
        </div>
      </div>

      </div>

    </div>
  );
};

export default DivisionsSection;
