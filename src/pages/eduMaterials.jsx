import React from "react";
import {
    FaTabletAlt,
    FaFlask,
    FaPuzzlePiece,
    FaCheckCircle,
    FaRobot,
    FaHandsHelping,
    FaChalkboardTeacher,
    FaBookReader,
    FaLaptop,
} from "react-icons/fa";

const eduMaterials = [
    {
        title: "Dijital Eğitim İçerikleri",
        description:
            "Bilgisayar ve tabletlerde kullanılabilecek, etkileşimli videolar, simülasyonlar ve online testlerden oluşur.",
        color: "from-blue-500 to-purple-600",
        icon: <FaTabletAlt />,
    },
    {
        title: "Deney Setleri ve STEM Malzemeleri",
        description:
            "Fen bilimleri, kimya ve fizik konularında öğrencilerin öğrenirken deney yapabilmelerini sağlayan setlerdir.",
        color: "from-green-400 to-teal-500",
        icon: <FaFlask />,
    },
    {
        title: "Eğitici Oyunlar ve Zekâ Kartları",
        description:
            "Öğrenirken eğlenmeyi hedefleyen bu materyaller, öğrencilerin yaratıcılıklarını artırır.",
        color: "from-yellow-400 to-orange-500",
        icon: <FaPuzzlePiece />,
    },
    {
        title: "Testler ve Değerlendirme Araçları",
        description:
            "Öğrencilerin akademik seviyelerini ölçmek için hazır testler, optik okuma formları ve değerlendirme şemaları.",
        color: "from-pink-500 to-red-500",
        icon: <FaCheckCircle />,
    },
    {
        title: "Robotik Kodlama Malzemeleri",
        description:
            "Mikrodenetleyiciler, sensörler, devre setleri ve kodlama yazılımı gibi materyaller içerir.",
        color: "from-indigo-400 to-blue-600",
        icon: <FaRobot />,
    },
    {
        title: "Değerler Eğitimi Materyalleri",
        description:
            "Öğrencilere ahlaki ve sosyal değerler kazandırmayı hedefleyen, hikâyeler, görseller ve oyunlar içeren materyaller.",
        color: "from-gray-400 to-gray-600",
        icon: <FaHandsHelping />,
    },
    {
        title: "Eğitimcilere Yönelik Materyaller",
        description:
            "Öğretmenlerin sınıf yönetimi, ölçme değerlendirme ve özel öğretim ihtiyaçlarını karşılamak için rehber kitaplar.",
        color: "from-yellow-400 to-orange-500",
        icon: <FaChalkboardTeacher />,
    },
    {
        title: "E-Öğrenme Platform Abonelikleri",
        description:
            "Online platformlara abonelik seçenekleri sunar. E-kitaplar, dijital ders içerikleri ve etkileşimli aktiviteler.",
        color: "from-blue-500 to-purple-600",
        icon: <FaLaptop />,
    },
];

const EduMaterials = () => {
    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 pt-48">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-blue-600 mb-6">
                    Eğitim Materyalleri
                </h2>
                <p className="text-gray-600 mb-10">
                    Öğrenciler ve öğretmenler için özel olarak hazırlanmış eğitim materyalleri.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {eduMaterials.map((material, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 border-t-4 ${material.color}`}
                    >
                        <div className={'flex items-center space-x-4 mb-4'}>
                            <div className={`text-3xl text-white bg-gradient-to-r p-3 rounded-lg shadow-md`}>
                                {material.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">
                                {material.title}
                            </h3>
                        </div>

                        <p className="text-gray-600 text-sm">{material.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EduMaterials;
