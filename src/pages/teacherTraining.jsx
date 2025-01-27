import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { LanguageContext } from "../context/language";
import { getText } from "../languages";
import { GiBrain } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiFocus2Line } from "react-icons/ri";
import { IoGameController } from "react-icons/io5";
import { MdChecklist } from "react-icons/md";
import { PiStudentBold } from "react-icons/pi";

const TeacherTrainings = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  const models = [
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
      title: getText("tTraining11"),
      description: getText("tTraining12"),
      icon: <PiStudentBold size={30} className="text-[#1E73BE]" />,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[600px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/teacherTrainingsBg.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        <h1 className="relative z-10 text-6xl font-bold">
          {getText("tTraningHeader")}
        </h1>
        <p className="relative z-10 mt-4 text-xl text-gray-300 text-center px-4">
          {getText("tTrainingSubheader")}
        </p>
      </div>

      {/* Trainings Section */}
      <Wrapper>
        <div className="py-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#1E73BE]">
            {getText("tTrainingHeader")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((model, index) => (
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

export default TeacherTrainings;
