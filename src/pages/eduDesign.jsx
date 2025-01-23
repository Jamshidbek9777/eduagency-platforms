import React from "react";
import Wrapper from "../layout/wrapper";
import { Breadcrumb } from "antd";
import { IoCheckmarkDone } from "react-icons/io5";

const EducationDesign = () => {
  return (
    <>
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[708px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/eduDesignBg.jpeg')",
        }}
      >
        <div className="absolute top-36 left-8 z-10">
          <Breadcrumb
            separator={<span className="text-white">&gt;</span>}
            style={{
              color: "white",
              fontSize: "16px",
            }}
          >
            <Breadcrumb.Item>
              <a href="/" style={{ color: "white" }}>
                Bosh sahifa
              </a>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="cursor-pointer">
              Ta'lim xizmatlari
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <p className="text-white cursor-pointer">Ta'lim dizayni</p>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-6xl font-bold">Ta'lim dizayni</h1>
      </div>

      {/* Content Section */}
      <Wrapper>
        <div className="py-10 space-y-16">
          {/* Class Concepts Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#E6EAF4] p-4 rounded-[20px]">
            <div className="w-full h-[400px] md:h-[500px] overflow-hidden rounded-[18px] shadow-lg">
              <img
                src="/img/classConcept.jpeg"
                alt="Classroom Design"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Sinf Kontseptsiyalari va Tartibga Solish
              </h2>
              <p className="mb-2">
                Zamonaviy texnologiyalar bilan jihozlangan sinflar hozirgi
                davrda ta'lim samaradorligini oshirish uchun muhim ahamiyat kasb
                etadi.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Bino jihozlanishi: Interaktiv ekranlar va multimedia tizimlari
                  bilan jihozlangan sinflar.
                </li>
                <li>
                  Har bir sinfda planshetlar va shaxsiy kompyuterlar uchun qulay
                  ish joylarini taqdim qilish.
                </li>
                <li>
                  Talabalar uchun ergonomik mebellar (parta va stullar) bilan
                  jihozlash, hamda estetik jihatga e'tibor qaratish.
                </li>
              </ul>
            </div>
          </div>

          {/* Laboratory Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-[#E6EAF4] p-4 rounded-[20px]">
            <div className="w-full h-[400px] md:h-[500px] overflow-hidden rounded-lg shadow-lg ">
              <img
                src="/img/labsBg.jpeg"
                alt="Classroom Design"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Laboratoriya O'rnatish
              </h2>
              <p className="mb-2">
                Ta'limning fan yo‘nalishida sifatini oshirish uchun zamonaviy va
                xavfsiz laboratoriyalarni o‘rnatamiz:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Kimyo va biologiya tajribalarini amalga oshirish uchun maxsus
                  laboratoriya jihozlari.
                </li>
                <li>
                  Kimyo va biologiya tajribalarini amalga oshirish uchun maxsus
                  laboratoriya jihozlari.
                </li>
              </ul>
              <h2 className="text-2xl font-bold mb-4 mt-4">
                STEM Laboratoriyalari
              </h2>
              <h2 className="text-md mb-4">
                STEM yo‘nalishi uchun quyidagi xizmatlarni taklif
                etamiz:Robototexnika, 3D printerlar va dasturlash uchun maxsus
                jihozlar.Zamonaviy qurilmalar yordamida muhandislik va
                texnologik amaliy mashg‘ulotlar.Yuqori Texnologiyalar bilan
              </h2>
              <h2 className="text-md  mb-4">
                {" "}
                Ta'minlangan Ta'lim MaydonlariBizning laboratoriyalarimiz
                virtual haqiqat va kengaytirilgan haqiqat (VR/AR) vositalari
                bilan jihozlangan:Talabalar innovatsion asbob-uskunalar
                yordamida fanga bo‘lgan qiziqishlarini
                oshiradilar.Xususiylashtirilgan dasturlar va interaktiv
                darslarni o‘tkazish imkoniyati.
              </h2>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-[#E6EAF4] p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Nega Bizni Tanlashadi?</h2>
            <ul className="list-none space-y-4">
              <li className="flex items-start">
                <IoCheckmarkDone className="text-green-500 mt-1 mr-2" />
                <p>
                  <strong>Professional Yondashuv:</strong> Har bir loyiha uchun
                  maxsus reja ishlab chiqamiz va sifatga e'tibor qaratamiz.
                </p>
              </li>
              <li className="flex items-start">
                <IoCheckmarkDone className="text-green-500 mt-1 mr-2" />
                <p>
                  <strong>Innovatsion Texnologiyalar:</strong> Zamonaviy va
                  yetakchi texnologiyalarni qo'llash orqali ta'lim jarayonini
                  takomillashtiramiz.
                </p>
              </li>
              <li className="flex items-start">
                <IoCheckmarkDone className="text-green-500 mt-1 mr-2" />
                <p>
                  <strong>Foydalanuvchiga Moslashtirish:</strong> Har bir sinf
                  yoki laboratoriyani mijozning talablariga ko'ra ishlab
                  chiqiladi.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default EducationDesign;
