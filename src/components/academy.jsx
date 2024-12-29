import {getText} from "../languages/index.js";
import Wrapper from "../layout/wrapper.jsx";
import {FaChalkboardTeacher, FaUserGraduate, FaUsers} from "react-icons/fa";
import {VscVmActive} from "react-icons/vsc";
import {LuBrain} from "react-icons/lu";
import {SiMinds} from "react-icons/si";
import {MdOutlineConnectWithoutContact} from "react-icons/md";
import {Button} from "@nextui-org/react";
import {ArrowRight} from "lucide-react";

const AcademyCard = ({ icon, header, text }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
        <div className="flex justify-center mb-4 text-[#e63f38] text-5xl">{icon}</div>
        <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
            {header}
        </h1>
        <p className="text-gray-600 text-center text-sm">{text}</p>
    </div>
);
const cardData = [
    {
        icon: <FaChalkboardTeacher/>,
        header: getText("academyCard1Header"),
        text: getText("academyCard1Text"),
    },
    {
        icon: <FaUserGraduate/>,
        header: getText("academyCard2Header"),
        text: getText("academyCard2Text"),
    },
    {
        icon: <FaUsers/>,
        header: getText("academyCard3Header"),
        text: getText("academyCard3Text"),
    },
    {
        icon: <MdOutlineConnectWithoutContact/>,
        header: getText("academyCard4Header"),
        text: getText("academyCard4Text"),
    },
    {
        icon: <SiMinds/>,
        header: getText("academyCard5Header"),
        text: getText("academyCard5Text"),
    },
    {
        icon: <LuBrain/>,
        header: getText("academyCard6Header"),
        text: getText("academyCard6Text"),
    },
    {
        icon: <VscVmActive/>,
        header: getText("academyCard7Header"),
        text: getText("academyCard7Text"),
    },
    {
        icon: <FaUsers/>,
        header: getText("academyCard8Header"),
        text: getText("academyCard8Text"),
    },
];



const Academy = ()=>{
    return(
        <>
            <Wrapper>
                <div className={'flex justify-between items-center '}>

                    <h2 className="text-4xl font-bold text-[#e63f38] text-center ">
                        Academy xizmatlari
                    </h2>
                    <Button
                        as="a"
                        href={'/academy'}
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
                        <AcademyCard
                            key={index}
                            icon={card.icon}
                            header={card.header}
                            text={card.text}
                        />
                    ))}
                </div>
            </Wrapper>
        </>
    );
}
export default Academy;