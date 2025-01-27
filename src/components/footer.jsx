import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import {
  FaFacebook,
  FaInstagram,
  FaTelegram,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";
import { LanguageContext } from "../context/language";

const Footer = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Left Section: Logo and Tagline */}
          <div>
            <a href="/" className="inline-block mb-6">
              <img
                src="/img/logo-white.png"
                alt="EduAgency Logo"
                className="h-16 object-contain"
              />
            </a>
            <p className="text-sm leading-relaxed">
              EduAgency ta’lim sohasida yuqori sifatli xizmatlar taqdim etadi.
              Biz bilan kelajakka yo‘l oching!
            </p>
          </div>

          {/* Middle Section: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Foydali Havolalar
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/kindergartens"
                  className="hover:text-blue-400 transition"
                >
                  Bog‘chalar
                </a>
              </li>
              <li>
                <a
                  href="/elementary-schools"
                  className="hover:text-blue-400 transition"
                >
                  Boshlang‘ich Maktablar
                </a>
              </li>
              <li>
                <a
                  href="/intermediate-school"
                  className="hover:text-blue-400 transition"
                >
                  O‘rta Maktablar
                </a>
              </li>
              <li>
                <a
                  href="/high-schools"
                  className="hover:text-blue-400 transition"
                >
                  Yuqori Sinflar
                </a>
              </li>
              <li>
                <a
                  href="/universities"
                  className="hover:text-blue-400 transition"
                >
                  Universitetlar
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section: Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Aloqa Ma’lumotlari
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <MdEmail className="text-2xl text-blue-400" />
                <div>
                  <p className="font-medium">Email:</p>
                  <a
                    href="mailto:info@EduAgency.uz"
                    className="hover:text-blue-400 transition"
                  >
                    info@EduAgency.uz
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MdLocationOn className="text-2xl text-blue-400" />
                <div>
                  <p className="font-medium">Manzil:</p>
                  <p>Toshkent, Muqimiy ko‘chasi, 7-uy</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MdAccessTime className="text-2xl text-blue-400" />
                <div>
                  <p className="font-medium">Ish vaqti:</p>
                  <p>
                    Dushanba - Juma, <br />
                    9:00 - 18:00
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-2xl text-blue-400" />
                <div>
                  <p className="font-medium">Telefon:</p>
                  <a
                    href="tel:+998901234567"
                    className="hover:text-blue-400 transition"
                  >
                    +998 (90) 123-45-67
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Social Media */}
        {/* <div className="mt-12 flex flex-col items-center">
          <div className="flex gap-6 mb-4 text-blue-400">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-white transition" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-white transition" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaTelegram className="text-2xl hover:text-white transition" />
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © 2025 EduAgency. Barcha huquqlar himoyalangan.
          </p>
        </div> */}
      </Wrapper>
    </footer>
  );
};

export default Footer;
