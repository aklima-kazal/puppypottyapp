import React from "react";
import Logo from "../../../assets/svg/Logo.svg";
import GlobalContainer from "@/globalComponents/GlobalContainer";
import { LinkList } from "../Header/LinkList";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import Plystore from "@/assets/images/app-store.svg";
import Appstore from "@/assets/images/google-play.svg";

const Footer = () => {
  return (
    <>
      <GlobalContainer>
        <div className="grid grid-cols-[34%_20%_25%] mt-[168px] mb-[30px] gap-x-[80px] mx-auto border-b border-[#E5E5E5]">
          <div>
            <div className="w-[50%]">
              <img src={Logo} alt="logo" />
            </div>

            <p className="font-poppins font-normal text-[18px] text-nav mt-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitationt.
            </p>
          </div>
          <div>
            <h5 className="font-poppins font-medium text-[25px] text-nav mb-6 ">
              Quick Links
            </h5>
            <ul className="">
              {LinkList.slice(0, 5).map((item) => (
                <li
                  key={item.id}
                  className="text-nav text-base font-normal font-poppins hover:text-[#F9CE3B] cursor-pointer transition-all ease-in duration-200 mb-[18px]"
                >
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-poppins font-medium text-[25px] text-nav mb-6 ">
              Download Our App
            </h4>
            <p className="font-poppins font-normal text-[18px] text-nav ">
              Available on Google Play and App Store.
            </p>

            <div className="flex gap-x-4 mt-[50px] ">
              <Button className="bg-white px-[20px] py-[24px] rounded-full drop-shadow-2xl drop-shadow-[rgba(0,0,0,0.14)] hover:bg-white">
                <img src={Appstore} alt="" className="w-[140px] h-[27px]" />
              </Button>
              <Button className="bg-white px-[20px] py-[24px] rounded-full drop-shadow-2xl drop-shadow-[rgba(0,0,0,0.14)] hover:bg-white">
                <img src={Plystore} alt="" className="w-[106px] h-[28px]" />
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-[30px]">
          <span className="font-normal font-poppins text-sm text-nav">
            Copyright © 2023 potty.app
          </span>
          <div className="flex items-center gap-x-8">
            <p className="font-normal font-poppins text-sm text-nav">
              Terms of Service
            </p>
            <p className="font-normal font-poppins text-sm text-nav">
              Privacy Policy
            </p>
          </div>
        </div>
      </GlobalContainer>
    </>
  );
};

export default Footer;
