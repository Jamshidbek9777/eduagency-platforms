import React from "react";

const programs = [
    {
        title: "Harezmi Eğitim Modeli",
        description:
            "Harezmi Eğitim Modeli, disiplinler arası bir yaklaşımla öğrencilere matematik, teknoloji, mühendislik, fen ve sosyal bilimleri bir arada öğrenme imkânı sunar. Problem çözme, analitik düşünme ve iş birliği yeteneklerini geliştirmeyi hedefleyen bu model, gerçek hayata yönelik projeler üzerinde çalışmayı teşvik eder.",
    },
    {
        title: "BİLSEM Programı",
        description:
            "Bilim ve Sanat Merkezleri (BİLSEM), üstün yetenekli çocukların bireysel farklılıklarına uygun destekleyici bir eğitim ortamı sunar. Bilim, sanat, teknoloji ve yaratıcılık alanlarındaki potansiyellerini keşfetmeleri ve geliştirmeleri için özel olarak hazırlanmış bir programdır.",
    },
    {
        title: "STEM Eğitimi",
        description:
            "STEM (Science, Technology, Engineering, Mathematics), fen, teknoloji, mühendislik ve matematiği birleştiren bir öğrenme yaklaşımıdır. Uygulamalı ve proje tabanlı eğitimle öğrencilerin problem çözme, yaratıcı düşünme ve ekip çalışması becerilerini geliştirir.",
    },
    {
        title: "IB STEM Programı",
        description:
            "Uluslararası Bakalorya (IB) programının STEM odaklı bir versiyonu olan IB STEM, öğrencilerin uluslararası standartlarda bilimsel düşünme ve analiz yeteneklerini geliştirmeyi hedefler.",
    },
    {
        title: "Yabancı Çocuklara Türkçe Öğretimi",
        description:
            "Türkçe, yabancı çocuklar için sadece bir dil değil, aynı zamanda kültür köprüsü niteliği taşır. Bu program, iletişim temelli yöntemlerle Türkçeyi etkin bir şekilde öğretirken, kültürel bağları da güçlendirir.",
    },
    {
        title: "Robotik Kodlama",
        description:
            "Robotik kodlama programı, çocukları teknolojiyle tanıştırmanın ve 21. yüzyıl becerilerini kazandırmanın en eğlenceli yollarından biridir.",
    },
    {
        title: "Değerler Eğitimi",
        description:
            "Değerler Eğitimi, öğrencilerin etik değerler, toplum bilinci ve kişisel sorumluluklarını geliştirmek için hazırlanmıştır.",
    },
    {
        title: "P4C (Philosophy for Children)",
        description:
            "P4C, çocuklar için felsefe eğitimi yaklaşımıdır. Eleştirel ve yaratıcı düşünmeyi, dinleme ve tartışma becerilerini teşvik eder.",
    },
    {
        title: "After School Programı",
        description:
            "Okul sonrası etkinlikler, öğrencilerin akademik başarılarının yanı sıra sosyal ve sanatsal becerilerini geliştirmeye odaklanır.",
    },
];

const EducationPrograms = () => {
    return (
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 pt-48">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold text-blue-600 mb-6">
                    Eğitim Programları
                </h2>
                <p className="text-gray-600 mb-10">
                    Eğitim dünyasında fark yaratacak programlarımızla tanışın!
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {programs.map((program, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-6 flex flex-col"
                    >
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            {program.title}
                        </h3>
                        <p className="text-gray-600 text-sm">{program.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationPrograms;
