import React from "react";
import { FaChevronLeft } from "react-icons/fa";

const PrevArrow = ({ onClick }) => {
  return (
    <>
      <div className="h-[45px] w-[45px] border border-[#F9CE3B] rounded-full flex items-center justify-center hover:bg-white hover:border-white hover:shadow shadow-2xl cursor-pointer">
        <FaChevronLeft size={20} color={"#F9CE3B"} onClick={onClick} />
      </div>
    </>
  );
};

export default PrevArrow;
