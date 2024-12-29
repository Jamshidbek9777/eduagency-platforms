import { useContext } from "react";
import { FaChalkboardTeacher, FaUserGraduate, FaUsers } from "react-icons/fa";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { SiMinds } from "react-icons/si";
import {LuBrain} from "react-icons/lu";
import { VscVmActive } from "react-icons/vsc";
import ContactUs from "../components/contactUs";
import Wrapper from "../layout/wrapper";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";
import Helmet from "../components/helmet.jsx";

// Reusable Card Component
const AcademyCard = ({ icon, header, text }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer">
      <div className="flex justify-center mb-4 text-[#e63f38] text-5xl">{icon}</div>
      <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
        {header}
      </h1>
      <p className="text-gray-600 text-center text-sm">{text}</p>
    </div>
);

const Academy = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  // Array of card data
  const cardData = [
    {
      icon: <FaChalkboardTeacher />,
      header: getText("academyCard1Header"),
      text: getText("academyCard1Text"),
    },
    {
      icon: <FaUserGraduate />,
      header: getText("academyCard2Header"),
      text: getText("academyCard2Text"),
    },
    {
      icon: <FaUsers />,
      header: getText("academyCard3Header"),
      text: getText("academyCard3Text"),
    },
    {
      icon: <MdOutlineConnectWithoutContact />,
      header: getText("academyCard4Header"),
      text: getText("academyCard4Text"),
    },
    {
      icon: <SiMinds />,
      header: getText("academyCard5Header"),
      text: getText("academyCard5Text"),
    },
    {
      icon: <LuBrain />,
      header: getText("academyCard6Header"),
      text: getText("academyCard6Text"),
    },
    {
      icon: <VscVmActive />,
      header: getText("academyCard7Header"),
      text: getText("academyCard7Text"),
    },
    {
      icon: <FaUsers />,
      header: getText("academyCard8Header"),
      text: getText("academyCard8Text"),
    },
  ];

  return (
      <>
        <Helmet
            title={getText("AboutPageTitle") || "AcademyX"}
            description={getText("AboutPageDesc") || "Learn more about AcademyX."}
            link="/academy"
            keywords="about, EduAgency, Uzbekistan, education"
        />
        <div
            style={{
              background:
                  "transparent linear-gradient(180deg, #d5f0f7 0%, #ffffff 100%) 0% 0% no-repeat padding-box",
            }}
            className="min-h-screen"
        >
          <Wrapper>
            <div data-aos="fade-up" className="pt-40 flex flex-col items-center">
              {/* Hero Section */}
              <div className="bg-white px-8 py-10 lg:py-1 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-10 w-full mx-6 mb-12 justify-between">
                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl font-bold text-[#e63f38] mb-6">
                    {getText("academyHeader")}
                  </h1>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {getText("academyDesc")}
                  </p>
                </div>
                <div>
                  <img
                      src="/img/academypic.png"
                      alt="Academyx Hero"
                      className="rounded-xl w-[450px]"
                  />
                </div>
              </div>

              {/* Services Section */}
              <div
                  data-aos="fade-up"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-10"
              >
                {cardData.map((card, index) => (
                    <AcademyCard
                        key={index}
                        icon={card.icon}
                        header={card.header}
                        text={card.text}
                    />
                ))}
              </div>
            </div>
            <ContactUs />
          </Wrapper>
        </div>
      </>
  );
};

export default Academy;
