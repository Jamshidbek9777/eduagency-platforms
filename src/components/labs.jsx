import Wrapper from "../layout/wrapper.jsx";
import { getText } from "../languages/index.js";
import { ArrowRight } from "lucide-react"; // Import ArrowRight icon

const labData = [
    {
        href: "/lab1", // Add the destination link for each card
        image: "/img/lab-main.png",
        alt: "STEM Laboratory",
        header: "labsCard1Header",
        text: "labsCard1Text",
    },
    {
        href: "/lab2",
        image: "/img/brain-games.jpeg",
        alt: "Intellectual Games",
        header: "labsCard2Header",
        text: "labsCard2Text",
    },
    {
        href: "/lab3",
        image: "/img/aerospace-lab.jpeg",
        alt: "Aerospace Laboratory",
        header: "labsCard3Header",
        text: "labsCard3Text",
    },
    {
        href: "/lab4",
        image: "/img/energy-innovation.webp",
        alt: "Energy Innovation",
        header: "labsCard4Header",
        text: "labsCard4Text",
    },
    {
        href: "/lab5",
        image: "/img/electr-lab.png",
        alt: "Electronics Laboratory",
        header: "labsCard5Header",
        text: "labsCard5Text",
    },
    {
        href: "/lab6",
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
                <div className={'flex justify-between items-center'}>
                    <h2 className="text-4xl font-bold text-gray-800 tracking-tight text-center">
                        Labaratoriyalar
                    </h2>
                </div>
                {/* Cards Section */}
                <div
                    data-aos="fade-up"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10"
                >
                    {labData.map((lab, index) => (
                        <a key={index} href={lab.href} className="group">
                            <div
                                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden relative group"
                            >
                                {/* Card Image */}
                                <div className="relative overflow-hidden h-28">
                                    <img
                                        src={lab.image}
                                        alt={lab.alt}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                    <div
                                        className="absolute inset-0 bg-black bg-opacity-25 group-hover:bg-opacity-50 transition-opacity duration-300"></div>
                                </div>
                                {/* Card Content */}
                                <div className="p-2 flex flex-col items-center">
                                    <h1 className="text-lg font-bold text-gray-800 text-center">
                                        {getText(lab.header)}
                                    </h1>
                                </div>
                                {/* Arrow on Hover */}
                                <div
                                    className="absolute bottom-2 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ArrowRight size={30} color="#4A90E2" />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </Wrapper>
        </>
    );
};

export default Labs;
