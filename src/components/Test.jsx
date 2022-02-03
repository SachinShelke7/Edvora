import React from "react";
import rectangle from "../assets/Rectangle.png";

const Content = () => (
  <div className="bg-[#232323] w-[210px] h-[150px] pl-[12px] pr-[15px] rounded-[4.68775px]">
    <div className="flex justify-between items-center">
      <div>
        <img src={rectangle} alt="" className="pt-[10px] w-[70px]rn" />
      </div>
      <div className="space-y-2 pt-[13px]">
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
);
const Test = () => {
  return (
    <div className="pt-32">
      <div className="bg-[#131313] w-full p-[20px] rounded-[15px] text-[#fff]">
        <div className="flex gap-5 w-full overflow-x-scroll">
          <Content />
          <Content />
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
