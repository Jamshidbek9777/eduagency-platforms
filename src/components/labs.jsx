import Wrapper from "../layout/wrapper.jsx";
import { getText } from "../languages/index.js";
import {Button} from "@nextui-org/react";
import {ArrowRight} from "lucide-react";

const labData = [
    {
        image: "/img/lab-main.png",
        alt: "STEM Laboratory",
        header: "labsCard1Header",
        text: "labsCard1Text",
    },
    {
        image: "/img/brain-games.jpeg",
        alt: "Intellectual Games",
        header: "labsCard2Header",
        text: "labsCard2Text",
    },
    {
        image: "/img/aerospace-lab.jpeg",
        alt: "Aerospace Laboratory",
        header: "labsCard3Header",
        text: "labsCard3Text",
    },
    {
        image: "/img/energy-innovation.webp",
        alt: "Energy Innovation",
        header: "labsCard4Header",
        text: "labsCard4Text",
    },
    {
        image: "/img/electr-lab.png",
        alt: "Electronics Laboratory",
        header: "labsCard5Header",
        text: "labsCard5Text",
    },
    {
        image: "/img/design-app.jpeg",
        alt: "Design Applications",
        header: "labsCard6Header",
        text: "labsCard6Text",
    },
];

const Labs = () => {
    return (
        <>
            <Wrapper>
                <div className={'flex justify-between items-center '}>

                    <h2 className="text-4xl font-bold text-[#e63f38] text-center ">
                        Labaratoriyalar
                    </h2>
                    <Button
                        as="a"
                        href={'/labaratories'}
                        color="primary"
                        // className="mt-10"
                        startContent={<ArrowRight/>}
                    >
                        {getText("sliderButton")}
                    </Button>
                </div>
                {/* Cards Section */}
                <div
                    data-aos="fade-up"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10"
                >
                    {labData.map((lab, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden relative group"
                        >
                            {/* Card Image */}
                            <div className="relative overflow-hidden h-56">
                                <img
                                    src={lab.image}
                                    alt={lab.alt}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div
                                    className="absolute inset-0 bg-black bg-opacity-25 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
                            </div>
                            {/* Card Content */}
                            <div className="p-6 flex flex-col items-center">
                                <h1 className="text-lg font-bold text-gray-800 text-center mb-2">
                                    {getText(lab.header)}
                                </h1>

                            </div>
                            {/* Hover Effect */}
                            <div
                                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-15 transition-opacity duration-300">
                                <button
                                    className="text-white bg-red-500 px-4 py-2 rounded-lg shadow hover:bg-red-600 transition-all duration-300">
                                    Learn more
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </>
    );
};

export default Labs;
