import React from "react";
import { FaRocket, FaGlobe, FaGraduationCap, FaUniversity, FaRegBuilding } from "react-icons/fa";

const academicTours = [
    {
        title: "Uzay Kampı Seyahati",
        description:
            "Uzay Kampı’nda bilim ve teknolojiye dair birçok etkinlik ve keşif sizi bekliyor. Öğrenciler için etkileyici bir deneyim!",
        icon: <FaRocket />,
        color: "from-blue-500 to-indigo-600",
    },
    {
        title: "Türkiye'ye Bilim ve Keşif Turu: Geleceği Şekillendiren Öğretmenler İçin Eşsiz Bir Fırsat!",
        description:
            "Özbekistan'daki değerli eğitimciler! Öğretmenlik yalnızca bir meslek değil, geleceği inşa eden bir sanattır. Bu sanatı daha ileriye taşımak ve uluslararası düzeyde etkili yöntemlerle donanmak için sizi Türkiye’nin önde gelen bilim, eğitim ve teknoloji merkezlerinde ilham dolu bir keşfe davet ediyoruz!",
        icon: <FaGlobe />,
        color: "from-green-400 to-teal-500",
    },
    {
        title: "Türkiye Eğitim ve Okul Yönetim Sistemleri Keşif Turu: Geleceği Yönlendiren Öğretmenler İçin Eşsiz Bir Fırsat!",
        description:
            "Özbekistan’dan eğitim sektörünün öncüsü olmak isteyen değerli eğitimciler, sizi Türkiye’deki eğitim dünyasına doğru heyecan verici bir yolculuğa çıkarıyoruz! Bu keşif turu ile öğretim sistemlerine, okul yönetim modüllerine, bilim merkezlerine ve inovatif projelere dokunarak, eğitimde ne kadar büyük bir fark yaratabileceğinizi keşfedeceksiniz.",
        icon: <FaGraduationCap />,
        color: "from-yellow-400 to-orange-500",
    },
];

const AcademicTourPage = () => {
    return (
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 pt-48">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-extrabold text-blue-600 mb-6">Akademik Turlar</h2>
                <p className="text-gray-600 mb-10">
                    Geleceği şekillendiren eğitim ve keşif turları ile kariyerinize ilham verin.
                </p>
            </div>

            {/* Tour Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {academicTours.map((tour, index) => (
                    <div
                        key={index}
                        className={`cursor-pointer bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 border-t-4 ${tour.color}`}
                        aria-labelledby={`tour-${index}`}
                        role="region"
                        aria-describedby={`tour-desc-${index}`}
                    >
                        <div className="flex items-center space-x-4 mb-4">
                            <div className="text-3xl text-white bg-gradient-to-r p-3 rounded-lg shadow-md">
                                {tour.icon}
                            </div>
                            <h3 id={`tour-${index}`} className="text-xl font-bold text-gray-800">{tour.title}</h3>
                        </div>

                        <p id={`tour-desc-${index}`} className="text-gray-600 text-sm">{tour.description}</p>


                    </div>
                ))}
            </div>

            {/* Additional Info Section */}
            <div className="max-w-7xl mx-auto text-center mt-16">




                {/* Closing Statement */}
                <h4 className="text-2xl font-semibold text-blue-600 mt-10">Sizi Keşfe Bekliyoruz!</h4>
                <p className="text-gray-600 mb-6">
                    Geleceği daha güçlü bir şekilde inşa etmeniz için bu bilim dolu yolculukta size rehberlik etmeye hazırız. Hayal edin, öğrenin ve geleceği yeniden şekillendirin. Türkiye’nin eşsiz zenginlikleriyle dolu bu deneyimi kaçırmayın!
                </p>

            </div>
        </div>
    );
};

export default AcademicTourPage;
