import { Carousel, Container } from "react-bootstrap";
import slider1 from "../assets/slider1.png";
import slider2 from "../assets/slider2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../assets/index.css";

export default function CarouseSlider() {
  return (
    <div className="mt-3">
      <Swiper
        slidesPerView={1}
        effect={"fade"}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, EffectFade, Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="img-slider d-block w-100"
            src={slider1}
            alt="First slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="img-slider d-block w-100"
            src={slider2}
            alt="First slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-slider d-block w-100"
            src={slider1}
            alt="First slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img
            className="img-slider d-block w-100"
            src={slider2}
            alt="First slide"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
