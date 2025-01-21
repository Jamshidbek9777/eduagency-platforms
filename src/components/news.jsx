import React, { useContext } from "react";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";
import Wrapper from "../layout/wrapper";

const News = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  const news = [
    {
      id: 1,
      title: getText("advCard1"),
      bgImage: "/img/advimg1.jpeg",
      date: "2025-01-20",
    },
    {
      id: 2,
      title: getText("advCard2"),
      bgImage: "/img/advimg2.jpeg",
      date: "2025-01-19",
    },
    {
      id: 3,
      title: getText("advCard3"),
      bgImage: "/img/advimg3.jpeg",
      date: "2025-01-18",
    },
  ];

  return (
    <div className="py-16">
      <Wrapper>
        <div>
          <h1 className="text-4xl font-bold mb-8 text-center">
            Ta'lim sohasidagi yangiliklar
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {news.map((item) => (
              <div
                key={item.id}
                className="relative flex items-end justify-start h-[280px] group bg-cover bg-center shadow-md rounded-lg overflow-hidden border border-gray-200 transition-transform duration-300 "
                style={{
                  backgroundImage: `url(${item.bgImage})`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent rounded-lg"></div>

                <div className="relative z-10 p-4">
                  <p className="text-sm text-gray-300 mb-1">{item.date}</p>
                  <h2 className="text-lg font-semibold text-white leading-tight">
                    {item.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default News;
