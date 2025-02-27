import React, { useContext } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import Wrapper from "../layout/wrapper";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";

const Footer = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <footer className="bg-[#111827] text-gray-300 py-12">
      <Wrapper>
        <div className=" px-6 lg:px-8">
          <div className="flex justify-between items-center my-10">
            <div>
              <h2 className="text-white text-xl font-semibold mb-4">
                {getText("f1")}
              </h2>
              <p className="text-gray-400 text-sm">{getText("f2")}</p>
            </div>

            <div className="bg-[#1F2937] p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold text-white mb-4">
                {getText("f3")}
              </h3>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-400 text-sm mb-2">
                    {getText("f4")}
                  </label>
                  <input
                    type="text"
                    placeholder="Ismingizni yozing"
                    className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-400 text-sm mb-2">
                    {getText("f5")}
                  </label>
                  <input
                    type="tel"
                    placeholder="+998 90 123 45 67"
                    className="w-full px-4 py-2 rounded bg-gray-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-400 text-sm mb-2">
                    {getText("f6")}
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
                  {getText("f7")}
                </button>
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
                Shayx Zayniddin ko'chasi, 2A, Shayxontohur tumani, Toshkent
              </p>
              <p className="text-lg font-semibold mt-2">+998 (33) 469 11 01</p>
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
            </div>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
