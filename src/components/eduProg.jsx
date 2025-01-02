import Wrapper from "../layout/wrapper.jsx";
import { getText } from "../languages/index.js";
import {FaAtom, FaPaintBrush, FaProjectDiagram} from "react-icons/fa";
import {useContext} from "react";
import {LanguageContext} from "../context/language.jsx";



const EduProg = () => {
    const labData = [
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
    ];
    const { selectedLanguage } = useContext(LanguageContext);
    return (
        <>
            <Wrapper>
                <div className={'flex justify-between items-center'}>
                    <h2 className="text-4xl font-bold text-gray-800 tracking-tight text-center mb-4">
                        {getText('navbar3')}
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

export default EduProg;
