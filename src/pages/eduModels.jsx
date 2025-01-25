import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { FaSchool, FaBook, FaRunning } from "react-icons/fa";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";

const EducationModels = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  const models = [
    {
      title: getText("eduModel1"),
      description: getText("eduModel2"),
    },
    {
      title: getText("eduModel3"),
      description: getText("eduModel4"),
    },
    {
      title: getText("eduModel5"),
      description: getText("eduModel6"),
    },
    {
      title: getText("eduModel7"),
      description: getText("eduModel8"),
    },
    {
      title: getText("eduModel9"),
      description: getText("eduModel10"),
    },
    {
      title: getText("eduModel11"),
      description: getText("eduModel12"),
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
        {/* Title Section */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-6xl font-bold">
          {getText("eduModelHeader")}
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
        <div className="flex flex-col justify-center text-center mb-4">
          <div>
            <h1 className="text-3xl mb-4">{getText("eduModelPlus")}</h1>
          </div>
          <div>
            <button className="bg-[#3658A9] p-2 text-white px-20 rounded-xl">
              {getText("eduModelButton")}
            </button>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default EducationModels;
