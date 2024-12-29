import Wrapper from "../layout/wrapper.jsx";
import {Button} from "@nextui-org/react";
import {ArrowRight} from "lucide-react";
import {getText} from "../languages/index.js";
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
    return(
        <>
            <Wrapper>
                <div className={'flex justify-between items-center '}>

                    <h2 className="text-4xl font-bold text-[#e63f38] text-center ">
                        Kosmosx
                    </h2>
                    <Button
                        as="a"
                        href={'#'}
                        color="primary"
                        startContent={<ArrowRight/>}
                    >
                        {getText("sliderButton")}
                    </Button>
                </div>

                <div
                    data-aos="fade-up"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10"
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                        >
                            <a href={service.link}>
                                <div className="h-[50%] flex justify-center mb-4">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="h-full object-cover rounded-t-xl"
                                    />
                                </div>
                                <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                                    {service.title}
                                </h1>
                                <p className="text-gray-600 text-center text-sm mb-4">
                                    {service.description}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </>
    )
}

export default Kosmosx;