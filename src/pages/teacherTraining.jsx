import React from "react";
import {
    FaBrain,
    FaGlobe,
    FaBullseye,
    FaGamepad,
    FaChalkboardTeacher,
    FaUserCheck,
    FaLaptopCode,
    FaFolder,
    FaBook,
    FaUserTie,
    FaUsers,
    FaChartLine,
} from "react-icons/fa";

const teacherTrainings = [
    {
        title: "Beyin ve Öğrenme",
        description:
            "Beyin temelli öğrenme yaklaşımlarını tanıtarak, öğrenme süreçlerini anlamaya odaklanır.",
        color: "from-blue-500 to-purple-600",
        icon: <FaBrain/>,
    },
    {
        title: "Global Teacher",
        description:
            "Küresel eğitim trendlerini ve kültürel yaklaşımları öğretmenlere tanıtan bir program.",
        color: "from-green-400 to-teal-500",
        icon: <FaGlobe/>,
    },
    {
        title: "Dikkat Geliştirme Teknikleri",
        description:
            "Öğrencilerin dikkat sürelerini artırmaya yönelik stratejik teknikler.",
        color: "from-yellow-400 to-orange-500",
        icon: <FaBullseye/>,
    },
    {
        title: "Oyunlaştırma (Gamification)",
        description:
            "Ders içeriklerini oyun mekaniğiyle entegre ederek öğrenmeyi eğlenceli hale getiren bir yöntem.",
        color: "from-pink-500 to-red-500",
        icon: <FaGamepad/>,
    },
    {
        title: "Etkili Öğretim Teknikleri",
        description:
            "Yenilikçi ve kanıta dayalı öğretim stratejilerini tanıtarak öğrenmeyi güçlendiren eğitim.",
        color: "from-indigo-400 to-blue-600",
        icon: <FaChalkboardTeacher/>,
    },
    {
        title: "Öğrenciyi Tanıma Teknikleri",
        description:
            "Öğrencilerin bireysel farklılıklarını ve ihtiyaçlarını anlamaya yönelik yöntemler.",
        color: "from-gray-400 to-gray-600",
        icon: <FaUserCheck/>,
    },
    {
        title: "Eğitim Teknolojileri",
        description:
            "Dijital araçları ve teknolojileri sınıfta etkin kullanmayı öğreten bir program.",
        color: "from-yellow-400 to-orange-500",
        icon: <FaLaptopCode/>,
    },
    {
        title: "E-Portfolio Kullanımı",
        description:
            "Öğrencilerin başarılarını elektronik ortamda belgelemeyi öğreten bir program.",
        color: "from-blue-500 to-purple-600",
        icon: <FaFolder/>,
    },
    {
        title: "Hikâye Anlatımı (Storytelling)",
        description:
            "Ders içeriklerini hikâyelerle daha etkili hale getirme teknikleri.",
        color: "from-green-400 to-teal-500",
        icon: <FaBook/>,
    },
    {
        title: "Eğitimde Rehberlik Sistemi",
        description:
            "Öğrencilerin akademik, sosyal ve duygusal gelişimlerini izleme becerisi kazandırır.",
        color: "from-green-400 to-teal-500",
        icon: <FaUserTie/>,
    },
    {
        title: "Sınıf Yönetimi",
        description:
            "Sınıfta düzen ve disiplin sağlamanın ötesinde, öğrenci katılımını artırma yollarını öğretir.",
        color: "from-green-400 to-teal-500",
        icon: <FaUsers/>,
    },
    {
        title: "Eğitimde Veriye Dayalı Karar Verme",
        description:
            "Sınıf içi kararları şekillendirirken veri analizini kullanmayı öğretir.",
        color: "from-green-400 to-teal-500",
        icon: <FaChartLine/>,
    },
];

const TeacherTrainings = () => {
    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 pt-48">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-blue-600 mb-6">
                    Öğretmen Eğitimleri
                </h2>
                <p className="text-gray-600 mb-10">
                    Öğretmenlerin gelişimine yönelik özel olarak hazırlanmış eğitim
                    programlarımız.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {teacherTrainings.map((training, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 border-t-4 ${training.color}`}
                    >
                        <div className={'flex items-center space-x-4 mb-4'}>
                            <div
                                className="text-3xl text-white bg-gradient-to-r p-3 rounded-lg shadow-md ${program.color}">
                                {training.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800">
                                {training.title}
                            </h3>
                        </div>

                        <p className="text-gray-600 text-sm">{training.description}</p>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default TeacherTrainings;
