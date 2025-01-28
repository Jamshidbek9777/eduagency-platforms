import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { FaSchool, FaBook, FaChalkboardTeacher } from "react-icons/fa";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";
import { FaChildReaching, FaChildren } from "react-icons/fa6";
import { HiPresentationChartBar } from "react-icons/hi";

const EducationModels = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  const models = [
    {
      title: getText("eduModel1"),
      description: getText("eduModel2"),
      details: getText("eduModelDetails1"),
      icon: <FaChalkboardTeacher className="text-6xl text-[#1E73BE]" />,
    },
    {
      title: getText("eduModel3"),
      description: getText("eduModel4"),
      details: getText("eduModelDetails2"),
      icon: <FaBook className="text-6xl text-[#1E73BE]" />,
    },
    {
      title: getText("eduModel5"),
      description: getText("eduModel6"),
      details: getText("eduModelDetails3"),
      icon: <FaChildren className="text-6xl text-[#1E73BE]" />,
    },
    {
      title: getText("eduModel7"),
      description: getText("eduModel8"),
      details: getText("eduModelDetails4"),
      icon: <FaSchool className="text-6xl text-[#1E73BE]" />,
    },
    {
      title: getText("eduModel9"),
      description: getText("eduModel10"),
      details: getText("eduModelDetails5"),
      icon: <HiPresentationChartBar className="text-6xl text-[#1E73BE]" />,
    },
    {
      title: getText("eduModel11"),
      description: getText("eduModel12"),
      details: getText("eduModelDetails6"),
      icon: <FaChildReaching className="text-6xl text-[#1E73BE]" />,
    },
  ];

  return (
    <>
      <div
        className="relative bg-cover bg-center h-[600px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/eduModelsBg.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-6xl font-bold">
          {getText("eduModelHeader")}
        </h1>
      </div>

      {/* Education Models Section */}
      <Wrapper>
        <div className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            {getText("eduModelIntro")}
          </h2>
          <div className="space-y-16">
            {models.map((model, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center`}
              >
                {/* Icon Section */}
                <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
                  <div className="flex items-center justify-center w-28 h-28 bg-[#F4F9FF] rounded-full shadow-md">
                    {model.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-2/3 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-[#1E73BE] mb-4">
                    {model.title}
                  </h3>
                  <p className="text-gray-700 text-lg mb-4">
                    {model.description}
                  </p>
                  <p className="text-gray-600">{model.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>

      {/* Call to Action Section */}
      <div className="bg-gray-100 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">{getText("eduModelPlus")}</h2>
          <button className="bg-[#3658A9] text-white px-12 py-3 rounded-xl text-lg">
            {getText("eduModelButton")}
          </button>
        </div>
      </div>
    </>
  );
};

export default EducationModels;
