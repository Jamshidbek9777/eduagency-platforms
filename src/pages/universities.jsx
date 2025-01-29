import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";
import { FaArrowAltCircleRight } from "react-icons/fa";

const Universities = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <>
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[600px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/unvBg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
        <h1 className="relative z-10 text-6xl font-bold drop-shadow-lg text-center">
          {getText("header4")}
        </h1>
      </div>

      {/* Content Section */}
      <Wrapper>
        <div className="py-14 space-y-20">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            {/* Student transfer */}
            <div className="mt-10">
              <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold mb-4">
                  {getText("sTransfer1")}
                </h1>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <p className="mt-4 text-xl font-bold">
                  {getText("sTransfer1")}
                </p>
              </div>
              <p className="mt-4 text-base">{getText("sTransfer3")}</p>
              <p className="mt-4 text-base">{getText("sTransfer4")}</p>
              <p className="mt-4 text-base">{getText("sTransfer5")}</p>
              <p className="mt-4 text-base">{getText("sTransfer6")}</p>

              <div className="mt-4">
                <div className="flex flex-wrap justify-start gap-4">
                  {/* Video 2 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/studyTurkey1.jpg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/studyTurkey2.jpg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                  {/* Video 1 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/studyTurkey3.webp"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Edudesign */}
            <div className="mt-10">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <p className="mt-4 text-4xl font-bold">
                  {getText("eduDesign7")}
                </p>
              </div>
              <p className="mt-4 text-base">{getText("eduDesign8")}</p>

              <div className="mt-4">
                <div className="flex flex-wrap justify-start gap-4">
                  {/* Video 2 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/stemLab1.jpg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/astranomy.jpg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                  {/* Video 1 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/lab1.jpg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Teacher trainings */}
            <div className="mt-10">
              <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold mb-4">
                  {getText("navbar9")}
                </h1>
                <a href="/teacherTrainings" className="flex items-center gap-2">
                  <p>Learn more</p>
                  <FaArrowAltCircleRight />
                </a>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <p className="mt-4 text-base">{getText("tTrain1")}</p>
              </div>

              <div className="mt-4">
                <div className="flex flex-wrap justify-start gap-4">
                  {/* Video 2 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/tTraining1.jpeg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/tTraining2.jpg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                  {/* Video 1 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/tTraining3.jpg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Exhibitions */}
            <h1 className="text-4xl font-bold mb-4 mt-8">
              {getText("navbar11")}
            </h1>
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
                <h3 className="text-2xl font-semibold mb-2">
                  Foto Ko‘rgazmalar
                </h3>
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

            {/* Seminars */}
            <h1 className="text-4xl font-bold mb-4 mt-8">
              {getText("navbar10")}
            </h1>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-white shadow-lg rounded-2xl p-8 text-center hover:shadow-2xl transition">
                <img
                  src="img/teachers.jpg"
                  alt="Professional O'qituvchilar"
                  className="w-full h-40 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">
                  {getText("seminar2")}
                </h3>
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
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Universities;
