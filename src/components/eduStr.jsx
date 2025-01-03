import Wrapper from "../layout/wrapper.jsx";
import { getText } from "../languages/index.js";
import {
    FaAtom,
    FaFolderOpen,
    FaLightbulb,
    FaPaintBrush,
    FaProjectDiagram,
    FaRegArrowAltCircleRight,
    FaUsers
} from "react-icons/fa";
import React, {useContext} from "react";
import {LanguageContext} from "../context/language.jsx";



const EduStrategies = () => {
    const data = [
        {
            title: getText('eStr3'),
            description:
                getText('eStr4'),
            icon: <FaLightbulb />,
            gradient: "bg-gradient-to-r from-blue-500 to-purple-600",
            image: "/img/ss.jpg",
        },
        {
            title: getText('eStr5'),
            description:
                getText('eStr6'),
            icon: <FaUsers />,
            gradient: "bg-gradient-to-r from-green-400 to-teal-500",
            image: "/img/ss.jpg",
        },
        {
            title: getText('eStr7'),
            description:
                getText('eStr8'),
            icon: <FaFolderOpen />,
            gradient: "bg-gradient-to-r from-yellow-400 to-orange-500",
            image: "/img/portfolio.jpg",
        },
    ];
    const { selectedLanguage } = useContext(LanguageContext);
    return (
        <>
            <Wrapper>
                <div className={'flex justify-between items-center'}>
                    <h2 className="text-4xl font-bold text-gray-800 tracking-tight text-center mb-4">
                        {/*{getText('navbar3')}*/}
                        Ta'lim strategiyalari
                    </h2>
                    <a
                        href="/education-strategies"
                        className="flex items-center text-gray-600 hover:text-yellow-500 transition duration-300"
                    >
                        <FaRegArrowAltCircleRight
                            size={35}
                            className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300 hover:rotate-45"
                        />
                    </a>
                </div>
                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                    {data.map((strategy, index) => (
                        <div
                            key={index}
                            className={`${strategy.gradient} cursor-pointer text-white shadow-lg rounded-lg p-6 flex flex-col relative`}
                        >
                            <a href={'education-strategies'}>

                            <div className="absolute inset-0 bg-cover bg-center rounded-lg opacity-30"
                                 style={{ backgroundImage: `url(${strategy.image})` }}
                            ></div>

                            <div className="z-10 text-4xl mb-4">{strategy.icon}</div>

                            <h3 className="z-10 text-lg font-semibold mb-4">
                                {strategy.title}
                            </h3>
                            </a>

                        </div>
                    ))}
                </div>
            </Wrapper>
        </>
    );
};

export default EduStrategies;
