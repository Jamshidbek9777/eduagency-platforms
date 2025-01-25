import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { IoCheckmarkDone } from "react-icons/io5";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";

const EducationDesign = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  return (
    <>
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[708px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/eduDesignBg.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-6xl font-bold">
          {getText("eduDesign1")}
        </h1>
      </div>

      {/* Content Section */}
      <Wrapper>
        <div className="py-10 space-y-16">
          {/* Class Concepts Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#E6EAF4] p-4 rounded-[20px]">
            <div className="w-full h-[400px] md:h-[500px] overflow-hidden rounded-[18px] shadow-lg">
              <img
                src="/img/classConcept.jpeg"
                alt="Classroom Design"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {getText("eduDesign2")}
              </h2>
              <p className="mb-2">{getText("eduDesign3")}</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>{getText("eduDesign4")}</li>
                <li>{getText("eduDesign5")}</li>
                <li>{getText("eduDesign6")}</li>
              </ul>
            </div>
          </div>

          {/* Laboratory Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#E6EAF4] p-4 rounded-[20px]">
            <div className="w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg ">
              <img
                src="/img/labsBg.jpeg"
                alt="Classroom Design"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {getText("eduDesign7")}
              </h2>
              <p className="mb-2">{getText("eduDesign8")}</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>{getText("eduDesign9")}</li>
              </ul>
              <h2 className="text-2xl font-bold mb-4 mt-4">
                {getText("eduDesign10")}
              </h2>
              <h2 className="text-md mb-4">{getText("eduDesign11")}</h2>
              <h2 className="text-md  mb-4">{getText("eduDesign12")}</h2>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-[#E6EAF4] p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              {getText("eduDesign13")}
            </h2>
            <ul className="list-none space-y-4">
              <li className="flex items-start">
                <IoCheckmarkDone className="text-green-500 mt-1 mr-2" />
                <p>
                  <strong>{getText("eduDesign14")}</strong>{" "}
                  {getText("eduDesign15")}
                </p>
              </li>
              <li className="flex items-start">
                <IoCheckmarkDone className="text-green-500 mt-1 mr-2" />
                <p>
                  <strong>{getText("eduDesign16")}</strong>
                  {getText("eduDesign17")}
                </p>
              </li>
              <li className="flex items-start">
                <IoCheckmarkDone className="text-green-500 mt-1 mr-2" />
                <p>
                  <strong>{getText("eduDesign18")}</strong>{" "}
                  {getText("eduDesign19")}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default EducationDesign;
