import Wrapper from "../layout/wrapper.jsx";
import { getText } from "../languages/index.js";
import React, { useContext } from "react";
import { LanguageContext } from "../context/language.jsx";
import { useNavigate } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const AkademikTour = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();

  const toursData = [
    {
      id: 1,
      title: "Teknofest",
      image: "/img/akademikcard1.jpg",
    },
    {
      id: 2,
      title: "Kosmik lager",
      image: "/img/akademikcard1.jpg",
    },
    {
      id: 3,
      title: "Bilim va kashf sayohati",
      image: "/img/akademikcard3.jpg",
    },
  ];

  return (
    <Wrapper>
      <div className=" flex justify-between items-center">
        <h2 className="text-3xl font-bold mb-4">{getText("navbar7")}</h2>
        <a
          href="/academic-tour"
          className="flex items-center text-gray-600 hover:text-yellow-500 transition duration-300"
        >
          <FaRegArrowAltCircleRight
            size={35}
            className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300 hover:rotate-45"
          />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {toursData.map((program) => (
          <div
            key={program.id}
            className="cursor-pointer bg-white rounded-xl  shadow-md flex flex-col items-center"
            onClick={() => navigate("/academic-tour")}
          >
            <img
              src={program.image}
              alt={program.title}
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              {program.title}
            </h3>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default AkademikTour;
