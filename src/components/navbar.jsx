import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/language";
import { getText } from "../languages";
import { Button } from "@nextui-org/react";
import { Dropdown, Menu } from "antd";
import Wrapper from "../layout/wrapper";
import { IoIosArrowDown } from "react-icons/io";

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

  //services items
  const items = [
    {
      key: "1",
      label: getText("servicesText1"),
      children: [
        { label: <Link to="/okulaile">Okulaile</Link>, key: "1-1" },
        { label: <Link to="/mental-up">Mental Up</Link>, key: "1-2" },
        {
          label: (
            <Link to="https://kosmosx.uz/#/online-platforms">
              Future astronaut
            </Link>
          ),
          key: "1-3",
        },
        { label: <Link to="/labaratories">STEMLab</Link>, key: "1-4" },
      ],
    },
    {
      key: "2",
      label: getText("servicesText2"),
      children: [
        { label: <Link to="/mental-up">Mental Up</Link>, key: "2-1" },
        {
          label: (
            <Link to="https://kosmosx.uz/#/online-platforms">
              Future astronaut
            </Link>
          ),
          key: "2-2",
        },
        { label: <Link to="/k12net">K12net</Link>, key: "2-3" },
        { label: <Link to="/labaratories">STEMLab</Link>, key: "2-4" },
        {
          label: (
            <Link to="https://kosmosx.uz/#/trip-to-space">Uzay Kampi</Link>
          ),
          key: "2-5",
        },
      ],
    },
    {
      key: "3",
      label: getText("servicesText3"),
      children: [
        { label: <Link to="/mental-up">Mental Up</Link>, key: "3-1" },
        { label: <Link to="/k12net">K12net</Link>, key: "3-2" },
        { label: <Link to="/labaratories">STEMLab</Link>, key: "3-3" },
        {
          label: (
            <Link to="https://kosmosx.uz/#/trip-to-space">Uzay Kampi</Link>
          ),
          key: "3-4",
        },
      ],
    },
    {
      key: "4",
      label: getText("servicesText4"),
      children: [
        { label: <Link to="/k12net">K12net</Link>, key: "4-1" },
        {
          label: (
            <Link to="https://kosmosx.uz/#/trip-to-space">Uzay Kampi</Link>
          ),
          key: "4-2",
        },
        { label: <Link to="/labaratories">STEMLab</Link>, key: "4-3" },
      ],
    },
  ];

  //language items
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

  //nav1
  const nav1Items = [
    {
      key: "1",
      label: (
        <Link className="text-[16px]" href="/">
          Ta'lim modellari
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link className="text-[16px]" href="/">
          Ta'lim texnologiyalari
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link className="text-[16px]" href="/">
          Dasturlar va strategiyalar
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link className="text-[16px]" href="/">
          O'qitvchi ta'limlari
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link className="text-[16px]" href="/">
          Ta'lim materiallari
        </Link>
      ),
    },
  ];
  const menu1 = {
    items: nav1Items,
  };

  //nav2
  const nav2Items = [
    {
      key: "1",
      label: (
        <Link className="text-[16px]" href="/">
          Egitim tech fuar
        </Link>
      ),
    },
  ];
  const menu2 = {
    items: nav2Items,
  };

  const nav3Items =[
    
  ]

  return (
    <>
      <div className="bg-white fixed w-full z-[999]">
        <Wrapper>
          <div
            className="flex flex-row items-center px-2 md:px-2 py-4 gap-3"
            style={{
              borderBottom: "5px solid",
              borderImage:
                "linear-gradient(to right, #FFFFFF, #042E94, #FFFFFF) 1",
            }}
          >
            <div className="w-full">
              <div className="flex items-center justify-between w-full gap-6">
                {/* Logo */}
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
                <div
                  className="relative hidden lg:flex gap-4 lg:gap-6 text-gray-700 text-sm text-center p-3  px-6 rounded-[30px] overflow-x-auto whitespace-nowrap scrollbar-hide"
                  style={{
                    border: "2px solid #dce0e7",
                  }}
                >
                  {/* Menu Items */}
                  <Dropdown trigger={["hover"]} menu={menu1}>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="hover:text-[#0556FF] transition text-[17px] font-bold cursor-pointer"
                    >
                      Ta'lim xizmatlari
                    </a>
                  </Dropdown>

                  <Dropdown trigger={["hover"]} menu={menu2}>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="hover:text-[#0556FF] transition text-[17px] font-bold cursor-pointer"
                    >
                      Egtitim tech fuar
                    </a>
                  </Dropdown>
                  <Dropdown trigger={["hover"]} menu={menu2}>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="hover:text-[#0556FF] transition text-[17px] font-bold cursor-pointer"
                    >
                      Transfer xizmatlari
                    </a>
                  </Dropdown>
                  <Dropdown trigger={["hover"]} menu={menu2}>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="hover:text-[#0556FF] transition text-[17px] font-bold cursor-pointer"
                    >
                      Denglik xizmatlari
                    </a>
                  </Dropdown>
                  <Dropdown trigger={["hover"]} menu={menu2}>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="hover:text-[#0556FF] transition text-[17px] font-bold cursor-pointer"
                    >
                      Seminar va konferensiya
                    </a>
                  </Dropdown>
                  <Dropdown trigger={["hover"]} menu={menu2}>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="hover:text-[#0556FF] transition text-[17px] font-bold cursor-pointer"
                    >
                      Akademik turlar
                    </a>
                  </Dropdown>
                  <Dropdown trigger={["hover"]} menu={menu2}>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="hover:text-[#0556FF] transition text-[17px] font-bold cursor-pointer"
                    >
                      Uzay va havachilik
                    </a>
                  </Dropdown>
                </div>

                {/* left side */}
                <div className="flex items-center gap-8">
                  <div className="relative">
                    <Dropdown
                      overlay={languageMenu}
                      trigger={["click"]}
                      placement="bottom"
                    >
                      <div className="flex items-center gap-[5px] cursor-pointer">
                        <img
                          src={selectedFlag}
                          style={{ width: "20px", objectFit: "cover" }}
                          alt="Selected Language"
                        />
                        <span className="text-black text-sm font-bold">
                          {selectedLanguage.toUpperCase()}
                        </span>
                        <IoIosArrowDown
                          className="text-black text-sm"
                          size={15}
                        />
                      </div>
                    </Dropdown>
                  </div>

                  {/* services */}
                  <div className="hidden lg:flex items-center">
                    <div className="hidden lg:flex">
                      <Dropdown
                        trigger={["hover"]}
                        menu={{
                          items,
                        }}
                      >
                        <a
                          onClick={(e) => e.preventDefault()}
                          className={"flex items-center gap-2"}
                        >
                          <Button
                            variant="bordered"
                            className={
                              "text-black transition duration-300 text-base font-bold rounded-[30px] h-[52px]"
                            }
                          >
                            {getText("navbar10")}
                            <IoIosArrowDown
                              className="text-black text-sm"
                              size={15}
                            />
                          </Button>
                        </a>
                      </Dropdown>
                    </div>
                  </div>
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
                  to={"/okul-mimari"}
                  className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer  bg-[#f19c9c] bg-opacity-10"
                >
                  {getText("navbar1")}
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link
                  to={"/egitim-tech"}
                  className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer  bg-[#f19c9c] bg-opacity-10"
                >
                  {getText("navbar2")}
                </Link>
              </li>{" "}
              <li onClick={toggleMenu}>
                <Link
                  to={"/egitim-program"}
                  className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer  bg-[#f19c9c] bg-opacity-10"
                >
                  {getText("navbar3")}
                </Link>
              </li>{" "}
              <li onClick={toggleMenu}>
                <Link
                  to={"/education-strategies"}
                  className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer  bg-[#f19c9c] bg-opacity-10"
                >
                  {getText("navbar4")}
                </Link>
              </li>{" "}
              <li onClick={toggleMenu}>
                <Link
                  to={"/teacherTrainings"}
                  className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer  bg-[#f19c9c] bg-opacity-10"
                >
                  {getText("navbar5")}
                </Link>
              </li>{" "}
              <li onClick={toggleMenu}>
                <Link
                  to={"/edu-materials"}
                  className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer  bg-[#f19c9c] bg-opacity-10"
                >
                  {getText("navbar6")}
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link
                  to={"/academic-tour"}
                  className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer  bg-[#f19c9c] bg-opacity-10"
                >
                  {getText("navbar7")}
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link
                  to={"/about"}
                  className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer  bg-[#3089dd] bg-opacity-10"
                >
                  {getText("navbar8")}
                </Link>
              </li>
              <li onClick={toggleMenu}>
                <Link
                  to={"/contact"}
                  className="font-medium block text-base text-center rounded-xl p-4 mb-2.5 cursor-pointer  bg-[#3089dd] bg-opacity-10"
                >
                  {getText("navbar9")}
                </Link>
              </li>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Navbar;
