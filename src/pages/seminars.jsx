import React from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../languages";

const Seminars = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[708px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/seminarBg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <h1 className="relative z-10 text-6xl font-bold mb-4 animate-fadeIn">
          {getText("seminar1")}
        </h1>
      </div>

      {/* Main Content Section */}
      <Wrapper>
        <div className="py-16 px-4 lg:px-12 bg-gray-50">
          {/* Introduction Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition">
              <img
                src="img/teachers.jpg"
                alt="Professional O'qituvchilar"
                className="w-full h-40 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">{getText("seminar2")}</h3>
              <p className="text-gray-600">{getText("seminar3")}</p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition">
              <img
                src="img/global.jpg"
                alt="Tarmoq Yaratish"
                className="w-full h-40 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">
                {" "}
                {getText("seminar4")}
              </h3>
              <p className="text-gray-600">{getText("seminar5")}</p>
            </div>

            <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition">
              <img
                src="img/global.webp"
                alt="Global Ko‘nikmalar"
                className="w-full h-40 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">
                {" "}
                {getText("seminar6")}
              </h3>
              <p className="text-gray-600">{getText("seminar7")}</p>
            </div>
          </section>

          {/* Upcoming Seminars Section */}
          <section className="mt-16 bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">
              {getText("seminar8")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white shadow-lg rounded-xl p-6">
                <img
                  src="img/seminar1.jpeg"
                  alt="Kosmik lager bo'yicha"
                  className="mb-4 w-full h-48 object-cover rounded-lg"
                />
                <h4 className="text-2xl font-bold mb-4">
                  {getText("seminar9")}
                </h4>
                <p className="text-gray-600">
                  2025-yil, Yanvar 27 | Toshkent, O‘zbekistan
                </p>
                <p className="mt-2 text-gray-500">{getText("seminar10")}</p>
              </div>
            </div>
          </section>
        </div>
      </Wrapper>
    </>
  );
};

export default Seminars;
