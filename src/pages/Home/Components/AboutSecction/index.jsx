import GlobalContainer from "@/globalComponents/GlobalContainer";
import React from "react";
import AboutLayout from "./AboutLayout";
import { motion } from "motion/react";

const AboutSection = () => {
  return (
    <>
      <GlobalContainer>
        <section className="mt-[93px]">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            whileInView={{ x: -0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              staggerChildren: 0.2,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-center"
          >
            <h5 className="font-manjari font-normal text-2xl mb-2.5 text-black01">
              About Us
            </h5>
            <p className="font-poppins font-semibold text-2xl md:text-3xl text-black01 w-[105%] md:w-[35%] mx-auto">
              Best service for training your lovely dog
            </p>
          </motion.div>
          <div>
            <AboutLayout />
          </div>
        </section>
      </GlobalContainer>
    </>
  );
};

export default AboutSection;
