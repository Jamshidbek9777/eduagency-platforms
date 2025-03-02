import React from "react";
import { FaChalkboardTeacher, FaLaptopCode, FaLightbulb } from "react-icons/fa";
import Wrapper from "../layout/wrapper";

const Modernization = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6 md:px-20">
      <Wrapper>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Dijital Modernizasyon Nedir?
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            Dijital modernizasyon, eğitimi ve öğrenme süreçlerini ileri
            teknolojiyle destekleyerek daha etkili, erişilebilir ve verimli hale
            getirme sürecidir. Akıllı sınıflar, dijital öğretmen araçları ve
            bireyselleştirilmiş öğrenme modelleri ile geleceği bugünden inşa
            ediyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 ">
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6 text-center">
            <FaLaptopCode className="text-blue-400 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">
              Dijital Eğitim Modeli
            </h3>
            <p className="text-gray-400 mb-4">
              Öğrenme yönetim sistemleri, bireyselleştirilmiş içerikler ve
              dijital ölçme araçlarıyla öğrencilerin kendi hızında öğrenmesini
              sağlıyoruz.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
              Daha Fazla
            </button>
          </div>

          <div className="bg-gray-800 rounded-2xl shadow-lg p-6 text-center">
            <FaLightbulb className="text-yellow-400 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Akıllı Sınıflar</h3>
            <p className="text-gray-400 mb-4">
              Artırılmış gerçeklik, akıllı tahtalar ve oyun tabanlı öğrenme
              araçlarıyla sınıf ortamlarını yeniliyoruz.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg">
              Detaylı Bilgi
            </button>
          </div>

          <div className="bg-gray-800 rounded-2xl shadow-lg p-6 text-center">
            <FaChalkboardTeacher className="text-green-400 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Dijital Öğretmenler</h3>
            <p className="text-gray-400 mb-4">
              Yapay zeka destekli öğretim araçları ve interaktif eğitim
              metotlarıyla öğretmenleri geleceğe hazırlıyoruz.
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">
              Keşfedin
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold mb-4">
            Eğitimin Geleceğini Bugünden Şekillendirin
          </h2>
          <p className="text-lg text-gray-400 mb-6">
            EduAgency ile eğitimde dijital dönüşüme adım atın. Daha özgün,
            etkili ve erişilebilir bir öğrenme modeli için bizimle iletişime
            geçin.
          </p>
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white text-lg px-6 py-3 rounded-lg">
            Bize Ulaşın
          </button>
        </div>
      </Wrapper>
    </div>
  );
};

export default Modernization;
