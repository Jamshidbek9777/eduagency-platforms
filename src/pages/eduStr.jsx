import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { FaSchool, FaBook, FaRunning } from "react-icons/fa";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";

const EducationStrategies = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const models = [
    {
      title: getText("eduStr1"),
      description: getText("eduStr2"),
    },
    {
      title: getText("eduStr3"),
      description: getText("eduStr4"),
    },
    {
      title: getText("eduStr5"),
      description: getText("eduStr6"),
    },
    {
      title: getText("eduStr7"),
      description: getText("eduStr8"),
    },
    {
      title: getText("eduStr9"),
      description: getText("eduStr10"),
    },
    {
      title: getText("eduStr11"),
      description: getText("eduStr12"),
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
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-6xl font-bold">
          {getText("eduHeader")}
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
