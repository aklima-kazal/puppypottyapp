import GlobalContainer from "@/globalComponents/GlobalContainer";
import React from "react";
import TestimonialSlider from "./TestimonialSlider";

const Testimonials = () => {
  return (
    <>
      <section>
        <GlobalContainer>
          <div className="text-center mx-auto mb-[60px]">
            <h5 className="font-manjari font-normal text-2xl text-black01">
              Testimonial
            </h5>
            <p className="font-poppins font-semibold text-3xl text-black02 mt-[9px] ">
              What Our Clients Say
            </p>
          </div>
          <div>
            <TestimonialSlider />
          </div>
        </GlobalContainer>
      </section>
    </>
  );
};

export default Testimonials;
