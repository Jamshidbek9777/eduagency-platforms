import React, { useContext } from "react";
import {
  FaBrain,
  FaGlobe,
  FaBullseye,
  FaGamepad,
  FaChalkboardTeacher,
  FaUserCheck,
  FaLaptopCode,
  FaFolder,
  FaBook,
  FaUserTie,
  FaUsers,
  FaChartLine,
} from "react-icons/fa";
import { getText } from "../languages/index.js";
import { LanguageContext } from "../context/language.jsx";

const TeacherTrainings = () => {
  const teacherTrainings = [
    {
      title: getText("tTrain3"),
      description: getText("tTrain4"),
      color: "from-blue-500 to-purple-600",
      icon: <FaBrain />,
    },

    {
      title: getText("tTrain7"),
      description: getText("tTrain8"),
      color: "from-yellow-400 to-orange-500",
      icon: <FaBullseye />,
    },
    {
      title: getText("tTrain9"),
      description: getText("tTrain10"),
      color: "from-pink-500 to-red-500",
      icon: <FaGamepad />,
    },

    {
      title: getText("tTrain13"),
      description: getText("tTrain14"),
      color: "from-gray-400 to-gray-600",
      icon: <FaUserCheck />,
    },
    {
      title: getText("tTrain15"),
      description: getText("tTrain16"),
      color: "from-yellow-400 to-orange-500",
      icon: <FaLaptopCode />,
    },

    {
      title: getText("tTrain23"),
      description: getText("tTrain24"),
      color: "from-green-400 to-teal-500",
      icon: <FaUsers />,
    },
  ];
  const { selectedLanguage } = useContext(LanguageContext);
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 pt-48">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-blue-600 mb-6">
          {getText("tTrain1")}
        </h2>
        <p className="text-gray-600 mb-10">{getText("tTrain2")}</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {teacherTrainings.map((training, index) => (
          <div
            key={index}
            className={`cursor-pointer bg-white rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transform transition-all duration-300 border-t-4 ${training.color}`}
          >
            <div className={"flex items-center space-x-4 mb-4"}>
              <div className="text-3xl text-white bg-gradient-to-r p-3 rounded-lg shadow-md ${program.color}">
                {training.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800">
                {training.title}
              </h3>
            </div>

            <p className="text-gray-600 text-sm">{training.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherTrainings;
