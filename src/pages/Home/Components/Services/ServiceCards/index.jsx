import React from "react";

const ServiceCards = ({ icon, title, description }) => {
  const Icon = icon;
  return (
    <>
      <div className="bg-white group hover:bg-primary transition-all ease-in duration-300 mt-[177px] border border-[rgba(0,0,0,0.08)] hover:border-primary rounded-[10px] p-[20px] text-center shadow-slate-200 shadow-2xl">
        <div className="mt-[54px] mb-[34px] bg-primary group-hover:bg-white text-white group-hover:text-primary rounded-full w-[95px] h-[95px] flex items-center justify-center mx-auto transition-all ease-in duration-300">
          <Icon />
        </div>
        <h2 className="text-black01 group-hover:text-white mb-[11px] text-[30px] font-medium font-poppins transition-all ease-in duration-300">
          {title}
        </h2>
        <p className="text-black02 text-[16px] group-hover:text-white font-normal font-poppins leading-9 transition-all ease-in duration-300">
          {description}
        </p>
      </div>
    </>
  );
};

export default ServiceCards;
