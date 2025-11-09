import React from "react";
import AboutImg from "@/assets/images/AnimalTrainner.png";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const AboutLayout = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[40%_50%] justify-between mt-[66px] ">
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: -0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            staggerChildren: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <img src={AboutImg} alt="" />
        </motion.div>
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            staggerChildren: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <h5 className="capitalize font-poppins font-semibold  text-[25px] md:text-[45px] text-nav mb-6 md:leading-16 text-center md:text-left mt-6 md:mt-0">
            We are the world’s most trusted animal trainer
          </h5>
          <p className="capitalize font-poppins font-normal text-[16px] md:text-[18px] text-nav mb-6 text-center md:text-left md:leading-[34px]">
            Lorem ipsum dolor sit amet consectetur. Neque et aliquam tincidunt
            auctor pellentesque vestibulum est. Mattis fermentu pulvinar gravida
            dictumst sagittis. Sit cursus nulla mattis. Gravida enim in fusce
            maecenas vel cras turpis.
          </p>{" "}
          <div className="mt-[50px] text-center md:text-left">
            <Button className="font-poppins text-[18px] font-normal  bg-primary hover:bg-primary text-white px-[55px] md:px-[66px] py-[20px] md:py-[25px] rounded-[50px] cursor-pointer ">
              About Us
            </Button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutLayout;
