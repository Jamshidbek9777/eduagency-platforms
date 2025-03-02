import React, { useContext, useState } from "react";
import Wrapper from "../layout/wrapper";
import {
  FaBookmark,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaLightbulb,
} from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import { MdLooks } from "react-icons/md";
import { IoGameController } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";

const Xizmatlar = () => {
  const categories = [
    { key: "models", label: "Raqamli ta'lim modellari" },
    { key: "design", label: "Aqlli sinf" },
    { key: "trainings", label: "Dijital Öğretmenler" },
  ];

  const cards = {
    models: {
      title: getText("x1"),
      description: getText("x5"),
      images: ["/img/montessori1.webp", "/img/montessori2.jpeg"],
      imgDesc: [getText("x6"), , getText("x7")],
    },
    design: {
      title: getText("x2"),
      description: getText("x8"),
      images: [
        "/img/classConcepts1.jpg",
        "/img/lab-main.png",
        "/img/melodyRoom.jpg",
        "/img/stemRoom.jpg",
        "/img/lab1.jpg",
        "/img/astranomy.jpg",
        "/img/labsBg.jpeg",
        "/img/robotic.jpeg",
      ],
      imgDesc: [
        getText("x10"),
        getText("x12"),
        getText("x14"),
        getText("x16"),
        getText("x18"),
        getText("x20"),
        getText("x22"),
        getText("x24"),
      ],
    },

    trainings: {
      title: getText("x3"),
      description: getText("x25"),
      icons: [
        {
          icon: <LuBrain size={50} className="text-blue-600" />,
          label: getText("x26"),
        },
        {
          icon: <FaChalkboardTeacher size={50} className="text-red-600" />,
          label: getText("x27"),
        },
        {
          icon: <MdLooks size={50} className="text-yellow-600" />,
          label: getText("x28"),
        },
        {
          icon: <IoGameController size={50} className="text-green-600" />,
          label: getText("x29"),
        },
        {
          icon: <GiTeacher size={50} className="text-green-600" />,
          label: getText("x30"),
        },
        {
          icon: <FaBookmark size={50} className="text-black -600" />,
          label: getText("x31"),
        },
      ],
    },
  };
  const [activeTab, setActiveTab] = useState("models");
  const activeCard = cards[activeTab];
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <Wrapper>
      <div id="xizmatlar" className="py-12 px-4 mx-auto">
        <Wrapper>
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">
              Dijital Modernizasyon Nedir?
            </h1>
            <p className="text-lg text-gray-800 mb-8">
              Dijital modernizasyon, eğitimi ve öğrenme süreçlerini ileri
              teknolojiyle destekleyerek daha etkili, erişilebilir ve verimli
              hale getirme sürecidir. Akıllı sınıflar, dijital öğretmen araçları
              ve bireyselleştirilmiş öğrenme modelleri ile geleceği bugünden
              inşa ediyoruz.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 ">
            <div className="bg-gray-800 rounded-2xl shadow-lg p-6 text-center">
              <FaLaptopCode className="text-blue-400 text-5xl mx-auto mb-4" />
              <h3 className="text-xl text-white font-semibold mb-2">
                Dijital Eğitim Modeli
              </h3>
              <p className="text-gray-400 mb-4">
                Öğrenme yönetim sistemleri, bireyselleştirilmiş içerikler ve
                dijital ölçme araçlarıyla öğrencilerin kendi hızında öğrenmesini
                sağlıyoruz.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl shadow-lg p-6 text-center">
              <FaLightbulb className="text-yellow-400 text-5xl mx-auto mb-4" />
              <h3 className="text-xl text-white font-semibold mb-2">
                Akıllı Sınıflar
              </h3>
              <p className="text-gray-400 mb-4">
                Artırılmış gerçeklik, akıllı tahtalar ve oyun tabanlı öğrenme
                araçlarıyla sınıf ortamlarını yeniliyoruz.
              </p>
            </div>

            <div className="bg-gray-800 rounded-2xl shadow-lg p-6 text-center">
              <FaChalkboardTeacher className="text-green-400 text-5xl mx-auto mb-4" />
              <h3 className="text-xl text-white font-semibold mb-2">
                Dijital Öğretmenler
              </h3>
              <p className="text-gray-400 mb-4">
                Yapay zeka destekli öğretim araçları ve interaktif eğitim
                metotlarıyla öğretmenleri geleceğe hazırlıyoruz.
              </p>
            </div>
          </div>
        </Wrapper>

        <div className="flex gap-4 mt-8 justify-center">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveTab(category.key)}
              className={`px-6 py-2 rounded-lg text-lg font-semibold transition-all duration-300 border-b-2 
                ${
                  activeTab === category.key
                    ? "text-blue-600 border-blue-600"
                    : "text-gray-600 border-transparent hover:text-blue-500"
                }
              `}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="mt-10 p-8 rounded-xl shadow-lg bg-white text-center">
          <h3 className="text-2xl font-semibold text-gray-900">
            {activeCard.title}
          </h3>
          <p className="text-gray-700 mt-4">{activeCard.description}</p>

          {activeTab === "trainings" ? (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {activeCard.icons.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 border rounded-lg shadow-md bg-gray-50 hover:bg-gray-100 transition-all"
                >
                  {item.icon}
                  <h1 className="text-lg pt-3 text-gray-800 font-medium">
                    {item.label}
                  </h1>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {activeCard.images.map((img, index) => (
                <div key={index} className="flex flex-col items-center">
                  <img
                    src={img}
                    alt={activeCard.imgDesc[index]}
                    className="w-full h-60 object-cover rounded-lg shadow-md"
                  />
                  <h1 className="text-lg pt-2 text-gray-800 font-medium text-start">
                    {activeCard.imgDesc[index]}
                  </h1>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

export default Xizmatlar;
