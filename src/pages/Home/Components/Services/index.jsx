import React from "react";
import { ServiceData } from "./ServiceCards/ServiceData";
import ServiceCards from "./ServiceCards";
import GlobalContainer from "@/globalComponents/GlobalContainer";

const Services = () => {
  return (
    <>
      <GlobalContainer>
        <div className="grid grid-cols-3 gap-x-[30px] ">
          {ServiceData?.map((item, index) => (
            <ServiceCards
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </GlobalContainer>
    </>
  );
};

export default Services;
