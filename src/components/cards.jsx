import React from "react";
import { FaClock } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import Wrapper from "../layout/wrapper";
import { Link } from "react-scroll";

const Cards = () => {
  return (
    <Wrapper>
      <div className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Kurslar Card */}
          <div className="bg-blue-500 text-white p-10 rounded-2xl flex flex-col justify-between">
            <div>
              <FaClock className="text-4xl mb-4" />
              <h3 className="text-3xl font-semibold mb-4">Xizmatlar</h3>
              <p className="mt-2 text-white/80 text-lg">
                Davomiyligi qisqa va sohaning ma'lum qismini qamrab olgan
                kurslar. Sohadagi o'zingizda mavjud bo'shliqni to'ldiring.
              </p>
            </div>
            <Link to="services" smooth={true} duration={500} offset={-80}>
              <button className="mt-4 border border-white py-2 px-4 rounded-lg flex justify-between items-center w-full">
                <span>31 ta xizmatlar</span>
                <span>→</span>
              </button>
            </Link>
          </div>

          {/* Kasblar Card */}
          <div className="bg-gray-900 text-white p-10 rounded-2xl flex flex-col justify-between">
            <div>
              <FaRocket className="text-4xl mb-4" />
              <h3 className="text-3xl font-semibold mb-4">Kasblar</h3>
              <p className="mt-2 text-white/80 text-lg">
                Kasbga yo'naltirilgan praktikum kurslari. 0 dan boshlab ishga
                tayyor bo'lib chiqing.
              </p>
            </div>
            <button className="mt-4 border border-white py-2 px-4 rounded-lg flex justify-between items-center w-full">
              <span>18 ta kasb</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cards;
