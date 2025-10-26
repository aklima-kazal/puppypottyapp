import React from "react";
import { featureData } from "./featureData";
import FeaturePhone from "@/assets/images/FeaturePhone.png";
import { motion } from "motion/react";

const FeatureLayout = () => {
  return (
    <>
      <div className="grid grid-cols-3 items-center mt-[80px] mb-[100px] gap-x-8">
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
          {featureData?.slice(0, 2).map((item) => (
            <div className="flex items-center justify-center gap-x-[19px] mb-[71px] w-full ">
              <img src={item.img} alt="" />
              <div>
                <h5 className="font-poppins font-semibold text-[18px] text-nav">
                  {item.title}
                </h5>
                <p className="font-normal font-poppins text-sm text-black">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            staggerChildren: 0.2,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="flex justify-center"
        >
          <img src={FeaturePhone} alt="feature phone" />
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
          {featureData?.slice(2, 4).map((item) => (
            <div className="flex flex-row-reverse items-center justify-center gap-x-[19px] mb-[71px] w-full ">
              <img src={item.img} alt="" />
              <div>
                <h5 className="font-poppins font-semibold text-[18px] text-nav text-end">
                  {item.title}
                </h5>
                <p className="font-normal font-poppins text-sm text-black text-end">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default FeatureLayout;
