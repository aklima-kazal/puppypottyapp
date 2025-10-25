import React from "react";
import { featureData } from "./featureData";
import FeaturePhone from "@/assets/images/FeaturePhone.png";

const FeatureLayout = () => {
  return (
    <>
      <div className="grid grid-cols-3 items-center mt-[80px] mb-[100px] gap-x-8">
        <div>
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
        </div>
        <div className="flex justify-center">
          <img src={FeaturePhone} alt="feature phone" />
        </div>
        <div>
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
        </div>
      </div>
    </>
  );
};

export default FeatureLayout;
