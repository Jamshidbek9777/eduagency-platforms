import React from "react";
import { FaLightbulb, FaUsers, FaFolderOpen, FaChalkboardTeacher, FaBook, FaAdjust, FaFlask, FaGraduationCap } from "react-icons/fa";

const strategies = [
    {
        title: "Renzulli Öğrenme Sistemi",
        description:
            "Renzulli Öğrenme Sistemi, öğrencilerin ilgi alanları, öğrenme stilleri ve yeteneklerine göre kişiselleştirilmiş bir eğitim sunar.",
        icon: <FaLightbulb />,
        gradient: "bg-gradient-to-r from-blue-500 to-purple-600",
    },
    {
        title: "Mizaç Temelli Eğitim ve Rehberlik Yaklaşımı",
        description:
            "Mizaç temelli eğitim, öğrencilerin doğal eğilimlerini anlayarak onlara uygun rehberlik sağlar.",
        icon: <FaUsers />,
        gradient: "bg-gradient-to-r from-green-400 to-teal-500",
    },
    {
        title: "Portfolyo Değerlendirme",
        description:
            "Portfolyo değerlendirme, öğrencilerin öz değerlendirme yapmalarını sağlar.",
        icon: <FaFolderOpen />,
        gradient: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
        title: "Flipped Learning (Ters Yüz Öğrenme)",
        description:
            "Flipped Learning, ders materyallerini evde öğrenmeyi ve sınıfta uygulama yapmayı teşvik eder.",
        icon: <FaChalkboardTeacher />,
        gradient: "bg-gradient-to-r from-red-400 to-pink-500",
    },
    {
        title: "Hikâye Anlatımı (Storytelling)",
        description:
            "Hikâye anlatımı, öğrenmeyi daha anlamlı ve kalıcı hale getirir.",
        icon: <FaBook />,
        gradient: "bg-gradient-to-r from-indigo-500 to-blue-400",
    },
    {
        title: "Öğrenme Stilleri",
        description:
            "Farklı öğrenme stillerine göre uyarlanmış bir eğitim, öğrencilerin motivasyonunu artırır.",
        icon: <FaAdjust />,
        gradient: "bg-gradient-to-r from-pink-500 to-purple-600",
    },
    {
        title: "BIGEP (Bilim ve Gelişim Programı)",
        description:
            "BIGEP, problem çözme ve yenilikçi projeler geliştirme fırsatı sunar.",
        icon: <FaFlask />,
        gradient: "bg-gradient-to-r from-green-400 to-blue-500",
    },
    {
        title: "AP (Advanced Placement) Programı",
        description:
            "AP Programı, lise öğrencilerine üniversite düzeyinde dersler alma fırsatı sunar.",
        icon: <FaGraduationCap />,
        gradient: "bg-gradient-to-r from-orange-400 to-yellow-500",
    },
];

const EducationStrategies = () => {
    return (
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 pt-48">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-blue-600 mb-6">
                    Eğitim Stratejileri
                </h2>
                <p className="text-gray-600 mb-10">
                    Eğitimde yeni yaklaşımlar ile fark yaratın!
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {strategies.map((strategy, index) => (
                    <div
                        key={index}
                        className={`${strategy.gradient} text-white shadow-lg rounded-lg p-6 flex flex-col`}
                    >
                        <div className="text-4xl mb-4">{strategy.icon}</div>
                        <h3 className="text-lg font-semibold mb-4">
                            {strategy.title}
                        </h3>
                        <p className="text-sm">{strategy.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationStrategies;
