import GlobalContainer from "@/globalComponents/GlobalContainer";
import React from "react";
import ScreenshootsLayout from "./ScreenshootsLayout";

const Screenshoots = () => {
  return (
    <>
      <section>
        <GlobalContainer>
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
        </GlobalContainer>
      </section>
    </>
  );
};

export default Screenshoots;
