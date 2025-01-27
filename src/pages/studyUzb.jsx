import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { IoCheckmarkDone } from "react-icons/io5";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";

const StudyUz = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  return (
    <>
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[708px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/eduUzbBg.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-6xl font-bold">
          Study in Uzbekistan
        </h1>
      </div>

      {/* Content Section */}
      <Wrapper>
        <div className="bg-[#F0F4F8] p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6">
            Turkiyadan Oʻzbekistonga Ekspert Oʻqituvchilar Xizmati
          </h1>

          <p className="mb-4">
            EduAgency Turkiyadan Oʻzbekistonga yetakchi va tajribali
            oʻqituvchilarni olib kelish xizmatini taklif etadi. Bizning asosiy
            maqsadimiz – Oʻzbekiston taʼlim tizimini xalqaro standartlarga mos
            ravishda rivojlantirish va yuqori sifatli oʻqituvchilardan
            foydalanish imkoniyatini taʼminlash.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Xizmatning Afzalliklari */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Xizmatning Afzalliklari
              </h2>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Yetakchi universitetlardan tajribali oʻqituvchilarni jalb
                  qilish
                </li>
                <li>
                  Oʻquvchilarga xalqaro darajadagi taʼlim berish imkoniyati
                </li>
                <li>
                  Fan va texnologiya sohasida ilgʻor bilimlarni taqdim etish
                </li>
                <li>Taʼlim sifatini oshirish va natijadorlikni yaxshilash</li>
                <li>
                  Oʻzbekiston taʼlim tizimini rivojlantirishga hissa qoʻshish
                </li>
              </ul>
            </div>

            {/* Jarayon haqida */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Ekspertlarni Jalb Qilish Jarayoni
              </h2>
              <p className="mb-4">
                Ekspert oʻqituvchilarni jalb qilish quyidagi bosqichlarda amalga
                oshiriladi:
              </p>
              <ul className="list-decimal pl-6">
                <li>
                  <strong>Ehtiyojlarni aniqlash:</strong> Mijozlar talablarini
                  batafsil oʻrganamiz.
                </li>
                <li>
                  <strong>Kadrlarni tanlash:</strong> Tajribali oʻqituvchilarni
                  saralab olish.
                </li>
                <li>
                  <strong>Hujjatlarni rasmiylashtirish:</strong> Kerakli
                  hujjatlar va ish vizalarini tayyorlash.
                </li>
                <li>
                  <strong>Yordam ko'rsatish:</strong> Oʻqituvchilarni
                  Oʻzbekistonga olib kelish va joylashtirish.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8">
            {/* Yashash va Faoliyat Shartlari */}
            <h2 className="text-2xl font-semibold mb-4">
              Yashash va Faoliyat Shartlari
            </h2>
            <p className="mb-4">
              Ekspert oʻqituvchilarni Oʻzbekistonga olib kelish jarayonida biz
              barcha yashash va ishlash sharoitlarini tashkil qilamiz. Ular
              uchun qulay yashash joylari va mos shart-sharoitlar yaratishga
              harakat qilamiz.
            </p>
            <p className="mb-4">
              Bizning xizmatlarimiz orqali oʻqituvchilar Oʻzbekistonda ishlash
              davomida nafaqat tajriba almashish, balki taʼlim sifatini
              yaxshilashga xizmat qiladi.
            </p>
          </div>

          <div className="mt-8">
            {/* Tez-tez So'raladigan Savollar */}
            <h2 className="text-2xl font-semibold mb-4">
              Tez-tez So'raladigan Savollar
            </h2>
            <ul className="list-disc pl-6">
              <li>
                <strong>
                  Qaysi sohalardagi oʻqituvchilarni olib kelish mumkin?
                </strong>
                Biz fan, texnologiya, matematika, tilshunoslik va boshqa
                sohalardagi oʻqituvchilarni jalb qilamiz.
              </li>
              <li>
                <strong>
                  Ekspert oʻqituvchilar qancha vaqt davomida faoliyat yuritadi?
                </strong>
                Faoliyat muddati mijozning talablariga qarab belgilanadi, odatda
                6 oydan 2 yilgacha.
              </li>
              <li>
                <strong>Hujjatlarni rasmiylashtirish qancha vaqt oladi?</strong>
                Hujjatlarni tayyorlash jarayoni odatda 1-2 oy davom etadi.
              </li>
            </ul>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default StudyUz;
