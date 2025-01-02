import Wrapper from "../layout/wrapper.jsx";
import { getText } from "../languages/index.js";
import {
    FaAtom,
    FaBrain,
    FaBullseye,
    FaFlask,
    FaGlobe,
    FaPaintBrush,
    FaProjectDiagram, FaPuzzlePiece,
    FaTabletAlt
} from "react-icons/fa";
import React, {useContext} from "react";
import {LanguageContext} from "../context/language.jsx";

const EduMaterials = () => {
    const labData = [
        {
            title: getText('eMaterial3'),
            description:
                getText('eMaterial4'),
            color: "from-blue-500 to-purple-600",
            icon: <FaTabletAlt />,
        },
        {
            title: getText('eMaterial5'),
            description:
                getText('eMaterial6'),
            color: "from-green-400 to-teal-500",
            icon: <FaFlask />,
        },
        {
            title: getText('eMaterial7'),
            description:
                getText('eMaterial8'),
            color: "from-yellow-400 to-orange-500",
            icon: <FaPuzzlePiece />,
        },
    ];
    const { selectedLanguage } = useContext(LanguageContext);
    return (
        <>
            <Wrapper>
                <div className={'flex justify-between items-center'}>
                    <h2 className="text-4xl font-bold text-gray-800 tracking-tight text-center mb-4">
                        {getText('navbar6')}
                    </h2>
                </div>
                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 ">
                    {labData.map((program, index) => (
                        <a href={'egitim-program'}>

                            <div
                                key={index}
                                className={`h-28 bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 border-t-4 ${program.color}`}
                            >
                                <div className="flex items-center space-x-4 mb-4">
                                    <div className="text-3xl text-white bg-gradient-to-r p-3 rounded-lg shadow-md ${program.color}">
                                        {program.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800">
                                        {program.title}
                                    </h3>
                                </div>

                            </div>
                        </a>

                    ))}
                </div>
            </Wrapper>
        </>
    );
};

export default EduMaterials;
