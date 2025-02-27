import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";

const Numbers = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <Wrapper>
      <div className="py-10 flex flex-col lg:flex-row gap-10">
        <div className="text-3xl font-semibold text-gray-900 mb-6">
          {getText("numbers1")}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-500">10000 +</p>
            <p className="text-gray-700">{getText("numbers2")}</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-500">10+</p>
            <p className="text-gray-700"> {getText("numbers3")}</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-500">5+</p>
            <p className="text-gray-700"> {getText("numbers4")}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Numbers;
