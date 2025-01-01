import { getText } from "../languages/index.js";
import Wrapper from "../layout/wrapper.jsx";
import { Button } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import React from "react";

const TechingTech = () => {
    const cardData = [
        {
            title: "Okul Yönetim Sistemleri",
            description: `
      Verimli yönetim, daha iyi sonuçlar: Okul yönetimi sürecinin her aşamasını kolaylaştıran tam entegre sistemler sunuyoruz.
      Zaman ve kaynak tasarrufu, hızlı erişim ve öğrencilerin gelişim takibini sağlıyoruz.
    `,
            icon: "🏫",
        },
        {
            title: "E-Learning (Eğitim) Platformları",
            description: `
      Zengin içerik ve kaynaklar sunarak esnek öğrenme imkânı tanıyoruz. Öğretmen ve öğrenci desteğiyle eğitimi modernize ediyoruz.
    `,
            icon: "📚",
        },
        {
            title: "E-Oyunlar (Eğitim Oyunları)",
            description: `
      Eğlenceli öğrenme süreçleri sunarak problem çözme becerilerini ve kişiselleştirilmiş oyun deneyimlerini destekliyoruz.
    `,
            icon: "🎮",
        },
        {
            title: "E-LMS (Elektronik Öğrenim Yönetim Sistemleri)",
            description: `
      Tüm eğitim süreçlerini tek bir platformda yöneterek veri tabanlı karar destek ve gerçek zamanlı ilerleme takibi sağlıyoruz.
    `,
            icon: "💻",
        },
    ];

    return (
        <>
            <Wrapper>
                <div className={"flex justify-between items-center"}>
                    <h2 className="text-4xl font-bold text-gray-800 tracking-tight text-center mb-4">
                        Ta'lim texnologiyalari
                    </h2>
                </div>
                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto mb-10">
                    {cardData.map((service, index) => (
                        <div
                            key={index}
                            className="cursor-pointer bg-white shadow-xl rounded-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:scale-105"
                        >
                            <div className="text-5xl mb-6">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                {service.title}
                            </h3>

                        </div>
                    ))}
                </div>
            </Wrapper>
        </>
    );
};

export default TechingTech;
