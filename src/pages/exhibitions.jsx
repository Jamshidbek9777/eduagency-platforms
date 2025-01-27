import React from "react";
import Wrapper from "../layout/wrapper";

const Exhibitions = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[600px] flex flex-col items-center justify-center text-white"
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
              <img
                src="img/exh1.jpeg"
                alt="San’at Ko‘rgazmalari"
                className="w-full h-40 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-semibold mb-2">Thematic fairs</h3>
              <p className="text-gray-600">
                We organize many thematic fairs, from university promotions to
                professional career guidance. We offer participants the chance
                to explore global opportunities.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
              <img
                src="img/exh2.jpg"
                alt="Foto Ko‘rgazmalar"
                className="w-full h-40 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-semibold mb-2">Foto Ko‘rgazmalar</h3>
              <p className="text-gray-600">
                Dunyoning turli burchaklaridagi manzaralarni va unutilmas
                lahzalarni o‘rganing.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition">
              <img
                src="img/exh3.jpeg"
                alt="Ilmiy Yutuqlar"
                className="w-full h-40 object-cover rounded-xl mb-6"
              />
              <h3 className="text-2xl font-semibold mb-2">Ilmiy Yutuqlar</h3>
              <p className="text-gray-600">
                Zamonaviy texnologiyalar va innovatsion yutuqlarni namoyish
                qiluvchi ilmiy ko‘rgazmalar.
              </p>
            </div>
          </section>
        </div>
      </Wrapper>
    </>
  );
};

export default Exhibitions;
