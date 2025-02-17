import React, { useState } from "react";
import Wrapper from "../layout/wrapper";

const categories = [
  { key: "All", label: "Barcha kasblar" },
  { key: "Design", label: "Dizayn" },
  { key: "Frontend", label: "Frontend" },
  { key: "Mobile", label: "Mobil" },
  { key: "Backend", label: "Backend" },
  { key: "Full Stack", label: "Full Stack" },
  { key: "AI", label: "Sun'iy Intellekt" },
  { key: "Other", label: "Boshqalar" },
];

const cards = [
  {
    id: 1,
    category: "AI",
    title: "Data sayns va Sun'iy intellekt",
    image: "/img/card1.png",
  },
  {
    id: 2,
    category: "Cybersecurity",
    title: "Kiberxavfsizlik: pentesting",
    image: "/img/card1.png",
  },
  {
    id: 3,
    category: "Frontend",
    title: "Frontend – ReactJS",
    image: "/img/card1.png",
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCards =
    activeTab === "All"
      ? cards
      : cards.filter((card) => card.category === activeTab);

  return (
    <div className="bg-[#091621] py-20">
      <Wrapper>
        <div className="text-white p-6">
          <h1 className="text-4xl font-bold">Kasblar</h1>
          <p className="text-gray-400 mt-2 max-w-xl">
            Kasbga yo'naltirilgan praktikumlar yordamida eng tez va samarali
            yo‘llar bilan mutaxassislar qatoriga qo‘shiling.
          </p>
          <div className="flex gap-2 mt-6 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveTab(category.key)}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                  activeTab === category.key
                    ? "bg-blue-600 text-white"
                    : "border-blue-600 text-blue-400 hover:bg-blue-700 hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
            {filteredCards.map((card) => (
              <div
                key={card.id}
                className="relative p-6 rounded-2xl border border-transparent transition-all duration-300 hover:border-blue-500 h-[300px]"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  boxShadow: "0px 0px 10px rgba(0, 162, 255, 0.5)",
                }}
              >
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <button className="text-blue-400 mt-4 flex items-center gap-1">
                  BATAFSIL →
                </button>
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-52 h-52 absolute bottom-4 right-4 rounded-lg transition-transform duration-300 hover:scale-105"
                  style={{
                    filter: "drop-shadow(0px 0px 15px rgba(0, 162, 255, 0.9))",
                    mixBlendMode: "screen",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Services;
