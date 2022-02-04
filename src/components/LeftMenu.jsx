import React from "react";

const LeftMenu = ({ products }) => {
  return (
    <div className="bg-[#131313] w-[228px] h-[275px] rounded-[15px] p-[30px] mr-[30px]">
      <div className="">
        <h1 className="text-[#A5A5A5] text-[20px]">Filters</h1>
        <div className="flex flex-col justify-center items-center py-4">
          <hr className="w-[158px]" />
        </div>
      </div>

      <div>
        <div className="flex flex-col space-y-4 justify-center items-center text-[#fff]">


          <select
            name=""
            id=""
            className="bg-[#232323] w-[168.45px] h-[37.5px] border-none outline-none"
          >
            {products &&
              products.map((product) => {
                return (
                  <option value="Products" className="text-[17px] text-white" key={product.time}>
                    {product.product_name}
                  </option>
                );
              })}

          </select>

          <select
            name=""
            id=""
            className="bg-[#232323] w-[168.45px] h-[37.5px] border-none outline-none"
          >
            {products &&
              products.map((product) => {
                return (
                  <option value="Products" className="text-[17px] text-white" key={product.time}>
                    {product.address.state}
                  </option>
                );
              })}
          </select>

          <select
            name=""
            id=""
            className="bg-[#232323] w-[168.45px] h-[37.5px] border-none outline-none"
          >
            {products &&
              products.map((product) => {
                return (
                  <option value="Products" className="text-[17px] text-white" key={product.time}>
                    {product.address.city}
                  </option>
                );
              })}
          </select>


        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
