import GlobalContainer from "@/globalComponents/GlobalContainer";
import React from "react";
import ScreenshootsLayout from "./ScreenshootsLayout";
import { motion } from "motion/react";

const Screenshoots = () => {
  return (
    <>
      <GlobalContainer>
        <motion.section
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: -0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            staggerChildren: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <div className="text-center mx-auto">
            <h5 className="font-manjari font-normal text-2xl text-black01">
              Screenshots
            </h5>
            <p className="font-poppins font-semibold text-3xl text-black02 mt-[9px] mb-[73px]">
              App Screenshots
            </p>
          </div>
          <div>
            <ScreenshootsLayout />
          </div>
        </motion.section>
      </GlobalContainer>
    </>
  );
};

export default Screenshoots;
