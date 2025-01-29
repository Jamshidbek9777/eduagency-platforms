import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { LanguageContext } from "../context/language";
import { getText } from "../languages";

const Partnership = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[600px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/partnershipBg.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative z-10 text-5xl md:text-6xl font-extrabold tracking-tight text-center">
          {getText("navbar3")}
        </h1>
      </div>

      {/* Content Section */}
      <Wrapper>
        <div className="py-16 space-y-16">
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
      </Wrapper>
    </>
  );
};

export default Partnership;
