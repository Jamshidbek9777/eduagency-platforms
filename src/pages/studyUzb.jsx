import React from "react";
import Wrapper from "../layout/wrapper";
import { FaCheckCircle } from "react-icons/fa";
import { FaCheckToSlot } from "react-icons/fa6";

const StudyUzb = () => {
  return (
    <>
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[500px] flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: "url('img/eduUzbBg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative z-10 text-5xl font-bold text-center">
          Ozbekistanda Eğitim Hizmetleri
        </h1>
      </div>

      {/* Content Section */}
      <Wrapper>
        <div className="py-12 space-y-12">
          {/* Kabul Mektubu Hizmeti */}
          <h1 className="text-xl">
            EduAgency olarak Özbekistan’da, eğitim ve bilimsel gelişime katkı
            sunan organizasyon hizmetleriyle fark yaratıyoruz. Konferanslar,
            fuarlar ve akademik turlar alanında sunduğumuz kapsamlı
            hizmetlerimiz, öğrencilerden eğitimcilere kadar geniş bir kitleye
            hitap etmektedir. Bu kapsamda gerçekleştirdiğimiz etkinlikler
            hakkında detaylı bilgiye aşağıda ulaşabilirsiniz:{" "}
          </h1>
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Öğretmen ve Akademisyen Kariyer Danışmanlığı
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Türkiye’deki öğretmenler ve üniversite hocalarının, Özbekistan’da
              eğitim kurumlarında istihdam edilmesine destek veriyoruz. Bu
              hizmet, öğretim görevlilerinin mesleki becerilerini uluslararası
              ölçekte değerlendirmelerine olanak tanır.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg">
              <li>
                <FaCheckCircle className="inline text-blue-500 mr-2" />
                <strong>
                  Profil Değerlendirmesi ve Kariyer Danışmanlığı:
                </strong>{" "}
                Adayın akademik geçmişi, mesleki tecrübeleri ve yetkinlikleri
                analiz edilir. Kariyer hedeflerine uygun kurumlar ve pozisyonlar
                belirlenir.
              </li>
              <li>
                <FaCheckCircle className="inline text-blue-500 mr-2" />
                <strong> İş İlanlarının Yönetimi: </strong> Özbekistan’daki
                eğitim kurumlarından gelen iş talepleri düzenli olarak takip
                edilir ve adaylara uygun pozisyonlarla eşleştirilir.
              </li>
              <li>
                <FaCheckCircle className="inline text-blue-500 mr-2" />
                <strong>Başvuru Sürecinin Yönetimi:</strong> Özbekistan’daki
                eğitim kurumlarının talep ettiği belgeler hazırlanır. İş
                başvuruları tamamlanarak gerekli mülakatlar düzenlenir
              </li>
              <li>
                <FaCheckCircle className="inline text-blue-500 mr-2" />
                <strong>Dil ve Kültür Hazırlığı: </strong> Adaylara
                Özbekistan’da çalışacakları dönemde faydalı olacak dil ve
                kültürel oryantasyon programları sunulur.
              </li>

              <li>
                <FaCheckCircle className="inline text-blue-500 mr-2" />
                <strong>İş Sözleşmesi ve Yasal Destek: </strong> İş
                tekliflerinin yasal uygunluğu incelenir, adaylara sözleşme
                detayları konusunda bilgilendirme yapılır ve gerekiyorsa yerel
                hukuk desteği sağlanır.
              </li>
              <li>
                <FaCheckCircle className="inline text-blue-500 mr-2" />
                <strong>Barınma ve Yaşam Desteği: </strong> Adayların konaklama
                ve Özbekistan’daki yaşam süreçleri hakkında rehberlik hizmeti
                sunulur.
              </li>
            </ul>
          </div>

          {/* Denklik İşlemleri Hizmeti */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg border border-gray-300">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Öğrencilere Özbekistan Üniversitelerinde Eğitim Danışmanlığı
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Türkiye’deki öğrencilerin Özbekistan’daki üniversitelerde kaliteli
              ve uygun maliyetli eğitim alması için kapsamlı danışmanlık hizmeti
              sunuyoruz.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg">
              <li>
                <FaCheckToSlot className="inline text-green-500 mr-2" />{" "}
                Üniversite Seçim Danışmanlığı: Öğrencinin eğitim hedefleri,
                bütçesi ve kariyer planlarına göre Özbekistan’daki en uygun
                üniversiteler belirlenir. Üniversitelerin bölümleri, burs
                olanakları ve program detayları hakkında bilgilendirme yapılır.
              </li>
              <li>
                <FaCheckToSlot className="inline text-green-500 mr-2" /> Başvuru
                Belgelerinin Hazırlanması: Gerekli belgeler (pasaport,
                transkript, diploma vb.) eksiksiz hazırlanır. Eğer dil
                yeterliliği gerekiyorsa, ek dil sertifikası süreci planlanır.
              </li>
              <li>
                <FaCheckToSlot className="inline text-green-500 mr-2" /> Başvuru
                ve Kabul Süreci Yönetimi: Üniversite başvuruları titizlikle
                yapılır ve süreç aday adına takip edilir. Kabul belgesinin
                alınması sağlanır.
              </li>
              <li>
                <FaCheckToSlot className="inline text-green-500 mr-2" /> Burs ve
                Konaklama Danışmanlığı: Öğrencilere uygun burs olanakları ve
                konaklama imkanları hakkında rehberlik edilir. Konaklama
                tercihleri ve yerleşim süreçlerinde öğrencinin yanında olunur.
              </li>
              <li>
                <FaCheckToSlot className="inline text-green-500 mr-2" /> Yasal
                İşlemler ve Vize Desteği: Özbekistan’da eğitim alacak
                öğrencilerin ihtiyaç duyabileceği vize işlemleri ve yerel
                düzenlemeler konusunda tam destek sağlanır.
              </li>
              <li>
                <FaCheckToSlot className="inline text-green-500 mr-2" />
                Uyum Programları: Yeni bir ülkede eğitim alacak öğrencilerin
                karşılaşabileceği uyum sorunlarını önlemek için dil, kültür ve
                yerel yaşam alışkanlıklarına yönelik rehberlik programları
                sunulur.
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default StudyUzb;
