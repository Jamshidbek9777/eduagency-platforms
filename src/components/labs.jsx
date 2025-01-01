import Wrapper from "../layout/wrapper.jsx";
import { getText } from "../languages/index.js";
import { ArrowRight } from "lucide-react";
import {FaAtom, FaPaintBrush, FaProjectDiagram} from "react-icons/fa";
import React from "react"; // Import ArrowRight icon

const labData = [
    {
        title: "Harezmi Eğitim Modeli",
        description:
            "Harezmi Eğitim Modeli, disiplinler arası bir yaklaşımla öğrencilere matematik, teknoloji, mühendislik, fen ve sosyal bilimleri bir arada öğrenme imkânı sunar. Problem çözme, analitik düşünme ve iş birliği yeteneklerini geliştirmeyi hedefleyen bu model, gerçek hayata yönelik projeler üzerinde çalışmayı teşvik eder.",
        icon: <FaAtom />,
        color: "from-blue-500 to-purple-600",
    },
    {
        title: "BİLSEM Programı",
        description:
            "Bilim ve Sanat Merkezleri (BİLSEM), üstün yetenekli çocukların bireysel farklılıklarına uygun destekleyici bir eğitim ortamı sunar. Bilim, sanat, teknoloji ve yaratıcılık alanlarındaki potansiyellerini keşfetmeleri ve geliştirmeleri için özel olarak hazırlanmış bir programdır.",
        icon: <FaPaintBrush />,
        color: "from-green-400 to-teal-500",
    },
    {
        title: "STEM Eğitimi",
        description:
            "STEM (Science, Technology, Engineering, Mathematics), fen, teknoloji, mühendislik ve matematiği birleştiren bir öğrenme yaklaşımıdır. Uygulamalı ve proje tabanlı eğitimle öğrencilerin problem çözme, yaratıcı düşünme ve ekip çalışması becerilerini geliştirir.",
        icon: <FaProjectDiagram />,
        color: "from-yellow-400 to-orange-500",
    },
];

const Labs = () => {
    return (
        <>
            <Wrapper>
                <div className={'flex justify-between items-center'}>
                    <h2 className="text-4xl font-bold text-gray-800 tracking-tight text-center">
                        talim dastu
                    </h2>
                </div>
                {/* Cards Section */}
                {/* Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  mt-10">
                    {labData.map((program, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 border-t-4 ${program.color}`}
                        >
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="text-3xl text-white bg-gradient-to-r p-3 rounded-lg shadow-md ${program.color}">
                                    {program.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">
                                    {program.title}
                                </h3>
                            </div>
                            <p className="text-gray-600 text-sm">
                                {program.description}
                            </p>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </>
    );
};

export default Labs;
