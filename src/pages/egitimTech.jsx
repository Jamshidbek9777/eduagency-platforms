import React from "react";

const services = [
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

const EgitimTech = () => {
    return (
        <div className={'max-w-7xl mx-auto px-4 py-12 font-sans pt-48 rounded-xl'}>
            {/* Header Section with Background Image inside max-w-7xl */}

                <div
                    className="relative bg-cover bg-center h-96 rounded-xl mb-10"
                    style={{ backgroundImage: 'url("/img/edutechbg.jpg")' }}
                >
                    <div className="absolute inset-0 bg-black rounded-xl bg-opacity-50 flex items-center justify-center">
                        <h1 className="text-4xl font-bold text-white text-center px-6">
                            EduAgency Eğitimde Mükemmellik İçin Okul Mimarisi ve Tasarım Hizmetleri
                        </h1>
                    </div>

            </div>

            {/* Main Content */}
            <div className=" py-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-blue-600 mb-6" id="services">
                        Eğitim Teknolojileriyle Geleceği Şekillendiriyoruz
                    </h2>
                    <p className="text-gray-700 text-lg mb-12">
                        Eğitim teknolojileriyle okullarda dijital dönüşümü destekliyor, daha verimli ve etkili süreçler sunuyoruz.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white shadow-xl rounded-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl hover:scale-105"
                        >
                            <div className="text-5xl mb-6">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                {service.title}
                            </h3>
                            <p className="text-gray-600 text-sm">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EgitimTech;
