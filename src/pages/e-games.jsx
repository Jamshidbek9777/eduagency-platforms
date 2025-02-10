import React from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../languages";

const EGames = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-[600px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/egames.avif')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-4xl font-bold">
          {getText("eduTech13")}
        </h1>
      </div>

      <Wrapper>
        <>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{getText("eduTech13")}</h2>
            <p className="text-lg">{getText("eduTech14")}</p>
            <div className="mt-10">
              <img
                src="/img/mentalup.webp"
                alt="K12NET"
                className="w- h-auto rounded-lg"
              />
              <p className="mt-4 text-base">{getText("eduTech15")}</p>
              <p className="mt-4 text-base">{getText("eduTech16")}</p>
              <div className="mt-4">
                <p className="text-lg mb-4">{getText("eduTech17")}</p>

                <div className="flex justify-start space-x-4">
                  {/* Video 1 */}
                  <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/HJ5ltJBB7lU"
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
                      src="https://www.youtube.com/embed/HJ5ltJBB7lU"
                      title="K12NET Video 2"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg shadow-lg"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* future astranout */}
            <div className="mt-10">
              <h1 className="text-4xl mb-4">{getText("eduTech18")}</h1>
              <div className="flex gap-6">
                <img
                  src="/img/futureast.png"
                  alt="K12NET"
                  className="h-56 rounded-lg"
                />
                <div>
                  <p className="mt-4 text-base">{getText("eduTech19")}</p>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-lg mb-4">{getText("eduTech20")}</p>

                <div className="flex justify-start space-x-4">
                  {/* Video 1 */}
                  <div className="w-full md:w-1/2 lg:w-1/3 mb-4">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/5a6VH1m6BoA"
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
                      src="https://www.youtube.com/embed/5a6VH1m6BoA"
                      title="K12NET Video 2"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg shadow-lg"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Piagmo */}
            <div className="mt-10">
              <h1 className="text-2xl font-bold mb-4">Piagmo</h1>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img
                  src="/img/paigmo.png"
                  alt="K12NET"
                  className="w- h-auto rounded-lg"
                />
                <p className="mt-4 text-base">{getText("piagmo1")}</p>
              </div>
              <p className="mt-4 text-base">{getText("piagmo2")}</p>
              <p className="mt-4 text-base">{getText("piagmo3")}</p>

              <div className="mt-4">
                <p className="text-lg mb-4">{getText("videoandpic")}</p>

                <div className="flex flex-wrap justify-start gap-4">
                  {/* Video 2 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/piagmo1.avif"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <img
                      src="/img/piagmo2.webp"
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                      alt=""
                    />
                  </div>
                  {/* Video 1 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/grCf4NhnYZ8"
                      title="K12NET Video 1"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                    ></iframe>
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

export default EGames;
