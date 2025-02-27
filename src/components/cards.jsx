import React from "react";
import { FaClock } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import Wrapper from "../layout/wrapper";
import { Link } from "react-scroll";
import { getText } from "../languages";

const Cards = () => {
  return (
    <Wrapper>
      <div className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Kurslar Card */}
          <div className="bg-blue-500 text-white p-10 rounded-2xl flex flex-col justify-between">
            <div>
              <FaClock className="text-4xl mb-4" />
              <h3 className="text-3xl font-semibold mb-4">
                {getText("navbar1")}
              </h3>
              <p className="mt-2 text-white/80 text-lg">{getText("cards1")}</p>
            </div>
            <Link to="services" smooth={true} duration={500} offset={-80}>
              <button className="mt-4 border border-white py-2 px-4 rounded-lg flex justify-between items-center w-full">
                <span>10+ {getText("navbar1")}</span>
                <span>→</span>
              </button>
            </Link>
          </div>

          {/* Kasblar Card */}
          <div className="bg-gray-900 text-white p-10 rounded-2xl flex flex-col justify-between">
            <div>
              <FaRocket className="text-4xl mb-4" />
              <h3 className="text-3xl font-semibold mb-4">
                {getText("navbar2")}
              </h3>
              <p className="mt-2 text-white/80 text-lg">
                EduAgency {getText("navbar2")}
              </p>
            </div>
            <Link to="xizmatlar" smooth={true} duration={500} offset={-80}>
              <button className="mt-4 border border-white py-2 px-4 rounded-lg flex justify-between items-center w-full">
                <span>5+ {getText("navbar2")}</span>
                <span>→</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Cards;
