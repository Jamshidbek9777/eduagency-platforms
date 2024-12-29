import Wrapper from "../layout/wrapper.jsx";
import {Button} from "@nextui-org/react";
import {ArrowRight} from "lucide-react";
import {getText} from "../languages/index.js";
import {AiOutlineUser} from "react-icons/ai";
import {MdOutlineSchool, MdPeopleAlt} from "react-icons/md";
import React from "react";
const cards = [
    {
        title: getText("transferCard1Header"),
        icon: <AiOutlineUser size={50} className="text-[#e63f38]" />,
        content: `${getText("transferCard1Text1")}`,
    },
    {
        title: getText("transferCard2Header"),
        icon: <MdOutlineSchool size={50} className="text-[#e63f38]" />,
        content: `${getText("transferCard1Text2")}`,
    },
    {
        title: getText("transferCard3Header"),
        icon: <MdPeopleAlt size={50} className="text-[#e63f38]" />,
        content: `${getText("transferCard1Text3")}`,
    },
];
const Transfer = () => {
    return (
        <>
            <Wrapper>
                <div className={'flex justify-between items-center '}>

                    <h2 className="text-4xl font-bold text-[#e63f38] text-center ">
                        Mutaxxasis transferi
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
                {/* Cards Section */}
                <div className="w-full mb-10">
                    <h3 className="text-2xl font-bold text-[#e63f38] mb-8 text-center">
                        {getText("transferSubHeader")}
                    </h3>
                    <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
                            >
                                <div className="mb-4">{card.icon}</div>

                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {card.content}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Wrapper>

        </>
    );
}

export default Transfer;