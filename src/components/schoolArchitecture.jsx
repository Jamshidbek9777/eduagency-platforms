import Wrapper from "../layout/wrapper.jsx";
import {
  FaBuilding,
  FaChalkboardTeacher,
  FaRegArrowAltCircleRight,
} from "react-icons/fa";
import { getText } from "../languages/index.js";
import { useContext } from "react";
import { LanguageContext } from "../context/language.jsx";

const SchoolArchitecture = () => {
  const cardsData = [
    {
      title: getText("okul3"),
      description: getText("okul4"),
      icon: <FaBuilding className="text-4xl text-blue-500" />,
      image: "/img/okulcard1.jpg",
    },
    {
      title: getText("okul5"),
      description: getText("okul6"),
      icon: <FaChalkboardTeacher className="text-4xl text-white" />,
      image: "/img/okulcard2.webp",
    },
  ];

  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <Wrapper>
      <div className="pt-3 pb-10">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Sinf konseptlari
          </h2>
          <a
            href="/okul-mimari"
            className="flex items-center text-gray-600 hover:text-yellow-500 transition duration-300"
          >
            <FaRegArrowAltCircleRight
              size={35}
              className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300 hover:rotate-45"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="flex rounded-xl overflow-hidden  h-[220px] gap-2 hover:gap-4 transition-all ease-in-out"
            >
              <div className="bg-black flex items-center justify-center w-1/4 p-4">
                {card.icon}
              </div>

              <div
                className="relative w-3/4 bg-cover bg-center"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h2 className="text-lg font-bold text-white">{card.title}</h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default SchoolArchitecture;
