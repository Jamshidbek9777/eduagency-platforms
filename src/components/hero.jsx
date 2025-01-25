import Wrapper from "../layout/wrapper.jsx";
import { useContext, useRef } from "react";
import { LanguageContext } from "../context/language.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { getText } from "../languages/index.js";

const HeroSection = () => {
  const { selectedLanguage } = useContext(LanguageContext);
  const swiperRef = useRef(null);

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };

  return (
    <Wrapper>
      <div className="md:pt-1 pt-24  flex flex-wrap items-center justify-center lg:justify-between  relative">
        <Swiper
          ref={swiperRef}
          navigation={false}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full md:h-[520px] h-[320px] rounded-md md:rounded-[16px] "
          pagination={{
            renderBullet: (index, className) => {
              return `
                <span class="${className} custom-pagination-bullet"></span>
              `;
            },
            clickable: true,
          }}
        >
          <SwiperSlide>
            <div
              className="h-full bg-cover bg-center relative "
              style={{
                backgroundImage: "url('/img/slider1.jpeg')",
              }}
            >
              <div className="bg-black/40 h-full flex items-end justify-center p-8">
                <div className="text-center text-black bg-white/70 rounded-[30px]">
                  <h2 className="text-[20px] px-6 py-2  font-bold ">
                    {getText("navbar6")}
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              className="h-full bg-cover bg-center relative"
              style={{
                backgroundImage: "url('/img/slider2.jpeg')",
              }}
            >
              <div className="bg-black/40 h-full flex items-end justify-center p-8">
                <div className="text-center text-black bg-white/70 rounded-[30px]">
                  <h2 className="text-[20px] px-6 py-2  font-bold ">
                    {getText("navbar7")}
                  </h2>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <button
          className="z-[888] hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-4 rounded-full shadow-lg"
          onClick={handlePrev}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          className="z-[888] hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-black p-4 rounded-full shadow-lg"
          onClick={handleNext}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div className="swiper-pagination"></div>
      <style jsx>{`
        .swiper-pagination-bullet {
          background-color: #fff;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background-color: #0556ff;
        }
      `}</style>
    </Wrapper>
  );
};

export default HeroSection;
