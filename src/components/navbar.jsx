import  { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/language";
import { getText } from "../languages";
import {
  Button,
} from "@nextui-org/react";
import { Dropdown, Menu } from 'antd';
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaFacebook, FaPhoneSquareAlt, FaTelegram } from "react-icons/fa";
import {IoIosArrowDown} from "react-icons/io";

const Navbar = () => {
  const { selectedLanguage, selectedFlag, changeLanguage } =
    useContext(LanguageContext);

  const [isMenuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  const items = [
    {
      key: "1",
      label: getText("servicesText1"),
      children: [
        { label: <Link to="/okulaile">Okulaile</Link>, key: "1-1" },
        { label: <Link to="/mental-up">Mental Up</Link>, key: "1-2" },
        { label: <Link to="https://kosmosx.uz/#/online-platforms">Future astronaut</Link>, key: "1-3" },
        { label: <Link to="/labaratories">STEMLab</Link>, key: "1-4" },
      ],
    },
    {
      key: "2",
      label: getText("servicesText2"),
      children: [
        { label: <Link to="/mental-up">Mental Up</Link>, key: "2-1" },
        { label: <Link to="https://kosmosx.uz/#/online-platforms">Future astronaut</Link>, key: "2-2" },
        { label: <Link to="/k12net">K12net</Link>, key: "2-3" },
        { label: <Link to="/labaratories">STEMLab</Link>, key: "2-4" },
        { label: <Link to="https://kosmosx.uz/#/trip-to-space">Uzay Kampi</Link>, key: "2-5" },
      ],
    },
    {
      key: "3",
      label: getText("servicesText3"),
      children: [
        { label: <Link to="/mental-up">Mental Up</Link>, key: "3-1" },
        { label: <Link to="/k12net">K12net</Link>, key: "3-2" },
        { label: <Link to="/labaratories">STEMLab</Link>, key: "3-3" },
        { label: <Link to="https://kosmosx.uz/#/trip-to-space">Uzay Kampi</Link>, key: "3-4" },
      ],
    },
    {
      key: "4",
      label: getText("servicesText4"),
      children: [
        { label: <Link to="/k12net">K12net</Link>, key: "4-1" },
        { label: <Link to="https://kosmosx.uz/#/trip-to-space">Uzay Kampi</Link>, key: "4-2" },
        { label: <Link to="/labaratories">STEMLab</Link>, key: "4-3" },
      ],
    },
  ];

  const languageMenu = (
      <Menu
          onClick={({ key }) => changeLanguage(key)}
          items={[
            {
              key: "uz",
              label: (
                  <div className="flex items-center gap-2">
                    <img
                        src="/img/flag-uz.svg"
                        alt="O'zbek"
                        className="w-5 h-5 object-cover"
                    />
                    Oʻzbek
                  </div>
              ),
            },
            {
              key: "en",
              label: (
                  <div className="flex items-center gap-2">
                    <img
                        src="/img/flag-en.svg"
                        alt="English"
                        className="w-5 h-5 object-cover"
                    />
                    English
                  </div>
              ),
            },
            {
              key: "tr",
              label: (
                  <div className="flex items-center gap-2">
                    <img
                        src="/img/flag-tr.png"
                        alt="Türkçe"
                        className="w-5 h-5 object-cover"
                    />
                    Türkçe
                  </div>
              ),
            },
            {
              key: "ru",
              label: (
                  <div className="flex items-center gap-2">
                    <img
                        src="/img/flag-ru.svg"
                        alt="Русский"
                        className="w-5 h-5 object-cover"
                    />
                    Русский
                  </div>
              ),
            },
          ]}
      />
  );

  return (
      <>
        <div className={'fixed w-full z-[999]'}>
          {/* topbar */}
          <div
              className="flex justify-between items-center px-6 py-2 text-gray-600 border-b bg-[#2664eb]">
            <div className="flex gap-4">
              <a href="https://www.instagram.com/eduagencyuz/">
                <BiLogoInstagramAlt className="cursor-pointer  text-white transition duration-300 text-xl"/>
              </a>
              <a href="https://t.me/eduagency_uz">
                <FaTelegram className="cursor-pointer  text-white transition duration-300 text-xl"/>
              </a>
              <a href="tel:+998334691101">
                <FaPhoneSquareAlt className="cursor-pointer  text-white transition duration-300 text-xl"/>
              </a>
              <a href="https://facebook.com/eduagency.uz">
                <FaFacebook className="cursor-pointer  text-white transition duration-300 text-xl"/>
              </a>
            </div>

            <div className="flex gap-4 items-center ">

              <a
                  href="/about"
                  className="text-white transition text-base font-bold"
              >
                {getText("navbar4")}
              </a>
              <a
                  className="text-white transition text-base font-bold"
                  href="/contact"
              >
                {getText("navbar5")}
              </a>
              <div className="gap-5 hidden lg:flex items-center">
                <div className="hidden lg:flex">
                  <Dropdown
                      trigger={['hover']}
                      menu={{
                        items,
                      }}
                  >
                    <a onClick={(e) => e.preventDefault()} className={'flex items-center gap-2'}>
                      <button className={'text-white transition duration-300 text-base font-bold'}>
                        Services
                      </button>
                      <IoIosArrowDown className="text-white text-sm" size={15}/>
                    </a>
                  </Dropdown>
                </div>
              </div>

              <div className="relative">
                <Dropdown overlay={languageMenu} trigger={["click"]}>
                  <div className="flex items-center gap-[5px] cursor-pointer">
                    <img
                        src={selectedFlag}
                        style={{width: "20px", objectFit: "cover"}}
                        alt="Selected Language"
                    />
                    <span className="text-white text-sm font-bold">{selectedLanguage.toUpperCase()}</span>
                    <IoIosArrowDown className="text-white text-sm" size={15}/>
                  </div>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full fixed z-[999] mt-12">
          {/* bottom bar */}
          <div
              className="shadow-lg flex flex-row items-center px-4 md:px-6 py-4 gap-10 justify-between bg-white mx-4 rounded-3xl">
            <div className="flex justify-between w-full items-center">
              <div className="flex items-center gap-10 justify-between w-full">
                {/* img */}
                <div className="text-xl font-bold ">
                  <Link to={"/"}>
                    <img
                        src="/img/logo.png"
                        alt="Logo"
                        className="h-12 object-contain cursor-pointer"
                    />
                  </Link>
                </div>

                {/* Items */}
                <div className="hidden lg:flex gap-4 2xl:gap-8 text-gray-700 text-sm text-center">
                  <a
                      href="/okul-mimari"
                      className="hover:text-[#EBAD26] transition text-base font-bold"
                  >
                    {/*{getText("navbar6")}*/}
                    Okul Mimarisi
                  </a>
                  <a
                      href="/egitim-tech"
                      className="hover:text-[#EBAD26] transition text-base font-bold"
                  >
                    {/*{getText("navbar1")}*/}
                    Eğitim Teknolojileri
                  </a>

                  <a
                      href="/egitim-program"
                      className="hover:text-[#EBAD26] transition text-base font-bold"
                  >
                    {/*{getText("navbar2")}*/}
                    Eğitim Programları
                  </a>
                  <a
                      href="/education-strategies"
                      className="hover:text-[#EBAD26] transition text-base font-bold"
                  >
                    Eğitim strategies
                  </a>

                  <a
                      href="/teacherTrainings"
                      className="hover:text-[#EBAD26] transition text-base font-bold"
                  >
                    {/*{getText("navbar3")}*/}
                    Öğretmen Eğitimleri
                  </a>
                  <a
                      href="/edu-materials"
                      className="hover:text-[#EBAD26] transition text-base font-bold"
                  >
                    Eğitim Materyalleri
                  </a>

                  <a
                      href="/academic-tour"
                      className="hover:text-[#EBAD26] transition text-base font-bold"
                  >
                    Akademik Tur
                  </a>


                </div>
              </div>

            </div>
            <div
                className={`burger ${isMenuOpen ? "open" : ""} block lg:hidden`}
                onClick={toggleMenu}
            >
              <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-[#050a41]"></div>
              <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-[#050a41]"></div>
              <div className="w-[25px] h-[2px] rounded-full block duration-300 bg-[#050a41]"></div>
            </div>
          </div>

          <div
              className={`menu duration-300 h-full xl:w-[calc(100%-170px)] lg:hidden max-w-xl xl:max-w-none xl:h-auto bg-white fixed inset-0 z-[99] pt-20 lg:pt-24 px-5 pb-6 flex flex-col justify-between xl:hidden  ${
                  isMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
          >
            <div className="xl:flex xl:gap-x-5">
              <div className="text-xl font-bold text-red-500 mb-4 ">
                <img
                    src="/img/logo.png"
                    alt="Logo"
                    className="h-8 md:h-12 object-contain cursor-pointer"
                />
              </div>
              <li onClick={toggleMenu}>
                <Link
                    to={"/about"}
                    className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer  bg-[#f19c9c] bg-opacity-10"
                >
                  {getText("navbar4")}
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link
                    to={"/edu-design"}
                    className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer  bg-[#f19c9c] bg-opacity-10"
                >
                  {getText("navbar6")}
                </Link>
              </li>
              {" "}
              <li onClick={toggleMenu}>
                <Link
                    to={"/teachingTech"}
                    className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer  bg-[#f19c9c] bg-opacity-10"
                >
                  {getText("navbar1")}
                </Link>
              </li>
              {" "}
              <li onClick={toggleMenu}>
                <Link
                    to={"/labaratories"}
                    className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer  bg-[#f19c9c] bg-opacity-10"
                >
                  {getText("navbar2")}
                </Link>
              </li>
              {" "}
              <li onClick={toggleMenu}>
                <Link
                    to={"/academy"}
                    className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer  bg-[#f19c9c] bg-opacity-10"
                >
                  AcademyX
                </Link>
              </li>
              {" "}
              <li onClick={toggleMenu}>
                <Link
                    to={"/transfer"}
                    className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer  bg-[#f19c9c] bg-opacity-10"
                >
                  {getText("navbar3")}
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link
                    to={"/cosmic-services"}
                    className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer  bg-[#f19c9c] bg-opacity-10"
                >
                  KosmosX
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link
                    to={"/contact"}
                    className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer  bg-[#3089dd] bg-opacity-10"
                >
                  {getText("navbar5")}
                </Link>
              </li>
              <div className="w-full">
                <Dropdown
                    trigger={'click'}
                    menu={{
                      items,
                    }}
                >
                  <a onClick={(e) => e.preventDefault()}>
                    <Button className={''} color={'primary'} variant={'shadow'}>
                      Services
                    </Button>
                  </a>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </>
  );

};

export default Navbar;
