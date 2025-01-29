import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { FaCheckCircle } from "react-icons/fa";
import { FaCheckToSlot } from "react-icons/fa6";
import { getText } from "../languages/index";
import { LanguageContext } from "../context/language";

const StudyUzb = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <>
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[500px] flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: "url('img/eduUzbBg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative z-10 text-5xl font-bold text-center">
          {getText("stduz1")}
        </h1>
      </div>

      {/* Content Section */}
      <Wrapper>
        <div className="py-12 space-y-12">
          {/* Kabul Mektubu Hizmeti */}
          <h1 className="text-xl">{getText("stduz2")}</h1>
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              {getText("stduz3")}
            </h2>
            <p className="text-lg text-gray-700 mb-4">{getText("stduz4")}</p>
            <ul className="list-disc pl-6 space-y-3 text-lg">
              <li>
                <FaCheckCircle className="inline text-blue-500 mr-2" />
                {getText("stduz5")}
              </li>
              <li>
                <FaCheckCircle className="inline text-blue-500 mr-2" />
                {getText("stduz6")}
              </li>
              <li>
                <FaCheckCircle className="inline text-blue-500 mr-2" />
                {getText("stduz7")}
              </li>
              <li>
                <FaCheckCircle className="inline text-blue-500 mr-2" />
                {getText("stduz8")}
              </li>

              <li>
                <FaCheckCircle className="inline text-blue-500 mr-2" />
                {getText("stduz9")}
              </li>
              <li>
                <FaCheckCircle className="inline text-blue-500 mr-2" />
                {getText("stduz10")}
              </li>
            </ul>
          </div>

          {/* Denklik İşlemleri Hizmeti */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg border border-gray-300">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              {getText("stduz11")}
            </h2>
            <p className="text-lg text-gray-700 mb-4">{getText("stduz12")}</p>
            <ul className="list-disc pl-6 space-y-3 text-lg">
              <li>
                <FaCheckToSlot className="inline text-green-500 mr-2" />
                {getText("stduz13")}
              </li>
              <li>
                <FaCheckToSlot className="inline text-green-500 mr-2" />
                {getText("stduz14")}
              </li>
              <li>
                <FaCheckToSlot className="inline text-green-500 mr-2" />
                {getText("stduz15")}
              </li>
              <li>
                <FaCheckToSlot className="inline text-green-500 mr-2" />{" "}
                {getText("stduz16")}
              </li>
              <li>
                <FaCheckToSlot className="inline text-green-500 mr-2" />{" "}
                {getText("stduz17")}
              </li>
              <li>
                <FaCheckToSlot className="inline text-green-500 mr-2" />
                {getText("stduz18")}
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default StudyUzb;
