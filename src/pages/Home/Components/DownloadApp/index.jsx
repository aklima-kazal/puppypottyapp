import { Button } from "@/components/ui/button";
import GlobalContainer from "@/globalComponents/GlobalContainer";
import Plystore from "@/assets/images/app-store.svg";
import Appstore from "@/assets/images/google-play.svg";
import PhoneImg1 from "@/assets/images/iPhone1.png";
import PhoneImg2 from "@/assets/images/iPhone2.png";
import { easeInOut, motion, useAnimation } from "motion/react";
import React, { useEffect } from "react";

const DownloadApp = () => {
  let animationControlFirst = useAnimation();
  let animationControlSecond = useAnimation();
  const Animation = {
    hidden: {
      y: 10,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  useEffect(() => {
    const handleScrollFirst = () => {
      const scrollY = window.scrollY;
      animationControlFirst.start({
        scale: 1 + scrollY / 42000,
        rotate: 1 - scrollY / 500,
        transition: { duration: 1, ease: [0.25, 1, 0.5, 1] },
      });
    };
    const handleScrollSecond = () => {
      const scrollY = window.scrollY;
      animationControlSecond.start({
        scale: 1 + scrollY / 42000,
        rotate: -(1 - scrollY / 500),
        transition: { duration: 1, ease: [0.25, 1, 0.15, 1] },
      });
    };
    window.addEventListener("scroll", handleScrollFirst);
    window.addEventListener("scroll", handleScrollSecond);

    return () => {
      window.removeEventListener("scroll", handleScrollFirst);
      window.removeEventListener("scroll", handleScrollSecond);
    };
  });

  return (
    <>
      <GlobalContainer>
        <section className="mt-[130px]">
          <div className="grid grid-cols-2 gap-x-[100px]">
            <div>
              <h5 className="text-[55px] font-medium font-poppins mb-[17px]">
                One Mobile App For Your Lovely Pet
              </h5>
              <p className="font-normal font-poppins text-[19px] text-black w-[103%]">
                Lorem ipsum dolor sit amet consectetur. Magna dictumst mattis
                tempus ac dignissim ultricies. Sodales tellus egestas ac viverra
                mauris enim bibendum commodo aliquam. Elementum et est semper
                faucibus imperdiet urna at sagittis. Nunc sit pellentesque in
                odio ultrices volutpat nunc nec lacus. Sed orci faucibus.
              </p>
              <h6 className="mt-16 font-poppins font-semibold text-[30px] text-nav">
                Download The App
              </h6>

              <div className="flex gap-4 mt-[50px] ">
                <Button className="bg-white px-[30px] py-[23px] rounded-full drop-shadow-2xl drop-shadow-[rgba(0,0,0,0.14)] hover:bg-white">
                  <img src={Appstore} alt="" className="w-[140px] h-[27px]" />
                </Button>
                <Button className="bg-white px-[30px] py-[23px] rounded-full drop-shadow-2xl drop-shadow-[rgba(0,0,0,0.14)] hover:bg-white">
                  <img src={Plystore} alt="" className="w-[106px] h-[28px]" />
                </Button>
              </div>
            </div>
            <motion.div
              className=" relative"
              initial="hidden"
              whileInView="visible"
              variants={Animation}
              viewport={{ once: true }}
              transition={{
                staggerChildren: 0.2,
                duration: 1,
                ease: "easeInOut",
              }}
            >
              <motion.div
                animate={animationControlFirst}
                transition={{
                  type: "spring",
                  stiffness: 500,
                }}
              >
                <img src={PhoneImg2} alt="" />
              </motion.div>

              <motion.div
                className="absolute left-[170px] top-[40px]"
                animate={animationControlSecond}
                transition={{
                  type: "spring",
                  stiffness: 500,
                }}
              >
                <img src={PhoneImg1} alt="" />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </GlobalContainer>
    </>
  );
};

export default DownloadApp;
