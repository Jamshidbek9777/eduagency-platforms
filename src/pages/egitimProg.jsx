import React from "react";
import { FaRobot, FaBook, FaLanguage, FaAtom, FaPaintBrush, FaProjectDiagram } from "react-icons/fa";

const programs = [
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
    {
        title: "IB STEM Programı",
        description:
            "Uluslararası Bakalorya (IB) programının STEM odaklı bir versiyonu olan IB STEM, öğrencilerin uluslararası standartlarda bilimsel düşünme ve analiz yeteneklerini geliştirmeyi hedefler.",
        icon: <FaAtom />,
        color: "from-pink-500 to-red-500",
    },
    {
        title: "Yabancı Çocuklara Türkçe Öğretimi",
        description:
            "Türkçe, yabancı çocuklar için sadece bir dil değil, aynı zamanda kültür köprüsü niteliği taşır. Bu program, iletişim temelli yöntemlerle Türkçeyi etkin bir şekilde öğretirken, kültürel bağları da güçlendirir.",
        icon: <FaLanguage />,
        color: "from-indigo-400 to-blue-600",
    },
    {
        title: "Robotik Kodlama",
        description:
            "Robotik kodlama programı, çocukları teknolojiyle tanıştırmanın ve 21. yüzyıl becerilerini kazandırmanın en eğlenceli yollarından biridir.",
        icon: <FaRobot />,
        color: "from-gray-400 to-gray-600",
    },
];

const EducationPrograms = () => {
    return (
        <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8 pt-48">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-400 mb-6">
                    Eğitim Programları
                </h2>
                <p className="text-gray-600 text-lg">
                    Eğitim dünyasında fark yaratacak programlarımızla tanışın!
                </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-10">
                {programs.map((program, index) => (
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
        </div>
    );
};

export default EducationPrograms;
