import GlobalContainer from "@/globalComponents/GlobalContainer";
import React from "react";
import FeatureLayout from "./FeatureLayout";
import { motion } from "motion/react";

const Features = () => {
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
            className="text-center mx-auto"
          >
            <h5 className="font-manjari font-normal text-2xl text-black01">
              Features
            </h5>
            <p className="font-poppins font-semibold text-3xl text-black02 mt-[9px] ">
              Our Best Features
            </p>
          </motion.div>
          <div>
            <FeatureLayout />
          </div>
        </section>
      </GlobalContainer>
    </>
  );
};

export default Features;
