import React, { useContext } from "react";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";
import Wrapper from "../layout/wrapper";

const Advantages = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  const advantages = [
    {
      id: 1,
      adv: getText("advCard1"),
      bgImage: "/img/advimg1.jpeg",
    },
    {
      id: 2,
      adv: getText("advCard2"),
      bgImage: "/img/advimg2.jpeg",
    },
    {
      id: 3,
      adv: getText("advCard3"),
      bgImage: "/img/advimg3.jpeg",
    },
    {
      id: 4,
      adv: getText("advCard4"),
      bgImage: "/img/advimg4.jpeg",
    },
    {
      id: 5,
      adv: getText("advCard5"),
      bgImage: "/img/advimg5.jpeg",
    },
    {
      id: 6,
      adv: getText("advCard6"),
      bgImage: "/img/advimg6.jpeg",
    },
  ];

  return (
    <div className="pt-16">
      <Wrapper>
        <div>
          <h1 className="text-3xl font-bold mb-4">{getText("advHeader")}</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {advantages.map((advantage) => (
              <div
                key={advantage.id}
                className="relative flex items-center justify-center h-[130px] group bg-cover bg-center shadow-md rounded-lg p-6 text-center border border-gray-200 transition-transform duration-300 hover:items-end"
                style={{
                  backgroundImage: `url(${advantage.bgImage})`,
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 rounded-lg "></div>

                {/* Text */}
                <p className="relative z-10 text-lg font-medium text-white bg-black/40 p-2 rounded-lg transition-all duration-300 group-hover:translate-y-2">
                  {advantage.adv}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Advantages;
