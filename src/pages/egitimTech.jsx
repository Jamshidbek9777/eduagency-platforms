import React, { useContext } from "react";
import { getText } from "../languages/index.js";
import { LanguageContext } from "../context/language.jsx";

const EgitimTech = () => {
    const services = [
        {
            title: getText("eduTech4"),
            description: getText("eduTech5"),
            images: ["/img/k12net.png", ],
            icon: "🏫",
        },
        {
            title: getText("eduTech6"),
            description: getText("eduTech7"),
            images: ["/img/okulaile.png"],
            icon: "📚",
        },
        {
            title: getText("eduTech8"),
            description: getText("eduTech9"),
            images: [ "/img/0.jpg"],
            icon: "🎮",
        },
        {
            title: getText("eduTech10"),
            description: getText("eduTech11"),
            images: ["/img/vedubox_logo.svg"],
            icon: "💻",
        },
    ];

    const { selectedLanguage } = useContext(LanguageContext);

    return (
        <div className="max-w-7xl mx-auto px-4 py-12 font-sans pt-48 rounded-xl">
            {/* Header Section */}
            <div
                className="relative bg-cover bg-center h-96 rounded-xl mb-10"
                style={{ backgroundImage: 'url("/img/edutechbg.jpg")' }}
            >
                <div className="absolute inset-0 bg-black rounded-xl bg-opacity-50 flex items-center justify-center">
                    <h1 className="text-4xl font-bold text-white text-center px-6">
                        {getText("eduTech1")}
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="py-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-blue-600 mb-6">
                        {getText("eduTech2")}
                    </h2>
                    <p className="text-gray-700 text-lg mb-12">
                        {getText("eduTech3")}
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`flex flex-col lg:flex-row items-center gap-8 py-4 border-b-1 border-t-1 ${
                                index % 2 === 1 ? "lg:flex-row-reverse" : ""
                            }`}
                        >
                            {/* Text Content */}
                            <div className="lg:w-1/2 text-center lg:text-left">
                                <div className="text-5xl mb-6">{service.icon}</div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-lg">{service.description}</p>
                            </div>

                            {/* Image Content */}
                            <div className="lg:w-1/2 grid grid-cols-1 gap-4">
                                {service.images.map((image, imgIndex) => (
                                    <img
                                        key={imgIndex}
                                        src={image}
                                        alt={`Service ${index + 1} Image ${imgIndex + 1}`}
                                        className="w-full  object-cover rounded-lg "
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EgitimTech;
