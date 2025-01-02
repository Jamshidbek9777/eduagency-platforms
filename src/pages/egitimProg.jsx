import React, {useContext} from "react";
import { FaRobot, FaBook, FaLanguage, FaAtom, FaPaintBrush, FaProjectDiagram } from "react-icons/fa";
import {getText} from "../languages/index.js";
import {LanguageContext} from "../context/language.jsx";



const EducationPrograms = () => {
    const programs = [
        {
            title: getText('eProg3'),
            description:
                getText('eProg4'),
            icon: <FaAtom />,
            color: "from-blue-500 to-purple-600",
        },
        {
            title:getText('eProg5'),
            description:
                getText('eProg6'),
            icon: <FaPaintBrush />,
            color: "from-green-400 to-teal-500",
        },
        {
            title: getText('eProg7'),
            description:
                getText('eProg8'),
            icon: <FaProjectDiagram />,
            color: "from-yellow-400 to-orange-500",
        },
        {
            title: getText('eProg9'),
            icon: <FaAtom />,
            description:
                getText('eProg10'),
            color: "from-pink-500 to-red-500",
        },
        {
            title: getText('eProg11'),
            description:
                getText('eProg12'),
            icon: <FaLanguage />,
            color: "from-indigo-400 to-blue-600",
        },
        {
            title: getText('eProg13'),
            description:
                getText('eProg14'),
            icon: <FaRobot />,
            color: "from-gray-400 to-gray-600",
        },
    ];
    const { selectedLanguage } = useContext(LanguageContext);
    return (
        <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 pt-48">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400 mb-6">
                    {getText('eProg1')}
                </h2>
                <p className="text-gray-600 text-lg">
                    {getText('eProg2')}
                </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-10">
                {programs.map((program, index) => (
                    <div
                        key={index}
                        className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 border-t-4 ${program.color}`}
                    >
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="text-3xl text-white bg-gradient-to-r p-3 rounded-lg shadow-md ${program.color}">
                                {program.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">
                                {program.title}
                            </h3>
                        </div>
                        <p className="text-gray-600 text-sm">
                            {program.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationPrograms;
