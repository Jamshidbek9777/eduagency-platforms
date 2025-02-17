import React from "react";
import Wrapper from "../layout/wrapper";

const Numbers = () => {
  return (
    <Wrapper>
      <div className="py-10 flex flex-col lg:flex-row gap-10">
        <div className="text-3xl font-semibold text-gray-900 mb-6">
          Istalgan joyda, o'zingizga <br /> qulay vaqtda o'qish imkoniyati
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-500">50 000+</p>
            <p className="text-gray-700">
              Jami tahsil olayotgan o‘quvchilarimiz
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-500">50+</p>
            <p className="text-gray-700">Platformamizda mavjud kurslar soni</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-500">30+</p>
            <p className="text-gray-700">
              Uzoq yillik tajribaga ega ustozlarimiz
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Numbers;
