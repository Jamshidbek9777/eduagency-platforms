import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import {
  FaCheckCircle,
  FaUniversity,
  FaBookOpen,
  FaGlobe,
} from "react-icons/fa";
import { FaCheckToSlot } from "react-icons/fa6";
import { LanguageContext } from "../context/language";
import { getText } from "../languages";

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
          Study in Uzbekistan
        </h1>
      </div>

      {/* Content Section */}
      <Wrapper>
        <div className="py-12 space-y-12">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="img/tsue.jpg"
                alt="University"
                className="rounded-lg mb-3 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold">
                Tashkent State University
              </h3>
              <p className="text-gray-600">
                Offering programs in IT, Engineering, and Business Management.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="img/unv2.webp"
                alt="University"
                className="rounded-lg mb-3 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold">
                Samarkand Medical Institute
              </h3>
              <p className="text-gray-600">
                One of the best institutions for medical and healthcare studies.
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-md">
              <img
                src="img/unv3.jpg"
                alt="University"
                className="rounded-lg mb-3 w-full h-48 object-cover"
              />
              <h3 className="text-xl font-semibold">
                Westminster International University
              </h3>
              <p className="text-gray-600">
                A globally recognized university with diverse academic programs.
              </p>
            </div>
          </div>

          {/* Scholarship Opportunities */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Scholarship & Financial Aid
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Uzbekistan provides various scholarships for international
              students to support their education.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg">
              <li>
                <FaCheckCircle className="inline text-blue-500 mr-2" />
                Government-funded scholarships for outstanding students.
              </li>
              <li>
                <FaCheckCircle className="inline text-blue-500 mr-2" />
                University-specific merit-based financial aid programs.
              </li>
              <li>
                <FaCheckCircle className="inline text-blue-500 mr-2" />
                Affordable tuition fees compared to Western universities.
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold">O'zbekiston haqida videolar:</h1>

            <div className="mt-4">
              <div className="flex flex-wrap justify-start gap-4">
                <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/2V-2ABkUREE"
                    title="K12NET Video 1"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                  ></iframe>
                </div>
                <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/vQVwkyn3-F8"
                    title="K12NET Video 1"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                  ></iframe>
                </div>

                {/* Video 1 */}
                <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                  <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/01_upSvzTRs"
                    title="K12NET Video 1"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default StudyUzb;
