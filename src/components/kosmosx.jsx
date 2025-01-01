import Wrapper from "../layout/wrapper.jsx";
import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import { getText } from "../languages/index.js";
import React from "react";

const services = [
    {
        title: getText("kosmosxCard1Header"),
        description: getText("kosmosxCard1Text"),
        image: "/img/service1.jpg",
        link: "https://kosmosx.uz/#/trip-to-space",
    },
    {
        title: getText("kosmosxCard2Header"),
        description: getText("kosmosxCard2Text"),
        image: "/img/service2.jpg",
        link: "https://kosmosx.uz/#/space-workshop",
    },
    {
        title: getText("kosmosxCard3Header"),
        description: getText("kosmosxCard3Text"),
        image: "/img/service3.jpg",
        link: "https://kosmosx.uz/#/projects",
    },
    {
        title: "Teknofest",
        description: getText("kosmosxCard4Text"),
        image: "/img/service4.jpg",
        link: "https://kosmosx.uz/#/technofest",
    },
];

const Kosmosx = () => {
    return (
        <Wrapper>
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight text-center md:text-left">
                    Kosmosx
                </h2>

            </div>

            <div
                data-aos="fade-up"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            >
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                    >
                        <a href={service.link} className="block h-full">
                            <div className="relative overflow-hidden group">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="h-28 w-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-25 group-hover:bg-opacity-50 transition-all duration-300"></div>
                            </div>
                            <div className="p-4 flex flex-col justify-between h-[calc(100%-12rem)]">
                                <h1 className="text-lg font-semibold text-gray-800 mb-2">
                                    {service.title}
                                </h1>


                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </Wrapper>
    );
};

export default Kosmosx;
