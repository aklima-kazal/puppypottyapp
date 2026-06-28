import React from "react";
import Qoutation from "@/assets/svg/quatation.svg";
import { GiRoundStar } from "react-icons/gi";

const TestimoinialsLayouts = ({ slider }) => {
  const { description, img, name, review, time } = slider;
  const getReviews = (ReviewNumbers) => {
    let reviews = [];
    for (let i = 0; i < ReviewNumbers; i++) {
      reviews.push(<GiRoundStar color="F9CE3B" />);
    }
    return reviews;
  };
  return (
    <>
      <div className="mt-[30px]">
        <div className="bg-white rounded-[5px] p-[25px] sm:p-[50px] shadow-slate-200 shadow-2xl ">
          <div className="-mt-[50px] sm:-mt-[70px] md:-mt-[80px] -ml-[20px] mb-[13px] ">
            <img
              src={Qoutation}
              alt="Qoutation"
              className="sm:w-[70px] md:h-[70px] w-[50px] h-[50px]"
            />
          </div>
          <div className="">
            <p className="font-poppins font-normal text-[12px] md:text-[16px] text-nav mb-6 leading-[25px] w-[110%] md:w-[103%]">
              {description}
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between gap-x-3">
              <div className="flex items-center gap-x-3 overflow-hidden ">
                <img
                  src={img}
                  alt=""
                  className="md:w-[61px] md:h-[61px] w-[45px] h-[45px] rounded-full"
                />
                <div>
                  <p className="font-medium text-[12px] md:text-sm font-poppins text-nav mb-[3px]">
                    {name}
                  </p>
                  <span className="flex">{getReviews(review)}</span>
                </div>
              </div>
              <span className="text-gray font-poppins font-normal text-base">
                {time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimoinialsLayouts;
