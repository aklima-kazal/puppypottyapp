import React from "react";
import AboutImg from "@/assets/images/AnimalTrainner.png";
import { Button } from "@/components/ui/button";

const AboutLayout = () => {
  return (
    <>
      <div className="grid grid-cols-[40%_50%] justify-between mt-[66px] ">
        <div>
          <img src={AboutImg} alt="" />
        </div>
        <div className="">
          <h5 className="capitalize font-poppins font-semibold text-[45px] text-nav mb-6 leading-16">
            We are the world’s most trusted animal trainer
          </h5>
          <p className="capitalize font-poppins font-normal text-[18px] text-nav mb-6 leading-[34px]">
            Lorem ipsum dolor sit amet consectetur. Neque et aliquam tincidunt
            auctor pellentesque vestibulum est. Mattis fermentu pulvinar gravida
            dictumst sagittis. Sit cursus nulla mattis. Gravida enim in fusce
            maecenas vel cras turpis.
          </p>{" "}
          <div className="mt-[50px] ">
            <Button className="font-poppins text-[18px] font-normal  bg-primary hover:bg-primary text-white px-[66px] py-[25px] rounded-[50px] cursor-pointer flex items-center justify-center">
              About Us
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutLayout;
