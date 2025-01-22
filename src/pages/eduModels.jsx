import React from "react";
import Wrapper from "../layout/wrapper";
import { FaSchool, FaBook, FaRunning } from "react-icons/fa";
import { Breadcrumb } from "antd";

const EducationModels = () => {
  const models = [
    {
      title: "Bilsem modeli",
      description:
        "Xorazm ta'lim modeli farzandga yo'naltirilgan o'qitishni ta'minlab, bilim olishga, mustaqillik va ijodiy fikrlashni rivojlantirishga imkoniyat yaratadi.",
      icon: <FaSchool className="text-blue-500 w-16 h-16 mb-4" />,
    },
    {
      title: "Maaf modeli",
      description:
        "Xorazm ta'lim modeli farzandga yo'naltirilgan o'qitishni ta'minlab, bilim olishga, mustaqillik va ijodiy fikrlashni rivojlantirishga imkoniyat yaratadi.",
      icon: <FaBook className="text-green-500 w-16 h-16 mb-4" />,
    },
    {
      title: "Spor Lisesi",
      description:
        "Xorazm ta'lim modeli farzandga yo'naltirilgan o'qitishni ta'minlab, bilim olishga, mustaqillik va ijodiy fikrlashni rivojlantirishga imkoniyat yaratadi.",
      icon: <FaRunning className="text-red-500 w-16 h-16 mb-4" />,
    },
    {
      title: "Bilsem modeli",
      description:
        "Xorazm ta'lim modeli farzandga yo'naltirilgan o'qitishni ta'minlab, bilim olishga, mustaqillik va ijodiy fikrlashni rivojlantirishga imkoniyat yaratadi.",
      icon: <FaSchool className="text-blue-500 w-16 h-16 mb-4" />,
    },
    {
      title: "Maaf modeli",
      description:
        "Xorazm ta'lim modeli farzandga yo'naltirilgan o'qitishni ta'minlab, bilim olishga, mustaqillik va ijodiy fikrlashni rivojlantirishga imkoniyat yaratadi.",
      icon: <FaBook className="text-green-500 w-16 h-16 mb-4" />,
    },
    {
      title: "Spor Lisesi",
      description:
        "Xorazm ta'lim modeli farzandga yo'naltirilgan o'qitishni ta'minlab, bilim olishga, mustaqillik va ijodiy fikrlashni rivojlantirishga imkoniyat yaratadi.",
      icon: <FaRunning className="text-red-500 w-16 h-16 mb-4" />,
    },
  ];

  return (
    <>
      <div
        className="relative bg-cover bg-center h-[708px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/eduModelsBg.jpeg')", // Replace with your background image URL
        }}
      >
        {/* Breadcrumb Section */}
        <div className="absolute top-36 left-8 z-10">
          <Breadcrumb
            separator={<span className="text-white">&gt;</span>}
            style={{
              color: "white",
              fontSize: "16px",
            }}
          >
            <Breadcrumb.Item>
              <a href="/" style={{ color: "white" }}>
                Bosh sahifa
              </a>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="cursor-pointer">
              Ta'lim xizmatlari
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <p className="text-white cursor-pointer">Ta'lim modellari</p>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        {/* Title Section */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-6xl font-bold">Ta'lim modellari</h1>
      </div>

      <Wrapper>
        <div className="py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-[20px] flex flex-col items-center border-l-8 shadow-lg border-[#1E73BE]"
              >
                <div className="flex items-center justify-between w-full">
                  <h2 className="text-xl font-semibold">{model.title}</h2>
                  {model.icon}
                </div>
                <p className="text-gray-600 mt-2">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center text-center mb-4">
          <div>
            <h1 className="text-3xl mb-4">
              Bu yerdan ozingi9zga kerakli t’alim modelini topolmadingizmi ?
              Unda biz sizga kerakli ta’lim modelini yaratishga yordam beramiz.
            </h1>
          </div>
          <div>
            <button className="bg-[#3658A9] p-2 text-white px-20 rounded-xl">
              Boglanish
            </button>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default EducationModels;
