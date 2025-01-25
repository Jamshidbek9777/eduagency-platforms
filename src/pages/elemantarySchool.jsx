import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";
import { FaArrowAltCircleRight } from "react-icons/fa";

const ElementarySchool = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <>
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[600px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/elementary-school.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>
        <h1 className="relative z-10 text-6xl font-bold drop-shadow-lg text-center">
          Our Services for Elementary schools
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

            {/* Future ast */}
            <div className="mt-10">
              <h1 className="text-4xl font-bold mb-4">Future astronaut</h1>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img
                  src="/img/futureast.png"
                  alt="K12NET"
                  className="h-32 rounded-lg"
                />
                <div>
                  <p className="mt-4 text-base">{getText("eduTech19")}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-lg mb-4">{getText("eduTech20")}</p>

                <div className="flex flex-wrap justify-start gap-4">
                  {/* Video 1 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/5a6VH1m6BoA"
                      title="K12NET Video 1"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                    ></iframe>
                  </div>

                  {/* Video 2 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/9.jpg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                  {/* Video 2 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    {" "}
                    <img
                      src="/img/12.jpg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Space camp */}
            <div className="mt-10">
              <h1 className="text-4xl font-bold mb-4">Uzay kampi</h1>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img
                  src="/img/partner9.png"
                  alt="K12NET"
                  className="w- h-auto rounded-lg"
                />
                <p className="mt-4 text-base">
                  Kosmosx Turkiyadagi kosmik lagerning O'zbekistondagi
                  eksklyuziv distribyutori sifatida o'z ishtirokchilariga noyob
                  kosmik tajribani taklif etadi. Kosmik lagerga sayohat-bu har
                  bir hayot ishtirokchisiga Kosmos sirlarini kashf etish va
                  kelajakda olimlar uchun Ilhom manbai bo'lishga imkon beradigan
                  qiziqarli dastur.
                </p>
              </div>
              <p className="mt-4 text-base">
                Ushbu sayohat ishtirokchilarga kosmik texnologiyalar va fanlar
                bo'yicha chuqur bilim beradi, shu bilan birga jamoaviy ish,
                muammolarni hal qilish va etakchilik kabi vakolatlarini
                rivojlantirish imkoniyatini beradi. Simulyatsiya, raketa dizayni
                va kosmik lagerda kosmonavtlarni tayyorlash kabi tadbirlar bilan
                ishtirokchilar nazariy bilimlarni amaliy tajribalar bilan
                birlashtiradilar.
              </p>
              <p className="mt-4 text-base">
                Bizning kosmik lagerga sayohatimiz nafaqat ta'lim, balki
                qiziqarli sarguzashtni ham taklif qilish orqali
                ishtirokchilarning ilmiy qiziqishini oshirish va kosmik
                texnologiyalarga qiziqishni kuchaytirishga qaratilgan.
                Kelajakdagi kosmonavtlar uchun unutilmas tajribani taqdim
                etadigan ushbu dastur akademik va shaxsiy rivojlanish uchun
                katta imkoniyatlarni taqdim etadi.
              </p>
              <p className="mt-4 text-base">
                Kosmosx sifatida biz ishtirokchilarimizni kosmosning ajoyib
                dunyosi bilan bog'lash uchun barcha tafsilotlarni professional
                ravishda rejalashtiramiz va boshqaramiz.
              </p>
              <div className="mt-4">
                <p className="text-lg mb-4">Videolar va rasmlar:</p>

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
              <h1 className="text-4xl font-bold mb-4">Piagmo</h1>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img
                  src="/img/paigmo.png"
                  alt="K12NET"
                  className="w- h-auto rounded-lg"
                />
                <p className="mt-4 text-base">
                  Fun. Learn. Explore. Every moment of children is precious. We
                  support every moment of this valuable time with educational
                  content!
                </p>
              </div>
              <p className="mt-4 text-base">
                At Piagmo Technology, we believe that play is the foundation of
                learning. Inspired by the Montessori pedagogy, we create mobile
                games that nurture a child’s natural curiosity and love for
                exploration. Our journey began with a simple idea: to blend
                education with fun in a way that feels effortless and engaging
                for young minds. ​
              </p>
              <p className="mt-4 text-base">
                We are passionate about making learning a joyful adventure, and
                we’re committed to helping every child reach their full
                potential one game at a time.
              </p>

              <div className="mt-4">
                <p className="text-lg mb-4">Videolar va rasmlar:</p>

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
              <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold mb-4">Education design</h1>
                <a href="/education-design" className="flex items-center gap-2">
                  <p>Learn more</p>
                  <FaArrowAltCircleRight />
                </a>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <p className="mt-4 text-xl font-bold">
                  Sinf kontseptsiyalari va tartibga solish
                </p>
              </div>
              <p className="mt-4 text-base">
                Zamonaviy texnologiyalar bilan jihozlangan sinfxonalar bugungi
                kunda ta'lim samaradorligini oshirishda muhim ahamiyatga ega.
              </p>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <p className="mt-4 text-xl font-bold">
                  Labaratoriyalar o'rnatish
                </p>
              </div>
              <p className="mt-4 text-base">
                Ta'limning fan yo‘nalishida sifatini oshirish uchun zamonaviy va
                xavfsiz laboratoriyalarni o‘rnatamiz
              </p>

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

            {/* Vedubox */}
            <div className="mt-10">
              <h1 className="text-4xl font-bold mb-4">Vedubox</h1>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img
                  src="/img/vedubox_logo.svg"
                  alt="K12NET"
                  className="w- h-auto rounded-lg"
                />
                <p className="mt-4 text-base">
                  Combine online training and content management with Vedubox
                  LMS.
                </p>
              </div>
              <p className="mt-4 text-base">
                Vedubox LMS combines training management and content management
                features to make online learning more effective.
              </p>

              <div className="mt-4">
                <div className="flex flex-wrap justify-start gap-4">
                  {/* Video 2 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/vedubox1.webp"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/L83ip_6fq_s"
                      title="K12NET Video 1"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                    ></iframe>
                  </div>
                  {/* Video 1 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/70OpEZmIQ6M"
                      title="K12NET Video 1"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Teacher trainings */}
            <div className="mt-10">
              <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold mb-4">Teacher Trainings</h1>
                <a href="/teacherTrainings" className="flex items-center gap-2">
                  <p>Learn more</p>
                  <FaArrowAltCircleRight />
                </a>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <p className="mt-4 text-base">
                  We are dedicated to helping you improve teachers' teaching
                  skills through this system, providing them with the tools and
                  training needed to become more effective educators and enhance
                  their overall teaching methods.
                </p>
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

            {/* Ta'lim modellari */}
            <div className="mt-10">
              <div className="flex justify-between items-center">
                <h1 className="text-4xl font-bold mb-4">Ta'lim modellari</h1>
                <a href="/education-models" className="flex items-center gap-2">
                  <p>Learn more</p>
                  <FaArrowAltCircleRight />
                </a>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <p className="mt-4 text-base">
                  We are committed to providing you with an exceptional
                  educational experience by offering innovative and
                  comprehensive education models. Our models are thoughtfully
                  designed to cater to a wide range of learning needs, ensuring
                  that you receive the best possible guidance and support.
                  Through these models, we strive to create a learning
                  environment that fosters growth, enhances knowledge retention,
                  and equips you with the skills necessary to succeed in your
                  educational journey.
                </p>
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
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/eduModel2.jpg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                    <h1 className="text-2xl mt-2 text-center font-bold">
                      O'zel egitim
                    </h1>
                  </div>
                  {/* Video 1 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/eduModel3.jpg"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                    <h1 className="text-2xl mt-2 text-center font-bold">
                      Montessori
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ElementarySchool;
