import React from "react";
import { FaChevronRight } from "react-icons/fa";

const NextArrow = ({ onClick }) => {
  return (
    <>
      <div className="h-[50px] w-[50px] border border-[#F9CE3B] rounded-full flex items-center justify-center hover:bg-white hover:border-white hover:shadow shadow-2xl cursor-pointer">
        <FaChevronRight size={20} color={"#F9CE3B"} onClick={onClick} />
      </div>
    </>
  );
};

export default NextArrow;
