import GlobalContainer from "@/globalComponents/GlobalContainer";
import React from "react";
import AboutLayout from "./AboutLayout";

const AboutSection = () => {
  return (
    <>
      <GlobalContainer>
        <section className="mt-[93px]">
          <div className="text-center">
            <h5 className="font-manjari font-normal text-2xl mb-2.5 text-black01">
              About Us
            </h5>
            <p className="font-poppins font-semibold text-3xl text-black01">
              Best service for training your lovely dog
            </p>
          </div>
          <div>
            <AboutLayout />
          </div>
        </section>
      </GlobalContainer>
    </>
  );
};

export default AboutSection;
