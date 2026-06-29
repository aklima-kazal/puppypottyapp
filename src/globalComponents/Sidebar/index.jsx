import React, { useEffect } from "react"; // 1. Import useEffect
import { GiTireIronCross } from "react-icons/gi";
import { LinkList } from "../CommonLayout/Header/LinkList";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  // 2. Add this useEffect to lock/unlock scroll
  useEffect(() => {
    if (showSidebar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to ensure scroll is restored if the component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showSidebar]);

  return (
    <motion.div
      initial={{ left: "-100%" }}
      animate={{ left: showSidebar ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 w-[250px] h-screen bg-white shadow-lg z-[9999]"
    >
      {/* ... rest of your code remains exactly the same ... */}
      <div
        className="flex justify-end p-4 cursor-pointer hover:text-[#ff0000] transition-all ease-in duration-200"
        role="button"
        onClick={() => setShowSidebar(false)}
      >
        <GiTireIronCross size={25} />
      </div>
      <div>
        <div className="w-[60%] ">
          <ul className="flex flex-col gap-y-[10px] justify-center p-6">
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
        <div className="gap-x-[12px] flex justify-center mt-[20px]">
          <Button className="font-poppins text-base font-medium bg-[#F9CE3B] hover:bg-[#F9CE3B] text-white px-[21px] py-[15px] rounded-[5px] cursor-pointer">
            Sign Up
          </Button>
          <Button className="font-poppins text-base !font-medium bg-transparent hover:bg-[#F9CE3B] transition-all ease-in duration-200 border border-[#F9CE3B] text-[#F9CE3B] hover:text-white px-[21px] py-[15px] rounded-[5px] cursor-pointer">
            Log in
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
