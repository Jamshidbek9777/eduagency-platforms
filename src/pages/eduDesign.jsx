import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";
import { GoDotFill } from "react-icons/go";

const images = [
  "planetarium1.webp",
  "planetarium2.avif",
  "planetarium3.avif",
  "planetarium4.avif",
  "planetarium5.avif",
  "planetarium6.webp",
  "planetarium7.avif",
];

const films = [
  { src: "film1.avif", title: "MARS 1001" },
  { src: "film2.avif", title: "ASTRALIS" },
  { src: "film3.avif", title: "BEYOND THE SUN" },
  { src: "film4.avif", title: "THE GREAT PYRAMIDS OF GIZA" },
  { src: "film5.avif", title: "EXPLODING UNIVERSE" },
  { src: "film6.avif", title: "TRAVELLING WITH LIGHT" },
  { src: "film7.avif", title: "THE BIRTH OF SOLAR SYSTEM" },
  { src: "film8.avif", title: "OUR VIOLENT PLANET" },
];

const EducationDesign = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  return (
    <>
      {/* Header Section */}
      <div
        className="relative bg-cover bg-center h-[600px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/eduDesignBg.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-6xl font-bold">
          {getText("eduDesign1")}
        </h1>
      </div>

      {/* Content Section */}
      <Wrapper>
        <div className="py-10 space-y-16">
          <div>
            <div class="mx-auto p-6">
              <div class="section-header mb-8">
                <h1 class="text-4xl font-bold text-center">
                  {getText("eduDesign2")}
                </h1>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                <div class="card bg-white p-4 rounded-lg shadow-lg">
                  <img
                    src="/img/activeLC1.jpg"
                    alt="Active Learning Center"
                    class="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h2 class="text-xl font-semibold mb-2">
                    {getText("eduDesign4")}
                  </h2>
                  <p>{getText("eduDesign5")}</p>
                </div>
                <div class="card bg-white p-4 rounded-lg shadow-lg">
                  <img
                    src="/img/flexibleRoom.jpg"
                    alt="Active Learning Center"
                    class="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h2 class="text-xl font-semibold mb-2">
                    {" "}
                    {getText("eduDesign6")}
                  </h2>
                  <p>{getText("eduDesign9")}</p>
                </div>
                <div class="card bg-white p-4 rounded-lg shadow-lg">
                  <img
                    src="/img/stemRoom.jpg"
                    alt="Active Learning Center"
                    class="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h2 class="text-xl font-semibold mb-2">STEM</h2>
                  <p>{getText("eduDesign10")}</p>
                </div>
                <div class="card bg-white p-4 rounded-lg shadow-lg">
                  <img
                    src="/img/melodyRoom.jpg"
                    alt="Active Learning Center"
                    class="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h2 class="text-xl font-semibold mb-2">
                    {" "}
                    {getText("eduDesign11")}
                  </h2>
                  <p>{getText("eduDesign12")}</p>
                </div>
              </div>

              {/* labs */}
              <div class="section-header mb-8">
                <h1 class="text-4xl font-bold text-center">
                  {getText("eduDesign7")}
                </h1>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <div class="card bg-white p-4 rounded-lg shadow-lg">
                  <img
                    src="/img/stemLab1.jpg"
                    alt="Active Learning Center"
                    class="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h2 class="text-xl font-semibold mb-2">
                    {" "}
                    {getText("eduDesign13")}
                  </h2>
                  <p>{getText("eduDesign14")}</p>
                </div>
                <div class="card bg-white p-4 rounded-lg shadow-lg">
                  <img
                    src="/img/astranomy.jpg"
                    alt="Active Learning Center"
                    class="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h2 class="text-xl font-semibold mb-2">
                    {" "}
                    {getText("eduDesign15")}
                  </h2>
                  <p>{getText("eduDesign16")}</p>
                </div>
                <div class="card bg-white p-4 rounded-lg shadow-lg">
                  <img
                    src="/img/electronicsLab.jpg"
                    alt="Active Learning Center"
                    class="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h2 class="text-xl font-semibold mb-2">
                    {getText("eduDesign17")}
                  </h2>
                  <p>{getText("eduDesign18")}</p>
                </div>
                <div class="card bg-white p-4 rounded-lg shadow-lg">
                  <img
                    src="/img/robotic.jpeg"
                    alt="Active Learning Center"
                    class="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h2 class="text-xl font-semibold mb-2">
                    {getText("eduDesign19")}
                  </h2>
                  <p>{getText("eduDesign20")}</p>
                </div>
              </div>

              <div className="section-header mb-8 mt-8">
                <h1 className="text-4xl font-bold text-center">Planetarium</h1>
              </div>
              <div className="mb-3">
                <li className="flex gap-1 items-center">
                  <GoDotFill size={10} />{" "}
                  <p className="text-lg">{getText("planetariumText2")}</p>
                </li>
                <li className="flex gap-1 items-center">
                  <GoDotFill size={10} />{" "}
                  <p className="text-lg">{getText("planetariumText3")}</p>
                </li>
                <li className="flex gap-1 items-center">
                  <GoDotFill size={10} />{" "}
                  <p className="text-lg">{getText("planetariumText4")}</p>
                </li>
                <li className="flex gap-1 items-center">
                  <GoDotFill size={10} />{" "}
                  <p className="text-lg">{getText("planetariumText5")}</p>
                </li>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={`/img/${image}`}
                    alt={`Planetarium Image ${index + 1}`}
                    className="w-full h-52 object-cover rounded shadow-sm cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default EducationDesign;
