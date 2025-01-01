import { getText } from "../languages/index.js";
import Wrapper from "../layout/wrapper.jsx";
import {FaBrain, FaBullseye, FaChalkboardTeacher, FaGlobe, FaUserGraduate, FaUsers} from "react-icons/fa";
import { VscVmActive } from "react-icons/vsc";
import { LuBrain } from "react-icons/lu";
import { SiMinds } from "react-icons/si";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import React from "react";

const AcademyCard = ({ icon, header, text }) => (
    <div className="flex items-center  justify-between bg-white p-2 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:scale-105 transform transition-transform">
        <div className="flex justify-center items-center mb-4 w-16 h-16 rounded-full bg-gradient-to-r from-red-400 to-pink-500 text-white text-3xl">
            {icon}
        </div>
        <h1 className="text-lg font-semibold text-gray-800 text-center mb-2">
            {header}
        </h1>
        <p className="text-gray-500 text-center text-sm">{text}</p>
    </div>
);

const cardData = [
    {
        title: "Beyin ve Öğrenme",
        description:
            "Beyin temelli öğrenme yaklaşımlarını tanıtarak, öğrenme süreçlerini anlamaya odaklanır.",
        color: "from-blue-500 to-purple-600",
        icon: <FaBrain/>,
    },
    {
        title: "Global Teacher",
        description:
            "Küresel eğitim trendlerini ve kültürel yaklaşımları öğretmenlere tanıtan bir program.",
        color: "from-green-400 to-teal-500",
        icon: <FaGlobe/>,
    },
    {
        title: "Dikkat Geliştirme Teknikleri",
        description:
            "Öğrencilerin dikkat sürelerini artırmaya yönelik stratejik teknikler.",
        color: "from-yellow-400 to-orange-500",
        icon: <FaBullseye/>,
    },
];

const Academy = () => {
    return (
        <>
            <Wrapper>
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight text-center">
                        {"Academy xizmatlari"}
                    </h2>

                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
                    {cardData.map((training, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 border-t-4 ${training.color}`}
                        >
                            <div className={'flex items-center space-x-4 mb-4'}>
                                <div
                                    className="text-3xl text-white bg-gradient-to-r p-3 rounded-lg shadow-md ${program.color}">
                                    {training.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">
                                    {training.title}
                                </h3>
                            </div>

                            <p className="text-gray-600 text-sm">{training.description}</p>
                        </div>
                    ))}

                </div>
            </Wrapper>
        </>
    );
};

export default Academy;
