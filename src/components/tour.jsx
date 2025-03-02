import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";
import {
  FaRocket,
  FaUniversity,
  FaGlobe,
  FaUsers,
  FaLightbulb,
  FaCheckCircle,
} from "react-icons/fa";

const Tours = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <div className="bg-[#f4f7fc] py-20 text-gray-900" id="tours">
      <Wrapper>
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mt-10 flex items-center justify-center gap-2">
            TeknoTour: Geleceğin Teknolojilerini Yerinde Keşfedin!
          </h1>
          <p className="text-lg text-gray-700 mt-6 max-w-3xl mx-auto">
            Dünyanın en yenilikçi ülkelerinde eğitim ve teknolojiye yön veren
            merkezleri yakından görmek, ilham almak ve bilgi birikimini artırmak
            artık mümkün! EduAgency olarak sunduğumuz TeknoTour hizmeti,
            öğrencilere, akademisyenlere, girişimcilere ve teknoloji
            meraklılarına özel teknoloji gezileri düzenleyerek onları küresel
            inovasyon merkezleriyle buluşturuyor.
          </p>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
            <FaGlobe className="text-green-500" /> TeknoTour Destinasyonları 🌍
          </h2>
          <ul className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto text-left space-y-4">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-500" /> 🚀 Uzay Kampı
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-500" /> 🎡 Teknofest
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-blue-500" /> ✈ Gruba Özel
              Destinasyon Dizaynı
            </li>
          </ul>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
            <FaUsers className="text-purple-500" /> Kimler İçin? 🎯
          </h2>
          <ul className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto text-left space-y-4">
            <li className="flex items-center gap-2">
              <FaLightbulb className="text-yellow-500" /> 💡 Öğrenciler –
              Teknolojiyi öğrenmek ve kariyerlerini şekillendirmek isteyen
              gençler.
            </li>
            <li className="flex items-center gap-2">
              <FaUniversity className="text-red-500" /> 🎓 Akademisyenler ve
              Eğitimciler – Yeni eğitim modelleri ve teknolojik gelişmeleri
              yerinde görmek isteyen eğitim uzmanları.
            </li>
            <li className="flex items-center gap-2">
              <FaRocket className="text-blue-500" /> 🚀 Girişimciler ve İş
              İnsanları – Küresel teknoloji ekosistemiyle bağlantı kurarak
              işlerini geleceğe taşımak isteyen profesyoneller.
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          {tourData.map((tour, index) => (
            <div
              key={index}
              className="relative p-8 rounded-3xl border border-gray-300 transition-all duration-300 hover:border-blue-500 bg-white shadow-xl hover:shadow-2xl transform hover:-translate-y-2"
            >
              <img
                src={tour.image}
                alt={tour.title}
                className="w-full h-64 object-cover rounded-xl"
              />
              <h3 className="text-2xl font-bold text-gray-900 mt-5 flex items-center gap-2">
                {tour.icon} {tour.title}
              </h3>
              <p className="text-gray-600 mt-3 text-lg">{tour.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <h2 className="text-3xl font-bold">
            📩 TeknoTour ile Geleceği Keşfetmeye Hazır mısınız?
          </h2>
          <p className="text-lg text-gray-600 mt-6 max-w-3xl mx-auto">
            Bize ulaşın ve bir sonraki teknoloji gezisine katılın!
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-lg shadow-lg transition-all">
            TeknoTour'a Katıl
          </button>
        </div>
      </Wrapper>
    </div>
  );
};

const tourData = [
  {
    image: "/img/space1.jpg",
    title: "Space Camp Türkiye",
    icon: "🚀",
    description: getText("tur2"),
  },
  {
    image: "/img/technofestBg.jpg",
    title: getText("tur3"),
    icon: "🎡",
    description: getText("tur4"),
  },
];

export default Tours;
