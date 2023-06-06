import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";

import "swiper/swiper-bundle.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const slides = [
  "/image/Foto1.png",
  "/image/Foto2.png",
  "/image/Foto3.png",
  "/image/Foto4.png",
  "/image/Foto5.png",
  "/image/Foto6.png",
  "/image/Foto7.png",
  "/image/Foto8.png",
  "/image/Foto9.png",
  "/image/Foto10.png",
  "/image/Foto13.png",
  "/image/Foto15.png",
  "/image/Foto17.png",
  "/image/Foto19.png",
];

const Instagram = () => {
  return (
    <section className= "bg-gray-100 font-sans text-sm min-h-screen min-w-screen">
      <div className="flex items-center justify-center py-4">
        <div className="border-t border-gray-400 flex-grow"></div>
        <img src="/image/instagram.png" alt="" className="mx-4" />
        <div className="px-4 text-gray-600 text-4xl"> Instagram MundoMuebles</div>
        <div className="border-t border-gray-400 flex-grow"></div>
      </div>
      <Swiper
        className="swiper py-4"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        effect={"coverflow"}
        loop
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        pagination={{ clickable: true }}
      >
        <div className="swiper-wrapper">
          {slides.map((slide) => (
            <SwiperSlide
              key={slide}
              className="swiper-slide bg-center bg-cover w-80 h-80"
              style={{
                backgroundImage: `url(${slide})`,
                WebkitBoxReflect: "below 1px linear-gradient(transparent, transparent, #0006)",
              }}
            ></SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default Instagram;
