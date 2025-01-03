import Wrapper from "../layout/wrapper.jsx";
import { getText } from "../languages/index.js";
import React, { useContext } from "react";
import { LanguageContext } from "../context/language.jsx";
import {useNavigate} from "react-router-dom";
import {FaRegArrowAltCircleRight} from "react-icons/fa";

const AkademikTour = () => {
    const { selectedLanguage } = useContext(LanguageContext);
   const navigate= useNavigate();

    const labData = [
        {
            id: 1,
            title: getText("akademikTur1"),
            description: getText("akademikTur2"),
            image: "/img/akademikcard1.jpg",
        },
        {
            id: 2,
            title: getText("akademikTur3"),
            description: getText("akademikTur4"),
            image: "/img/akademikcard2.jpg",
        },
        {
            id: 3,
            title: getText("akademikTur5"),
            description: getText("akademikTur6"),
            image: "/img/akademikcard3.jpg",
        },
    ];



    return (
        <Wrapper>
            <div className=" flex justify-between items-center mb-10">
                <h2 className="text-4xl font-bold text-gray-800 tracking-tight">
                    {getText("navbar7")}
                </h2>
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

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {labData.map((program) => (
                    <div
                        key={program.id}
                        className="cursor-pointer bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300"
                        onClick={() => navigate('/academic-tour')}
                    >
                    <img
                            src={program.image}
                            alt={program.title}
                            className="w-full h-40 object-cover rounded-lg mb-4"
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
