import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Wrapper from "../layout/wrapper";

const comments = [
  {
    videoUrl: "https://www.youtube.com/embed/2xKsjJfT3YY",
    text: "This platform is amazing!",
  },
  {
    videoUrl: "https://www.youtube.com/embed/HJ5ltJBB7lU",
    text: "Great experience! Highly recommended.",
  },

  {
    videoUrl: "https://www.youtube.com/embed/SZ_L4A0fkXY",
    text: "User-friendly and responsive design!",
  },
  {
    videoUrl: "https://www.youtube.com/embed/eaFxpaX6uT8",
    text: "Best platform I've ever used!",
  },
  {
    videoUrl: "https://www.youtube.com/embed/2NjbRqCVBXo",
    text: "Best platform I've ever used!",
  },
];

const Comments = () => {
  return (
    <div className="py-10">
      <Wrapper>
        <h1 className="text-4xl font-bold py-2 text-center">Videolar:</h1>
        <div className="p-4">
          <Swiper
            modules={[Navigation]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            slidesPerView={4}
            breakpoints={{
              1024: { slidesPerView: 4 },
              768: { slidesPerView: 3 },
              480: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
            className="w-full"
          >
            {comments.map((comment, index) => (
              <SwiperSlide key={index} className="flex flex-col items-center">
                <div className="w-full h-52 rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src={comment.videoUrl}
                    title={`Client Review ${index + 1}`}
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <p className="mt-2 text-center text-sm font-medium text-gray-700">
                  {comment.text}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Wrapper>
    </div>
  );
};

export default Comments;
