import React from "react";
import { ServiceData } from "./ServiceCards/ServiceData";
import ServiceCards from "./ServiceCards";
import GlobalContainer from "@/globalComponents/GlobalContainer";
import { motion } from "motion/react";

const Services = () => {
  return (
    <>
      <GlobalContainer>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            staggerChildren: 0.2,
            duration: 0.7,
            ease: "easeInOut",
          }}
          className="grid grid-cols-3 gap-x-[30px] "
        >
          {ServiceData?.map((item, index) => (
            <ServiceCards
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </motion.div>
      </GlobalContainer>
    </>
  );
};

export default Services;
