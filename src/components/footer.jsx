import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebook, FaPhoneSquareAlt, FaTelegram } from "react-icons/fa";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";
import { Link } from "react-router-dom";

const Footer = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  const services = [
    {
      label: getText("servicesText1"),
      link:"/kindergardens"
    },
    {
      label: getText("servicesText2"),
      link:"/#"
    },
    {
      label: getText("servicesText3"),
      link:"/#"
    },
    {
      label: getText("servicesText4"),
      link:"/#"
    },
  ];

  return (
      <div className="bg-gradient-to-b from-[#d5f0f7] to-white py-10">
        <Wrapper>
          <div className="flex flex-col lg:flex-row justify-between items-center  gap-8" >
            {/* Logo Section */}
            <div className="flex flex-col items-center lg:items-start">
              <a href="/" className="mb-4">
                <img
                    src="/img/logo.png"
                    alt="Logo"
                    className="h-16 object-contain cursor-pointer"
                />
              </a>
              <div className="flex gap-4">
                <a
                    href="https://facebook.com"
                    className="text-blue-600 hover:text-blue-800 transition"
                >
                  <FaFacebook size={24} />
                </a>
                <a
                    href="https://instagram.com"
                    className="text-pink-500 hover:text-pink-700 transition"
                >
                  <BiLogoInstagramAlt size={24} />
                </a>
                <a
                    href="https://telegram.org"
                    className="text-blue-500 hover:text-blue-700 transition"
                >
                  <FaTelegram size={24} />
                </a>
                <a
                    href="tel:+123456789"
                    className="text-green-500 hover:text-green-700 transition"
                >
                  <FaPhoneSquareAlt size={24} />
                </a>
              </div>
            </div>

            {/* Services Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" >
              {services.map((service) => (
                  <div key={service.key} className="text-center" >
                    <h4 className="font-semibold text-lg text-gray-800 ">
                      <a href={service.link}>
                        {service.label}
                      </a>
                    </h4>

                  </div>
              ))}
            </div>
          </div>

          <div className="mt-10 text-center text-sm text-gray-600">
            <p>&copy; {new Date().getFullYear()} Eduagency. All Rights Reserved.</p>
          </div>
        </Wrapper>
      </div>
  );
};

export default Footer;
