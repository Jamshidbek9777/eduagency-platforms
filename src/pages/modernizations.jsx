import React from "react";
import Wrapper from "../layout/wrapper";
import { FaChildren, FaMarker } from "react-icons/fa6";
import { HiPresentationChartBar } from "react-icons/hi";
import { getText } from "../languages";
import { GoDotFill } from "react-icons/go";
import { GiBrain } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiFocus2Line } from "react-icons/ri";
import { IoGameController } from "react-icons/io5";
import { MdChecklist } from "react-icons/md";

const models = [
  {
    title: getText("eduModel5"),
    description: getText("eduModel6"),
    details: getText("eduModelDetails3"),
    icon: <FaChildren className="text-6xl text-[#1E73BE]" />,
  },

  {
    title: getText("eduModel9"),
    description: getText("eduModel10"),
    details: getText("eduModelDetails5"),
    icon: <HiPresentationChartBar className="text-6xl text-[#1E73BE]" />,
  },
];
const images = [
  "planetarium1.webp",
  "planetarium2.avif",
  "planetarium3.avif",
  "planetarium4.avif",
  "planetarium5.avif",
  "planetarium6.webp",
  "planetarium7.avif",
];

const trainings = [
  {
    title: getText("tTraining1"),
    description: getText("tTraining2"),
    icon: <GiBrain size={30} className="text-[#1E73BE]" />,
  },
  {
    title: getText("tTraining3"),
    description: getText("tTraining4"),
    icon: <FaChalkboardTeacher size={30} className="text-[#1E73BE]" />,
  },
  {
    title: getText("tTraining5"),
    description: getText("tTraining6"),
    icon: <RiFocus2Line size={30} className="text-[#1E73BE]" />,
  },
  {
    title: getText("tTraining7"),
    description: getText("tTraining8"),
    icon: <IoGameController size={30} className="text-[#1E73BE]" />,
  },
  {
    title: getText("tTraining9"),
    description: getText("tTraining10"),
    icon: <MdChecklist size={30} className="text-[#1E73BE]" />,
  },
  {
    title: getText("eduStr5"),
    description: getText("eduStr6"),
    icon: <FaMarker size={30} className="text-[#1E73BE]" />,
  },
];

const Modernizations = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-[600px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/modernizationBg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-6xl font-bold">
          Ta'lim modernizatsiya
        </h1>
      </div>
      <Wrapper>
        <p className="text-4xl font-bold flex justify-center mt-10">
          Raqamli ta'lim modellari
        </p>
        <div className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            {getText("eduModelIntro")}
          </h2>
          <div className="space-y-16">
            {models.map((model, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center`}
              >
                {/* Icon Section */}
                <div className="w-full md:w-1/3 flex justify-center mb-8 md:mb-0">
                  <div className="flex items-center justify-center w-28 h-28 bg-[#F4F9FF] rounded-full shadow-md">
                    {model.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full md:w-2/3 text-center md:text-left">
                  <h3 className="text-3xl font-bold text-[#1E73BE] mb-4">
                    {model.title}
                  </h3>
                  <p className="text-gray-700 text-lg mb-4">
                    {model.description}
                  </p>
                  <p className="text-gray-600">{model.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
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
        <div className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1E73BE]">
            O'qituvchilar uchun raqamli ta'lim
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainings.map((model, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-[20px] shadow-lg flex items-start gap-6 border-t-4 border-[#1E73BE] transition-all hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#E7F3FF] p-4">
                  {model.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-[#1E73BE] mb-2">
                    {model.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{model.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Modernizations;
