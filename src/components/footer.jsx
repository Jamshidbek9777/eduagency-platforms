import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebook, FaPhoneSquareAlt, FaTelegram } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";
import { LanguageContext } from "../context/language";

const Footer = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <div className="bg-[#E6EDFF] py-10">
      <Wrapper>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          {/* Left Section: Logo */}
          <div className="flex flex-col items-center lg:items-start">
            <a href="/" className="mb-4">
              <img
                src="/img/logo.png"
                alt="Logo"
                className="h-16 object-contain cursor-pointer"
              />
            </a>
            <p className="text-sm text-center lg:text-left">
              © 2025 EduAgency. All Rights Reserved.
            </p>
          </div>

          {/* Middle Section: Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center rounded-full bg-white border border-gray-300 h-[60px] w-[60px]">
                <MdEmail className="text-2xl" />
              </div>
              <div>
                <p className="font-semibold">Pochta:</p>
                <a
                  href="mailto:info@EduAgency.uz"
                  className="text-blue-600 hover:underline"
                >
                  info@EduAgency.uz
                </a>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex items-center justify-center rounded-full bg-white border border-gray-300 h-[60px] w-[60px]">
                <MdLocationOn className="text-2x" size={32} />
              </div>
              <div>
                <p className="font-semibold">Manzil:</p>
                <p>Toshkent shahri, Muqimiy ko‘chasi, 7 uy</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex items-center justify-center rounded-full bg-white border border-gray-300 h-[60px] w-[60px]">
                <MdAccessTime className="text-2xl"  />
              </div>
              <div>
                <p className="font-semibold">Ish vaqti:</p>
                <p>
                  Dushanba - Juma
                  <br />
                  9:00 - 18:00
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <div className="flex items-center justify-center rounded-full bg-white border border-gray-300 h-[60px] w-[60px]">
                <FaPhoneSquareAlt className="text-2xl" />
              </div>
              <div>
                <p className="font-semibold">Bog‘lanish:</p>
                <a
                  href="tel:+998901234567"
                  className="text-blue-600 hover:underline"
                >
                  +998 (90) 123-45-67
                </a>
              </div>
            </div>
          </div>

          {/* Right Section: Links and Social Icons */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="flex gap-6 mb-4">
              <a href="/about" className="hover:underline">
                Biz haqimizda
              </a>
              <a href="/contact" className="hover:underline">
                Bog‘lanish
              </a>
            </div>
            <div className="flex gap-4 text-blue-600">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <BiLogoInstagramAlt className="text-2xl" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaTelegram className="text-2xl" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FaPhoneSquareAlt className="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
