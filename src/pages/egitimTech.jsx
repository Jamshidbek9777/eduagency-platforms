import React, {useContext} from "react";
import {getText} from "../languages/index.js";
import {LanguageContext} from "../context/language.jsx";



const EgitimTech = () => {
    const services = [
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
    const { selectedLanguage } = useContext(LanguageContext);
    return (
        <div className={'max-w-7xl mx-auto px-4 py-12 font-sans pt-48 rounded-xl'}>
            {/* Header Section with Background Image inside max-w-7xl */}

                <div
                    className="relative bg-cover bg-center h-96 rounded-xl mb-10"
                    style={{ backgroundImage: 'url("/img/edutechbg.jpg")' }}
                >
                    <div className="absolute inset-0 bg-black rounded-xl bg-opacity-50 flex items-center justify-center">
                        <h1 className="text-4xl font-bold text-white text-center px-6">
                            {getText('eduTech1')}
                        </h1>
                    </div>

            </div>

            {/* Main Content */}
            <div className=" py-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-blue-600 mb-6" id="services">
                        {getText('eduTech2')}
                    </h2>
                    <p className="text-gray-700 text-lg mb-12">
                        {getText('eduTech3')}
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-xl rounded-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:scale-105"
                        >
                            <div className="text-5xl mb-6">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EgitimTech;
