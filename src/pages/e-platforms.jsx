import React from "react";
import Wrapper from "../layout/wrapper";
import { getText } from "../languages";

const EPlatforms = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-[600px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/eduTechBg.png')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-4xl font-bold">
          {getText("eduTech9")}
        </h1>
      </div>

      <Wrapper>
        <>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">{getText("eduTech9")}</h2>
            <p className="text-lg">{getText("eduTech10")}</p>
            {/* Vedubox */}
            {/* Adaptive cirruculum */}
            <div className="mt-10">
              <h1 className="text-2xl font-bold mb-4">Adaptive cirriculum</h1>
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img
                  src="/img/adaptive.png"
                  alt="K12NET"
                  className="w- h-auto rounded-lg"
                />
                <p className="mt-4 text-base">
                  Adaptive Curriculum believes that math and science education
                  can be transformed so that every student can excel, contribute
                  to our society, and help improve our nation's competitiveness
                  in the global economy.
                </p>
              </div>
              <p className="mt-4 text-base">
                Our mission is to inspire students with active online learning,
                engage them in concept mastery, and motivate them to succeed in
                math and science.
              </p>
              <p className="mt-4 text-base">
                With Adaptive Curriculum, you can enhance your Middle or High
                School curriculum with interactive, 100% online instruction that
                answers the question for your students: "Why do I need to know
                this?"
              </p>
              <div className="mt-4">
                <p className="text-lg mb-4">{getText("videoandpic")}</p>

                <div className="flex flex-wrap justify-start gap-4">
                  {/* Video 2 */}
                  {/* Video 1 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/mrfs_eAR2r4"
                      title="K12NET Video 1"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                    ></iframe>
                  </div>
                  {/* Video 1 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/SZ_L4A0fkXY"
                      title="K12NET Video 1"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                    ></iframe>
                  </div>

                  {/* Video 2 */}
                  <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/eaFxpaX6uT8"
                      title="K12NET Video 2"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Uppy */}
            <div className="mt-10">
              <h1 className="text-2xl font-bold mb-4">UppyEdu</h1>
              <div className="mt-1">
                <img
                  src="/img/uppy.png"
                  alt="K12NET"
                  className="w- h-auto rounded-lg bg-blue-900 p-3"
                />
                <p className="mt-4 text-base">
                  Not an ordinary App, it’s Uppy. Your child’s first and 100%
                  safe digital experience.
                </p>
                <p className="mt-4 text-base">
                  Thousands of content scientifically created especially for
                  children by experts as a result of 3 years of study are in a
                  single application. Google Play App Store App Gallery Uppy Web
                </p>
                <div className="mt-4">
                  {/* <p className="text-lg mb-4">{getText("eduTech17")}</p> */}

                  <div className="flex flex-wrap justify-start gap-4">
                    {/* Video 1 */}
                    <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                      <img
                        src="/img/uppy1.jpg"
                        className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                        alt="MUP 1"
                      />
                    </div>

                    {/* Video 2 */}
                    <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                      <img
                        src="/img/uppy2.jpg"
                        className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                        alt="MUP 1"
                      />
                    </div>

                    {/* Video 3 */}
                    <div className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]">
                      <img
                        src="/img/uppy3.jpg"
                        className="w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[315px] rounded-lg shadow-lg object-cover"
                        alt="MUP 2"
                      />
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

export default EPlatforms;
