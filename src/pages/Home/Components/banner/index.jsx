import React from "react";
import BannerImg from "@/assets/images/Banner.png";
import GlobalContainer from "@/globalComponents/GlobalContainer";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const Banner = () => {
  return (
    <>
      <GlobalContainer>
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            staggerChildren: 0.2,
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="grid grid-cols-1 md:grid-cols-2 items-center justify-between"
        >
          <div className="">
            <h1 className="font-manjari text-[30px] md:text-[70px] md:leading-24 font-bold text-banner mb-3 md:mb-[28px] md:w-[110%] mt-10 md:mt-0 text-center md:text-left">
              Potty train your pup the easy way
            </h1>
            <p className="font-poppins text-[16px] md:text-2xl font-normal text-[rgba(39,35,58,0.9)]  md:w-[91%] md:leading-10 text-center md:text-left mx-auto md:mx-0">
              Log your dog’s pees, poops and meals and Puppy Potty Log will use
              the data to create a custom housetraining schedule unique to your
              fur baby.
            </p>
            <div className="mt-[31px] text-center md:text-left">
              <Button className="font-poppins text-base font-medium  bg-primary hover:bg-primary text-white px-[66px] py-[25px] rounded-[50px] cursor-pointer">
                Join Us
              </Button>
            </div>
          </div>
          <div>
            <img src={BannerImg} alt="" />
          </div>
        </motion.div>
      </GlobalContainer>
    </>
  );
};

export default Banner;
