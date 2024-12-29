import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import ContactUs from "../components/contactUs";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";
import Helmet from "../components/helmet.jsx";

const Labaratories = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  // Array of lab data
  const labData = [
    {
      image: "/img/lab-main.png",
      alt: "STEM Laboratory",
      header: "labsCard1Header",
      text: "labsCard1Text",
    },
    {
      image: "/img/brain-games.jpeg",
      alt: "Intellectual Games",
      header: "labsCard2Header",
      text: "labsCard2Text",
    },
    {
      image: "/img/aerospace-lab.jpeg",
      alt: "Aerospace Laboratory",
      header: "labsCard3Header",
      text: "labsCard3Text",
    },
    {
      image: "/img/energy-innovation.webp",
      alt: "Energy Innovation",
      header: "labsCard4Header",
      text: "labsCard4Text",
    },
    {
      image: "/img/electr-lab.png",
      alt: "Electronics Laboratory",
      header: "labsCard5Header",
      text: "labsCard5Text",
    },
    {
      image: "/img/design-app.jpeg",
      alt: "Design Applications",
      header: "labsCard6Header",
      text: "labsCard6Text",
    },
  ];

  return (
      <>
        <Helmet
            title={getText("AboutPageTitle") || "Labaratories"}
            description={
                getText("AboutPageDesc") || "Learn more about our services."
            }
            link="/labaratories"
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
            {/* Header Section */}
            <div data-aos="fade-up" className="pt-40 flex flex-col items-center">
              <div className="bg-white px-8 py-10 lg:py-12 rounded-3xl shadow-lg flex flex-col md:flex-row items-center gap-10 w-full mx-6 mb-12 justify-between">
                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl font-bold text-[#e63f38] mb-6">
                    {getText("labsHeader")}
                  </h1>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {getText("labsDesc")}
                  </p>
                </div>
                <div>
                  <img
                      src="/img/lab-main.png"
                      alt="Laboratories"
                      className="rounded-xl w-[450px]"
                  />
                </div>
              </div>

              {/* Cards Section */}
              <div
                  data-aos="fade-up"
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10"
              >
                {labData.map((lab, index) => (
                    <div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                    >
                      <div className="h-[50%] flex justify-center mb-4">
                        <img
                            src={lab.image}
                            alt={lab.alt}
                            className="h-full object-cover rounded-t-xl"
                        />
                      </div>
                      <div className="flex-grow flex flex-col justify-center">
                        <h1 className="text-xl font-semibold text-gray-800 text-center mb-2">
                          {getText(lab.header)}
                        </h1>
                        <p className="text-gray-600 text-center text-sm">
                          {getText(lab.text)}
                        </p>
                      </div>
                    </div>
                ))}
              </div>
            </div>

            <ContactUs />
          </Wrapper>
        </div>
      </>
  );
};

export default Labaratories;
