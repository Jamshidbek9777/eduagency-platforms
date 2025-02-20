import React from "react";
import Wrapper from "../layout/wrapper";

const Tours = () => {
  return (
    <div className="bg-[#d8f0ed] py-20 text-white">
      <Wrapper>
        <div className="text-center mb-16">
          <h1 className="text-5xl text-black font-extrabold mt-10">
            Sayohatlar
          </h1>
          <p className="text-gray-700 mt-4 mx-auto text-lg max-w-2xl">
            Texnologiya va fan olamiga sayohat qiling! Eng innovatsion va
            qiziqarli tadbirlarda qatnashing va yangi bilimlarga ega bo'ling.
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
              <button className="mt-5 px-6 py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-400 transition-all">
                Batafsil →
              </button>
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
    title: "Space Camp Türkiye",
    icon: "🚀",
    description:
      "Kosmik tadqiqotlar va astronavtlar hayotini o'rganish imkoniyati! Haqiqiy fazogirlar tajribasini his eting.",
  },
  {
    image: "/img/technofestBg.jpg",
    title: "Teknofest Sayohati",
    icon: "🎡",
    description:
      "Dunyodagi eng katta texnologiya festivallaridan biri! Startaplar, innovatsiyalar va turli ko'rgazmalar bilan tanishing.",
  },
];

export default Tours;
