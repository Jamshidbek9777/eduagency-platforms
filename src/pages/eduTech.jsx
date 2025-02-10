import React, { useContext } from "react";
import Wrapper from "../layout/wrapper";
import { Tabs } from "antd";
import { getText } from "../languages";
import { LanguageContext } from "../context/language";

const { TabPane } = Tabs;

const EducationTechnologies = () => {
  const { selectedLanguage } = useContext(LanguageContext);
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
          {getText("eduTech1")}
        </h1>
      </div>

      <Wrapper>
        <div className="py-10">
          <div className="bg-[#F9F9F9] p-4 text-xl rounded-xl">
            <h1>{getText("eduTech2")}</h1>
          </div>
          <div className="flex justify-center mt-4">
            <h1 className="text-[#0556FF] text-2xl">{getText("eduTech3")}</h1>
          </div>

          <Tabs
            defaultActiveKey="1"
            centered
            className="mt-6"
            type="card"
            size="large"
            tabPosition="top"
          >
            {/* Tab 1: Maktab Boshqaruv Tizimlari */}
            <TabPane
              tab={
                <span className="text-lg font-medium">
                  {getText("eduTech4")}
                </span>
              }
              key="1"
            ></TabPane>

            {/* Tab 2: Elektron Ta'lim Platformasi */}
            <TabPane
              tab={
                <span className="text-lg font-medium">
                  {getText("eduTech9")}
                </span>
              }
              key="2"
            ></TabPane>

            {/* Tab 3: E-O'yinlar */}
            <TabPane
              tab={
                <span className="text-lg font-medium">
                  {getText("eduTech13")}
                </span>
              }
              key="3"
            >
              
            </TabPane>
          </Tabs>
        </div>
      </Wrapper>
    </>
  );
};

export default EducationTechnologies;
