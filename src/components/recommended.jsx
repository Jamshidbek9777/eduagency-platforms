import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";

const Recommended = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <Wrapper>
      <div className="py-10">
        <h2 className="text-3xl font-bold mb-4">
          {getText("recommendedText1")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-4">
          {/* Card 1 */}
          <a href="/kindergartens">
            <div className="flex  bg-white border-2 hover:border-[#0290EB] transition-all ease-in-out p-4 rounded-[20px] cursor-pointer ">
              <div className="flex items-center">
                <img
                  src="/img/reccard1.png"
                  alt="Recommended 1"
                  className="h-[130px] w-[130px] border-2 border-[#0290EB] rounded-full p-[2px] mr-4"
                />
                <div>
                  <h3 className="font-bold text-xl">OkulAile</h3>
                  <p className="text-gray-600">{getText("recommendedText2")}</p>
                </div>
              </div>
            </div>
          </a>

          {/* Card 2 */}
          <a href="/kindergartens">
            <div className="flex bg-white border-2 p-4 rounded-[20px] hover:border-[#B191F2] transition-all ease-in-out cursor-pointer ">
              <div className="flex items-center">
                <div className="h-[130px] min-w-[130px] max-w-[130px] border-2 border-[#B191F2] rounded-full flex justify-center items-center mr-4">
                  <img
                    src="/img/paigmo.png"
                    alt="Recommended 2"
                    className="p-2"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl">Piagmo</h3>
                  <p className="text-gray-600">{getText("recommendedText3")}</p>
                </div>
              </div>
            </div>
          </a>

          {/* Card 3 */}
          <a href="/kindergartens">
            <div className="flex bg-white border-2 p-4 rounded-[20px] hover:border-[#2E82AC] transition-all ease-in-out cursor-pointer ">
              <div className="flex items-center">
                <img
                  src="/img/reccard3.png"
                  alt="Recommended 3"
                  className="h-[130px] w-[130px]  border-2 border-[#2E82AC] rounded-full p-[2px] mr-4"
                />
                <div>
                  <h3 className="font-bold text-xl">Future astronaut</h3>
                  <p className="text-gray-600 line-clamp-2">
                    {" "}
                    {getText("recommendedText4")}
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* Card 4 */}
          <a href="/kindergartens">
            <div className="flex bg-white border-2 p-4 rounded-[20px] hover:border-[#F26F23] transition-all ease-in-out cursor-pointer ">
              <div className="flex items-center">
                <div className="bg-[#835EA7] h-[130px] min-w-[130px] max-w-[130px] border-2 border-[#F26F23] rounded-full flex justify-center items-center mr-4">
                  <img
                    src="/img/reccard4.png"
                    alt="Recommended 4"
                    className="p-4 mr-4"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-xl">MentalUp</h3>
                  <p className="text-gray-600">
                    {" "}
                    {getText("recommendedText5")}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Recommended;
