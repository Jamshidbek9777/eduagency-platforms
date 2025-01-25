import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { FaCheckCircle, FaAward, FaBuilding } from "react-icons/fa";
import { LanguageContext } from "../context/language";

const Accredation = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[708px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/academicTourBg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative z-10 text-5xl md:text-6xl font-extrabold tracking-tight text-center">
          Akkreditatsiya
        </h1>
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

          {/* Process and Benefits Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-[#F7F8FB] p-8 rounded-2xl shadow-lg space-y-6">
              <div className="flex items-center mb-4">
                <FaBuilding className="text-blue-600 text-3xl mr-4" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Akkreditatsiya jarayoni
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Akkreditatsiya jarayoni, bizning xizmatlarimizni xalqaro va
                milliy talablar va standartlarga mosligini tekshirish va
                tasdiqlash uchun amalga oshiriladi. Bizning tashkilotimiz bir
                nechta mustaqil akkreditatsiya tashkilotlari tomonidan baholandi
                va sertifikatlangan.
              </p>
            </div>

            <div className="bg-[#F7F8FB] p-8 rounded-2xl shadow-lg space-y-6">
              <div className="flex items-center mb-4">
                <FaAward className="text-green-600 text-3xl mr-4" />
                <h3 className="text-2xl font-semibold text-gray-800">
                  Afzalliklar
                </h3>
              </div>
              <ul className="list-disc pl-6 text-lg text-gray-600 space-y-3">
                <li>Sifatni tasdiqlash va kafolatlash</li>
                <li>Xalqaro standartlarga moslik</li>
                <li>Tashkilotning ishonchliligi va obro'sini oshirish</li>
                <li>Mijozlar uchun yuqori xizmat ko'rsatish</li>
              </ul>
            </div>
          </div>

          {/* Icons Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4">
              <FaCheckCircle className="text-blue-600 text-5xl" />
              <h4 className="text-xl font-semibold text-gray-800">
                Sifatni Tasdiqlash
              </h4>
              <p className="text-gray-600">
                Bizning akkreditatsiya jarayonimiz sifatni tasdiqlash va
                kafolatlashni ta'minlaydi.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4">
              <FaAward className="text-green-600 text-5xl" />
              <h4 className="text-xl font-semibold text-gray-800">
                Xalqaro Standartlar
              </h4>
              <p className="text-gray-600">
                Akkreditatsiyamiz xalqaro standartlarga muvofiq bo'lib, global
                o'zgarishlarga tayyor.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center space-y-4">
              <FaBuilding className="text-yellow-600 text-5xl" />
              <h4 className="text-xl font-semibold text-gray-800">
                Ishonchlilik
              </h4>
              <p className="text-gray-600">
                Akkreditatsiya tashkilotimizning ishonchliligini va obro'sini
                yanada mustahkamlaydi.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Accredation;
