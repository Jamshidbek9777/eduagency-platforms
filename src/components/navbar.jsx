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
      label: <Link to={"/kindergartens"}>{getText("servicesText1")}</Link>,
    },
    {
      key: "2",
      label: <Link to={"/elementary-school"}>{getText("servicesText2")}</Link>,
    },
    {
      key: "3",
      label: (
        <Link to={"/intermediate-school"}>{getText("servicesText3")}</Link>
      ),
    },
    {
      key: "4",
      label: <Link to={"/high-schools"}>{getText("servicesText4")}</Link>,
    },
    {
      key: "5",
      label: <Link to={"/universities"}>{getText("servicesText5")}</Link>,
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

  const nav1Items = [
    {
      key: "1",
      label: (
        <a className="text-[16px]" href="/eduModels">
          {getText("navbar5")}
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a className="text-[16px]" href="/education-design">
          {getText("navbar6")}
        </a>
      ),
    },

    {
      key: "4",
      label: (
        <a className="text-[16px]" href="/teacherTrainings">
          {getText("navbar9")}
        </a>
      ),
    },
  ];

  const menu1 = {
    items: nav1Items,
  };

  const nav3Items = [
    {
      key: "3",
      label: (
        <Link className="text-[16px]" to="/management">
          Boshqaruv tizimlari
        </Link>
      ),
    },
    {
      key: "4",
      label: (
        <Link className="text-[16px]" to="/e-platforms">
          Elektron talim platformalari
        </Link>
      ),
    },
    {
      key: "5",
      label: (
        <Link className="text-[16px]" to="/e-games">
          E-oyinlar
        </Link>
      ),
    },
  ];

  const menu3 = {
    items: nav3Items,
  };

  const menuItems = [
    {
      key: "navbar1",
      label: getText("navbar1"),
      children: [
        {
          key: "navbar5",
          label: <Link to="/eduModels">{getText("navbar5")}</Link>,
        },
        {
          key: "navbar6",
          label: <Link to="/education-design">{getText("navbar6")}</Link>,
        },
        {
          key: "navbar7",
          label: <Link to="/education-technologies">{getText("navbar7")}</Link>,
        },
        {
          key: "navbar8",
          label: <Link to="/eduStrategies">{getText("navbar8")}</Link>,
        },
        {
          key: "navbar9",
          label: <Link to="/teacherTrainings">{getText("navbar9")}</Link>,
        },
      ],
    },
    {
      key: "navbar2",
      label: getText("navbar2"),
      children: [
        {
          key: "",
          label: <Link to="/eduModels">{getText("navbar10")}</Link>,
        },

        {
          key: "",
          label: (
            <Link to="/education-technologies">{getText("navbar12")}</Link>
          ),
        },
      ],
    },
    {
      key: "ss",
      label: getText("navbar3"),
      children: [
        {
          key: "",
          label: <Link to="/eduModels">{getText("navbar14")}</Link>,
        },
        {
          key: "",
          label: <Link to="/education-design">{getText("navbar15")}</Link>,
        },
      ],
    },
    {
      key: "s1",
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
      key: "s2",
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
      key: "s3",
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
      key: "s4",
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
    {
      key: "t1",
      label: (
        <Link className="bg-gray-100 p-2 rounded-lg" to="/about">
          {getText("topbar1")}
        </Link>
      ),
    },
    {
      key: "t2",
      label: (
        <Link className="bg-gray-100 p-2 rounded-lg" to="/contact">
          {getText("topbar2")}
        </Link>
      ),
    },
    {
      key: "about",
      label: (
        <Link className="bg-gray-100 p-2 rounded-lg" to="/about">
          {getText("topbar3")}
        </Link>
      ),
    },
    {
      key: "contact",
      label: (
        <Link className="bg-gray-100 p-2 rounded-lg" to="/contact">
          {getText("topbar4")}
        </Link>
      ),
    },
  ];

  return (
    <>
      <div className="bg-white fixed w-full z-[999]">
        <div className="items-center h-8 bg-[#394B59] md:flex hidden">
          <Wrapper>
            <div className="flex justify-between  px-3">
              <div>
                <a
                  href="mailto:info@EduAgency.uz"
                  className="text-white hover:underline select-none"
                >
                  info@eduagency.uz
                </a>
              </div>
    
              <div className="flex gap-4">
                <a
                  href="/about"
                  className="text-white cursor-pointer select-none"
                >
                  {getText("topbar3")}
                </a>
                <a
                  href="/contact"
                  className="text-white cursor-pointer select-none"
                >
                  {getText("topbar4")}
                </a>
              </div>
            </div>
          </Wrapper>
        </div>
        <Wrapper>
          <div
            className="flex flex-row items-center px-2 py-4 gap-3"
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
                <div className="relative hidden lg:flex gap-4 lg:gap-6 text-gray-700 text-sm text-center p-3  px-6 ">
                  {/* Menu Items */}
                  <Dropdown trigger={["hover"]} menu={menu1}>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="hover:text-[#0556FF] transition text-[17px] font-bold cursor-pointer"
                    >
                      Ta'lim modernizatsiya
                    </a>
                  </Dropdown>
                  <Dropdown trigger={["hover"]} menu={menu3}>
                    <a
                      onClick={(e) => e.preventDefault()}
                      className="hover:text-[#0556FF] transition text-[17px] font-bold cursor-pointer"
                    >
                      Raqamli ta'lim
                    </a>
                  </Dropdown>
                  <a
                    href="/academic-tour"
                    className="hover:text-[#0556FF] transition text-[17px] font-bold cursor-pointer"
                  >
                    Akademik sayohat
                  </a>
                  <a
                    href="/partnership"
                    className="hover:text-[#0556FF] transition text-[17px] font-bold cursor-pointer"
                  >
                    {getText("navbar3")}
                  </a>
                </div>

                {/* left side */}
                <div className="flex items-center gap-8">
                  {/* services */}
                  <div className="hidden lg:flex items-center">
                    <div className="hidden lg:flex gap-4">
                      <Dropdown
                        overlay={languageMenu}
                        trigger={["hover"]}
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
                              "text-black transition duration-300 text-base font-bold"
                            }
                          >
                            {getText("navbar4")}
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
            className={`menu duration-300 h-full bg-white fixed inset-0 z-[99] pt-8 px-5 pb-6 ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex justify-between items-center mb-4">
              <img
                src="/img/logo.png"
                alt="Logo"
                className="h-8 object-contain cursor-pointer"
              />
              <div
                onClick={toggleMenu}
                className="cursor-pointer text-lg font-bold"
              >
                ✖
              </div>
            </div>
            <Menu
              mode="inline"
              items={menuItems}
              className="text-base"
              onClick={toggleMenu}
            />
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Navbar;
