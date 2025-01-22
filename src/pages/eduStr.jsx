import React from "react";
import Wrapper from "../layout/wrapper";
import { FaSchool, FaBook, FaRunning } from "react-icons/fa";
import { Breadcrumb } from "antd";

const EducationStrategies = () => {
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
          backgroundImage: "url('img/eduStrBg.jpeg')",
        }}
      >
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
              <p className="text-white cursor-pointer">
                Dasturlar va strategiyalar
              </p>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-6xl font-bold">
          Dasturlar va strategiyalar
        </h1>
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
      </Wrapper>
    </>
  );
};

export default EducationStrategies;
