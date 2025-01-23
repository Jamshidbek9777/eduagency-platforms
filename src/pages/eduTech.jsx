import React from "react";
import Wrapper from "../layout/wrapper";
import { Breadcrumb, Tabs } from "antd";

const { TabPane } = Tabs;

const EducationTechnologies = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-[708px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/eduTechBg.jpeg')",
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
              <p className="text-white cursor-pointer">
                Ta'lim texnologiyalari
              </p>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-4xl font-bold">
          Biz kelajakni ta'lim texnologiyalari bilan shakllantiramiz
        </h1>
      </div>

      <Wrapper>
        <div className="py-10">
          <div className="bg-[#F9F9F9] p-4 text-xl rounded-xl">
            <h1>
              O‘zbekistonda ta’limda raqamli transformatsiyaning kashshofi
              sifatida biz ta’lim texnologiyalariga asoslangan innovatsion
              yechimlar bilan maktab boshqaruvidan tortib elektron ta’limgacha
              bo‘lgan barcha sohalarda samaradorlikni oshiramiz va ta’lim
              jarayonlarini modernizatsiya qilamiz. Ta'lim texnologiyalari
              talabalar muvaffaqiyatini oshirish, o'qitish samaradorligini
              oshirish va raqamli muhitdagi barcha jarayonlarni boshqarish uchun
              muhim vositalarni taklif etadi. EduAgency sifatida taqdim
              etayotgan xizmatlarimiz bilan biz taʼlimdagi raqamli
              transformatsiya jarayonida maktab boshqaruvini osonlashtirish va
              oʻqitishni samaraliroq qilish uchun texnologik yechimlarni taklif
              etamiz.
            </h1>
          </div>
          <div className="flex justify-center mt-4">
            <h1 className="text-[#0556FF] text-2xl">
              Bizning ta'lim texnologiyalari xizmatlarimiz:
            </h1>
          </div>

          <Tabs
            defaultActiveKey="1"
            centered
            className="mt-6"
            type="card"
            size="large"
            tabPosition="top"
          >
            {/* Tab 1: Maktab Boshqaruv Tizimlari */}
            <TabPane
              tab={
                <span className="text-lg font-medium">
                  Maktab boshqaruv tizimlari
                </span>
              }
              key="1"
            >
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    Maktab boshqaruv tizimlari
                  </h2>
                  <p className="text-lg">
                    Maktab boshqaruv tizimlari ta'lim muassasalarining samarali
                    ishlashini ta'minlash uchun mo'ljallangan. Biz
                    o'qituvchilar, o'quvchilar va ota-onalar o'rtasida aloqa
                    o'rnatadigan va jarayonlarni raqamlashtirishga yordam
                    beradigan yechimlarni taklif qilamiz.
                  </p>
                </div>

                {/* K12net Card */}
                <div className="mt-6">
                  <img
                    src="/img/k12net.png"
                    alt="K12NET"
                    className="w- h-auto rounded-lg"
                  />
                  <p className="mt-4 text-base">
                    K12NET - bu o'quv muhitidagi barcha manfaatdor tomonlarga
                    o'z sa'y-harakatlarini muammosiz muvofiqlashtirishga yordam
                    berish uchun ishlab chiqilgan korxona darajasidagi talabalar
                    axborot tizimi. Maktab ma'muriyati, xodimlari,
                    o'qituvchilari, o'quvchilari va ota-onalari hamkorlik qilish
                    va ta'lim jarayonlarini boshqarish uchun platformamizga
                    kirishlari mumkin.
                  </p>
                  <p className="mt-4 text-base">
                    O'tgan 20 yil davomida biz butun dunyo bo'ylab 150 000
                    o'qituvchi va 4 million o'quvchini qo'llab-quvvatlab, 6000
                    dan ortiq maktabda o'z yechimimizni muvaffaqiyatli amalga
                    oshirdik. Bunga yirik korxona loyihalari va alohida
                    maktablar uchun moslashtirilgan SaaS yechimlari kiradi.
                    Bizning keng qamrovli maktab boshqaruv to‘plamimiz SIS
                    bozorida sanoatni o‘zgartiruvchi innovatsiyalar bilan
                    yetakchilik qiladi, foydalanishda tengsiz qulaylik, ilg‘or
                    funksionallik va ajoyib mijozlarga xizmat ko‘rsatadi.
                  </p>

                  <div className="mt-4">
                    <p className="text-lg mb-4">
                      Here are some videos about K12NET:
                    </p>

                    <div className="flex justify-start space-x-4">
                      {/* Video 1 */}
                      <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
                        <iframe
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/JYD3ipq6-9o"
                          title="K12NET Video 1"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg shadow-lg"
                        ></iframe>
                      </div>

                      {/* Video 2 */}
                      <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
                        <iframe
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/JYD3ipq6-9o"
                          title="K12NET Video 2"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg shadow-lg"
                        ></iframe>
                      </div>
                    </div>
                  </div>

                  {/* Okulaile card */}
                  <div className="mt-10">
                    <img
                      src="/img/okulaile.png"
                      alt="K12NET"
                      className="w- h-auto rounded-lg"
                    />
                    <p className="mt-4 text-base">
                      K12NET - bu o'quv muhitidagi barcha manfaatdor tomonlarga
                      o'z sa'y-harakatlarini muammosiz muvofiqlashtirishga
                      yordam berish uchun ishlab chiqilgan korxona darajasidagi
                      talabalar axborot tizimi. Maktab ma'muriyati, xodimlari,
                      o'qituvchilari, o'quvchilari va ota-onalari hamkorlik
                      qilish va ta'lim jarayonlarini boshqarish uchun
                      platformamizga kirishlari mumkin.
                    </p>
                    <p className="mt-4 text-base">
                      O'tgan 20 yil davomida biz butun dunyo bo'ylab 150 000
                      o'qituvchi va 4 million o'quvchini qo'llab-quvvatlab, 6000
                      dan ortiq maktabda o'z yechimimizni muvaffaqiyatli amalga
                      oshirdik. Bunga yirik korxona loyihalari va alohida
                      maktablar uchun moslashtirilgan SaaS yechimlari kiradi.
                      Bizning keng qamrovli maktab boshqaruv to‘plamimiz SIS
                      bozorida sanoatni o‘zgartiruvchi innovatsiyalar bilan
                      yetakchilik qiladi, foydalanishda tengsiz qulaylik, ilg‘or
                      funksionallik va ajoyib mijozlarga xizmat ko‘rsatadi.
                    </p>
                    <div className="mt-4">
                      <p className="text-lg mb-4">
                        Here are some videos about K12NET:
                      </p>

                      <div className="flex justify-start space-x-4">
                        {/* Video 1 */}
                        <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
                          <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/JYD3ipq6-9o"
                            title="K12NET Video 1"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                          ></iframe>
                        </div>

                        {/* Video 2 */}
                        <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
                          <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/JYD3ipq6-9o"
                            title="K12NET Video 2"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="rounded-lg shadow-lg"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>

            {/* Tab 2: Elektron Ta'lim Platformasi */}
            <TabPane
              tab={
                <span className="text-lg font-medium">
                  Elektron ta'lim platformasi
                </span>
              }
              key="2"
            >
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">
                  Elektron ta'lim platformasi
                </h2>
                <p className="text-lg">
                  Elektron ta'lim platformalari ta'lim jarayonini
                  takomillashtiradi. Biz ta'lim jarayonlarini moslashtirish,
                  testlarni avtomatlashtirish va o'quvchilar uchun interaktiv
                  materiallar yaratish uchun ishlatiladigan platformalarni
                  taqdim etamiz.
                </p>
                {/* Vedubox */}
                <div className="mt-6">
                  <img
                    src="/img/vedubox_logo.svg"
                    alt="K12NET"
                    className="w- h-auto rounded-lg"
                  />
                  <p className="mt-4 text-base">
                    Vedubox is an all-in-one cloud-based platform designed for
                    e-learning, online training, and webinars. It integrates
                    tools for virtual classrooms, live streaming, content
                    management, and exams. It's especially popular among
                    educators, businesses, and organizations looking to offer
                    online courses or manage training programs.
                  </p>

                  <div className="mt-4">
                    <p className="text-lg mb-4">
                      Here are some videos about K12NET:
                    </p>

                    <div className="flex justify-start space-x-4">
                      {/* Video 1 */}
                      <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
                        <iframe
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/JYD3ipq6-9o"
                          title="K12NET Video 1"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg shadow-lg"
                        ></iframe>
                      </div>

                      {/* Video 2 */}
                      <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
                        <iframe
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/JYD3ipq6-9o"
                          title="K12NET Video 2"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg shadow-lg"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>

            {/* Tab 3: E-O'yinlar */}
            <TabPane
              tab={<span className="text-lg font-medium">E-o'yinlar</span>}
              key="3"
            >
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold mb-4">E-o'yinlar</h2>
                <p className="text-lg">
                  E-o'yinlar ta'limni qiziqarli va interaktiv qilishning eng
                  samarali usullaridan biridir. Biz talabalar uchun o'qitishni
                  yanada qiziqarli qiladigan innovatsion o'yin platformalarini
                  taqdim etamiz.
                </p>
                <div className="mt-10">
                  <img
                    src="/img/mentalup.webp"
                    alt="K12NET"
                    className="w- h-auto rounded-lg"
                  />
                  <p className="mt-4 text-base">
                    K12NET - bu o'quv muhitidagi barcha manfaatdor tomonlarga
                    o'z sa'y-harakatlarini muammosiz muvofiqlashtirishga yordam
                    berish uchun ishlab chiqilgan korxona darajasidagi talabalar
                    axborot tizimi. Maktab ma'muriyati, xodimlari,
                    o'qituvchilari, o'quvchilari va ota-onalari hamkorlik qilish
                    va ta'lim jarayonlarini boshqarish uchun platformamizga
                    kirishlari mumkin.
                  </p>
                  <p className="mt-4 text-base">
                    O'tgan 20 yil davomida biz butun dunyo bo'ylab 150 000
                    o'qituvchi va 4 million o'quvchini qo'llab-quvvatlab, 6000
                    dan ortiq maktabda o'z yechimimizni muvaffaqiyatli amalga
                    oshirdik. Bunga yirik korxona loyihalari va alohida
                    maktablar uchun moslashtirilgan SaaS yechimlari kiradi.
                    Bizning keng qamrovli maktab boshqaruv to‘plamimiz SIS
                    bozorida sanoatni o‘zgartiruvchi innovatsiyalar bilan
                    yetakchilik qiladi, foydalanishda tengsiz qulaylik, ilg‘or
                    funksionallik va ajoyib mijozlarga xizmat ko‘rsatadi.
                  </p>
                  <div className="mt-4">
                    <p className="text-lg mb-4">
                      Here are some videos about K12NET:
                    </p>

                    <div className="flex justify-start space-x-4">
                      {/* Video 1 */}
                      <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
                        <iframe
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/HJ5ltJBB7lU"
                          title="K12NET Video 1"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg shadow-lg"
                        ></iframe>
                      </div>

                      {/* Video 2 */}
                      <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
                        <iframe
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/HJ5ltJBB7lU"
                          title="K12NET Video 2"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg shadow-lg"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>

                {/* future astranout */}
                <div className="mt-10">
                  <h1 className="text-4xl mb-4">Future astronaut loyihasi:</h1>
                  <div className="flex gap-6">
                    <img
                      src="/img/futureast.png"
                      alt="K12NET"
                      className="h-56 rounded-lg"
                    />
                    <div>
                      <p className="mt-4 text-base">
                        K12NET - bu o'quv muhitidagi barcha manfaatdor
                        tomonlarga o'z sa'y-harakatlarini muammosiz
                        muvofiqlashtirishga yordam berish uchun ishlab chiqilgan
                        korxona darajasidagi talabalar axborot tizimi. Maktab
                        ma'muriyati, xodimlari, o'qituvchilari, o'quvchilari va
                        ota-onalari hamkorlik qilish va ta'lim jarayonlarini
                        boshqarish uchun platformamizga kirishlari mumkin.
                      </p>
                      <p className="mt-4 text-base">
                        O'tgan 20 yil davomida biz butun dunyo bo'ylab 150 000
                        o'qituvchi va 4 million o'quvchini qo'llab-quvvatlab,
                        6000 dan ortiq maktabda o'z yechimimizni muvaffaqiyatli
                        amalga oshirdik. Bunga yirik korxona loyihalari va
                        alohida maktablar uchun moslashtirilgan SaaS yechimlari
                        kiradi. Bizning keng qamrovli maktab boshqaruv
                        to‘plamimiz SIS bozorida sanoatni o‘zgartiruvchi
                        innovatsiyalar bilan yetakchilik qiladi, foydalanishda
                        tengsiz qulaylik, ilg‘or funksionallik va ajoyib
                        mijozlarga xizmat ko‘rsatadi.
                      </p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-lg mb-4">
                      Here are some videos about K12NET:
                    </p>

                    <div className="flex justify-start space-x-4">
                      {/* Video 1 */}
                      <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
                        <iframe
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/5a6VH1m6BoA"
                          title="K12NET Video 1"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg shadow-lg"
                        ></iframe>
                      </div>

                      {/* Video 2 */}
                      <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
                        <iframe
                          width="100%"
                          height="315"
                          src="https://www.youtube.com/embed/5a6VH1m6BoA"
                          title="K12NET Video 2"
                          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg shadow-lg"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </Wrapper>
    </>
  );
};

export default EducationTechnologies;
