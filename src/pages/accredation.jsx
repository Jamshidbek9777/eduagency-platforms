import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";

const Accredation = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  return (
    <>
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[708px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/academicTourBg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-6xl font-bold">Akkreditatsiya</h1>
      </div>

      {/* Content Section */}
      <Wrapper>
        <div className="py-10 space-y-16">
          {/* Akkreditatsiya */}
          <div className="bg-[#F4F7FB] p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6">Akkreditatsiya</h1>

            <p className="mb-4">
              Akkreditatsiya — bu bizning ta'lim xizmatlarimiz va faoliyatimizni
              yuqori standartlarga mosligini tasdiqlovchi jarayon. Bizning
              tashkilotimiz, xalqaro va milliy akkreditatsiya tashkilotlari
              tomonidan rasmiy ravishda akkreditatsiya qilingan va sifatli
              xizmat ko'rsatishda ishonchli hisoblanadi.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  Akkreditatsiya jarayoni
                </h2>
                <p className="mb-4">
                  Akkreditatsiya jarayoni, bizning xizmatlarimizni xalqaro va
                  milliy talablar va standartlarga mosligini tekshirish va
                  tasdiqlash uchun amalga oshiriladi. Bizning tashkilotimiz bir
                  nechta mustaqil akkreditatsiya tashkilotlari tomonidan
                  baholandi va sertifikatlangan.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4">Afzalliklar</h2>
                <ul className="list-disc pl-6">
                  <li>Sifatni tasdiqlash va kafolatlash</li>
                  <li>Xalqaro standartlarga moslik</li>
                  <li>Tashkilotning ishonchliligi va obro'sini oshirish</li>
                  <li>Mijozlar uchun yuqori xizmat ko'rsatish</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Accredation;
