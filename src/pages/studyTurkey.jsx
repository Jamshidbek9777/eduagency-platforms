import React from "react";
import Wrapper from "../layout/wrapper";
import { FaCheckCircle, FaFileAlt } from "react-icons/fa";

const StudyTurkey = () => {
  return (
    <>
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[500px] flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: "url('img/eduTurkeyBg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative z-10 text-5xl font-bold text-center">
          Türkiye’de Eğitim Hizmetleri
        </h1>
      </div>

      {/* Content Section */}
      <Wrapper>
        <div className="py-12 space-y-12">
          <h1 className="text-xl">
            Özbekistan ve Türkiye arasında eğitim alanında köprü görevi gören
            EduAgency, öğretmenlerin ve akademisyenlerin Özbekistan’da kariyer
            fırsatları yakalamasını, aynı zamanda öğrencilerin Özbekistan’daki
            üniversitelerde eğitim almasını sağlayan profesyonel danışmanlık
            hizmetleri sunmaktadır. Hizmetlerimiz iki ana başlıkta
            detaylandırılmıştır:
          </h1>
          {/* Kabul Mektubu Hizmeti */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Türkiye’de Öğrenci Kabul Mektubu Alma Hizmeti
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Türkiye’deki eğitim kurumlarına başvuru yapmak için kabul mektubu
              almanız gerektiğinin farkındayız. Bu süreci sizin için
              kolaylaştırarak doğru adımlar atmanızı sağlıyoruz.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg">
              <li>
                <FaCheckCircle className="inline text-blue-500 mr-2" />
                <strong>Kuruma Uygunluk Analizi:</strong> Öğrencinin akademik
                başarılarını, dil becerilerini ve kariyer hedeflerini dikkate
                alarak uygun kurumları belirliyoruz.
              </li>
              <li>
                <FaCheckCircle className="inline text-blue-500 mr-2" />
                <strong>Başvuru Belgesi Hazırlığı:</strong> Gerekli belgelerin
                (not dökümleri, pasaport, dil sertifikaları vb.) eksiksiz
                hazırlanmasını sağlıyoruz.
              </li>
              <li>
                <FaCheckCircle className="inline text-blue-500 mr-2" />
                <strong>Başvuru Sürecinin Yönetimi:</strong> Seçilen eğitim
                kurumlarının sistemleri üzerinden resmi başvuruları biz
                yönetiyoruz.
              </li>
              <li>
                <FaCheckCircle className="inline text-blue-500 mr-2" />
                <strong>Süreç Takibi ve Onay:</strong> Başvuru sürecini düzenli
                olarak takip ediyor, en kısa sürede kabul mektubunun temin
                edilmesini sağlıyoruz.
              </li>
            </ul>
          </div>

          {/* Denklik İşlemleri Hizmeti */}
          <div className="bg-gray-100 p-8 rounded-lg shadow-lg border border-gray-300">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Türkiye Denklik İşlemleri Hizmeti
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Türkiye’de eğitim hayatına devam etmek isteyen öğrencilerin
              diplomalarının denklik işlemlerini sorunsuz bir şekilde
              tamamlamalarına yardımcı oluyoruz.
            </p>
            <ul className="list-disc pl-6 space-y-3 text-lg">
              <li>
                <FaFileAlt className="inline text-green-500 mr-2" /> Denklik
                Uygunluğu Kontrolü: Öğrencinin mevcut diploma ve
                sertifikalarının denklik kapsamına girip girmediğini analiz
                ediyoruz.
              </li>
              <li>
                <FaFileAlt className="inline text-green-500 mr-2" /> Belge
                Hazırlığı ve Tercüme: Diploma, transkript gibi belgelerin
                tercümesini yapıyor ve noter onaylarıyla süreç için hazır hale
                getiriyoruz.
              </li>
              <li>
                <FaFileAlt className="inline text-green-500 mr-2" /> Başvuru
                Yapılması: Türkiye’nin ilgili kurumlarına resmi başvuruları
                öğrencimiz adına gerçekleştiriyoruz.
              </li>
              <li>
                <FaFileAlt className="inline text-green-500 mr-2" /> Takip ve
                Bilgilendirme: Süreci yakından takip ederek öğrenciye düzenli
                bilgilendirme yapıyoruz.
              </li>
              <li>
                <FaFileAlt className="inline text-green-500 mr-2" /> Sonuç
                Yönetimi: Denklik onayı alındığında öğrencimizin sonraki
                adımları kolayca atabilmesi için yönlendirme sağlıyoruz.
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default StudyTurkey;
