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
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: "easeIn",
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-[30px] "
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
