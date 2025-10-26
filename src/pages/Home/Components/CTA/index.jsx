import React from "react";
import GlobalContainer from "@/globalComponents/GlobalContainer";
import CtaImg from "@/assets/images/CtaImg.png";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const CallToAction = () => {
  return (
    <>
      <GlobalContainer>
        <section className=" mt-[100px]">
          <div className="grid grid-cols-[auto_auto] gap-x-12">
            <motion.div
              initial={{ y: -60, opacity: 0 }}
              whileInView={{ y: -0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                staggerChildren: 0.2,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className=""
            >
              <h5 className="font-medium font-poppins text-[55px] text-nav mb-10">
                Download Our Tracking Sheet
              </h5>
              <span className="font-poppins text-3xl font-medium text-nav">
                Train Your Pup :
              </span>
              <p className="mt-[25px] font-poppins text-2xl font-normal text-banner">
                Log your dog’s pees, poops and meals and Puppy Potty Log will
                use the data to create a custom housetraining schedule unique to
                your fur baby.
              </p>
              <div className="mt-[75px]">
                <Button>Download Now</Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: "easeIn",
              }}
            >
              <img src={CtaImg} alt="" />
            </motion.div>
          </div>
        </section>
      </GlobalContainer>
    </>
  );
};

export default CallToAction;
