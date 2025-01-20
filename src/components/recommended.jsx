import React from "react";
import Wrapper from "../layout/wrapper";

const Recommended = () => {
  return (
    <Wrapper>
      <div className="py-10">
        <h2 className="text-3xl font-bold mb-8">Recommended</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-4">
          {/* Card 1 */}
          <div className="flex  bg-white border-2 hover:border-[#0290EB] transition-all ease-in-out p-4 rounded-[20px] cursor-pointer ">
            <div className="flex items-center">
              <img
                src="/img/reccard1.png"
                alt="Recommended 1"
                className="h-[130px] w-[130px] border-2 border-[#0290EB] rounded-full p-[2px] mr-4"
              />
              <div>
                <h3 className="font-bold text-xl">OkulAile</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Animi, nihil.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex bg-white border-2 p-4 rounded-[20px] hover:border-[#F48120] transition-all ease-in-out cursor-pointer ">
            <div className="flex items-center">
              <div className="h-[130px] min-w-[130px] max-w-[130px] border-2 border-[#F48120] rounded-full flex justify-center items-center mr-4">
                <img
                  src="/img/k12net.png"
                  alt="Recommended 2"
                  className="p-4 "
                />
              </div>
              <div>
                <h3 className="font-bold text-xl">K12net</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Assumenda, accusamus?
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex bg-white border-2 p-4 rounded-[20px] hover:border-[#2E82AC] transition-all ease-in-out cursor-pointer ">
            <div className="flex items-center">
              <img
                src="/img/reccard3.png"
                alt="Recommended 3"
                className="h-[130px] w-[130px]  border-2 border-[#2E82AC] rounded-full p-[2px] mr-4"
              />
              <div>
                <h3 className="font-bold text-xl">Future astronaut</h3>
                <p className="text-gray-600">Future astronaut</p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
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
                <p className="text-gray-600">Some description or info</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Recommended;
