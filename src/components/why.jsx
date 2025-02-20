import React from "react";
import Wrapper from "../layout/wrapper";

const Why = () => {
  return (
    <Wrapper>
      <div className="py-16 my-10 bg-gradient-to-r from-[#00264d] to-[#003366] text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between w-full  mx-auto shadow-xl relative overflow-hidden">
        {/* Left Side: Text Content */}
        <div className="">
          <p className="text-sm text-gray-300 uppercase tracking-wider">
            Eduagency
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 leading-tight">
            Nima uchun <span className="text-blue-300">EduAgency</span> <br />{" "}
            ni tanlash kerak
          </h2>
          <p className="text-gray-300 text-lg mt-2">
            Mohirdevda o'qish orqali siz zamonaviy IT bilimlarini <br />
            egallab, kuchli mutaxassis bo'lishingiz mumkin.
          </p>
          <button className="mt-5 bg-blue-500 hover:bg-blue-600 transition-all px-5 py-3 rounded-full flex items-center text-lg font-semibold shadow-md hover:shadow-lg">
            <span className="mr-2">▶</span> Video ko‘rish
          </button>
        </div>

        {/* Right Side: Graphics */}
        <div className="hidden md:flex items-center justify-center relative">
          <img
            src="/img/logo-white.png"
            alt="Graphics"
            className="w-36 md:w-56 transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 opacity-10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400 opacity-20 blur-2xl rounded-full"></div>
      </div>
    </Wrapper>
  );
};

export default Why;
