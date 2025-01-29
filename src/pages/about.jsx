import React, { useContext } from "react";

import {
  FaAward,
  FaHandsHelping,
  FaLightbulb,
  FaBalanceScale,
} from "react-icons/fa";
import Wrapper from "../layout/wrapper";
import ContactUs from "../components/contactUs";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";
import Helmet from "../components/helmet.jsx";

const About = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <>
      <Helmet
        title={getText("AboutPageTitle") || "About Us"}
        description={
          getText("AboutPageDesc") ||
          "Learn more about our agency and services."
        }
        link="/about"
        keywords="about, EduAgency, Uzbekistan, education"
      />

      <div
        className="relative bg-cover bg-center h-[600px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/aboutusBg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-6xl font-bold drop-shadow-lg text-center">
          {getText("topbar3")}
        </h1>
      </div>
      <Wrapper>
        <div className="mt-10 flex flex-col items-center">
          <div className="pb-10">
            <h1 className="text-2xl mb-4">{getText("aboutText")}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-2xl font-bold text-[#4A90E2] mb-4">
                  {getText("vizyonText1")}
                </h3>
                <p className="text-gray-600">{getText("vizyonText3")}</p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <h3 className="text-2xl font-bold text-[#4A90E2] mb-4">
                  {getText("vizyonText2")}
                </h3>
                <p className="text-gray-600">{getText("vizyonText4")}</p>
              </div>
            </div>
          </div>

          {/* Değerlerimiz Section */}
          <div className="bg-white px-8 py-10 rounded-3xl shadow-lg flex flex-col gap-10  mb-12 mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#e63f38] text-center mb-8">
              {getText("degeHeader")}
            </h1>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <li className="flex flex-col items-center text-gray-600 text-lg sm:text-xl md:text-2xl">
                <FaAward className="mb-4 text-4xl sm:text-5xl text-[#4A90E2]" />
                <div className="text-center text-xl">
                  <strong className="block text-sm sm:text-lg font-semibold">
                    {getText("degeText1")}:
                  </strong>
                  {getText("degeText5")}
                </div>
              </li>
              <li className="flex flex-col items-center text-gray-600 text-lg sm:text-xl md:text-2xl">
                <FaHandsHelping className="mb-4 text-4xl sm:text-5xl text-[#e63f38]" />
                <div className="text-center text-xl">
                  <strong className="block ext-sm sm:text-lg font-semibold">
                    {getText("degeText2")}:
                  </strong>
                  {getText("degeText6")}
                </div>
              </li>
              <li className="flex flex-col items-center text-gray-600 text-lg sm:text-xl md:text-2xl">
                <FaLightbulb className="mb-4 text-4xl sm:text-5xl text-[#4A90E2]" />
                <div className="text-center text-xl">
                  <strong className="block ext-sm sm:text-lg font-semibold">
                    {getText("degeText3")}:
                  </strong>
                  {getText("degeText7")}
                </div>
              </li>
              <li className="flex flex-col items-center text-gray-600 text-lg sm:text-xl md:text-2xl">
                <FaBalanceScale className="mb-4 text-4xl sm:text-5xl text-[#e63f38]" />
                <div className="text-center text-xl">
                  <strong className="block ext-sm sm:text-lg font-semibold">
                    {getText("degeText4")}:
                  </strong>
                  {getText("degeText8")}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default About;
