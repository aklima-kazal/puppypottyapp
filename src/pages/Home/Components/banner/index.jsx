import React from "react";
import BannerImg from "@/assets/images/Banner.png";
import GlobalContainer from "@/globalComponents/GlobalContainer";
import { Button } from "@/components/ui/button";

const Banner = () => {
  return (
    <>
      <GlobalContainer>
        <div className="grid grid-cols-2 items-center justify-between">
          <div className="">
            <h1 className="font-manjari text-[70px] leading-24 font-bold text-banner mb-[28px] w-[110%]">
              Potty train your pup the easy way
            </h1>
            <p className="font-poppins text-2xl font-normal text-[rgba(39,35,58,0.9)] w-[91%] leading-10">
              Log your dog’s pees, poops and meals and Puppy Potty Log will use
              the data to create a custom housetraining schedule unique to your
              fur baby.
            </p>
            <div className="mt-[31px]">
              <Button className="font-poppins text-base font-medium  bg-primary hover:bg-primary text-white px-[66px] py-[25px] rounded-[50px] cursor-pointer">
                Join Us
              </Button>
            </div>
          </div>
          <div>
            <img src={BannerImg} alt="" />
          </div>
        </div>
      </GlobalContainer>
    </>
  );
};

export default Banner;
