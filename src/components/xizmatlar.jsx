import React, { useState } from "react";
import Wrapper from "../layout/wrapper";
import { FaBookmark, FaChalkboardTeacher } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import { MdLooks } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";

const categories = [
  { key: "models", label: "Raqamli ta'lim modellari" },
  { key: "design", label: "Aqlli sinf" },
  { key: "trainings", label: "Treninglar" },
];

const cards = {
  models: {
    title: "Raqamli ta'lim modellari",
    description: "Ta'lim modellari orqali o'z o'quv dasturingizni yaxshilang.",
    images: ["/img/montessori1.webp", "/img/montessori2.jpeg"],
    imgDesc: ["Montessori ta'lim modeli", "Bilsem ta'lim modeli"],
  },
  design: {
    title: "Aqlli sinf",
    description:
      "Zamonaviy ta'lim dizayni bilan samarali o'qitish jarayonini yarating.",
    images: [
      "/img/classConcepts1.jpg",
      "/img/lab-main.png",
      "/img/melodyRoom.jpg",
      "/img/stemRoom.jpg",
    ],
    imgDesc: [
      "Active learning center",
      "Labaratory Rooms",
      "Melody Rooms",
      "STEM Room",
    ],
  },
  trainings: {
    title: "Treninglar",
    description: "O'qituvchilar uchun maxsus trening dasturlari.",
    icons: [
      {
        icon: <LuBrain size={50} className="text-blue-600" />,
        label: "Miya va o'rganish",
      },
      {
        icon: <FaChalkboardTeacher size={50} className="text-red-600" />,
        label: "Global o'qituvchi",
      },
      {
        icon: <MdLooks size={50} className="text-yellow-600" />,
        label: "Diqqatni rivojlantiruvchi texnikalar",
      },
      {
        icon: <IoGameController size={50} className="text-green-600" />,
        label: "O'yinlar bilan ishlash",
      },
      {
        icon: <GiTeacher size={50} className="text-green-600" />,
        label: "Samarali o'qitish",
      },
      {
        icon: <FaBookmark size={50} className="text-black -600" />,
        label: "Portfel baholash",
      },
    ],
  },
};

const Xizmatlar = () => {
  const [activeTab, setActiveTab] = useState("models");
  const activeCard = cards[activeTab];

  return (
    <Wrapper>
      <div id="xizmatlar" className="py-12 px-4 mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Xizmatlar
        </h1>

        <div className="flex gap-4 mt-8 justify-center">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveTab(category.key)}
              className={`px-6 py-2 rounded-lg text-lg font-semibold transition-all duration-300 border-b-2 
                ${
                  activeTab === category.key
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-600 border-transparent hover:text-blue-500"
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="mt-10 p-8 rounded-xl shadow-lg bg-white text-center">
          <h3 className="text-2xl font-semibold text-gray-900">
            {activeCard.title}
          </h3>
          <p className="text-gray-700 mt-4">{activeCard.description}</p>

          {activeTab === "trainings" ? (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {activeCard.icons.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 border rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition-all"
                >
                  {item.icon}
                  <h1 className="text-lg pt-3 text-gray-800 font-medium">
                    {item.label}
                  </h1>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {activeCard.images.map((img, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={img}
                    alt={activeCard.imgDesc[index]}
                    className="w-full h-60 object-cover rounded-lg shadow-md"
                  />
                  <h1 className="text-lg pt-2 text-gray-800 font-medium">
                    {activeCard.imgDesc[index]}
                  </h1>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Xizmatlar;
