import React, {useContext} from "react";
import { FaLightbulb, FaUsers, FaFolderOpen, FaChalkboardTeacher, FaBook, FaAdjust, FaFlask, FaGraduationCap } from "react-icons/fa";
import {getText} from "../languages/index.js";
import {LanguageContext} from "../context/language.jsx";



const EducationStrategies = () => {
    const strategies = [
        {
            title: getText('eStr3'),
            description:
                getText('eStr4'),
            icon: <FaLightbulb />,
            gradient: "bg-gradient-to-r from-blue-500 to-purple-600",
            image: "/img/ss.jpg", // Example image
        },
       
        {
            title: getText('eStr7'),
            description:
                getText('eStr8'),
            icon: <FaFolderOpen />,
            gradient: "bg-gradient-to-r from-yellow-400 to-orange-500",
            image: "/img/portfolio.jpg", // Example image
        },
        {
            title: getText('eStr9'),
            description:
                getText('eStr10'),
            icon: <FaChalkboardTeacher />,
            gradient: "bg-gradient-to-r from-red-400 to-pink-500",
            image: "/img/flipped.jpg", // Example image
        },
        
        {
            title: getText('eStr13'),
            description:
                getText('eStr14'),
            icon: <FaAdjust />,
            gradient: "bg-gradient-to-r from-pink-500 to-purple-600",
            image: "/img/styles.jpg", // Example image
        },
        
        {
            title: getText('eStr17'),
            description:
                getText('eStr18'),
            icon: <FaGraduationCap />,
            gradient: "bg-gradient-to-r from-orange-400 to-yellow-500",
            image: "/img/ap.jpg", // Example image
        },
    ];
    const { selectedLanguage } = useContext(LanguageContext);
    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 pt-48">
            {/* Header Section */}
            <div
                className="relative bg-cover bg-center h-96 rounded-xl mb-10"
                style={{ backgroundImage: 'url("/img/edustrategiesbg.jpg")' }} // Example background image
            >
                <div className="absolute inset-0 bg-black rounded-xl bg-opacity-50 flex items-center justify-center">
                    <h2 className="text-4xl font-extrabold text-white text-center px-6">
                        {getText('eStr1')}
                    </h2>
                </div>
            </div>

            {/* Intro Text */}
            <div className="max-w-7xl mx-auto text-center mb-12">
                <p className="text-lg text-gray-600">
                    {getText('eStr2')}
                </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {strategies.map((strategy, index) => (
                    <div
                        key={index}
                        className={`${strategy.gradient} text-white shadow-lg rounded-lg p-6 flex flex-col relative`}
                    >
                        {/* Service Image */}
                        <div className="absolute inset-0 bg-cover bg-center rounded-lg opacity-30"
                             style={{ backgroundImage: `url(${strategy.image})` }}
                        ></div>

                        {/* Service Icon */}
                        <div className="z-10 text-4xl mb-4">{strategy.icon}</div>

                        <h3 className="z-10 text-lg font-semibold mb-4">
                            {strategy.title}
                        </h3>
                        <p className="z-10 text-sm">{strategy.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationStrategies;
