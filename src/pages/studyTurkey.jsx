import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { FaCheckCircle } from "react-icons/fa";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";

const StudyTurkey = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <>
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[500px] flex flex-col items-center justify-center text-white px-6"
        style={{ backgroundImage: "url('img/eduTurkeyBg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative z-10 text-5xl font-extrabold text-center">
          {getText("studyTurkey1")}
        </h1>
      </div>

      {/* Content Section */}
      <Wrapper>
        <div className="py-12 space-y-12 px-6 md:px-12 lg:px-20">
          {/* Why Türkiye? Section */}
          <div className="bg-white p-10 rounded-xl shadow-xl flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1 text-gray-800">
              <h2 className="text-4xl font-bold mb-4 text-blue-600">
                Why Türkiye?
              </h2>
              <p className="text-lg mb-6">
                Türkiye is a gateway to world-class education, rich history, and
                vibrant student life. With affordable education costs and
                welcoming culture, it is a top choice for international
                students.
              </p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" /> High-ranking
                  universities recognized globally
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" /> Affordable
                  tuition and living costs
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" /> Rich
                  cultural heritage and modern lifestyle
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-green-500 mr-2" /> Safe and
                  student-friendly environment
                </li>
              </ul>
            </div>
            <img
              src="img/studyTurkey.png"
              alt="Study in Türkiye"
              className="w-full md:w-1/2 rounded-lg shadow-lg"
            />
          </div>

          {/* Kabul Mektubu Hizmeti */}
          <div className="bg-blue-50 p-10 rounded-xl shadow-xl border border-blue-300">
            <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">
              {getText("studyTurkey3")}
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              {getText("studyTurkey4")}
            </p>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />{" "}
                {getText("studyTurkey5")}
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />{" "}
                {getText("studyTurkey6")}
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />{" "}
                {getText("studyTurkey7")}
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-blue-500 mr-2" />{" "}
                {getText("studyTurkey8")}
              </li>
            </ul>
          </div>

          {/* Videos Section */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800">
              Explore Türkiye
            </h1>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {["_jjIKMl90iM", "UFXsXSRubD4", "z7yqtW4Isec"].map(
                (video, index) => (
                  <iframe
                    key={index}
                    width="100%"
                    height="250"
                    src={`https://www.youtube.com/embed/${video}`}
                    title={`Video ${index + 1}`}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full rounded-lg shadow-lg"
                  ></iframe>
                )
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default StudyTurkey;
