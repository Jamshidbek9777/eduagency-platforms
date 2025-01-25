import React from "react";
import Wrapper from "../layout/wrapper";
import { FaPaintBrush, FaCamera, FaMicroscope } from "react-icons/fa";

const Exhibitions = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[708px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/exhubitions.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <h1 className="relative z-10 text-6xl font-bold">
          Ko‘rgazmalar va Tadbirlar
        </h1>
      </div>

      {/* Main Content Section */}
      <Wrapper>
        <div className="py-10 px-4 lg:px-8">
          {/* Introduction Section */}
          <section className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-gray-800">
              Bizning Ko‘rgazmalarimiz
            </h2>
            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
              Ko‘rgazmalarimizda san’at, texnologiyalar va ilmiy yutuqlarni
              o‘rganing. Bu tadbirlar nafaqat bilim beribgina qolmay, sizni
              yangi imkoniyatlarga ilhomlantiradi.
            </p>
          </section>

          {/* Key Features Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
              <div className="text-red-500 text-6xl mb-4">
                <FaPaintBrush />
              </div>
              <h3 className="text-2xl font-semibold mb-2">
                San’at Ko‘rgazmalari
              </h3>
              <p className="text-gray-600">
                Rang-barang san’at asarlari va dizaynlar bilan tanishing. Har
                bir asar sizni ilhomlantiradi.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
              <div className="text-blue-500 text-6xl mb-4">
                <FaCamera />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Foto Ko‘rgazmalar</h3>
              <p className="text-gray-600">
                Dunyoning turli burchaklaridagi manzaralarni va unutilmas
                lahzalarni o‘rganing.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
              <div className="text-green-500 text-6xl mb-4">
                <FaMicroscope />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Ilmiy Yutuqlar</h3>
              <p className="text-gray-600">
                Zamonaviy texnologiyalar va innovatsion yutuqlarni namoyish
                qiluvchi ilmiy ko‘rgazmalar.
              </p>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="mt-16 bg-blue-100 py-10 px-6 rounded-xl text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ko‘rgazmalarimizda ishtirok eting!
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Qiziqarli va o‘zgacha tajriba o‘tkazishni xohlaysizmi? Bizning
              ko‘rgazmalarimiz siz uchun ajoyib imkoniyatlar yaratadi!
            </p>
            <button className="bg-blue-500 text-white text-lg px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition">
              <a href="/contact">Tafsilotlarni Ko‘rish</a>
            </button>
          </section>
        </div>
      </Wrapper>
    </>
  );
};

export default Exhibitions;
