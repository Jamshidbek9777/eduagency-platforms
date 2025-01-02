import Wrapper from "../layout/wrapper.jsx";
import { FaBuilding, FaChalkboardTeacher } from "react-icons/fa";
import {getText} from "../languages/index.js";
import {useContext} from "react";
import {LanguageContext} from "../context/language.jsx";


const Edudesign = () => {

    const cardsData = [
        {
            title: getText('okul3'),
            description: [
                getText('okul4'),
            ],
            icon: <FaBuilding className="text-6xl text-yellow-400" />,
            image: "/img/okulcard1.jpg",
            gradient: "from-blue-500 to-indigo-500",
        },
        {
            title: getText('okul5'),
            description: [
                getText('okul6'),
            ],
            icon: <FaChalkboardTeacher className="text-6xl text-red-600" />,
            image: "/img/okulcard2.webp", // Example image
            gradient: "from-green-400 to-teal-500",
        },
    ];
    const { selectedLanguage } = useContext(LanguageContext);
    return (
        <Wrapper>
            {/* Cards Section */}
            <div className="">
                {/* Services Section */}
                <div className="pt-36 pb-10">
                    <div className={"flex items-center mb-10"}>
                        <h2 className="text-4xl font-bold text-center text-gray-800 tracking-tight">
                            {getText('navbar1')}
                        </h2>
                    </div>
                    <div>
                        {/* Services Section */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                            {cardsData.map((service, index) => (
                                <div
                                    key={index}
                                    className="relative group p-6 rounded-xl shadow-lg hover:scale-105 transform transition-transform duration-300 hover:shadow-2xl"
                                >
                                    {/* Service Image with Darker Gradient Overlay */}
                                    <div className="absolute inset-0 bg-cover bg-center rounded-xl"
                                         style={{ backgroundImage: `url(${service.image})` }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-xl"></div>
                                    </div>

                                    {/* Service Icon */}
                                    <div className="absolute -top-10 left-6 z-10">{service.icon}</div>

                                    {/* Service Content */}
                                    <div className="relative z-20 mt-16">
                                        <h2 className="text-2xl font-bold text-white mb-4">{service.title}</h2>
                                        <ul className="text-gray-100 space-y-2">
                                            {service.description.map((desc, idx) => (
                                                <li key={idx} className="text-sm">{desc}</li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Overlay Text (Initially hidden, becomes visible on hover) */}
                                    <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 rounded-xl">
                                        <p className="text-lg text-black p-2 z-40 rounded-xl cursor-pointer font-bold bg-yellow-300">
                                            <a href={'/okul-mimari'}>
                                                {getText('sliderButton')}

                                            </a>
                                        </p>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Edudesign;
