import {useContext} from "react";
import ContactUs from "../components/contactUs";
import Wrapper from "../layout/wrapper";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";
import Helmet from "../components/helmet.jsx";

const EducationDesign = () => {
  const { selectedLanguage, selectedFlag, changeLanguage } =
      useContext(LanguageContext);

  const cardsData = [
    {
      imgSrc: "/img/schoolm.jpg",
      altText: "hizmetText1",
      title: "hizmetText1",
      description: "hizmetText7",
      titleColor: "#4A90E2",
    },
    {
      imgSrc: "/img/edumodel.webp",
      altText: "hizmetText2",
      title: "hizmetText2",
      description: "hizmetText8",
      titleColor: "#e63f38",
    },
    {
      imgSrc: "/img/teachers.jpg",
      altText: "hizmetText3",
      title: "hizmetText3",
      description: "hizmetText9",
      titleColor: "#4A90E2",
    },
    {
      imgSrc: "/img/digitaledu.webp",
      altText: "hizmetText4",
      title: "hizmetText4",
      description: "hizmetText10",
      titleColor: "#e63f38",
    },
    {
      imgSrc: "/img/stem.png",
      altText: "hizmetText5",
      title: "hizmetText5",
      description: "hizmetText11",
      titleColor: "#4A90E2",
    },
    {
      imgSrc: "/img/schooln.jpg",
      altText: "hizmetText6",
      title: "hizmetText6",
      description: "hizmetText12",
      titleColor: "#e63f38",
    },
  ];

  return (
      <>
        <Helmet
            title={getText("AboutPageTitle") || "Education design"}
            description={getText("AboutPageDesc") || "Learn more about education."}
            link="/edu-design"
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
              <div className="bg-white px-8 py-10 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-10 w-full mx-6 mb-12 justify-between">
                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl font-bold text-[#e63f38] mb-6">
                    {getText("eduHeader")}
                  </h1>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {getText("eduHeaderDesc")}
                  </p>
                </div>
                <div>
                  <img
                      src="/img/edudesign.jpg"
                      alt="About Us"
                      className="rounded-xl w-[450px]"
                  />
                </div>
              </div>
              {/* Cards Section */}
              <div data-aos="fade-up">
                <div className="pb-10">
                  <h2 className="text-4xl font-bold text-[#e63f38] text-center mb-12">
                    {getText("hizmetHeader")}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {cardsData.map((card, index) => (
                        <div
                            key={index}
                            className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition-all"
                        >
                          <img
                              src={card.imgSrc}
                              alt={getText(card.altText)}
                              className="w-full h-48 object-cover rounded-md mb-4"
                          />
                          <h3
                              className="text-xl font-bold mb-4"
                              style={{ color: card.titleColor }}
                          >
                            {getText(card.title)}
                          </h3>
                          {/*<p className="text-gray-600">*/}
                          {/*  {getText(card.description)}*/}
                          {/*</p>*/}
                        </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="text-center text-xl mt-6 text-gray-700 bg-white p-10 rounded-xl shadow-lg">
                {getText("bottomText")}
              </div>
            </div>
            <ContactUs />
          </Wrapper>
        </div>
      </>
  );
};

export default EducationDesign;
