import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdAccessTime } from "react-icons/md";
import { LanguageContext } from "../context/language";
import { getText } from "../languages";

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
            <p className="text-sm leading-relaxed">{getText("footer1")}</p>
          </div>

          {/* Middle Section: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {getText("footer2")}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="/kindergartens"
                  className="hover:text-blue-400 transition"
                >
                  {getText("servicesText1")}
                </a>
              </li>
              <li>
                <a
                  href="/elementary-schools"
                  className="hover:text-blue-400 transition"
                >
                  {getText("servicesText2")}
                </a>
              </li>
              <li>
                <a
                  href="/intermediate-school"
                  className="hover:text-blue-400 transition"
                >
                  {getText("servicesText3")}
                </a>
              </li>
              <li>
                <a
                  href="/high-schools"
                  className="hover:text-blue-400 transition"
                >
                  {getText("servicesText4")}
                </a>
              </li>
              <li>
                <a
                  href="/universities"
                  className="hover:text-blue-400 transition"
                >
                  {getText("servicesText5")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              {getText("footer3")}
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
                  <p className="font-medium">{getText("footer4")}</p>
                  <p>{getText("footer6")}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MdAccessTime className="text-2xl text-blue-400" />
                <div>
                  <p className="font-medium">{getText("footer5")}</p>
                  <p>
                    {getText("footer7")}, <br />
                    9:00 - 18:00
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-2xl text-blue-400" />
                <div>
                  <p className="font-medium">{getText("footer8")}</p>
                  <a
                    href="tel:+998901234567"
                    className="hover:text-blue-400 transition"
                  >
                    +998 (33) 469-11-01
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
