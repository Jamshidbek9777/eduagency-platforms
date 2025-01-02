import { getText } from "../languages/index.js";
import Wrapper from "../layout/wrapper.jsx";
import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import React, {useContext} from "react";
import {LanguageContext} from "../context/language.jsx";

const EduTech = () => {
    const { selectedLanguage } = useContext(LanguageContext);
    const cardData = [
        {
            title:  getText('eduTech4'),
            description: getText('eduTech5'),
            icon: "🏫",
        },
        {
            title: getText('eduTech6'),
            description: getText('eduTech7'),
            icon: "📚",
        },
        {
            title: getText('eduTech8'),
            description: getText('eduTech9'),
            icon: "🎮",
        },
        {
            title: getText('eduTech10'),
            description: getText('eduTech11'),
            icon: "💻",
        },
    ];

    return (
        <>
            <Wrapper>
                <div className={"flex justify-between items-center"}>
                    <h2 className="text-4xl font-bold text-gray-800 tracking-tight text-center mb-4">
                        {getText('navbar2')}
                    </h2>
                </div>
                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto mb-20">
                    {cardData.map((service, index) => (
                        <a href={'egitim-tech'}>

                        <div
                            key={index}
                            className="h-44 cursor-pointer bg-white shadow-xl rounded-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:scale-105"
                        >
                            <div className="text-5xl mb-6">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                {service.title}
                            </h3>

                        </div>
                        </a>

                    ))}
                </div>
            </Wrapper>
        </>
    );
};

export default EduTech;
