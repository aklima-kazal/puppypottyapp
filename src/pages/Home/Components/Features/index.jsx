import GlobalContainer from "@/globalComponents/GlobalContainer";
import React from "react";
import FeatureLayout from "./FeatureLayout";

const Features = () => {
  return (
    <>
      <section>
        <GlobalContainer>
          <div className="text-center mx-auto">
            <h5 className="font-manjari font-normal text-2xl text-black01">
              Features
            </h5>
            <p className="font-poppins font-semibold text-3xl text-black02 mt-[9px] ">
              Our Best Features
            </p>
          </div>
          <div>
            <FeatureLayout />
          </div>
        </GlobalContainer>
      </section>
    </>
  );
};

export default Features;
