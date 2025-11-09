import React, { useEffect, useState } from "react";
import Logo from "../../../assets/svg/Logo.svg";
import { LinkList } from "./LinkList";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import GlobalContainer from "@/globalComponents/GlobalContainer";

const Header = () => {
  const [nav, setNav] = useState(false);
  useEffect(() => {
    const stickyNav = () => {
      if (window.scrollY > 0) {
        setNav(true);
      } else {
        setNav(false);
      }
    };
    window.addEventListener("scroll", stickyNav);
    return () => {
      window.removeEventListener("scroll", stickyNav);
    };
  }, []);
  return (
    <>
      <nav className={nav ? "StickyNavbar" : ""}>
        <GlobalContainer>
          <div className="flex items-center mx-auto pt-[8px] ">
            <div className="w-[40%] md:w-[20%] overflow-hidden">
              <img src={Logo} alt="logo" className="" />
            </div>
            <div className="w-[60%] hidden md:block">
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
            <div className="w-[20%] text-end space-x-[12px] hidden md:block">
              <Button className="font-poppins text-base font-medium  bg-[#F9CE3B] hover:bg-[#F9CE3B] text-white px-[21px] py-[15px] rounded-[5px] cursor-pointer">
                Sign Up
              </Button>
              <Button className="font-poppins text-base !font-medium bg-transparent hover:bg-[#F9CE3B] transition-all ease-in duration-200 border border-[#F9CE3B] text-[#F9CE3B] hover:text-white px-[21px] py-[15px] rounded-[5px] cursor-pointer">
                Log in
              </Button>
            </div>
          </div>
        </GlobalContainer>
      </nav>
    </>
  );
};

export default Header;
