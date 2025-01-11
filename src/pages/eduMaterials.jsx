import React, {useContext} from "react";
import {
    FaTabletAlt,
    FaFlask,
    FaPuzzlePiece,
    FaCheckCircle,
    FaRobot,
    FaHandsHelping,
    FaChalkboardTeacher,
    FaBookReader,
    FaLaptop,
} from "react-icons/fa";
import {getText} from "../languages/index.js";
import {LanguageContext} from "../context/language.jsx";



const EduMaterials = () => {
    const eduMaterials = [
       
        {
            title: getText('eMaterial5'),
            description:
                getText('eMaterial6'),
            color: "from-green-400 to-teal-500",
            icon: <FaFlask />,
        },
       
        {
            title: getText('eMaterial11'),
            description:
                getText('eMaterial12'),
            color: "from-indigo-400 to-blue-600",
            icon: <FaRobot />,
        },
       
        {
            title: getText('eMaterial17'),
            description:
                getText('eMaterial18'),
            color: "from-blue-500 to-purple-600",
            icon: <FaLaptop />,
        },
    ];
    const { selectedLanguage } = useContext(LanguageContext);
    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 pt-48">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-blue-600 mb-6">
                    {getText('eMaterial1')}
                </h2>
                <p className="text-gray-600 mb-10">
                    {getText('eMaterial2')}
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {eduMaterials.map((material, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 border-t-4 ${material.color}`}
                    >
                        <div className={'flex items-center space-x-4 mb-4'}>
                            <div className={`text-3xl text-white bg-gradient-to-r p-3 rounded-lg shadow-md`}>
                                {material.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">
                                {material.title}
                            </h3>
                        </div>

                        <p className="text-gray-600 text-sm">{material.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EduMaterials;
