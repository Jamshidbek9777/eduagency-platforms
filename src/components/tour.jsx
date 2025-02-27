import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";

const Tours = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <div className="bg-[#d8f0ed] py-20 text-white" id="tours">
      <Wrapper>
        <div className="text-center mb-16">
          <h1 className="text-4xl text-black font-bold mt-10">Akademik Tur</h1>
          <p className="text-gray-700 mt-4 mx-auto text-lg max-w-2xl">
            {getText("tur1")}
          </p>
        </div>

        {/* Tours Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Tour Card Component */}
          {tourData.map((tour, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl border border-gray-300 transition-all duration-300 hover:border-blue-500 bg-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-64 object-cover rounded-xl"
              />
              <h3 className="text-2xl font-bold text-gray-900 mt-5">
                {tour.icon} {tour.title}
              </h3>
              <p className="text-gray-600 mt-3 text-lg">{tour.description}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

const tourData = [
  {
    image: "/img/space1.jpg",
    title: "Space Camp Turkiye",
    icon: "🚀",
    description: getText("tur2"),
  },
  {
    image: "/img/technofestBg.jpg",
    title: getText("tur3"),
    icon: "🎡",
    description: getText("tur4"),
  },
];

export default Tours;
