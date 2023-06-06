import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, {
  Pagination,
  Navigation,
  EffectCoverflow,
} from "swiper/core";

SwiperCore.use([Pagination, Navigation, EffectCoverflow]);

const Carrusel = () => {
  return (
    <div className="container mx-auto bg-gray-100 relative z-0">
      <Swiper
        slidesPerView={1}
        loop={true}
        effect="coverflow"
        grabCursor={true} // Cambia el cursor al modo de agarre
        coverflowEffect={{
          rotate: 50, // Ángulo de rotación de las diapositivas
          stretch: 0, // Espaciado entre las diapositivas
          depth: 100, // Profundidad de la perspectiva
          modifier: 1, // Factor de escala para las diapositivas
          slideShadows: true, // Mostrar sombras de las diapositivas
        }}
        rewind={true}
        pagination={{ clickable: true }}
        navigation
        className="my-6"
      >
        <SwiperSlide>
          <div className="flex items-center justify-center h-96">
            <img
              src="./image/Banner9.png"
              alt="Slide 1"
              className="object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-96">
            <img
              src="./image/Banner2.png"
              alt="Slide 2"
              className="object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-96">
            <img
              src="./image/Banner3.png"
              alt="Slide 3"
              className="object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-96">
            <img
              src="./image/Banner4.png"
              alt="Slide 4"
              className="object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-96">
            <img
              src="./image/Banner5.png"
              alt="Slide 5"
              className="object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-center h-96">
            <img
              src="./image/Banner6.png"
              alt="Slide 6"
              className="object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex items-center justify-center h-96">
          <img
            src= "./image/Banner8.png"
            alt="Slide 7"
            className= "object-cover"
          />
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carrusel;
