import React from "react";
import rectangle from "../assets/Rectangle.png";

const Content = () => (

    <div>
      <div className="w-[210px] h-[150px] p-[15px] bg-[#232323] rounded-lg flex flex-col hover:scale-[1.02]">
        <div className="flex justify-between items-center">
          <div>
            <img src={rectangle} alt="" className="w-[70px]" />
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-[15px]">Product Name</h4>
            <p className="text-[13px] opacity-[0.6]">Brand Name</p>
            <p className="text-[16px]">
              $ <span className="text-[13px]">29.99</span>
            </p>
          </div>
        </div>
        <div className="flex justify-between text-xs opacity-[0.6] pt-[6px]">
          <p>Location</p>
          <p className="pr-[10px]">Date: 10:12:2021</p>
        </div>
        <div className="text-xs opacity-[0.6] pt-[6px]">
          Description of the Product/Item
        </div>
      </div>
    </div>
);
const Test = () => {
  return (
    <div className="">
      <div className="bg-[#131313] p-[20px] rounded-[15px] text-[#fff] overflow-x-scroll w-[984px] scrollbar-hide">
        <div className="flex space-x-4">
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
          <Content />
        </div>
      </div>
    </div>
  );
};

export default Test;
