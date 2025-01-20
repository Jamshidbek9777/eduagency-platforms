import React from "react";
import Wrapper from "../layout/wrapper";
import { HiAcademicCap } from "react-icons/hi";

const StrategySection = ({ title }) => {
  return (
    <div>
      <h1 className="text-[24px] font-semibold mb-4">{title}</h1>
      <div className="space-y-2">
        <div className="p-4 border-2 border-gray-200 rounded-xl flex items-center gap-2">
          <HiAcademicCap className="text-xl text-blue-500" size={30} />
          <h1 className="text-lg font-medium">Xorazmiy ta'lim modeli</h1>
        </div>
        <div className="p-4 border-2 border-gray-200 rounded-xl flex items-center gap-2">
          <HiAcademicCap className="text-xl text-blue-500" size={30}/>
          <h1 className="text-lg font-medium">Xorazmiy ta'lim modeli</h1>
        </div>
        <div className="p-4 border-2 border-gray-200 rounded-xl flex items-center gap-2">
          <HiAcademicCap className="text-xl text-blue-500" size={30}/>
          <h1 className="text-lg font-medium">Xorazmiy ta'lim modeli</h1>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <a href="#" className="text-blue-500 hover:underline text-md">
          Barchasi
        </a>
      </div>
    </div>
  );
};

const Reklama = () => {
  return (
    <Wrapper>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <StrategySection title="Dasturlar va strategiyalar" />
        <StrategySection title="O'qituvchi ta'limlari" />
        <StrategySection title="Ta'lim materillari" />
      </div>
    </Wrapper>
  );
};

export default Reklama;
