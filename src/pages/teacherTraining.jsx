import React from "react";
import Wrapper from "../layout/wrapper";
import { FaSchool, FaBook, FaRunning } from "react-icons/fa";
import { Breadcrumb } from "antd";
import { IoCheckmarkDone } from "react-icons/io5";

const TeacherTrainings = () => {
  const models = [
    {
      title: "Miya va o'rganish",
      description:
        "Ushbu dastur o'qituvchilarga miyaga asoslangan ta'lim yondashuvlarini joriy etishga qaratilgan. Miyaning ta'lim jarayonlariga qanday ta'sir qilishini tushunib, ishtirokchilar samarali ta'lim dizayni uchun ilmiy usullarni kashf etadilar. Neyrologiya va ta'lim o'rtasidagi aloqaga e'tibor qaratish orqali o'rganish yanada mazmunli va doimiy bo'ladi.",
    },
    {
      title: "Maaf modeli",
      description:
        "Ushbu dastur o'qituvchilarga miyaga asoslangan ta'lim yondashuvlarini joriy etishga qaratilgan. Miyaning ta'lim jarayonlariga qanday ta'sir qilishini tushunib, ishtirokchilar samarali ta'lim dizayni uchun ilmiy usullarni kashf etadilar. Neyrologiya va ta'lim o'rtasidagi aloqaga e'tibor qaratish orqali o'rganish yanada mazmunli va doimiy bo'ladi.",
    },
    {
      title: "Spor Lisesi",
      description:
        "Ushbu dastur o'qituvchilarga miyaga asoslangan ta'lim yondashuvlarini joriy etishga qaratilgan. Miyaning ta'lim jarayonlariga qanday ta'sir qilishini tushunib, ishtirokchilar samarali ta'lim dizayni uchun ilmiy usullarni kashf etadilar. Neyrologiya va ta'lim o'rtasidagi aloqaga e'tibor qaratish orqali o'rganish yanada mazmunli va doimiy bo'ladi.",
    },
    {
      title: "Bilsem modeli",
      description:
        "Ushbu dastur o'qituvchilarga miyaga asoslangan ta'lim yondashuvlarini joriy etishga qaratilgan. Miyaning ta'lim jarayonlariga qanday ta'sir qilishini tushunib, ishtirokchilar samarali ta'lim dizayni uchun ilmiy usullarni kashf etadilar. Neyrologiya va ta'lim o'rtasidagi aloqaga e'tibor qaratish orqali o'rganish yanada mazmunli va doimiy bo'ladi.",
    },
    {
      title: "Maaf modeli",
      description:
        "Ushbu dastur o'qituvchilarga miyaga asoslangan ta'lim yondashuvlarini joriy etishga qaratilgan. Miyaning ta'lim jarayonlariga qanday ta'sir qilishini tushunib, ishtirokchilar samarali ta'lim dizayni uchun ilmiy usullarni kashf etadilar. Neyrologiya va ta'lim o'rtasidagi aloqaga e'tibor qaratish orqali o'rganish yanada mazmunli va doimiy bo'ladi.",
    },
    {
      title: "Spor Lisesi",
      description:
        "Ushbu dastur o'qituvchilarga miyaga asoslangan ta'lim yondashuvlarini joriy etishga qaratilgan. Miyaning ta'lim jarayonlariga qanday ta'sir qilishini tushunib, ishtirokchilar samarali ta'lim dizayni uchun ilmiy usullarni kashf etadilar. Neyrologiya va ta'lim o'rtasidagi aloqaga e'tibor qaratish orqali o'rganish yanada mazmunli va doimiy bo'ladi.",
    },
  ];

  return (
    <>
      <div
        className="relative bg-cover bg-center h-[708px] flex flex-col items-center justify-center text-white"
        style={{
          backgroundImage: "url('img/teacherTrainingsBg.jpeg')",
        }}
      >
        <div className="absolute top-36 left-8 z-10">
          <Breadcrumb
            separator={<span className="text-white">&gt;</span>}
            style={{
              color: "white",
              fontSize: "16px",
            }}
          >
            <Breadcrumb.Item>
              <a href="/" style={{ color: "white" }}>
                Bosh sahifa
              </a>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="cursor-pointer">
              Ta'lim xizmatlari
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <p className="text-white cursor-pointer">O'qituvchi ta'limlari</p>
            </Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <h1 className="relative z-10 text-6xl font-bold">
          O'qituvchi ta'limlari
        </h1>
      </div>

      <Wrapper>
        <div className="py-10">
          <div className="">
            <h1 className="text-4xl mb-4">O'qituvchi talimlari</h1>
            {models.map((model, index) => (
              <div
                key={index}
                className="p-6 bg-[#F4F4F4] rounded-[20px] flex flex-col mb-4 border-l-8 shadow-lg border-[#1E73BE]"
              >
                <div className="flex items-center gap-2">
                  <IoCheckmarkDone size={25} color="#002FFF" />
                  <h2 className="text-xl font-semibold text-[#002FFF]">
                    {model.title}
                  </h2>
                </div>
                <p className="text-gray-600 mt-2">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default TeacherTrainings;
