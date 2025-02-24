import React from "react";
import Wrapper from "../layout/wrapper";

const Numbers = () => {
  return (
    <Wrapper>
      <div className="py-10 flex flex-col lg:flex-row gap-10">
        <div className="text-3xl font-semibold text-gray-900 mb-6">
          Bizning xizmatlardan <br /> foydalanganlar raqamlarda
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-500">10000 +</p>
            <p className="text-gray-700">
              Hozirgacha bizdan xizmatlar va platformalarni sotib olganlar
            </p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-500">10+</p>
            <p className="text-gray-700">Platformalar</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-blue-500">5+</p>
            <p className="text-gray-700">Xizmat turlari</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Numbers;
