import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Universities = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <>
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[600px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/unvBg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
        <h1 className="relative z-10 text-6xl font-bold drop-shadow-lg text-center">
          {getText("header4")}
        </h1>
      </div>

      {/* Content Section */}
      <Wrapper>
        <div className="py-14 space-y-20">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            {/* Student transfer */}
            <div className="mt-10">
              <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold mb-4">
                  {getText("navbar3")}
                </h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4">
                  <img
                    src="img/truzex.jpeg"
                    alt="Öğrenci ve Akademisyen Transferi"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h4 className="text-xl font-semibold text-gray-800">
                    {getText("partnership1")}
                  </h4>
                  <ul className="list-disc pl-6 text-lg text-gray-600 space-y-3">
                    <li>{getText("partnership2")}</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4">
                  <img
                    src="img/franchize.png"
                    alt="Franchise ve İşbirliği Yönetimi"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h4 className="text-xl font-semibold text-gray-800">
                    {getText("partnership3")}
                  </h4>
                  <ul className="list-disc pl-6 text-lg text-gray-600 space-y-3">
                    <li>{getText("partnership4")}</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4">
                  <img
                    src="img/truz.jpg"
                    alt="Pazar Araştırması ve Rekabet Analizi"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h4 className="text-xl font-semibold text-gray-800">
                    {getText("partnership5")}
                  </h4>
                  <ul className="list-disc pl-6 text-lg text-gray-600 space-y-3">
                    <li>{getText("partnership6")}</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4">
                  <img
                    src="img/internationalEvent.jpeg"
                    alt="Uluslararası Etkinlik ve Organizasyon Yönetimi"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h4 className="text-xl font-semibold text-gray-800">
                    {getText("partnership7")}
                  </h4>
                  <ul className="list-disc pl-6 text-lg text-gray-600 space-y-3">
                    <li>{getText("partnership8")}</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4">
                  <img
                    src="img/teknoloji.webp"
                    alt="Teknoloji ve Dijital Çözümler"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h4 className="text-xl font-semibold text-gray-800">
                    {getText("partnership9")}
                  </h4>
                  <ul className="list-disc pl-6 text-lg text-gray-600 space-y-3">
                    <li>{getText("partnership10")}</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4">
                  <img
                    src="img/accredationBg.jpg"
                    alt="Sertifikasyon ve Akreditasyon Hizmetleri"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h4 className="text-xl font-semibold text-gray-800">
                    {getText("partnership11")}
                  </h4>
                  <ul className="list-disc pl-6 text-lg text-gray-600 space-y-3">
                    <li>{getText("partnership12")}</li>
                  </ul>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4">
                  <img
                    src="img/joint.jpg"
                    alt="Ortak Eğitim Programları Geliştirme"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h4 className="text-xl font-semibold text-gray-800">
                    {getText("partnership13")}
                  </h4>
                  <ul className="list-disc pl-6 text-lg text-gray-600 space-y-3">
                    <li>{getText("partnership14")}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Teacher trainings */}
            <div className="mt-10">
              <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold mb-4">
                  {getText("navbar9")}
                </h1>
                <a href="/teacherTrainings" className="flex items-center gap-2">
                  <p>Learn more</p>
                  <FaArrowAltCircleRight />
                </a>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <p className="mt-4 text-base">{getText("tTrain1")}</p>
              </div>

              <div className="mt-4">
                <div className="flex flex-wrap justify-start gap-4">
                  {/* Video 2 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/tTraining1.jpeg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/tTraining2.jpg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                  {/* Video 1 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/tTraining3.jpg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Universities;
