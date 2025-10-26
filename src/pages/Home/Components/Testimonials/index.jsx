import GlobalContainer from "@/globalComponents/GlobalContainer";
import React from "react";
import TestimonialSlider from "./TestimonialSlider";
import { motion } from "motion/react";

const Testimonials = () => {
  return (
    <>
      <GlobalContainer>
        <section>
          <motion.div
            initial={{ y: -60, opacity: 0 }}
            whileInView={{ y: -0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              staggerChildren: 0.2,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-center mx-auto mb-[60px]"
          >
            <h5 className="font-manjari font-normal text-2xl text-black01">
              Testimonial
            </h5>
            <p className="font-poppins font-semibold text-3xl text-black02 mt-[9px] ">
              What Our Clients Say
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              staggerChildren: 0.2,
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            <TestimonialSlider />
          </motion.div>
        </section>
      </GlobalContainer>
    </>
  );
};

export default Testimonials;
