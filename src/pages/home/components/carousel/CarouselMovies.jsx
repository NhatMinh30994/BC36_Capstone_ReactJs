import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const contentStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

export default function CarouselMovies() {
  
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      autoplay={{ delay: 2500 }}
    >
      <SwiperSlide>
        <div style={contentStyle}>
          <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_190.jpg" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div style={contentStyle}>
          <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_11_-min.png" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div style={contentStyle}>
          <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980wx448h_25.jpg" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div style={contentStyle}>
          <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980x448_186.jpg" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={contentStyle}>
          <img src="https://www.cgv.vn/media/banner/cache/1/b58515f018eb873dafa430b6f9ae0c1e/9/8/980wx448h_2_.jpg" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
