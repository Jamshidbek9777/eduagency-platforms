import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { LanguageContext } from "../context/language";

const Partnership = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[600px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/partnershipBg.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative z-10 text-5xl md:text-6xl font-extrabold tracking-tight text-center">
          Partnership services
        </h1>
      </div>

      {/* Content Section */}
      <Wrapper>
        <div className="py-16 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4">
              <img
                src="img/truzex.jpeg"
                alt="Öğrenci ve Akademisyen Transferi"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Student exchange
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

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4">
              <img
                src="img/internationalEvent.jpeg"
                alt="Uluslararası Etkinlik ve Organizasyon Yönetimi"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Uluslararası Etkinlik ve Organizasyon Yönetimi
              </h4>
              <ul className="list-disc pl-6 text-lg text-gray-600 space-y-3">
                <li>
                  Eğitim kurumları için fuar, konferans ve tanıtım
                  etkinliklerini düzenleme.
                </li>
                <li>
                  Akademik turlar, keşif gezileri ve bilim odaklı seyahatlerin
                  organizasyonu.
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4">
              <img
                src="img/teknoloji.webp"
                alt="Teknoloji ve Dijital Çözümler"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Teknoloji ve Dijital Çözümler
              </h4>
              <ul className="list-disc pl-6 text-lg text-gray-600 space-y-3">
                <li>
                  Eğitim kurumlarının dijitalleşmesi için altyapı ve teknoloji
                  çözümleri sağlama.
                </li>
                <li>
                  Online platformlar, dijital sınıflar ve uzaktan eğitim
                  çözümleri geliştirme.
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4">
              <img
                src="img/accredationBg.jpg"
                alt="Sertifikasyon ve Akreditasyon Hizmetleri"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Sertifikasyon ve Akreditasyon Hizmetleri
              </h4>
              <ul className="list-disc pl-6 text-lg text-gray-600 space-y-3">
                <li>
                  Uluslararası akreditasyon desteği ve belgelendirme
                  süreçlerinin yönetimi.
                </li>
                <li>
                  Uzmanlık sertifikası programları, mesleki gelişim programları
                  ve sertifikasyonlar.
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4">
              <img
                src="img/joint.jpg"
                alt="Ortak Eğitim Programları Geliştirme"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Ortak Eğitim Programları Geliştirme
              </h4>
              <ul className="list-disc pl-6 text-lg text-gray-600 space-y-3">
                <li>
                  Çift diploma programları, uluslararası müfredat ve
                  sertifikasyon süreçlerinin oluşturulması.
                </li>
                <li>
                  Eğitim kurumları arasında kültürel ve akademik projelerin
                  planlanması.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Partnership;
