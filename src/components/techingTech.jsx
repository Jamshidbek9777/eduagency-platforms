import {getText} from "../languages/index.js";
import Wrapper from "../layout/wrapper.jsx";
import {Button} from "@nextui-org/react";
import {ArrowRight} from "lucide-react";

const TechingTech = () => {
    const cardData = [
        {
            href: "/k12net",
            imgSrc: "/img/k12net.png",
            imgAlt: "k12net",
            title: "k12net",
            description: getText("teachingTechCardText1"),
        },
        {
            href: "/okulaile",
            imgSrc: "/img/okulaile.png",
            imgAlt: "Okulaile",
            title: "Okulaile",
            description: getText("teachingTechCardText2"),
        },
        {
            href: "/mental-up",
            imgSrc: "/img/mentalup.webp",
            imgAlt: "Mentalup",
            title: "Mentalup",
            description: getText("teachingTechCardText3"),
        },
        {
            href: "https://kosmosx.uz/#/online-platforms",
            imgSrc: "/img/futureast.png",
            imgAlt: "Future astronaut",
            title: "Future astronaut",
            description: getText("teachingTechCardText4"),
        },
    ];
    return (
        <>
            <Wrapper>
                <div className={'flex justify-between items-center '}>
                    <h2 className="text-4xl font-bold text-[#e63f38] text-center ">
                       Ta'lim texnologoyialari
                    </h2>
                    <Button
                        as="a"
                        href={'#'}
                        color="primary"
                        // className="mt-10"
                        startContent={<ArrowRight/>}
                    >
                        {getText("sliderButton")}
                    </Button>
                </div>
                <div
                    data-aos="fade-up"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10"
                >

                    {cardData.map((card, index) => (
                        <a key={index} href={card.href}>
                            <div
                                className="cursor-pointer bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col">
                                <div className="flex justify-center mb-4">
                                    <img
                                        src={card.imgSrc}
                                        alt={card.imgAlt}
                                        className="h-16 object-contain"
                                    />
                                </div>
                                <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                                    {card.title}
                                </h1>
                                {/*<p className="text-gray-600 text-center text-sm flex-grow">*/}
                                {/*    {card.description}*/}
                                {/*</p>*/}
                            </div>
                        </a>
                    ))}
                </div>
            </Wrapper>

        </>
    );
}

export default TechingTech;