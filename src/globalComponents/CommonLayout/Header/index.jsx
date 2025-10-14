import React from "react";
import Logo from "../../../assets/svg/logo.svg";
import { LinkList } from "./LinkList";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import GlobalContainer from "@/globalComponents/GlobalContainer";

const Header = () => {
  return (
    <>
      <GlobalContainer>
        <div className="flex items-center mx-auto container mt-[11px]">
          <div className="w-[20%]">
            <img src={Logo} alt="logo" />
          </div>
          <div className="w-[60%]">
            <ul className="flex justify-center gap-x-[30px]">
              {LinkList.map((item) => (
                <li
                  key={item.id}
                  className="text-nav text-base font-medium font-poppins hover:text-[#F9CE3B] cursor-pointer transition-all ease-in duration-200"
                >
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[20%] flex justify-end gap-x-[12px]">
            <Button className="font-poppins text-base font-medium  bg-[#F9CE3B] hover:bg-[#F9CE3B] text-white px-[21px] py-[15px] rounded-[5px] cursor-pointer">
              Sign Up
            </Button>
            <Button className="font-poppins text-base !font-medium bg-transparent hover:bg-[#F9CE3B] transition-all ease-in duration-200 border border-[#F9CE3B] text-[#F9CE3B] hover:text-white px-[21px] py-[15px] rounded-[5px] cursor-pointer">
              Log in
            </Button>
          </div>
        </div>
      </GlobalContainer>
    </>
  );
};

export default Header;
