import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { FaCheckCircle, FaFileAlt } from "react-icons/fa";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";

const Denklik = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <>
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[500px] flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: "url('img/denklikBg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative z-10 text-5xl font-bold text-center">
          Denlik xizmati
        </h1>
      </div>

      {/* Content Section */}
      <Wrapper>
        <div className="py-12 space-y-12">
          <h1 className="text-xl">{getText("studyTurkey2")}</h1>

          {/* Denklik İşlemleri Hizmeti */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg border border-gray-300">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              {getText("studyTurkey9")}
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              {getText("studyTurkey10")}
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg">
              <li>
                <FaFileAlt className="inline text-green-500 mr-2" />{" "}
                {getText("studyTurkey11")}
              </li>
              <li>
                <FaFileAlt className="inline text-green-500 mr-2" />{" "}
                {getText("studyTurkey12")}
              </li>
              <li>
                <FaFileAlt className="inline text-green-500 mr-2" />{" "}
                {getText("studyTurkey13")}
              </li>
              <li>
                <FaFileAlt className="inline text-green-500 mr-2" />{" "}
                {getText("studyTurkey14")}
              </li>
              <li>
                <FaFileAlt className="inline text-green-500 mr-2" />{" "}
                {getText("studyTurkey15")}
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Denklik;
