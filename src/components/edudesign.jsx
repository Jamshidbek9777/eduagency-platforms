import Wrapper from "../layout/wrapper.jsx";
import {getText} from "../languages/index.js";
import {Button} from "@nextui-org/react";
import {ArrowRight} from "lucide-react";

const cardsData = [
    {
        imgSrc: "/img/schoolm.jpg",
        altText: "hizmetText1",
        title: "hizmetText1",
        description: "hizmetText7",
        titleColor: "#4A90E2",
    },
    {
        imgSrc: "/img/edumodel.webp",
        altText: "hizmetText2",
        title: "hizmetText2",
        description: "hizmetText8",
        titleColor: "#e63f38",
    },
    {
        imgSrc: "/img/teachers.jpg",
        altText: "hizmetText3",
        title: "hizmetText3",
        description: "hizmetText9",
        titleColor: "#4A90E2",
    },
    {
        imgSrc: "/img/digitaledu.webp",
        altText: "hizmetText4",
        title: "hizmetText4",
        description: "hizmetText10",
        titleColor: "#e63f38",
    },
    {
        imgSrc: "/img/stem.png",
        altText: "hizmetText5",
        title: "hizmetText5",
        description: "hizmetText11",
        titleColor: "#4A90E2",
    },
    {
        imgSrc: "/img/schooln.jpg",
        altText: "hizmetText6",
        title: "hizmetText6",
        description: "hizmetText12",
        titleColor: "#e63f38",
    },
];

const Edudesign= ()=>{
    return (<>
        <Wrapper>
            {/* Cards Section */}
            <div

                className=""
            >
                {/* Services Section */}
                <div className="py-10">
                    <div  className={'flex justify-between items-center mb-10'}>

                    <h2 className="text-4xl font-bold text-[#e63f38] text-center ">
                        Ta'lim dizayn xizmatlarimiz
                    </h2>
                        <Button
                            as="a"
                            href={'#'}
                            color="primary"
                            // className="mt-10"
                            startContent={<ArrowRight />}
                        >
                            {getText("sliderButton")}
                        </Button>
                    </div>

                    <div >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {cardsData.map((card, index) => (
                                    <div
                                        key={index}
                                        data-aos="fade-up"
                                        className="cursor-pointer p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all"
                                    >
                                        <img
                                            src={card.imgSrc}
                                            alt={getText(card.altText)}
                                            className="w-full h-48 object-cover rounded-md mb-4"
                                        />
                                        <h3
                                            className="text-xl font-bold mb-4"
                                            style={{ color: card.titleColor }}
                                        >
                                            {getText(card.title)}
                                        </h3>
                                        {/*<p className="text-gray-600">*/}
                                        {/*    {getText(card.description)}*/}
                                        {/*</p>*/}
                                    </div>
                                ))}
                        </div>
                    </div>

                </div>

            </div>

        </Wrapper>
    </>);
}
export default Edudesign;