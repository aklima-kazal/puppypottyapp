import React from "react";
import { ScreenshootsData } from "./ScreenshootData";

const ScreenshootsLayout = () => {
  return (
    <>
      <div className="grid grid-cols-3">
        {ScreenshootsData?.map((item) => (
          <div className="flex items-center justify-center gap-x-[19px] mb-[71px] ">
            <img src={item.img} alt="screenshoot image" />
          </div>
        ))}
      </div>
    </>
  );
};

export default ScreenshootsLayout;
