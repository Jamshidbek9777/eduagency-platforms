import React from "react";
import { FaTelegramPlane } from "react-icons/fa";
import Wrapper from "../layout/wrapper";

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-300 py-12">
      <Wrapper>
        <div className=" px-6 lg:px-8">
          <div className="flex justify-between items-center my-10">
            <div>
              <h2 className="text-white text-xl font-semibold mb-4">
                Kasb tanlashdagi birinchi yordamni beramiz!
              </h2>
              <p className="text-gray-400 text-sm">
                Ma’lumotlaringizni qoldiring va sizga tez fursatda aloqaga
                chiqamiz.
              </p>
            </div>

            <div className="bg-[#1F2937] p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-4">
                Biz bilan bog‘lanish
              </h3>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-400 text-sm mb-2">
                    Ismingiz
                  </label>
                  <input
                    type="text"
                    placeholder="Ismingizni yozing"
                    className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-400 text-sm mb-2">
                    Telefon raqamingiz
                  </label>
                  <input
                    type="tel"
                    placeholder="+998 90 123 45 67"
                    className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-400 text-sm mb-2">
                    Telegram username
                  </label>
                  <div className="flex items-center bg-gray-700 rounded px-4 py-2">
                    <FaTelegramPlane className="text-blue-400 mr-2" />
                    <input
                      type="text"
                      placeholder="@username"
                      className="w-full bg-transparent text-white outline-none"
                    />
                  </div>
                </div>
                <button className="w-full bg-blue-500 hover:bg-blue-600 transition px-4 py-2 rounded-lg font-semibold">
                  Jo‘natish
                </button>
                <p className="text-gray-500 text-xs mt-3 text-center">
                  Tugmani bosib,{" "}
                  <a href="#" className="text-blue-400">
                    maxfiylik siyosati
                  </a>{" "}
                  va
                  <a href="#" className="text-blue-400">
                    {" "}
                    foydalanuvchi shartnomasini
                  </a>{" "}
                  qabul qilgan bo‘lasiz.
                </p>
              </form>
            </div>
          </div>

          {/* Lower Section */}
          <div className="border-t border-gray-700 pt-10 flex flex-col md:flex-row justify-between">
            {/* Company Info */}
            <div>
              <img
                src="/img/logo-white.png"
                alt="Mohirdev Logo"
                className="h-10 mb-4"
              />
              <p className="text-gray-400 text-sm">
                Toshkent shahar, Mirzo Ulug‘bek tumani, Muminov ko‘chasi, 4A
              </p>
              <p className="text-lg font-semibold mt-2">+998 (78) 113 62 72</p>
            </div>

            {/* Links */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-white font-semibold mb-3">Platforma</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400 transition">
                      Kasblar
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400 transition">
                      Kurslar
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Kompaniya</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400 transition">
                      Biz haqimizda
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400 transition">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400 transition">
                      Maxfiylik siyosati
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-3">Ma’lumot</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="hover:text-blue-400 transition">
                      Bog‘lanish
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-blue-400 transition">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Certificates */}
            <div className="flex space-x-4 mt-6 md:mt-0">
              <img
                src="/img/cert1.png"
                alt="Tasdiqnoma"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <img
                src="/img/cert2.png"
                alt="Guvohnoma"
                className="w-20 h-20 object-cover rounded-lg"
              />
              <img
                src="/img/cert3.png"
                alt="IT PARK rezidenti"
                className="w-20 h-20 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
