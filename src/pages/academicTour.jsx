import React, {useContext} from "react";
import { FaRocket, FaGlobe, FaGraduationCap, FaUniversity, FaRegBuilding } from "react-icons/fa";
import {getText} from "../languages/index.js";
import {LanguageContext} from "../context/language.jsx";



const AcademicTourPage = () => {
    const academicTours = [
        {
            title: getText('akademikTur3'),
            description:
                getText('akademikTur4'),
            icon: <FaRocket />,
            color: "from-blue-500 to-indigo-600",
        },
        {
            title: getText('akademikTur5'),
            description:
                getText('akademikTur6'),
            icon: <FaGlobe />,
            color: "from-green-400 to-teal-500",
        },
        {
            title: getText('akademikTur7'),
            description:
                getText('akademikTur8'),
            icon: <FaGraduationCap />,
            color: "from-yellow-400 to-orange-500",
        },
    ];
    const { selectedLanguage } = useContext(LanguageContext);
    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 pt-48">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-blue-600 mb-6">{getText('akademikTur1')}</h2>
                <p className="text-gray-600 mb-10">
                    {getText('akademikTur2')}
                </p>
            </div>

            {/* Tour Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {academicTours.map((tour, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 border-t-4 ${tour.color}`}
                        aria-labelledby={`tour-${index}`}
                        role="region"
                        aria-describedby={`tour-desc-${index}`}
                    >
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="text-3xl text-white bg-gradient-to-r p-3 rounded-lg shadow-md">
                                {tour.icon}
                            </div>
                            <h3 id={`tour-${index}`} className="text-xl font-bold text-gray-800">{tour.title}</h3>
                        </div>

                        <p id={`tour-desc-${index}`} className="text-gray-600 text-sm">{tour.description}</p>


                    </div>
                ))}
            </div>

            {/* Additional Info Section */}
            <div className="max-w-7xl mx-auto text-center mt-16">




                {/* Closing Statement */}
                <h4 className="text-2xl font-semibold text-blue-600 mt-10">Sizi Keşfe Bekliyoruz!</h4>
                <p className="text-gray-600 mb-6">
                    Geleceği daha güçlü bir şekilde inşa etmeniz için bu bilim dolu yolculukta size rehberlik etmeye hazırız. Hayal edin, öğrenin ve geleceği yeniden şekillendirin. Türkiye’nin eşsiz zenginlikleriyle dolu bu deneyimi kaçırmayın!
                </p>

            </div>
        </div>
    );
};

export default AcademicTourPage;
