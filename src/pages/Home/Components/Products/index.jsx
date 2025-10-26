import GlobalContainer from "@/globalComponents/GlobalContainer";
import React, { useRef } from "react";
import { ProductsData } from "./ProductsData";
import ProductsCards from "../PruductsCards/ProductsCards";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import PrevArrow from "./PrevArrow";
import NextArrow from "./NextArrow";
import { motion } from "motion/react";

const Products = () => {
  const swiperRef = useRef(null);
  return (
    <>
      <GlobalContainer>
        <motion.section
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            staggerChildren: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-[170px] mb-[100px]"
        >
          <div className="text-center mx-auto">
            <h5 className="font-manjari font-normal text-2xl text-black01">
              Supplies
            </h5>
            <p className="font-poppins font-semibold text-3xl text-black02 mt-[9px] mb-[73px]">
              Pick Our Products
            </p>
          </div>
          <div className="relative ">
            <div className="absolute left-[-70px] top-1/2 z-999 -translate-y-[50%]">
              <PrevArrow onClick={() => swiperRef.current?.slidePrev()} />
            </div>
            <Swiper
              spaceBetween={40}
              slidesPerView={3}
              autoplay={{
                pauseOnMouseEnter: false,
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Autoplay, Pagination, Navigation]}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {ProductsData?.map((product, index) => (
                <SwiperSlide className="slide">
                  <ProductsCards key={index} product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute right-[-70px] top-1/2 z-111 -translate-y-[50%]">
              <NextArrow onClick={() => swiperRef.current?.slideNext()} />
            </div>
          </div>
        </motion.section>
      </GlobalContainer>
    </>
  );
};

export default Products;
