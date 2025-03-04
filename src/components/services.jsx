import React, { useContext, useState } from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../languages/index";
import { LanguageContext } from "../context/language";
import { FaGlobe, FaLightbulb, FaRocket } from "react-icons/fa";

const categories = [
  { key: "okulaile", label: "OkulAile" },
  { key: "future_astronaut", label: "Future Astronaut" },
  { key: "mental_up", label: "Mental Up" },
  { key: "piagmo", label: "Piagmo" },
  { key: "adaptive", label: "Adaptive Cirriculum" },
  { key: "uppy", label: "Uppy" },
  { key: "sebit", label: "Sebit VCloud" },
  { key: "uppyedu", label: "Uppy Edu" },
];

const cards = {
  okulaile: {
    title: `OkulAile`,
    description:
      "Bolalar bog'chalarini boshqarish tizimlari ta'lim muassasalarining samarali ishlashini ta'minlash uchun mo'ljallangan. Biz o'qituvchilar, bolalar va ota-onalar o'rtasida aloqa o'rnatadigan va jarayonlarni raqamlashtirishga yordam beradigan echimlarni taklif qilamiz.",
    images: ["/img/okulaile1.jpg", "/img/okulaile2.jpg"],
    videos: ["https://www.youtube.com/embed/nXlpH6WBcUI"],
    link: "okullar",
  },
  future_astronaut: {
    title: `Future Astronaut`,
    description: getText("pl4"),
    images: ["/img/9.jpg", "/img/12.jpg"],
    videos: ["https://www.youtube.com/embed/5a6VH1m6BoA"],
  },
  mental_up: {
    title: `Mental Up - ${getText("pl5")}`,
    description: getText("pl6"),
    images: ["/img/mup1.png", "/img/mup2.png"],
    videos: ["https://www.youtube.com/embed/R-Y5JDOtSXE"],
  },
  piagmo: {
    title: `Piagmo - ${getText("pl7")}`,
    description: getText("pl8"),
    images: ["/img/piagmo1.webp", "/img/piagmo2.webp"],
    videos: ["https://www.youtube.com/embed/grCf4NhnYZ8"],
  },
  adaptive: {
    title: `Adaptive cirriculum - ${getText("pl9")}`,
    description: getText("pl10"),
    images: ["/img/adaptive1.jpg", "/img/adaptive2.jpg"],
    videos: ["https://www.youtube.com/embed/mrfs_eAR2r4"],
  },
  uppy: {
    title: `Uppy - ${getText("pl11")}`,
    description: getText("pl12"),
    images: ["/img/uppy1.jpg", "/img/uppy2.jpg"],
  },
  sebit: {
    title: `Sebit VCloud - ${getText("pl13")} `,
    description: getText("pl14"),
    images: ["/img/sebit1.jpg", "/img/sebit2.jpg"],
    videos: ["https://www.youtube.com/embed/XubQF9sVqbg"],
  },
  uppyedu: {
    title: `Uppy Edu`,
    description: getText("pl14"),
    images: ["/img/sebit1.jpg", "/img/sebit2.jpg"],
    videos: ["https://www.youtube.com/embed/XubQF9sVqbg"],
  },
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("okulaile");
  const activeCard = activeTab === "" ? null : cards[activeTab];
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <div className="bg-[#091621] py-20">
      <Wrapper>
        <div className="text-white p-6" id="services">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold leading-tight flex items-center justify-center gap-2">
              Dünyanın En İyi Eğitim Teknolojileri, Özbekistan İçin Yeniden
              Tasarlandı!
            </h1>
            <p className="text-lg text-gray-300 mt-6 max-w-4xl mx-auto">
              Eğitimde başarı, yalnızca mevcut sistemleri takip etmekle değil,
              yenilikleri keşfetmek, en iyi uygulamaları yerelleştirmek ve
              geleceğe uygun çözümler üretmekle mümkündür. EduAgency olarak,
              dünyada kendini kanıtlamış eğitim teknolojilerini Özbekistan’ın
              eğitim ihtiyaçlarına göre uyarlıyor, kültürel ve akademik yapıya
              entegre ediyoruz.
            </p>
          </div>

          <div className="text-center mt-12">
            <h2 className="text-3xl font-bold flex items-center justify-center gap-2">
              EduAgency’nin Eğitim Teknolojisi Hizmetleri 🚀
            </h2>
            <p className="text-lg text-gray-300 mt-6 max-w-4xl mx-auto">
              Eğitimde teknoloji kullanımı, sadece bugünü değil, yarının
              yeteneklerini ve liderlerini şekillendirmek için kritik bir
              adımdır. EduAgency olarak, dünya standartlarını Özbekistan’ın
              eğitim sistemine kazandırıyor ve dijital dönüşümün lideri olmanıza
              yardımcı oluyoruz.
            </p>
          </div>

          <div className="flex gap-2 mt-6 flex-wrap justify-center">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveTab(category.key)}
                className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                  activeTab === category.key
                    ? "bg-blue-600 text-white"
                    : "border-blue-600 text-blue-400 hover:bg-blue-700 hover:text-white"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {activeCard && (
            <div className="mt-10 p-8 bg-gray-900 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-white">
                {activeCard.title}
              </h3>
              <p className="text-gray-300 mt-4">{activeCard.description}</p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeCard?.videos?.map((video, index) => (
                  <iframe
                    key={index}
                    className="w-full h-72 rounded-lg"
                    src={video}
                    title={activeCard.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ))}
              </div>
            </div>
          )}
        </div>
      </Wrapper>
    </div>
  );
};

export default Services;
