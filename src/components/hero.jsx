import Wrapper from "../layout/wrapper.jsx";
import { useContext } from "react";
import { LanguageContext } from "../context/language.jsx";
import { FaCode } from "react-icons/fa";
import { getText } from "../languages/index.js";

const HeroSection = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <Wrapper>
      <div className="pt-16 flex flex-wrap items-center justify-center ">
        <div className="bg-[#d8f0ed] flex flex-col md:flex-row w-full h-auto md:h-[600px] p-6 md:p-16 justify-between items-center rounded-lg gap-6 md:gap-0">
          <div className="max-w-xl text-center md:text-left">
            <p className="text-blue-500 uppercase text-lg font-semibold">
              {getText("hero1")}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mt-2 leading-tight">
              {getText("hero2")}
            </h1>
            <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-medium shadow-md hover:bg-blue-600 transition">
              {getText("hero3")}
            </button>
          </div>

          <div className="relative w-full md:w-[400px] h-[300px] flex justify-center">
            <div className="absolute bottom-10 right-8 md:right-10 w-32 h-44 md:w-56 md:h-72 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/img/home1.avif"
                alt="Speaker 1"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-20 md:left-2 w-32 h-44 md:w-56 md:h-72 bg-gray-300 rounded-lg overflow-hidden shadow-lg">
              <img
                src="/img/truzex.jpeg"
                alt="Speaker 2"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-[-10px] right-[-10px] bg-blue-500 text-white p-3 rounded-full shadow-md">
              <FaCode size={24} />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HeroSection;
