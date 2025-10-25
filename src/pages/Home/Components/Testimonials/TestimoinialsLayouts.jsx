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
        <div className="bg-white rounded-[5px] p-[50px] shadow-slate-200 shadow-2xl ">
          <div className="-mt-[80px] -ml-[20px] mb-[13px] ">
            <img src={Qoutation} alt="Qoutation" />
          </div>
          <div className="">
            <p className="font-poppins font-normal text-[16px] text-nav mb-6 leading-[25px] w-[104%]">
              {description}
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between gap-x-3">
              <div className="flex items-center gap-x-3 overflow-hidden ">
                <img
                  src={img}
                  alt=""
                  className="w-[61px] h-[61px] rounded-full"
                />
                <div>
                  <p className="font-medium text-sm font-poppins text-nav mb-[3px]">
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
