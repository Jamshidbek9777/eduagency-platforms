import React from "react";
import { getText } from "../languages";
import Wrapper from "../layout/wrapper";

const Digital = () => {
  return (
    <>
      <div
        className="relative bg-cover bg-center h-[600px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/managementBg.avif')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-4xl font-bold">Platformalar</h1>
      </div>
      <Wrapper>
        <div className="p-6 bg-white rounded-lg shadow-lg mt-4">
          <div>
            <h2 className="text-2xl font-bold mb-4">Boshqaruv tizimi</h2>
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
        {/*  */}

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
                Adaptive Curriculum believes that math and science education can
                be transformed so that every student can excel, contribute to
                our society, and help improve our nation's competitiveness in
                the global economy.
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
                Not an ordinary App, it’s Uppy. Your child’s first and 100% safe
                digital experience.
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
      </Wrapper>
    </>
  );
};

export default Digital;
