import React, { useContext, useState } from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";

const Oilalar = () => {
  const categories = [
    { key: "mentalup", label: "Mentalup" },
    { key: "piagmo", label: "Piagmo" },
    { key: "uppy", label: "Uppy" },
    { key: "ft", label: "Future astronaut" },
    { key: "funly", label: "Funly games" },
  ];

  const cards = {
    mentalup: {
      title: "Zihinsel ve Fiziksel Gelişimini Hızlandır",
      description: "MentalUp haqida malumotlar",
      ozelliklarHeader: [
        "Sınırsız Video Paylaşımı",
        "Sınırsız Fotoğraf Paylaşımı",
        "Beslenme, Faaliyet, Uyuma",
      ],
      ozelliklar: [
        "Öğrenme kabiliyetini geliştirici hafıza oyunları ve egzersizler",
        "Dikkati sürdürmeyi ve odaklanmayı sağlayan dikkat egzersizleri",
        "Yaratıcı düşünmeyi geliştiren görsel zeka oyunları",
      ],
      images: [
        "https://www.youtube.com/embed/HJ5ltJBB7lU",
        "https://www.youtube.com/embed/HJ5ltJBB7lU",
      ],
      imgDesc: [getText("x6"), , getText("x7")],
    },

    sebit: {
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

    uppyedu: {
      title: getText("x3"),
      description: getText("x25"),
    },
    adaptive: {
      title: getText("x1"),
      description: getText("x5"),
      images: ["/img/montessori1.webp", "/img/montessori2.jpeg"],
      imgDesc: [getText("x6"), , getText("x7")],
    },
  };
  const [activeTab, setActiveTab] = useState("okulaile");
  const activeCard = cards[activeTab];
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <Wrapper>
      <div className="py-10 pt-40">
        <h1 className="text-center py-1 text-4xl font-bold">
          Oilalar uchun yechimlar
        </h1>
      </div>
      <div className="flex gap-4 justify-center">
        {categories?.map((category) => (
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
            {category?.label}
          </button>
        ))}
      </div>

      <div className="mt-10 p-8 rounded-xl shadow-lg bg-white text-center">
        <h3 className="text-2xl font-semibold text-gray-900">
          {activeCard?.title}
        </h3>
        <p className="text-gray-700 mt-4">{activeCard?.description}</p>
        <div>
          {activeCard?.ozelliklarHeader?.map((text, index) => (
            <ul className="text-start flex gap-2">
              <li className="text-lg py-2 font-bold">
                ✅ {text}:
                <span className="font-medium">
                  {activeCard.ozelliklar[index]}
                </span>
              </li>
            </ul>
          ))}
          <li></li>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {activeCard?.images?.map((video, index) => (
            <iframe
              key={index}
              className="w-full h-72 rounded-lg"
              src={video}
              title={activeCard?.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Oilalar;
