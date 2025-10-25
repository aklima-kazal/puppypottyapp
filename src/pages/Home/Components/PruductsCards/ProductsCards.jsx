import { Button } from "@/components/ui/button";
import React from "react";

const ProductsCards = ({ product }) => {
  const { img, productsLists, buttonText, foodName } = product;

  return (
    <>
      <div className="bg-white rounded-[10px] overflow-hidden shadow-slate-200  shadow-[2px_4px_4px_rgba(0,0,0,0.25)] mt-5">
        <div className="h-[317px]">
          <img src={img} alt="product-img" className="h-full w-full" />
        </div>
        <div className="pt-4 pb-5 px-[21px]">
          <ul>
            {productsLists?.map((productsLists, index) => (
              <li key={index} className="flex gap-x-4 mb-4">
                <img src={productsLists.productsListsImg} alt="product-img" />
                <span>{productsLists.title}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-[35px]">
            <h5 className="font-poppins font-medium text-[18px] text-nav">
              {foodName}
            </h5>
            <Button>{buttonText}</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsCards;
