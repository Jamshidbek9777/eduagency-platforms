import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../languages";

import { IoCheckmarkDone } from "react-icons/io5";
import { LanguageContext } from "../context/language";

const TeacherTrainings = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const models = [
    {
      title: getText("tTraining1"),
      description: getText("tTraining2"),
    },
    {
      title: getText("tTraining3"),
      description: getText("tTraining4"),
    },
    {
      title: getText("tTraining5"),
      description: getText("tTraining6"),
    },
    {
      title: getText("tTraining7"),
      description: getText("tTraining8"),
    },
    {
      title: getText("tTraining9"),
      description: getText("tTraining10"),
    },
    {
      title: getText("tTraining11"),
      description: getText("tTraining12"),
    },
  ];

  return (
    <>
      <div
        className="relative bg-cover bg-center h-[708px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/teacherTrainingsBg.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-6xl font-bold">
          {getText("tTraningHeader")}
        </h1>
      </div>

      <Wrapper>
        <div className="py-10">
          <div className="">
            <h1 className="text-4xl mb-4">{getText("tTraningHeader")}</h1>
            {models.map((model, index) => (
              <div
                key={index}
                className="p-6 bg-[#F4F4F4] rounded-[20px] flex flex-col mb-4 border-l-8 shadow-lg border-[#1E73BE]"
              >
                <div className="flex items-center gap-2">
                  <IoCheckmarkDone size={25} color="#002FFF" />
                  <h2 className="text-xl font-semibold text-[#002FFF]">
                    {model.title}
                  </h2>
                </div>
                <p className="text-gray-600 mt-2">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default TeacherTrainings;
