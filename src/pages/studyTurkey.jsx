import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { IoCheckmarkDone } from "react-icons/io5";
import { FaGraduationCap, FaUniversity, FaLandmark } from "react-icons/fa";
import { GiMoneyStack, GiOpenBook } from "react-icons/gi";
import { LanguageContext } from "../context/language";

const StudyTurkey = () => {
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
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative z-10 text-6xl font-extrabold text-center">
          Study in Turkey
        </h1>
      </div>

      {/* Content Section */}
      <Wrapper>
        <div className="py-12 space-y-16">
          {/* Turkiyada o'qish */}
          <div className="bg-[#F0F4F8] p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold mb-6 text-center">
              Turkiyada O'qish va Transfer Jarayoni
            </h1>

            <p className="mb-4 text-lg">
              EduAgency orqali o'zbekistonlik talabalarga Turkiyada o'qish
              imkoniyatlarini yaratish va ularning o'qish transferini amalga
              oshirish jarayonini soddalashtirganmiz. Bizning xizmatlarimiz
              orqali siz Turkiyadagi yetakchi universitetlarda o'qish
              imkoniyatiga ega bo'lasiz.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <FaGraduationCap className="mr-3 text-xl" />
                  Turkiyada O'qishning Afzalliklari
                </h2>
                <ul className="list-disc pl-6 mb-4 space-y-3">
                  <li>Yuqori sifatli ta'lim tizimi va xalqaro diplomlar</li>
                  <li>Turli sohalarda ko'plab o'qish imkoniyatlari</li>
                  <li>
                    Turkiyaning boy madaniyati va til o'rganish imkoniyati
                  </li>
                  <li>O'qish va ishlash imkoniyatlari, stipendiyalar</li>
                  <li>Oson va qulay yashash shartlari</li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-semibold mb-4 flex items-center">
                  <FaUniversity className="mr-3 text-xl" />
                  Transfer Jarayoni
                </h2>
                <p className="mb-4">
                  Bizning agentlik orqali Turkiyaga transfer jarayoni quyidagi
                  bosqichlarda amalga oshiriladi:
                </p>
                <ul className="list-decimal pl-6 space-y-3">
                  <li>
                    <strong>Ariza topshirish:</strong> Talaba tomonidan ariza
                    yuboriladi.
                  </li>
                  <li>
                    <strong>Hujjatlar tekshiruvi:</strong> O'qish uchun zarur
                    bo'lgan barcha hujjatlar tekshiriladi.
                  </li>
                  <li>
                    <strong>Universitet tanlash:</strong> Talaba uchun eng mos
                    universitet va fakultet tanlanadi.
                  </li>
                  <li>
                    <strong>Qabul qilish:</strong> Universitetdan qabul xati
                    olinadi.
                  </li>
                  <li>
                    <strong>Visa va yo'l hujjatlari:</strong> Talaba uchun
                    vizalar va boshqa hujjatlar tayyorlanadi.
                  </li>
                  <li>
                    <strong>Transfer jarayoni:</strong> Talaba Turkiyaga ko'chib
                    o'tadi va o'qishni boshlaydi.
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <GiMoneyStack className="mr-3 text-xl" />
                Turkiyada Yashash va O'qish Shartlari
              </h2>
              <p className="mb-4 text-lg">
                Turkiyada o'qish nafaqat bilim olish, balki hayot tajribasini
                orttirish imkonini ham beradi. O'qish davomida talabalar
                Turkiyaning boy madaniyati bilan tanishishadi, yangi do'stlar
                orttirishadi va turli xil ishlash imkoniyatlaridan
                foydalanishadi. Universitetlar talabalarga turli xil yordamlar,
                stipendiyalar va yashash joylari bilan ta'minlaydi.
              </p>
              <p className="mb-4 text-lg">
                Yashash shartlari o'rtacha, lekin turli shaharlarda turar joy
                narxlari farq qiladi. Istanbul va Ankara kabi yirik shaharlar
                nisbatan qimmat, ammo o'qish va yashash uchun arzonroq hududlar
                ham mavjud.
              </p>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <GiOpenBook className="mr-3 text-xl" />
                Tez-tez So'raladigan Savollar
              </h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Qaysi universitetlarga transfer mumkin?</strong>{" "}
                  Bizning tashkilotimiz Turkiyadagi ko'plab universitetlar bilan
                  hamkorlik qiladi, shu jumladan Istanbul, Ankara va Izmirdagi
                  yetakchi o'quv muassasalari.
                </li>
                <li>
                  <strong>Transfer jarayoni qancha vaqt davom etadi?</strong>{" "}
                  Transfer jarayoni 1-2 oy davom etishi mumkin.
                </li>
                <li>
                  <strong>Stipendiya imkoniyatlari bormi?</strong> Ha, biz
                  talabalarga stipendiyalar va turli moliyaviy yordamlar taklif
                  qilamiz.
                </li>
                <li>
                  <strong>Turkiyada ishlash mumkinmi?</strong> Ha, talabalarga
                  ish ruxsatnomasi berilishi mumkin, lekin o'qish bilan birga
                  ishlash imkoniyatlari cheklangan.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default StudyTurkey;
