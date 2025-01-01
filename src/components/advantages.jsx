import React, { useContext } from "react";
import { FaCircleCheck, FaPeopleGroup } from "react-icons/fa6";
import { IoShareSocialSharp } from "react-icons/io5";
import { MdBiotech, MdCastForEducation, MdHomeRepairService } from "react-icons/md";
import { SiGotomeeting } from "react-icons/si";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";
import Wrapper from "../layout/wrapper";

const Advantages = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  const advantages = [
    {
      id: 1,
      adv: getText("advCard1"),
      icon: <FaPeopleGroup size={24} className="text-blue-500" />,
    },
    {
      id: 2,
      adv: getText("advCard2"),
      icon: <IoShareSocialSharp size={24} className="text-pink-500" />,
    },
    {
      id: 3,
      adv: getText("advCard3"),
      icon: <MdCastForEducation size={24} className="text-green-500" />,
    },
    {
      id: 4,
      adv: getText("advCard4"),
      icon: <SiGotomeeting size={24} className="text-purple-500" />,
    },
    {
      id: 5,
      adv: getText("advCard5"),
      icon: <MdHomeRepairService size={24} className="text-yellow-500" />,
    },
    {
      id: 6,
      adv: getText("advCard6"),
      icon: <MdBiotech size={24} className="text-red-500" />,
    },
  ];

  return (
      <div className="bg-gradient-to-b from-gray-50 to-gray-100 py-16">
        <Wrapper>
          <div className="container mx-auto">
            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-12 text-gray-800 tracking-tight">
              {getText("advHeader")}
            </h1>

            {/* Card Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {advantages.map((advantage) => (
                  <div
                      key={advantage.id}
                      className="relative group bg-white shadow-md rounded-lg p-6 text-center border border-gray-200 hover:scale-105 hover:shadow-xl transition-transform duration-300"
                  >
                    {/* Icon */}
                    <div className="flex justify-center items-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 mx-auto mb-4 group-hover:from-blue-500 group-hover:to-blue-600 transition-colors duration-300">
                      {advantage.icon}
                    </div>

                    {/* Advantage Text */}
                    <p className="text-lg font-medium text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                      {advantage.adv}
                    </p>

                    {/* Animated Background */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg transition-opacity duration-300"></div>
                  </div>
              ))}
            </div>
          </div>
        </Wrapper>
      </div>
  );
};

export default Advantages;
