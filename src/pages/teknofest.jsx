import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";

const Teknofest = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  return (
    <>
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[600px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/technofestBg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-6xl font-bold">Akademik Tour</h1>
      </div>

      {/* Content Section */}
      <Wrapper>
        <div className="py-10 space-y-16">
          {/* Kosmik lager */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#E6EAF4] p-4 rounded-[20px]">
            <div className="w-full h-[400px] md:h-[500px] overflow-hidden rounded-[18px] shadow-lg">
              <img
                src="/img/space1.jpg"
                alt="Classroom Design"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">
                {getText("akTourTitle")}
              </h2>
              <p className="mb-2">{getText("akTour2")}</p>
              <ul className="list-disc pl-5 space-y-2">
                {/* <li>{getText("akTour3")}</li> */}
              </ul>
            </div>
          </div>

          {/* Teknofest */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#E6EAF4] p-4 rounded-[20px]">
            <div className="w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg ">
              <img
                src="/img/service4.jpg"
                alt="Classroom Design"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Teknofest</h2>
              <p className="mb-2">{getText("akTour3")}</p>

              <h2 className="text-md mb-4">{getText("akTour4")}</h2>
            </div>
          </div>

          {/* Bilim va kashf */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#E6EAF4] p-4 rounded-[20px]">
            <div className="w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg">
              <img
                src="/img/bilim.jpg"
                alt="Classroom Design"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">{getText("akTour5")}</h2>
              <p className="mb-2">{getText("akTour7")}</p>

              <h2 className="text-md font-semibold mb-4 mt-4">
                {getText("akTour8")}
              </h2>
              <ul className="list-disc pl-6">
                <li>{getText("akTour9")}</li>
                <li>{getText("akTour10")}</li>
                <li>{getText("akTour11")}</li>
                <li>{getText("akTour12")}</li>
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Teknofest;
