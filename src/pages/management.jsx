import React from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../languages";

const Management = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-[600px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/managementBg.avif')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-4xl font-bold">
          {getText("eduTech4")}
        </h1>
      </div>

      <Wrapper>
        <>
          <div className="p-6 bg-white rounded-lg shadow-lg mt-4">
            <div>
              <h2 className="text-2xl font-bold mb-4">{getText("eduTech4")}</h2>
              <p className="text-lg">{getText("eduTech5")}</p>
            </div>

            {/* OkulAile Card */}
            <div className="mt-6">
              <div className="mt-10">
                <img
                  src="/img/okulaile.png"
                  alt="K12NET"
                  className="w- h-auto rounded-lg"
                />
                <p className="mt-4 text-base">{getText("eduTech6")}</p>
                <p className="mt-4 text-base">{getText("eduTech7")}</p>
                <div className="mt-4">
                  <p className="text-lg mb-4">{getText("eduTech8")}</p>

                  <div className="flex justify-start space-x-4">
                    {/* Video 1 */}
                    <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
                      <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/nXlpH6WBcUI"
                        title="K12NET Video 1"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg shadow-lg"
                      ></iframe>
                    </div>

                    {/* Video 2 */}
                    <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
                      <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/9O68ZzrNTXI"
                        title="K12NET Video 2"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg shadow-lg"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </Wrapper>
    </>
  );
};

export default Management;
