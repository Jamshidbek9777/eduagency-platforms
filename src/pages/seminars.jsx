import React from "react";
import Wrapper from "../layout/wrapper";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaGlobe,
  FaRegCalendarAlt,
} from "react-icons/fa";

const Seminars = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[708px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/eduStrBg.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <h1 className="relative z-10 text-6xl font-bold mb-4 animate-fadeIn">
          Seminarlar va Konferensiyalar
        </h1>
      </div>

      {/* Main Content Section */}
      <Wrapper>
        <div className="py-16 px-4 lg:px-12 bg-gray-50">
          {/* Introduction Section */}
          <section className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-800 animate-fadeIn">
              Bizning Seminarlarimiz
            </h2>
            <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto animate-fadeIn">
              Yetakchi mutaxassislar bilan birga bilim olish imkoniyatidan
              foydalaning. Seminarlarimiz orqali siz o‘z sohangizda yangi
              imkoniyatlarni kashf etasiz.
            </p>
          </section>

          {/* Key Features Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition">
              <div className="text-blue-500 text-6xl mb-6">
                <FaChalkboardTeacher />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Professional O‘qituvchilar
              </h3>
              <p className="text-gray-600">
                Tajribali o‘qituvchilar va xalqaro ekspertlar sizga bilimlar
                ulashadi.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition">
              <div className="text-green-500 text-6xl mb-6">
                <FaUsers />
              </div>
              <h3 className="text-2xl font-bold mb-4">Tarmoq Yaratish</h3>
              <p className="text-gray-600">
                Seminarlar davomida yangi hamkorlik aloqalarini yo‘lga
                qo‘yishingiz mumkin.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition">
              <div className="text-yellow-500 text-6xl mb-6">
                <FaGlobe />
              </div>
              <h3 className="text-2xl font-bold mb-4">Global Ko‘nikmalar</h3>
              <p className="text-gray-600">
                Dunyo bo‘ylab bilimlaringizni oshirib, yangi tajribalar oling.
              </p>
            </div>
          </section>

          {/* Upcoming Seminars Section */}
          <section className="mt-16 bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Yaqinlashayotgan Seminarlar
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white shadow-lg rounded-xl p-6">
                <h4 className="text-2xl font-bold mb-4">
                  Kosmik lager bo'yicha
                </h4>
                <p className="text-gray-600">
                  2025-yil, Yanvar 27 | Toshkent, O‘zbekistan
                </p>
                <p className="mt-2 text-gray-500">
                  Seminar davomida biz yoshlarga Kosmosx tizimi va kosmik lager
                  bo'yicha ma'lumot ulashamiz
                </p>
              </div>

              <div className="bg-white shadow-lg rounded-xl p-6">
                <h4 className="text-2xl font-bold mb-4">OkulAIle</h4>
                <p className="text-gray-600">
                  2025-yil, Aprel | Tashkent, O‘zbekistan
                </p>
                <p className="mt-2 text-gray-500">
                  Bog'chalarga Okulaileni tizimini tanishtirish
                </p>
              </div>
            </div>
          </section>
        </div>
      </Wrapper>
    </>
  );
};

export default Seminars;
