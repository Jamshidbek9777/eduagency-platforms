import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { LanguageContext } from "../context/language";

const Accredation = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[600px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/accredationBg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative z-10 text-5xl md:text-6xl font-extrabold tracking-tight text-center"></h1>
      </div>

      {/* Content Section */}
      <Wrapper>
        <div className="py-16 space-y-16">
          {/* Accreditation Overview */}
          <div className="bg-white p-8 rounded-2xl shadow-lg space-y-8">
            <h2 className="text-3xl font-semibold text-gray-800">
              Akkreditatsiya
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Akkreditatsiya — bu bizning ta'lim xizmatlarimiz va faoliyatimizni
              yuqori standartlarga mosligini tasdiqlovchi jarayon. Bizning
              tashkilotimiz, xalqaro va milliy akkreditatsiya tashkilotlari
              tomonidan rasmiy ravishda akkreditatsiya qilingan va sifatli
              xizmat ko'rsatishda ishonchli hisoblanadi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4">
              <img
                src="img/truzex.jpeg"
                alt="Öğrenci ve Akademisyen Transferi"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Öğrenci ve Akademisyen Transferi Hizmetleri
              </h4>
              <ul className="list-disc pl-6 text-lg text-gray-600 space-y-3">
                <li>
                  Eğitim kurumları için Özbekistan-Türkiye arasında öğrenci ve
                  akademisyen değişim programlarının yönetimi.
                </li>
                <li>
                  Eğitim kurumları adına uluslararası öğrencilerin kabul ve
                  yerleştirme süreçlerini organize etme.
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4">
              <img
                src="img/franchize.png"
                alt="Franchise ve İşbirliği Yönetimi"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Franchise ve İşbirliği Yönetimi
              </h4>
              <ul className="list-disc pl-6 text-lg text-gray-600 space-y-3">
                <li>
                  Türkiye’deki eğitim kurumlarının Özbekistan’da franchise açma
                  süreçlerini yönetme.
                </li>
                <li>
                  Özbekistan’daki eğitim kurumlarının Türkiye ile ortak projeler
                  ve işbirlikleri geliştirmesini sağlama.
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4">
              <img
                src="img/truz.jpg"
                alt="Pazar Araştırması ve Rekabet Analizi"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Pazar Araştırması ve Rekabet Analizi
              </h4>
              <ul className="list-disc pl-6 text-lg text-gray-600 space-y-3">
                <li>
                  Eğitim kurumlarına, Türkiye ve Özbekistan’daki eğitim
                  sektörünün güncel durumunu analiz eden raporlar sunma.
                </li>
                <li>
                  Hedef kitle ve rekabet avantajları üzerine stratejiler
                  oluşturma.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Accredation;
