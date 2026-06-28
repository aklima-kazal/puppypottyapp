import React from "react";
import TestimoinialsLayouts from "./TestimoinialsLayouts";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { TestimonialsData } from "./TestimonialsData";
import Qoutation from "@/assets/svg/quatation.svg";

const TestimonialSlider = () => {
  return (
    <>
      <div>
        <div className="">
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{
              pauseOnMouseEnter: false,
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Pagination, Navigation, Autoplay]}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              576: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              992: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1200: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1400: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1600: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1800: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1920: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            navigation={false}
            Autoplay={true}
          >
            {TestimonialsData?.map((slider) => (
              <SwiperSlide>
                <TestimoinialsLayouts slider={slider} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
