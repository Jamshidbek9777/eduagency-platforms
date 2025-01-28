import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";
import { FaArrowAltCircleRight, FaMarker } from "react-icons/fa";
import { MdBookOnline } from "react-icons/md";
import { GiProgression } from "react-icons/gi";

const IntermediateSchools = () => {
  const models = [
    {
      title: getText("eduStr1"),
      description: getText("eduStr2"),
      icon: <MdBookOnline size={30} className="text-[#1E73BE]" />,
    },
    {
      title: getText("eduStr3"),
      description: getText("eduStr4"),
      icon: <GiProgression size={30} className="text-[#1E73BE]" />,
    },
    {
      title: getText("eduStr5"),
      description: getText("eduStr6"),
      icon: <FaMarker size={30} className="text-[#1E73BE]" />,
    },
  ];
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <>
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[600px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/intermediate-school.JPG')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
        <h1 className="relative z-10 text-6xl font-bold drop-shadow-lg text-center">
          {getText("header2")}
        </h1>
      </div>

      {/* Content Section */}
      <Wrapper>
        <div className="py-14 space-y-20">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            {/* MentalUp */}
            <div className="">
              <h1 className="text-4xl font-bold mb-4">Mental Up</h1>
              <div className="mt-10">
                <img
                  src="/img/mentalup.webp"
                  alt="K12NET"
                  className="w- h-auto rounded-lg"
                />
                <p className="mt-4 text-base">{getText("eduTech15")}</p>
                <p className="mt-4 text-base">{getText("eduTech16")}</p>
                <div className="mt-4">
                  <p className="text-lg mb-4">{getText("eduTech17")}</p>

                  <div className="flex flex-wrap justify-start gap-4">
                    {/* Video 1 */}
                    <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                      <iframe
                        className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg"
                        src="https://www.youtube.com/embed/HJ5ltJBB7lU"
                        title="K12NET Video 1"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>

                    {/* Video 2 */}
                    <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                      <img
                        src="/img/mup1.png"
                        className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                        alt="MUP 1"
                      />
                    </div>

                    {/* Video 3 */}
                    <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                      <img
                        src="/img/mup2.png"
                        className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                        alt="MUP 2"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Space camp */}
            <div className="mt-10">
              <h1 className="text-2xl font-bold mb-4">
                {getText("uzayKampi")}
              </h1>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img
                  src="/img/partner9.png"
                  alt="K12NET"
                  className="w- h-auto rounded-lg"
                />
                <p className="mt-4 text-base">{getText("uzayKapmi1")}</p>
              </div>
              <p className="mt-4 text-base">{getText("uzayKapmi2")}</p>
              <p className="mt-4 text-base">{getText("uzayKapmi3")}</p>
              <p className="mt-4 text-base">{getText("uzayKapmi4")}</p>
              <div className="mt-4">
                <p className="text-lg mb-4">{getText("videoandpic")}</p>

                <div className="flex flex-wrap justify-start gap-4">
                  {/* Video 2 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/space1.jpg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                  {/* Video 1 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/yQWTdC9h6Lc"
                      title="K12NET Video 1"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                    ></iframe>
                  </div>

                  {/* Video 2 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/RXEWJptQ0J0"
                      title="K12NET Video 2"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Piagmo */}
            <div className="mt-10">
              <h1 className="text-2xl font-bold mb-4">Piagmo</h1>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img
                  src="/img/paigmo.png"
                  alt="K12NET"
                  className="w- h-auto rounded-lg"
                />
                <p className="mt-4 text-base">{getText("piagmo1")}</p>
              </div>
              <p className="mt-4 text-base">{getText("piagmo2")}</p>
              <p className="mt-4 text-base">{getText("piagmo3")}</p>

              <div className="mt-4">
                <p className="text-lg mb-4">{getText("videoandpic")}</p>

                <div className="flex flex-wrap justify-start gap-4">
                  {/* Video 2 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/piagmo1.avif"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/piagmo2.webp"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                  {/* Video 1 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/grCf4NhnYZ8"
                      title="K12NET Video 1"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Edudesign */}
            <div className="mt-10">
              <h1 className="text-2xl font-bold mb-4">
                {getText("eduDesign1")}
              </h1>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <p className="mt-4 text-xl font-bold">
                  {getText("eduDesign2")}
                </p>
              </div>
              <p className="mt-4 text-base">{getText("eduDesign3")}</p>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <p className="mt-4 text-xl font-bold">
                  {getText("eduDesign7")}
                </p>
              </div>
              <p className="mt-4 text-base">{getText("eduDesign8")}</p>

              <div className="mt-4">
                <div className="flex flex-wrap justify-start gap-4">
                  {/* Video 2 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/classConcepts1.jpg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/classConcepts2.jpg"
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

            {/* Ta'lim modellari */}
            <div className="mt-10">
              <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold mb-4">
                  {getText("navbar5")}
                </h1>
                <a href="/education-models" className="flex items-center gap-2">
                  <p>Learn more</p>
                  <FaArrowAltCircleRight />
                </a>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <p className="mt-4 text-base">{getText("eduModeTitle")}</p>
              </div>

              <div className="mt-4">
                <div className="flex flex-wrap justify-start gap-4">
                  {/* Video 2 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/eduModel1.jpg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                    <h1 className="text-2xl mt-2 text-center font-bold">
                      Maarif ta'lim modeli
                    </h1>
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

            {/* dasturlar va strategiyalar */}
            <h1 className="text-4xl font-bold mb-4 mt-8">
              {getText("navbar8")}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {models.map((model, index) => (
                <div
                  key={index}
                  className="p-6 bg-white rounded-[20px] flex flex-col items-center border-l-8 shadow-lg border-[#1E73BE]"
                >
                  <div className="flex items-center justify-between w-full">
                    <h2 className="text-xl font-semibold">{model.title}</h2>
                    {model.icon}
                  </div>
                  <p className="text-gray-600 mt-2">{model.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default IntermediateSchools;
